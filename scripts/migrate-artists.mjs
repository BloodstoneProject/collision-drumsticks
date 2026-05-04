// Scrapes collisiondrumsticks.com/artists/ for the full roster, parses each card,
// downloads photos to Supabase Storage (artist-photos bucket), inserts rows
// into collision_artists.
//
// Run: SUPABASE_URL=... SUPABASE_KEY=... node scripts/migrate-artists.mjs

import crypto from 'node:crypto';

const LIST_URL = 'https://collisiondrumsticks.com/artists/';
const SUPA_URL = process.env.SUPABASE_URL;
const SUPA_KEY = process.env.SUPABASE_KEY;

if (!SUPA_URL || !SUPA_KEY) {
  console.error('Set SUPABASE_URL and SUPABASE_KEY env vars.');
  process.exit(1);
}

const HEADERS = { apikey: SUPA_KEY, Authorization: `Bearer ${SUPA_KEY}` };

function decode(s) {
  if (!s) return s;
  let out = s;
  // Iteratively decode (some are double-encoded as &amp;#8211;)
  for (let i = 0; i < 3; i++) {
    out = out
      .replace(/&amp;/g, '&')
      .replace(/&#8211;/g, '–')
      .replace(/&#8212;/g, '-')
      .replace(/&quot;/g, '"')
      .replace(/&#039;/g, "'");
  }
  return out.replace(/&[a-z#0-9]+;/gi, '').trim();
}

function slugify(s) {
  return String(s)
    .toLowerCase()
    .replace(/['"]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function classifyTier(raw) {
  const t = String(raw || '').toLowerCase();
  if (t.includes('impact')) return 'impact';
  if (t.includes('approach')) return 'approach';
  if (t.includes('cruise')) return 'cruise';
  return null;
}

function inferStick(raw) {
  const s = String(raw || '').toUpperCase();
  for (const size of ['5BR', '5AR', '7AR', '5B', '5A', '7A', '2B']) {
    if (s.includes(size)) return size;
  }
  return null;
}

function inferCountry(loc) {
  const s = String(loc || '');
  // Common country tokens we expect
  const countries = [
    'England', 'Scotland', 'Wales', 'UK', 'United Kingdom', 'Ireland',
    'USA', 'United States', 'Canada', 'Australia', 'Germany', 'France',
    'Spain', 'Italy', 'Netherlands', 'Belgium', 'Sweden', 'Norway', 'Denmark',
    'Finland', 'Poland', 'Greece', 'Brazil', 'Argentina', 'Mexico', 'Japan',
    'South Korea', 'Korea', 'China', 'India', 'Indonesia', 'Singapore',
    'Malaysia', 'Philippines', 'Lebanon', 'Portugal', 'Switzerland',
    'Austria', 'Czech', 'Romania', 'Hungary', 'Israel', 'South Africa',
    'New Zealand', 'Russia', 'Ukraine', 'Turkey', 'Egypt',
  ];
  // Try to find any country token in the string
  for (const c of countries) {
    if (new RegExp('\\b' + c + '\\b', 'i').test(s)) return c.replace('USA', 'United States');
  }
  return s.split(/[,\s]+/).pop() || null;
}

function parseTitle(title) {
  // Pattern: "Name – Band – Location – TIER – STICK"
  // Some use hyphens, some use en-dashes
  const decoded = decode(title);
  // Split on en-dash or " - "
  const parts = decoded.split(/\s*[–-]\s*/).map((p) => p.trim()).filter(Boolean);
  if (parts.length < 3) return null;

  // Last segment is stick (e.g. "5AR (3)"), one before is tier
  const stickPart = parts[parts.length - 1].replace(/\s*\(\d+\)\s*$/, '');
  const tierPart = parts[parts.length - 2];

  const tier = classifyTier(tierPart);
  if (!tier) return null; // Not an artist card

  const stick = inferStick(stickPart);
  const name = parts[0];
  const band = parts[1] && parts.length >= 4 ? parts[1] : null;
  const location = parts.slice(parts.length - 4, parts.length - 2).pop() ?? parts[1];

  return {
    name,
    band,
    location,
    tier,
    stick,
    country: inferCountry(location),
  };
}

function parseListing(html) {
  // Each artist banner is identified by an <a href="/artists/SLUG/"> nearby an <img data-orig-file ...>
  // Scan all <img data-image-title="..."> blocks, extract artist info, then find the nearest preceding artist <a href>
  const artists = new Map(); // slug → record

  // Regex: capture data-orig-file, data-image-title, data-attachment-id from <img>
  const imgRegex = /<img\b[^>]*?data-image-title="([^"]+)"[^>]*?data-orig-file="([^"]+)"[^>]*?>/g;
  // Also try the reverse order
  const imgRegex2 = /<img\b[^>]*?data-orig-file="([^"]+)"[^>]*?data-image-title="([^"]+)"[^>]*?>/g;

  // Collect all img matches with their offset
  const imgMatches = [];
  let m;
  while ((m = imgRegex.exec(html)) !== null) {
    imgMatches.push({ idx: m.index, title: m[1], photo: m[2] });
  }
  while ((m = imgRegex2.exec(html)) !== null) {
    imgMatches.push({ idx: m.index, title: m[2], photo: m[1] });
  }

  // Collect all artist <a> matches
  const linkMatches = [];
  const linkRegex = /href="https:\/\/collisiondrumsticks\.com\/artists\/([a-z0-9-]+)\/"/g;
  while ((m = linkRegex.exec(html)) !== null) {
    linkMatches.push({ idx: m.index, slug: m[1] });
  }

  // For each img, find the nearest preceding artist link within 8000 chars
  for (const img of imgMatches) {
    const parsed = parseTitle(img.title);
    if (!parsed) continue;

    // Find nearest preceding link
    let nearest = null;
    let nearestDist = Infinity;
    for (const link of linkMatches) {
      if (link.idx < img.idx && img.idx - link.idx < nearestDist) {
        nearestDist = img.idx - link.idx;
        nearest = link;
      }
    }
    if (!nearest || nearestDist > 8000) continue;

    if (!artists.has(nearest.slug)) {
      artists.set(nearest.slug, {
        slug: nearest.slug,
        name: parsed.name,
        band: parsed.band,
        location: parsed.location,
        tier: parsed.tier,
        stick: parsed.stick,
        country: parsed.country,
        photo: img.photo,
      });
    }
  }

  return [...artists.values()];
}

const ctMap = {
  jpg: 'image/jpeg', jpeg: 'image/jpeg', png: 'image/png',
  webp: 'image/webp', avif: 'image/avif', gif: 'image/gif',
};

function pathFromUrl(url) {
  const hash = crypto.createHash('sha1').update(url).digest('hex').substring(0, 12);
  const ext = (url.split('.').pop()?.split('?')[0] || 'jpg').toLowerCase();
  const safeExt = Object.keys(ctMap).includes(ext) ? ext : 'jpg';
  return `${hash}.${safeExt}`;
}

async function uploadPhoto(srcUrl) {
  if (!srcUrl) return null;
  // The original might be too big — use the scaled version if available
  const target = srcUrl.replace(/-scaled\.(jpg|jpeg|png)$/i, '.$1');
  for (const url of [target, srcUrl]) {
    try {
      const res = await fetch(url, {
        redirect: 'follow',
        headers: { 'User-Agent': 'collision-migration/1.0', 'Cache-Control': 'no-cache' },
      });
      if (!res.ok) continue;
      const buf = Buffer.from(await res.arrayBuffer());
      const path = pathFromUrl(url);
      const ext = path.split('.').pop();
      const ct = ctMap[ext] || 'image/jpeg';
      const upRes = await fetch(`${SUPA_URL}/storage/v1/object/artist-photos/${path}`, {
        method: 'POST',
        headers: {
          ...HEADERS,
          'Content-Type': ct,
          'x-upsert': 'true',
          'Cache-Control': 'public, max-age=31536000, immutable',
        },
        body: buf,
      });
      if (!upRes.ok && upRes.status !== 409) {
        const t = await upRes.text();
        throw new Error(`Upload ${upRes.status}: ${t.substring(0, 100)}`);
      }
      return `${SUPA_URL}/storage/v1/object/public/artist-photos/${path}`;
    } catch (e) {
      // try next
    }
  }
  return null;
}

async function upsertBatch(rows) {
  const r = await fetch(`${SUPA_URL}/rest/v1/collision_artists?on_conflict=slug`, {
    method: 'POST',
    headers: {
      ...HEADERS,
      'Content-Type': 'application/json',
      Prefer: 'resolution=merge-duplicates,return=minimal',
    },
    body: JSON.stringify(rows),
  });
  if (!r.ok) {
    const t = await r.text();
    throw new Error(`Upsert ${r.status}: ${t.substring(0, 300)}`);
  }
}

async function main() {
  console.log('Fetching artist listing page...');
  const res = await fetch(LIST_URL, {
    headers: { 'User-Agent': 'collision-migration/1.0' },
  });
  const html = await res.text();
  console.log(`  ${html.length} bytes`);

  console.log('\nParsing artist cards...');
  const artists = parseListing(html);
  console.log(`  → ${artists.length} unique artists found`);

  if (artists.length === 0) {
    console.error('No artists parsed — listing structure may have changed');
    process.exit(1);
  }

  // Sample
  console.log('\nSample (first 3):');
  for (const a of artists.slice(0, 3)) {
    console.log(`  ${a.name} | ${a.location} | ${a.tier} | ${a.stick} | ${a.photo.substring(0, 80)}`);
  }

  console.log(`\nMigrating photos and upserting (${artists.length} artists)...`);
  const records = [];
  let i = 0;
  for (const a of artists) {
    i++;
    const photoUrl = await uploadPhoto(a.photo);
    records.push({
      slug: a.slug,
      name: a.name,
      short_bio: a.band ? `${a.band} · ${a.location}` : a.location,
      bio: `${a.name} plays Collision drumsticks. Based in ${a.location}${a.band ? `, with ${a.band}` : ''}. Endorsement tier: ${a.tier.toUpperCase()}.`,
      photo_url: photoUrl ?? '',
      endorsement_tier: a.tier,
      country: a.country,
      city: a.location && a.country && a.location !== a.country ? a.location.replace(a.country, '').replace(/[,\s]+$/, '').trim() : null,
      favourite_stick: a.stick,
      genres: [],
      is_active: true,
      is_featured: false,
      joined_date: '2024-01-01',
    });
    if (records.length >= 25) {
      await upsertBatch(records);
      records.length = 0;
    }
    if (i % 25 === 0) process.stdout.write(`\r  ${i}/${artists.length}`);
  }
  if (records.length > 0) await upsertBatch(records);
  process.stdout.write(`\r  ${i}/${artists.length}\n`);

  console.log('Done.');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
