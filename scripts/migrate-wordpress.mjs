// Pulls products + posts from collisiondrumsticks.com via WP REST + WC Store API,
// transforms into Supabase schema, POSTs directly to Supabase REST API.
// Run: SUPABASE_URL=... SUPABASE_KEY=... node scripts/migrate-wordpress.mjs

const WP_BASE = 'https://collisiondrumsticks.com';
const WC_STORE = `${WP_BASE}/wp-json/wc/store/v1`;
const WP_REST = `${WP_BASE}/wp-json/wp/v2`;

const SUPA_URL = process.env.SUPABASE_URL;
const SUPA_KEY = process.env.SUPABASE_KEY;

if (!SUPA_URL || !SUPA_KEY) {
  console.error('Set SUPABASE_URL and SUPABASE_KEY env vars.');
  process.exit(1);
}

function stripHtml(html) {
  if (!html) return '';
  return html
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<\/?[^>]+(>|$)/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&[a-z#0-9]+;/gi, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function htmlToMarkdownish(html) {
  if (!html) return '';
  return html
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, '\n# $1\n\n')
    .replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, '\n## $1\n\n')
    .replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, '\n### $1\n\n')
    .replace(/<h[4-6][^>]*>([\s\S]*?)<\/h[4-6]>/gi, '\n#### $1\n\n')
    .replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, '$1\n\n')
    .replace(/<br\s*\/?\s*>/gi, '\n')
    .replace(/<strong[^>]*>([\s\S]*?)<\/strong>/gi, '**$1**')
    .replace(/<b[^>]*>([\s\S]*?)<\/b>/gi, '**$1**')
    .replace(/<em[^>]*>([\s\S]*?)<\/em>/gi, '*$1*')
    .replace(/<i[^>]*>([\s\S]*?)<\/i>/gi, '*$1*')
    .replace(/<a[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi, '[$2]($1)')
    .replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, '- $1\n')
    .replace(/<\/?[uo]l[^>]*>/gi, '\n')
    .replace(/<\/?[^>]+(>|$)/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&#8211;/g, '–')
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#8243;/g, '"')
    .replace(/&[a-z#0-9]+;/gi, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function slugify(s) {
  return String(s).toLowerCase().replace(/['"]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function categorise(wcCategories) {
  const names = wcCategories.map((c) => c.name.toLowerCase());
  if (names.some((n) => n.includes('drumstick'))) return 'drumsticks';
  if (names.some((n) => n.includes('apparel') || n.includes('cloth'))) return 'apparel';
  return 'accessories';
}

function inferStickSize(name) {
  const upper = String(name).toUpperCase();
  for (const size of ['5BR', '5AR', '7AR', '5B', '5A', '7A', '2B']) {
    if (upper.includes(size)) return size;
  }
  return null;
}

function inferTip(name) {
  const lower = String(name).toLowerCase();
  if (lower.includes('nylon')) return 'nylon';
  if (lower.includes('drumstick')) return 'wood';
  return null;
}

function inferFinish(name) {
  const lower = String(name).toLowerCase();
  if (lower.includes('stealth') || lower.includes('black')) return 'stealth-black';
  return 'natural';
}

function inferSubcategory(name, category) {
  if (category !== 'drumsticks') return null;
  const lower = String(name).toLowerCase();
  if (lower.includes('reach')) return 'reach-series';
  if (lower.includes('nylon')) return 'nylon-tip';
  if (lower.includes('stealth') || lower.includes('black')) return 'stealth';
  if (lower.includes('custom')) return 'custom';
  return 'wood-tip';
}

function categoriseBlogPost(p) {
  const title = stripHtml(p.title?.rendered || '').toLowerCase();
  if (title.includes('artist') || title.includes('spotlight')) return 'artist-spotlight';
  if (title.includes(' vs ') || title.includes('best ') || title.includes('guide')) return 'gear';
  if (title.includes('how to')) return 'guides';
  if (title.includes('tip')) return 'tips';
  if (title.includes('news') || title.includes('release') || title.includes('announce')) return 'news';
  if (title.includes('community') || title.includes('endorse')) return 'community';
  return 'guides';
}

function readingTimeMinutes(text) {
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
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

async function upsert(table, rows, conflictTarget = 'slug') {
  const url = `${SUPA_URL}/rest/v1/${table}?on_conflict=${conflictTarget}`;
  const r = await fetch(url, {
    method: 'POST',
    headers: {
      apikey: SUPA_KEY,
      Authorization: `Bearer ${SUPA_KEY}`,
      'Content-Type': 'application/json',
      Prefer: 'resolution=merge-duplicates,return=minimal',
    },
    body: JSON.stringify(rows),
  });
  if (!r.ok) {
    const text = await r.text();
    throw new Error(`Upsert ${table} failed: ${r.status} ${text.substring(0, 500)}`);
  }
}

async function main() {
  console.log('Fetching products from WC Store API...');
  const wpProducts = await fetchPaginated(`${WC_STORE}/products`);
  console.log(`  → ${wpProducts.length} products`);

  console.log('Fetching posts from WP REST API...');
  const wpPosts = await fetchPaginated(`${WP_REST}/posts`);
  console.log(`  → ${wpPosts.length} posts`);

  // Transform products
  const productSlugCounts = new Map();
  const products = wpProducts.map((p) => {
    let slug = slugify(p.slug || p.name)
      .replace(/-copy$/, '')
      .replace(/-limited-edition$/, '-limited');
    const dupCount = productSlugCounts.get(slug) || 0;
    productSlugCounts.set(slug, dupCount + 1);
    if (dupCount > 0) slug = `${slug}-${dupCount + 1}`;

    const category = categorise(p.categories || []);
    const subcategory = inferSubcategory(p.name, category);
    const stick_size = category === 'drumsticks' ? inferStickSize(p.name) : null;
    const tip_type = category === 'drumsticks' ? inferTip(p.name) : null;
    const finish = category === 'drumsticks' ? inferFinish(p.name) : null;

    const minor = p.prices?.currency_minor_unit ?? 2;
    const divisor = Math.pow(10, minor);
    const basePrice = Number(p.prices?.price ?? 0) / divisor;

    const images = [...new Set((p.images || []).map((i) => i.src).filter(Boolean))];
    const primaryImage = images[0] ?? null;

    const cleanName = String(p.name || '')
      .replace(/COPY|copy/g, '')
      .replace(/\s+/g, ' ')
      .replace(/\(\s*Limited Edition\s*\)\s*\(\s*Limited Edition\s*\)/gi, '(Limited Edition)')
      .trim();

    return {
      name: cleanName,
      slug,
      description: htmlToMarkdownish(p.description || ''),
      short_description: stripHtml(p.short_description || '').substring(0, 280),
      category,
      subcategory,
      base_price_gbp: Number(basePrice.toFixed(2)),
      primary_image: primaryImage,
      images,
      stick_size,
      tip_type,
      finish,
      is_active: true,
      is_featured: Boolean(p.featured),
      average_rating: Number(p.average_rating || 0),
      review_count: Number(p.review_count || 0),
      source_id: String(p.id),
    };
  });

  // Transform posts
  const postSlugCounts = new Map();
  const posts = wpPosts
    .map((p) => {
      const title = stripHtml(p.title?.rendered || '');
      let slug = slugify(p.slug || title);
      const dupCount = postSlugCounts.get(slug) || 0;
      postSlugCounts.set(slug, dupCount + 1);
      if (dupCount > 0) slug = `${slug}-${dupCount + 1}`;

      const content = htmlToMarkdownish(p.content?.rendered || '');
      const excerpt = stripHtml(p.excerpt?.rendered || '').substring(0, 280);
      const featured_image =
        p.jetpack_featured_media_url ||
        p._embedded?.['wp:featuredmedia']?.[0]?.source_url ||
        null;
      const category = categoriseBlogPost(p);
      const reading_time = readingTimeMinutes(content);
      const published_at = p.date_gmt ? new Date(p.date_gmt).toISOString() : null;

      if (!content || content.length < 80) return null;

      return {
        title,
        slug,
        excerpt,
        content,
        featured_image,
        author: 'Collision Drumsticks',
        category,
        is_published: true,
        published_at,
        reading_time_minutes: reading_time,
        source_id: String(p.id),
      };
    })
    .filter(Boolean);

  console.log(`\nUpserting ${products.length} products to Supabase...`);
  const productBatchSize = 25;
  for (let i = 0; i < products.length; i += productBatchSize) {
    const batch = products.slice(i, i + productBatchSize);
    await upsert('collision_products', batch);
    console.log(`  → uploaded ${Math.min(i + productBatchSize, products.length)}/${products.length}`);
  }

  console.log(`\nUpserting ${posts.length} posts to Supabase...`);
  const postBatchSize = 25;
  for (let i = 0; i < posts.length; i += postBatchSize) {
    const batch = posts.slice(i, i + postBatchSize);
    await upsert('collision_posts', batch);
    console.log(`  → uploaded ${Math.min(i + postBatchSize, posts.length)}/${posts.length}`);
  }

  console.log('\nDone.');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
