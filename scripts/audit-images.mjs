// Pulls every image URL from Supabase products+posts and HEADs each one.
// Reports broken/missing.

const SUPA_URL = process.env.SUPABASE_URL;
const SUPA_KEY = process.env.SUPABASE_KEY;

if (!SUPA_URL || !SUPA_KEY) {
  console.error('Set SUPABASE_URL and SUPABASE_KEY env vars.');
  process.exit(1);
}

async function fetchAll(path) {
  const r = await fetch(`${SUPA_URL}/rest/v1/${path}`, {
    headers: { apikey: SUPA_KEY, Authorization: `Bearer ${SUPA_KEY}` },
  });
  if (!r.ok) throw new Error(`Failed ${path}: ${r.status}`);
  return r.json();
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

async function batchHead(urls, concurrency = 12) {
  const out = [];
  for (let i = 0; i < urls.length; i += concurrency) {
    const batch = urls.slice(i, i + concurrency);
    const results = await Promise.all(batch.map(head));
    out.push(...results);
    process.stdout.write(`\r  checked ${out.length}/${urls.length}`);
  }
  process.stdout.write('\n');
  return out;
}

const products = await fetchAll('collision_products?select=slug,primary_image,images');
const posts = await fetchAll('collision_posts?select=slug,featured_image');

const urls = new Set();
for (const p of products) {
  if (p.primary_image) urls.add(p.primary_image);
  for (const i of p.images || []) urls.add(i);
}
for (const p of posts) {
  if (p.featured_image) urls.add(p.featured_image);
}

const list = [...urls];
console.log(`Total unique image URLs: ${list.length}`);
console.log(`Checking…`);

const results = await batchHead(list);
const broken = results.filter((r) => !r.ok);

console.log(`\n  ✓ working: ${results.length - broken.length}`);
console.log(`  ✗ broken : ${broken.length}`);

if (broken.length > 0) {
  console.log('\nBroken samples:');
  broken.slice(0, 10).forEach((r) => console.log(`  ${r.status}\t${r.url} ${r.error ? `(${r.error})` : ''}`));
}

// Hostname distribution
const hosts = {};
for (const u of list) {
  try {
    const h = new URL(u).host;
    hosts[h] = (hosts[h] || 0) + 1;
  } catch {}
}
console.log('\nHosts:');
for (const [h, n] of Object.entries(hosts).sort((a, b) => b[1] - a[1])) {
  console.log(`  ${n}\t${h}`);
}
