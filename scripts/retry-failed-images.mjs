// Retries any image URLs still pointing to collisiondrumsticks.com
// using cache-busting tactics.

import crypto from 'node:crypto';

const SUPA_URL = process.env.SUPABASE_URL;
const SUPA_KEY = process.env.SUPABASE_KEY;

const HEADERS = { apikey: SUPA_KEY, Authorization: `Bearer ${SUPA_KEY}` };

function pathFromUrl(url) {
  const hash = crypto.createHash('sha1').update(url).digest('hex').substring(0, 12);
  const ext = (url.split('.').pop()?.split('?')[0] || 'jpg').toLowerCase();
  const safeExt = ['jpg', 'jpeg', 'png', 'webp', 'avif', 'gif'].includes(ext) ? ext : 'jpg';
  return `${hash}.${safeExt}`;
}

const ctMap = { jpg: 'image/jpeg', jpeg: 'image/jpeg', png: 'image/png', webp: 'image/webp', avif: 'image/avif', gif: 'image/gif' };

async function downloadAndUpload(url, bucket) {
  // Cache-bust by appending a query string
  const bustUrl = `${url}${url.includes('?') ? '&' : '?'}cb=${Date.now()}`;
  const res = await fetch(bustUrl, {
    redirect: 'follow',
    headers: { 'User-Agent': 'collision-migration/1.0', 'Cache-Control': 'no-cache', 'Pragma': 'no-cache' },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  const path = pathFromUrl(url);
  const ext = path.split('.').pop();

  const upRes = await fetch(`${SUPA_URL}/storage/v1/object/${bucket}/${path}`, {
    method: 'POST',
    headers: { ...HEADERS, 'Content-Type': ctMap[ext] || 'image/jpeg', 'x-upsert': 'true', 'Cache-Control': 'public, max-age=31536000, immutable' },
    body: buf,
  });
  if (!upRes.ok && upRes.status !== 409) throw new Error(`Upload ${upRes.status}`);
  return `${SUPA_URL}/storage/v1/object/public/${bucket}/${path}`;
}

const stillOnWp = await fetch(`${SUPA_URL}/rest/v1/collision_posts?select=slug,featured_image&featured_image=like.*collisiondrumsticks.com*`, { headers: HEADERS }).then((r) => r.json());

console.log(`Posts still on WP: ${stillOnWp.length}`);

for (const p of stillOnWp) {
  try {
    const newUrl = await downloadAndUpload(p.featured_image, 'post-images');
    await fetch(`${SUPA_URL}/rest/v1/collision_posts?slug=eq.${encodeURIComponent(p.slug)}`, {
      method: 'PATCH',
      headers: { ...HEADERS, 'Content-Type': 'application/json', Prefer: 'return=minimal' },
      body: JSON.stringify({ featured_image: newUrl }),
    });
    console.log(`  ✓ ${p.slug}`);
  } catch (e) {
    console.log(`  ✗ ${p.slug} - ${e.message}`);
    // If still failing, null out the broken URL so the page shows a fallback
    await fetch(`${SUPA_URL}/rest/v1/collision_posts?slug=eq.${encodeURIComponent(p.slug)}`, {
      method: 'PATCH',
      headers: { ...HEADERS, 'Content-Type': 'application/json', Prefer: 'return=minimal' },
      body: JSON.stringify({ featured_image: null }),
    });
  }
}
