// Seeds FAQs into Supabase.
// Run: SUPABASE_URL=... SUPABASE_KEY=... node scripts/seed-faqs.mjs

const SUPA_URL = process.env.SUPABASE_URL;
const SUPA_KEY = process.env.SUPABASE_KEY;

if (!SUPA_URL || !SUPA_KEY) {
  console.error('Set SUPABASE_URL and SUPABASE_KEY env vars.');
  process.exit(1);
}

const faqs = [
  { category: 'general', sort_order: 1, question: 'Where are Collision drumsticks made?', answer: 'Every Collision drumstick is finished and weight-matched at our workshop in Newcastle, UK. The American Hickory is sourced from a single supplier in Tennessee.' },
  { category: 'general', sort_order: 2, question: 'How long has Collision been around?', answer: 'Collision was founded in 2014 by Carlton Banks. We have been making drumsticks under the Collision name for over a decade.' },
  { category: 'products', sort_order: 1, question: 'What is the difference between 5A and 5B?', answer: 'Both are 16 inches long. The 5A is 0.565" diameter and 47g; the 5B is 0.595" diameter and 53g. The 5A is the all-rounder; the 5B is for heavier hitters.' },
  { category: 'products', sort_order: 2, question: 'What is a Reach stick?', answer: 'Our Reach series adds half an inch to a standard stick. Same diameter, same balance, more length. Useful for drummers with larger kits, lower stools, or longer arms.' },
  { category: 'products', sort_order: 3, question: 'Do you offer left-handed sticks?', answer: 'Drumsticks are not handed — they are symmetrical. Any stick works for right- or left-handed players.' },
  { category: 'products', sort_order: 4, question: 'Are your sticks weight-matched?', answer: 'Yes. Every pair is weighed individually and matched to within ±1 gram before being bound. We pitch-match where possible too.' },
  { category: 'shipping', sort_order: 1, question: 'Do you offer free shipping?', answer: 'Free UK shipping on orders over £49. International shipping is calculated at checkout.' },
  { category: 'shipping', sort_order: 2, question: 'How long does UK delivery take?', answer: '3–4 business days for stocked items via MyHermes.' },
  { category: 'shipping', sort_order: 3, question: 'Do you ship internationally?', answer: 'Yes. We ship worldwide via transglobal couriers. Delivery times vary by country — typically 7–14 business days for Europe, 10–21 for the rest of the world.' },
  { category: 'shipping', sort_order: 4, question: 'Can I track my order?', answer: 'Yes. You will receive a tracking link by email within 24 hours of dispatch.' },
  { category: 'custom', sort_order: 1, question: 'How long does a custom order take?', answer: 'Custom engraved sticks take 7–10 business days to produce, plus standard shipping time.' },
  { category: 'custom', sort_order: 2, question: 'What can I engrave?', answer: 'Up to 4cm × 1.5cm of artwork — your name, band logo, monogram, or design. We accept SVG, PDF, PNG, and JPG. We cannot engrave trademarked third-party artwork.' },
  { category: 'custom', sort_order: 3, question: 'Can I order more than 12 pairs custom?', answer: 'Yes — see our 100 Pairs Custom offer for bulk custom orders with extended discount.' },
  { category: 'endorsements', sort_order: 1, question: 'How do I apply for an endorsement?', answer: 'Through our Endorsements page. We have three tiers — Cruise (1K+ followers), Approach (10K+), and Impact (100K+). Applications are reviewed within 7 days.' },
  { category: 'endorsements', sort_order: 2, question: 'Do I need to be a touring artist to apply?', answer: 'No. The Cruise tier is for grassroots players. We make exceptions for exceptional talent at every tier.' },
  { category: 'endorsements', sort_order: 3, question: 'What do endorsed artists get?', answer: 'A 50% artist discount on all sticks, social features, community access, and tier-dependent extras (free product, signature stick development at Impact tier).' },
  { category: 'wholesale', sort_order: 1, question: 'Do you sell wholesale?', answer: 'Yes. Submit a wholesale enquiry and we will get back to you within 3 business days with a price list and minimum order details.' },
  { category: 'wholesale', sort_order: 2, question: 'What is the minimum wholesale order?', answer: 'Wholesale minimums depend on the territory and product mix. Submit an enquiry for specifics.' },
  { category: 'backstage', sort_order: 1, question: 'What is Collision Backstage?', answer: 'A paid membership for serious drummers. Content library, community, networking, and growth strategies. £34/month, hosted separately from the main site.' },
  { category: 'backstage', sort_order: 2, question: 'How do I join Backstage?', answer: 'Through the Backstage page. Enrolment is open in waves — when doors are closed, join the waitlist.' },
];

const rows = faqs.map((f) => ({ ...f, is_active: true }));

const r = await fetch(`${SUPA_URL}/rest/v1/collision_faqs`, {
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
  console.error(await r.text());
  process.exit(1);
}

console.log(`Inserted ${rows.length} FAQs.`);
