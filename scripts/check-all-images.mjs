// HEAD-checks every image referenced anywhere in the DB. Reports broken.

const SUPA_URL = process.env.SUPABASE_URL;
const SUPA_KEY = process.env.SUPABASE_KEY;

if (!SUPA_URL || !SUPA_KEY) {
  console.error('Set SUPABASE_URL and SUPABASE_KEY env vars.');
  process.exit(1);
}

const HEADERS = { apikey: SUPA_KEY, Authorization: `Bearer ${SUPA_KEY}` };

async function fetchAll(path) {
  let all = [];
  let offset = 0;
  while (true) {
    const r = await fetch(`${SUPA_URL}/rest/v1/${path}&offset=${offset}&limit=1000`, { headers: HEADERS });
    if (!r.ok) throw new Error(`Failed ${path}: ${r.status}`);
    const d = await r.json();
    all = all.concat(d);
    if (d.length < 1000) break;
    offset += 1000;
  }
  return all;
}

async function head(url) {
  try {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 8000);
    const r = await fetch(url, { method: 'HEAD', redirect: 'follow', signal: ctrl.signal });
    clearTimeout(timer);
    return { url, ok: r.ok, status: r.status };
  } catch (e) {
    return { url, ok: false, status: 0, error: String(e).substring(0, 80) };
  }
}

async function batchHead(urls, concurrency = 16) {
  const out = [];
  for (let i = 0; i < urls.length; i += concurrency) {
    const batch = urls.slice(i, i + concurrency);
    const r = await Promise.all(batch.map(head));
    out.push(...r);
    process.stdout.write(`\r  ${out.length}/${urls.length}`);
  }
  process.stdout.write('\n');
  return out;
}

const products = await fetchAll('collision_products?select=slug,primary_image,images');
const posts = await fetchAll('collision_posts?select=slug,featured_image');

const allUrls = new Set();
const sourceMap = new Map(); // url → [{ table, slug, field }]
function note(url, table, slug, field) {
  if (!url) return;
  allUrls.add(url);
  if (!sourceMap.has(url)) sourceMap.set(url, []);
  sourceMap.get(url).push({ table, slug, field });
}

for (const p of products) {
  note(p.primary_image, 'products', p.slug, 'primary_image');
  for (const img of p.images || []) note(img, 'products', p.slug, 'images');
}
for (const p of posts) {
  note(p.featured_image, 'posts', p.slug, 'featured_image');
}

const list = [...allUrls];
console.log(`Checking ${list.length} unique URLs (${products.length} products + ${posts.length} posts)`);

const results = await batchHead(list);
const broken = results.filter((r) => !r.ok);

console.log(`\n  ✓ working: ${results.length - broken.length}`);
console.log(`  ✗ broken : ${broken.length}\n`);

if (broken.length > 0) {
  console.log('Broken URLs and where they appear:');
  for (const b of broken) {
    const sources = sourceMap.get(b.url) || [];
    console.log(`  ${b.status} ${b.url}`);
    for (const s of sources) console.log(`    ↳ ${s.table}/${s.slug} (${s.field})`);
  }
}

const hosts = {};
for (const u of list) {
  try { const h = new URL(u).host; hosts[h] = (hosts[h] || 0) + 1; } catch {}
}
console.log('\nHosts:');
for (const [h, n] of Object.entries(hosts).sort((a, b) => b[1] - a[1])) {
  console.log(`  ${n}\t${h}`);
}
