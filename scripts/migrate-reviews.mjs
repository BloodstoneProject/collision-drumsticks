// Migrates 551 reviews from WC Store API to Supabase, joining via source_id.
// Run: SUPABASE_URL=... SUPABASE_KEY=... node scripts/migrate-reviews.mjs

const WC_REVIEWS = 'https://collisiondrumsticks.com/wp-json/wc/store/v1/products/reviews';
const SUPA_URL = process.env.SUPABASE_URL;
const SUPA_KEY = process.env.SUPABASE_KEY;

if (!SUPA_URL || !SUPA_KEY) {
  console.error('Set SUPABASE_URL and SUPABASE_KEY env vars.');
  process.exit(1);
}

function stripHtml(html) {
  if (!html) return '';
  return html
    .replace(/<\/?[^>]+(>|$)/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&#8211;/g, '–')
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&[a-z#0-9]+;/gi, '')
    .replace(/\s+/g, ' ')
    .trim();
}

async function fetchPaginated(url, accumulator = [], page = 1) {
  const r = await fetch(`${url}${url.includes('?') ? '&' : '?'}per_page=100&page=${page}`);
  if (!r.ok) return accumulator;
  const data = await r.json();
  if (!Array.isArray(data) || data.length === 0) return accumulator;
  accumulator.push(...data);
  if (data.length < 100) return accumulator;
  return fetchPaginated(url, accumulator, page + 1);
}

async function getProductIdMap() {
  // Pull all products from Supabase to build source_id → uuid map
  const r = await fetch(`${SUPA_URL}/rest/v1/collision_products?select=id,source_id`, {
    headers: { apikey: SUPA_KEY, Authorization: `Bearer ${SUPA_KEY}` },
  });
  if (!r.ok) throw new Error(`Failed to fetch products: ${r.status}`);
  const products = await r.json();
  const map = new Map();
  for (const p of products) {
    if (p.source_id) map.set(p.source_id, p.id);
  }
  return map;
}

async function upsert(table, rows) {
  const r = await fetch(`${SUPA_URL}/rest/v1/${table}`, {
    method: 'POST',
    headers: {
      apikey: SUPA_KEY,
      Authorization: `Bearer ${SUPA_KEY}`,
      'Content-Type': 'application/json',
      Prefer: 'return=minimal',
    },
    body: JSON.stringify(rows),
  });
  if (!r.ok) {
    const text = await r.text();
    throw new Error(`Insert ${table} failed: ${r.status} ${text.substring(0, 500)}`);
  }
}

async function main() {
  console.log('Fetching reviews from WC Store API...');
  const wpReviews = await fetchPaginated(WC_REVIEWS);
  console.log(`  → ${wpReviews.length} reviews`);

  console.log('Building product id map...');
  const productMap = await getProductIdMap();
  console.log(`  → ${productMap.size} products mapped`);

  const reviews = wpReviews
    .map((r) => {
      const productId = productMap.get(String(r.product_id));
      if (!productId) return null;
      const body = stripHtml(r.review || '');
      if (!body) return null;
      return {
        product_id: productId,
        customer_name: stripHtml(r.reviewer || 'Anonymous'),
        rating: Math.max(1, Math.min(5, Number(r.rating || 5))),
        title: null,
        body,
        is_verified_purchase: Boolean(r.verified),
        is_approved: true,
        created_at: r.date_created_gmt
          ? new Date(r.date_created_gmt + 'Z').toISOString()
          : new Date().toISOString(),
      };
    })
    .filter(Boolean);

  console.log(`\nInserting ${reviews.length} reviews to Supabase...`);
  const batchSize = 50;
  for (let i = 0; i < reviews.length; i += batchSize) {
    const batch = reviews.slice(i, i + batchSize);
    await upsert('collision_reviews', batch);
    console.log(`  → uploaded ${Math.min(i + batchSize, reviews.length)}/${reviews.length}`);
  }

  console.log('\nDone.');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
