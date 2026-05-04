// Downloads every image referenced in collision_products + collision_posts from
// the source URL, uploads to Supabase Storage (product-images / post-images),
// and updates the DB rows with the new public URLs.
//
// Run: SUPABASE_URL=... SUPABASE_KEY=... node scripts/migrate-images-to-storage.mjs

import crypto from 'node:crypto';

const SUPA_URL = process.env.SUPABASE_URL;
const SUPA_KEY = process.env.SUPABASE_KEY;

if (!SUPA_URL || !SUPA_KEY) {
  console.error('Set SUPABASE_URL and SUPABASE_KEY env vars.');
  process.exit(1);
}

const HEADERS = {
  apikey: SUPA_KEY,
  Authorization: `Bearer ${SUPA_KEY}`,
};

function pathFromUrl(url, fallbackPrefix) {
  try {
    const u = new URL(url);
    const file = u.pathname.split('/').pop() || '';
    // Build a deterministic path: hash + extension
    const hash = crypto.createHash('sha1').update(url).digest('hex').substring(0, 12);
    const ext = (file.split('.').pop() || 'jpg').toLowerCase();
    const safeExt = ['jpg', 'jpeg', 'png', 'webp', 'avif', 'gif'].includes(ext) ? ext : 'jpg';
    return `${fallbackPrefix}/${hash}.${safeExt}`;
  } catch {
    const hash = crypto.createHash('sha1').update(url).digest('hex').substring(0, 12);
    return `${fallbackPrefix}/${hash}.jpg`;
  }
}

function contentTypeForExt(ext) {
  return {
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    png: 'image/png',
    webp: 'image/webp',
    avif: 'image/avif',
    gif: 'image/gif',
  }[ext] ?? 'image/jpeg';
}

async function fetchAll(path) {
  let all = [];
  let offset = 0;
  const PAGE = 1000;
  while (true) {
    const r = await fetch(`${SUPA_URL}/rest/v1/${path}&offset=${offset}&limit=${PAGE}`, {
      headers: HEADERS,
    });
    if (!r.ok) throw new Error(`Failed ${path}: ${r.status}`);
    const data = await r.json();
    all = all.concat(data);
    if (data.length < PAGE) break;
    offset += PAGE;
  }
  return all;
}

async function downloadBuffer(url, retries = 3) {
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const ctrl = new AbortController();
      const timer = setTimeout(() => ctrl.abort(), 30000);
      const r = await fetch(url, { redirect: 'follow', signal: ctrl.signal, headers: { 'User-Agent': 'collision-migration/1.0' } });
      clearTimeout(timer);
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      const ab = await r.arrayBuffer();
      return Buffer.from(ab);
    } catch (e) {
      if (attempt === retries) throw e;
      await new Promise((r) => setTimeout(r, 1500 * (attempt + 1)));
    }
  }
}

async function uploadToStorage(bucket, path, buffer, contentType) {
  const url = `${SUPA_URL}/storage/v1/object/${bucket}/${path}`;
  // First try POST (insert). If 409 conflict, the file already exists — that's fine.
  const r = await fetch(url, {
    method: 'POST',
    headers: {
      ...HEADERS,
      'Content-Type': contentType,
      'x-upsert': 'true',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
    body: buffer,
  });
  if (!r.ok && r.status !== 409) {
    const text = await r.text();
    throw new Error(`Upload failed ${r.status}: ${text.substring(0, 200)}`);
  }
  return `${SUPA_URL}/storage/v1/object/public/${bucket}/${path}`;
}

async function processUrl(url, bucket, cache) {
  if (!url || typeof url !== 'string') return null;
  if (url.startsWith(`${SUPA_URL}/storage/v1`)) return url; // Already migrated
  if (cache.has(url)) return cache.get(url);

  const path = pathFromUrl(url, '');
  const ext = path.split('.').pop();
  const ct = contentTypeForExt(ext);
  try {
    const buffer = await downloadBuffer(url);
    const newUrl = await uploadToStorage(bucket, path, buffer, ct);
    cache.set(url, newUrl);
    return newUrl;
  } catch (e) {
    console.error(`  ✗ ${url} - ${e.message?.substring(0, 80)}`);
    cache.set(url, null);
    return null;
  }
}

async function patch(table, slug, payload) {
  const r = await fetch(`${SUPA_URL}/rest/v1/${table}?slug=eq.${encodeURIComponent(slug)}`, {
    method: 'PATCH',
    headers: { ...HEADERS, 'Content-Type': 'application/json', Prefer: 'return=minimal' },
    body: JSON.stringify(payload),
  });
  if (!r.ok) throw new Error(`Patch ${table} ${slug}: ${r.status} ${await r.text()}`);
}

async function main() {
  console.log('Pulling DB rows...');
  const products = await fetchAll('collision_products?select=slug,primary_image,images');
  const posts = await fetchAll('collision_posts?select=slug,featured_image');
  console.log(`  ${products.length} products, ${posts.length} posts`);

  const cache = new Map();

  console.log('\nMigrating product images...');
  let pIdx = 0;
  for (const p of products) {
    pIdx++;
    const newPrimary = p.primary_image ? await processUrl(p.primary_image, 'product-images', cache) : null;
    const newImages = [];
    for (const img of p.images || []) {
      const newImg = await processUrl(img, 'product-images', cache);
      if (newImg) newImages.push(newImg);
    }
    const update = {};
    if (newPrimary && newPrimary !== p.primary_image) update.primary_image = newPrimary;
    if (newImages.length > 0) update.images = [...new Set(newImages)];
    if (Object.keys(update).length > 0) {
      await patch('collision_products', p.slug, update);
    }
    process.stdout.write(`\r  ${pIdx}/${products.length}`);
  }
  process.stdout.write('\n');

  console.log('\nMigrating post images...');
  let postIdx = 0;
  for (const p of posts) {
    postIdx++;
    if (p.featured_image) {
      const newImg = await processUrl(p.featured_image, 'post-images', cache);
      if (newImg && newImg !== p.featured_image) {
        await patch('collision_posts', p.slug, { featured_image: newImg });
      }
    }
    process.stdout.write(`\r  ${postIdx}/${posts.length}`);
  }
  process.stdout.write('\n');

  const successes = [...cache.values()].filter(Boolean).length;
  const failures = [...cache.values()].filter((v) => v === null).length;
  console.log(`\n✓ migrated ${successes} unique images`);
  console.log(`✗ failed   ${failures}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
