import type { Product, Artist, BlogPost, FAQ, Review } from './types';

const IMG = 'https://images.unsplash.com/photo-';

const stickImg = (id: string) => `${IMG}${id}?w=1200&auto=format&fit=crop&q=80`;

export const products: Product[] = [
  {
    id: 'p1',
    name: '5A Drumstick',
    slug: '5a-drumstick',
    category: 'drumsticks',
    subcategory: 'wood-tip',
    short_description: 'The all-rounder. Premium American Hickory, oval tip, balanced for any genre.',
    description:
      'Our most popular stick. Built from grade-A American Hickory and weight-matched in Newcastle. The 5A is the workhorse — light enough for jazz, rugged enough for rock, neutral enough to teach with. If you only own one pair of Collision sticks, make it this one.',
    base_price_gbp: 14.99,
    primary_image: stickImg('1519892300165-cb5542fb47c7'),
    images: [stickImg('1519892300165-cb5542fb47c7'), stickImg('1571974599782-87624638275a')],
    stick_size: '5A',
    tip_type: 'wood',
    finish: 'natural',
    length_inches: 16,
    diameter_inches: 0.565,
    weight_grams: 47,
    best_for: ['Rock', 'Pop', 'Jazz', 'Funk', 'All-round'],
    is_featured: true,
    badge: 'most-popular',
    average_rating: 4.99,
    review_count: 412,
    variants: [
      { variant_name: '1 Pair', quantity_pairs: 1, price_gbp: 14.99, sku: 'CDS-5A-1' },
      { variant_name: '3 Pack', quantity_pairs: 3, price_gbp: 39.99, sku: 'CDS-5A-3' },
      { variant_name: '6 Pack', quantity_pairs: 6, price_gbp: 74.99, sku: 'CDS-5A-6' },
      { variant_name: '12 Pack', quantity_pairs: 12, price_gbp: 139.99, sku: 'CDS-5A-12' },
    ],
  },
  {
    id: 'p2',
    name: '5B Drumstick',
    slug: '5b-drumstick',
    category: 'drumsticks',
    subcategory: 'wood-tip',
    short_description: 'A heavier 5A. More body for harder hitters. Same balance, more authority.',
    description:
      'Same length as the 5A but a thicker shaft. The 5B is for drummers who hit harder, play louder, and want a stick that can take it. Built from American Hickory and weight-matched.',
    base_price_gbp: 14.99,
    primary_image: stickImg('1571974599782-87624638275a'),
    images: [stickImg('1571974599782-87624638275a')],
    stick_size: '5B',
    tip_type: 'wood',
    finish: 'natural',
    length_inches: 16,
    diameter_inches: 0.595,
    weight_grams: 53,
    best_for: ['Rock', 'Pop', 'Funk', 'Punk'],
    is_featured: true,
    badge: 'best-seller',
    average_rating: 4.98,
    review_count: 287,
    variants: [
      { variant_name: '1 Pair', quantity_pairs: 1, price_gbp: 14.99, sku: 'CDS-5B-1' },
      { variant_name: '3 Pack', quantity_pairs: 3, price_gbp: 39.99, sku: 'CDS-5B-3' },
      { variant_name: '6 Pack', quantity_pairs: 6, price_gbp: 74.99, sku: 'CDS-5B-6' },
      { variant_name: '12 Pack', quantity_pairs: 12, price_gbp: 139.99, sku: 'CDS-5B-12' },
    ],
  },
  {
    id: 'p3',
    name: '5AR Reach Drumstick',
    slug: '5ar-reach-drumstick',
    category: 'drumsticks',
    subcategory: 'reach-series',
    short_description: 'A 5A with extended reach. For drummers who play wider kits.',
    description:
      'The Reach series adds half an inch to a standard 5A — small change, big difference. The extra length helps players with bigger kits, lower stools, or simply longer arms. Same balance and weight-match as the standard 5A.',
    base_price_gbp: 15.99,
    primary_image: stickImg('1606127195898-1cdaf3d5db8a'),
    images: [stickImg('1606127195898-1cdaf3d5db8a')],
    stick_size: '5AR',
    tip_type: 'wood',
    finish: 'natural',
    length_inches: 16.5,
    diameter_inches: 0.565,
    weight_grams: 49,
    best_for: ['Rock', 'Pop', 'Gospel'],
    is_featured: true,
    badge: 'staff-pick',
    average_rating: 5.0,
    review_count: 96,
    variants: [
      { variant_name: '1 Pair', quantity_pairs: 1, price_gbp: 15.99, sku: 'CDS-5AR-1' },
      { variant_name: '3 Pack', quantity_pairs: 3, price_gbp: 42.99, sku: 'CDS-5AR-3' },
      { variant_name: '6 Pack', quantity_pairs: 6, price_gbp: 79.99, sku: 'CDS-5AR-6' },
    ],
  },
  {
    id: 'p4',
    name: '5BR Reach Drumstick',
    slug: '5br-reach-drumstick',
    category: 'drumsticks',
    subcategory: 'reach-series',
    short_description: 'Heavier reach stick. The 5B with the extra half-inch.',
    description:
      'A 5B in the Reach series. For heavy hitters who want length and weight together. Hickory, weight-matched, oiled finish.',
    base_price_gbp: 15.99,
    primary_image: stickImg('1571974599782-87624638275a'),
    images: [stickImg('1571974599782-87624638275a')],
    stick_size: '5BR',
    tip_type: 'wood',
    finish: 'natural',
    length_inches: 16.5,
    diameter_inches: 0.595,
    weight_grams: 55,
    best_for: ['Rock', 'Metal', 'Hard Rock'],
    average_rating: 4.97,
    review_count: 64,
    variants: [
      { variant_name: '1 Pair', quantity_pairs: 1, price_gbp: 15.99, sku: 'CDS-5BR-1' },
      { variant_name: '3 Pack', quantity_pairs: 3, price_gbp: 42.99, sku: 'CDS-5BR-3' },
    ],
  },
  {
    id: 'p5',
    name: '7A Drumstick',
    slug: '7a-drumstick',
    category: 'drumsticks',
    subcategory: 'wood-tip',
    short_description: 'A lighter, slimmer stick. Built for jazz, light pop, and dynamic players.',
    description:
      'The 7A is the smallest stick in our lineup. Lighter, slimmer, and quicker. Sized for nuance — jazz brushes-and-sticks players, kids learning, anyone who wants more articulation than power.',
    base_price_gbp: 14.99,
    primary_image: stickImg('1519892300165-cb5542fb47c7'),
    images: [stickImg('1519892300165-cb5542fb47c7')],
    stick_size: '7A',
    tip_type: 'wood',
    finish: 'natural',
    length_inches: 15.5,
    diameter_inches: 0.54,
    weight_grams: 41,
    best_for: ['Jazz', 'Pop', 'Acoustic'],
    average_rating: 4.96,
    review_count: 132,
    variants: [
      { variant_name: '1 Pair', quantity_pairs: 1, price_gbp: 14.99, sku: 'CDS-7A-1' },
      { variant_name: '3 Pack', quantity_pairs: 3, price_gbp: 39.99, sku: 'CDS-7A-3' },
      { variant_name: '6 Pack', quantity_pairs: 6, price_gbp: 74.99, sku: 'CDS-7A-6' },
    ],
  },
  {
    id: 'p6',
    name: '7AR Reach Drumstick',
    slug: '7ar-reach-drumstick',
    category: 'drumsticks',
    subcategory: 'reach-series',
    short_description: 'A 7A with extended length. Light, fast, with extra reach.',
    description:
      'The Reach series in a 7A. Half an inch longer than a standard 7A. For dynamic, fast players with bigger kits.',
    base_price_gbp: 15.99,
    primary_image: stickImg('1519892300165-cb5542fb47c7'),
    images: [stickImg('1519892300165-cb5542fb47c7')],
    stick_size: '7AR',
    tip_type: 'wood',
    finish: 'natural',
    length_inches: 16,
    diameter_inches: 0.54,
    weight_grams: 43,
    best_for: ['Jazz', 'Pop'],
    average_rating: 4.95,
    review_count: 38,
    variants: [
      { variant_name: '1 Pair', quantity_pairs: 1, price_gbp: 15.99, sku: 'CDS-7AR-1' },
      { variant_name: '3 Pack', quantity_pairs: 3, price_gbp: 42.99, sku: 'CDS-7AR-3' },
    ],
  },
  {
    id: 'p7',
    name: '2B Drumstick',
    slug: '2b-drumstick',
    category: 'drumsticks',
    subcategory: 'wood-tip',
    short_description: 'The heavy hitter. Maximum weight, maximum durability.',
    description:
      "Our biggest stick. The 2B is for marching, metal, hard rock, and players who break sticks faster than they can buy them. Don't expect finesse — expect to last.",
    base_price_gbp: 15.99,
    primary_image: stickImg('1571974599782-87624638275a'),
    images: [stickImg('1571974599782-87624638275a')],
    stick_size: '2B',
    tip_type: 'wood',
    finish: 'natural',
    length_inches: 16.25,
    diameter_inches: 0.63,
    weight_grams: 64,
    best_for: ['Metal', 'Punk', 'Hard Rock', 'Marching'],
    badge: 'new-release',
    average_rating: 4.99,
    review_count: 71,
    variants: [
      { variant_name: '1 Pair', quantity_pairs: 1, price_gbp: 15.99, sku: 'CDS-2B-1' },
      { variant_name: '3 Pack', quantity_pairs: 3, price_gbp: 42.99, sku: 'CDS-2B-3' },
      { variant_name: '6 Pack', quantity_pairs: 6, price_gbp: 79.99, sku: 'CDS-2B-6' },
    ],
  },
  {
    id: 'p8',
    name: '5A Stealth Black',
    slug: '5a-stealth-black',
    category: 'drumsticks',
    subcategory: 'stealth',
    short_description: 'Our signature 5A in matte black coating. Same stick, darker stage presence.',
    description:
      'A 5A finished in our matte black Stealth coating. Looks unreal under stage lights. Performs identically to the natural-finish 5A.',
    base_price_gbp: 17.99,
    primary_image: stickImg('1564544193800-635aaad7a8d3'),
    images: [stickImg('1564544193800-635aaad7a8d3')],
    stick_size: '5A',
    tip_type: 'wood',
    finish: 'stealth-black',
    length_inches: 16,
    diameter_inches: 0.565,
    weight_grams: 47,
    best_for: ['Rock', 'Pop', 'Stage'],
    average_rating: 5.0,
    review_count: 154,
    variants: [
      { variant_name: '1 Pair', quantity_pairs: 1, price_gbp: 17.99, sku: 'CDS-5A-SB-1' },
      { variant_name: '3 Pack', quantity_pairs: 3, price_gbp: 47.99, sku: 'CDS-5A-SB-3' },
      { variant_name: '6 Pack', quantity_pairs: 6, price_gbp: 89.99, sku: 'CDS-5A-SB-6' },
    ],
  },
  {
    id: 'p9',
    name: '5B Stealth Black',
    slug: '5b-stealth-black',
    category: 'drumsticks',
    subcategory: 'stealth',
    short_description: 'A 5B in matte black. Heavier hitter, darker finish.',
    description: 'The 5B in our Stealth Black coating. Same weight, same balance, vastly cooler.',
    base_price_gbp: 17.99,
    primary_image: stickImg('1564544193800-635aaad7a8d3'),
    images: [stickImg('1564544193800-635aaad7a8d3')],
    stick_size: '5B',
    tip_type: 'wood',
    finish: 'stealth-black',
    length_inches: 16,
    diameter_inches: 0.595,
    weight_grams: 53,
    best_for: ['Rock', 'Metal', 'Stage'],
    average_rating: 4.98,
    review_count: 88,
    variants: [
      { variant_name: '1 Pair', quantity_pairs: 1, price_gbp: 17.99, sku: 'CDS-5B-SB-1' },
      { variant_name: '3 Pack', quantity_pairs: 3, price_gbp: 47.99, sku: 'CDS-5B-SB-3' },
    ],
  },
  {
    id: 'p10',
    name: '5A Nylon Tip',
    slug: '5a-nylon-tip',
    category: 'drumsticks',
    subcategory: 'nylon-tip',
    short_description: 'The 5A with a nylon tip. Brighter cymbal articulation, longer life.',
    description:
      "Same shaft as our standard 5A, fitted with a nylon tip. Cymbals sound brighter and the tip lasts longer than wood. If you're a cymbal-forward player, this is the one.",
    base_price_gbp: 16.99,
    primary_image: stickImg('1606127195898-1cdaf3d5db8a'),
    images: [stickImg('1606127195898-1cdaf3d5db8a')],
    stick_size: '5A',
    tip_type: 'nylon',
    finish: 'natural',
    length_inches: 16,
    diameter_inches: 0.565,
    weight_grams: 48,
    best_for: ['Pop', 'Country', 'Studio'],
    average_rating: 4.97,
    review_count: 121,
    variants: [
      { variant_name: '1 Pair', quantity_pairs: 1, price_gbp: 16.99, sku: 'CDS-5A-N-1' },
      { variant_name: '3 Pack', quantity_pairs: 3, price_gbp: 44.99, sku: 'CDS-5A-N-3' },
      { variant_name: '6 Pack', quantity_pairs: 6, price_gbp: 84.99, sku: 'CDS-5A-N-6' },
    ],
  },
  {
    id: 'p11',
    name: 'Custom Engraved Drumsticks',
    slug: 'custom-engraved-drumsticks',
    category: 'drumsticks',
    subcategory: 'custom',
    short_description:
      'Your name, logo, or band on premium American Hickory. 7-10 day production.',
    description:
      'Pick your size, pick your tip, pick your finish, upload your design. We engrave your custom artwork onto every stick. Up to 4cm × 1.5cm print area. 7-10 business days production.',
    base_price_gbp: 24.99,
    primary_image: stickImg('1571974599782-87624638275a'),
    images: [stickImg('1571974599782-87624638275a')],
    stick_size: '5A',
    tip_type: 'wood',
    finish: 'natural',
    is_featured: true,
    badge: 'staff-pick',
    average_rating: 5.0,
    review_count: 218,
    variants: [
      { variant_name: '1 Pair Custom', quantity_pairs: 1, price_gbp: 24.99, sku: 'CDS-CUS-1' },
      { variant_name: '3 Pack Custom', quantity_pairs: 3, price_gbp: 64.99, sku: 'CDS-CUS-3' },
      { variant_name: '6 Pack Custom', quantity_pairs: 6, price_gbp: 119.99, sku: 'CDS-CUS-6' },
      { variant_name: '12 Pack Custom', quantity_pairs: 12, price_gbp: 219.99, sku: 'CDS-CUS-12' },
    ],
  },
  // Accessories
  {
    id: 'a1',
    name: 'Collision Stick Bag',
    slug: 'collision-stick-bag',
    category: 'accessories',
    subcategory: 'bags',
    short_description: 'Heavy canvas stick bag with cymbal slots. Hooks onto a floor tom.',
    description:
      'Built to outlive the sticks inside it. 12oz canvas, leather trim, hardware that bites. Two cymbal slots, hangs from a floor tom, fits 12+ pairs.',
    base_price_gbp: 39.99,
    primary_image: stickImg('1606127195898-1cdaf3d5db8a'),
    images: [stickImg('1606127195898-1cdaf3d5db8a')],
    average_rating: 4.95,
    review_count: 87,
    variants: [{ variant_name: 'Standard', quantity_pairs: 1, price_gbp: 39.99, sku: 'CDS-BAG' }],
  },
  {
    id: 'a2',
    name: '8-Inch Practice Pad',
    slug: 'practice-pad',
    category: 'accessories',
    subcategory: 'practice',
    short_description: 'Realistic rebound practice pad. Quiet, fast, travel-ready.',
    description:
      'Two-sided 8-inch pad — soft side for quiet practice, harder side for rebound work. Threaded mount fits any cymbal stand.',
    base_price_gbp: 29.99,
    primary_image: stickImg('1564544193800-635aaad7a8d3'),
    images: [stickImg('1564544193800-635aaad7a8d3')],
    average_rating: 4.92,
    review_count: 54,
    variants: [{ variant_name: 'Standard', quantity_pairs: 1, price_gbp: 29.99, sku: 'CDS-PAD' }],
  },
  {
    id: 'a3',
    name: 'Drum Key',
    slug: 'drum-key',
    category: 'accessories',
    subcategory: 'tools',
    short_description: 'Solid steel drum key with logo engraving. Will not round off.',
    description: 'A drum key that lasts. Hardened steel, knurled grip, Collision logo etched on the head.',
    base_price_gbp: 9.99,
    primary_image: stickImg('1519892300165-cb5542fb47c7'),
    images: [stickImg('1519892300165-cb5542fb47c7')],
    average_rating: 5.0,
    review_count: 42,
    variants: [{ variant_name: 'Standard', quantity_pairs: 1, price_gbp: 9.99, sku: 'CDS-KEY' }],
  },
  {
    id: 'a4',
    name: 'Stick Wax',
    slug: 'stick-wax',
    category: 'accessories',
    subcategory: 'grip',
    short_description: 'Beeswax-based grip improver. Dries clean, lasts a session.',
    description: 'Apply once at soundcheck. Grip lasts the gig. Made in small batches in Newcastle.',
    base_price_gbp: 7.99,
    primary_image: stickImg('1571974599782-87624638275a'),
    images: [stickImg('1571974599782-87624638275a')],
    average_rating: 4.88,
    review_count: 36,
    variants: [{ variant_name: 'Standard', quantity_pairs: 1, price_gbp: 7.99, sku: 'CDS-WAX' }],
  },
  // Apparel
  {
    id: 'ap1',
    name: 'Collision Logo T-Shirt',
    slug: 'collision-logo-t-shirt',
    category: 'apparel',
    subcategory: 'tops',
    short_description: 'Heavyweight cotton tee with chest logo. Comfy enough to gig in.',
    description: 'Heavyweight 220gsm combed cotton. Boxy fit. Black with white chest logo.',
    base_price_gbp: 24.99,
    primary_image: stickImg('1521572163474-6864f9cf17ab'),
    images: [stickImg('1521572163474-6864f9cf17ab')],
    average_rating: 4.94,
    review_count: 73,
    variants: [
      { variant_name: 'Small', quantity_pairs: 1, price_gbp: 24.99, sku: 'CDS-TEE-S' },
      { variant_name: 'Medium', quantity_pairs: 1, price_gbp: 24.99, sku: 'CDS-TEE-M' },
      { variant_name: 'Large', quantity_pairs: 1, price_gbp: 24.99, sku: 'CDS-TEE-L' },
      { variant_name: 'XL', quantity_pairs: 1, price_gbp: 24.99, sku: 'CDS-TEE-XL' },
    ],
  },
  {
    id: 'ap2',
    name: 'Collision Hoodie',
    slug: 'collision-hoodie',
    category: 'apparel',
    subcategory: 'tops',
    short_description: 'Heavyweight pullover hoodie. Black with embroidered chest logo.',
    description: '450gsm brushed back cotton. Embroidered logo. Built for cold load-ins.',
    base_price_gbp: 54.99,
    primary_image: stickImg('1556821840-3a63f95609a7'),
    images: [stickImg('1556821840-3a63f95609a7')],
    average_rating: 4.97,
    review_count: 48,
    variants: [
      { variant_name: 'Small', quantity_pairs: 1, price_gbp: 54.99, sku: 'CDS-HOOD-S' },
      { variant_name: 'Medium', quantity_pairs: 1, price_gbp: 54.99, sku: 'CDS-HOOD-M' },
      { variant_name: 'Large', quantity_pairs: 1, price_gbp: 54.99, sku: 'CDS-HOOD-L' },
      { variant_name: 'XL', quantity_pairs: 1, price_gbp: 54.99, sku: 'CDS-HOOD-XL' },
    ],
  },
  {
    id: 'ap3',
    name: 'Collision Cap',
    slug: 'collision-cap',
    category: 'apparel',
    subcategory: 'headwear',
    short_description: 'Six-panel cap, embroidered logo, adjustable strap.',
    description: 'Black six-panel dad cap. Embroidered logo. Adjustable metal-clip strap.',
    base_price_gbp: 22.99,
    primary_image: stickImg('1521572163474-6864f9cf17ab'),
    images: [stickImg('1521572163474-6864f9cf17ab')],
    average_rating: 4.93,
    review_count: 29,
    variants: [
      { variant_name: 'One Size', quantity_pairs: 1, price_gbp: 22.99, sku: 'CDS-CAP' },
    ],
  },
  {
    id: 'ap4',
    name: 'Collision Beanie',
    slug: 'collision-beanie',
    category: 'apparel',
    subcategory: 'headwear',
    short_description: 'Cuffed acrylic beanie. Survives the van.',
    description: 'Cuffed knit beanie with woven label. Black.',
    base_price_gbp: 18.99,
    primary_image: stickImg('1556821840-3a63f95609a7'),
    images: [stickImg('1556821840-3a63f95609a7')],
    average_rating: 4.92,
    review_count: 22,
    variants: [
      { variant_name: 'One Size', quantity_pairs: 1, price_gbp: 18.99, sku: 'CDS-BEANIE' },
    ],
  },
];

export const bundles = [
  {
    slug: 'starter-pack',
    name: 'Starter Pack',
    description: '1× 5A + 1× 5B + Stick Bag. The kit you start with.',
    price_gbp: 64.99,
    saving: 9.97,
    image: stickImg('1606127195898-1cdaf3d5db8a'),
    items: ['1 pair 5A', '1 pair 5B', 'Collision Stick Bag'],
  },
  {
    slug: 'gigging-pack',
    name: 'Gigging Pack',
    description: 'Three pairs of your favourite stick. Bulk discount.',
    price_gbp: 39.99,
    saving: 4.98,
    image: stickImg('1571974599782-87624638275a'),
    items: ['3 pairs of one size'],
  },
  {
    slug: 'explorer-pack',
    name: 'Explorer Pack',
    description: '5A + 7A + 5B. Try three sizes, find your favourite.',
    price_gbp: 39.99,
    saving: 4.98,
    image: stickImg('1519892300165-cb5542fb47c7'),
    items: ['1 pair 5A', '1 pair 7A', '1 pair 5B'],
  },
  {
    slug: 'never-run-out',
    name: 'Never Run Out',
    description:
      'Subscribe and save 20%. Auto-ship every 4, 8, or 12 weeks. Cancel anytime.',
    price_gbp: 11.99,
    saving: 3.0,
    image: stickImg('1564544193800-635aaad7a8d3'),
    items: ['1 pair every 4 weeks (or your chosen cadence)'],
  },
];

export const artists: Artist[] = [
  {
    id: 'ar1',
    name: 'Maya Holloway',
    slug: 'maya-holloway',
    short_bio: 'Pop touring drummer, currently with a Mercury-nominated artist.',
    bio: 'Maya is a London-based session drummer who has spent the last six years touring with major UK pop acts. She joined the Collision family in 2024 after a chance studio meeting in Camden. She plays the 5A almost exclusively.',
    photo_url: `${IMG}1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=80`,
    endorsement_tier: 'impact',
    genres: ['Pop', 'R&B', 'Indie'],
    country: 'United Kingdom',
    city: 'London',
    instagram_handle: 'mayadrumsx',
    instagram_followers: 145000,
    favourite_stick: '5A',
    testimonial_quote:
      'These are the only sticks I take on the road. The weight match is unreal — every pair feels the same.',
    is_featured: true,
    joined_year: 2024,
  },
  {
    id: 'ar2',
    name: 'Devontae Brooks',
    slug: 'devontae-brooks',
    short_bio: 'Atlanta gospel chops player. The reach series fan.',
    bio: 'Devontae has built a 200K-strong following posting gospel chops covers from his Atlanta home studio. His favourite is the 5AR — “the extra reach is the difference between hitting the ride and missing it.”',
    photo_url: `${IMG}1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80`,
    endorsement_tier: 'impact',
    genres: ['Gospel', 'R&B', 'Funk'],
    country: 'United States',
    city: 'Atlanta',
    instagram_handle: 'devbrooksdrums',
    instagram_followers: 218000,
    favourite_stick: '5AR',
    testimonial_quote: 'Reach 5A. Forever. End of debate.',
    is_featured: true,
    joined_year: 2023,
  },
  {
    id: 'ar3',
    name: 'Aki Tanaka',
    slug: 'aki-tanaka',
    short_bio: 'Tokyo-based metal player. Custom black engraved 2Bs.',
    bio: 'Aki tours with two of the biggest metal acts coming out of Tokyo right now. He plays 2Bs in custom black engraved finish. Joined the family in 2025.',
    photo_url: `${IMG}1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=80`,
    endorsement_tier: 'approach',
    genres: ['Metal', 'Hard Rock'],
    country: 'Japan',
    city: 'Tokyo',
    instagram_handle: 'aki_drumsjp',
    instagram_followers: 42000,
    favourite_stick: '2B',
    testimonial_quote: 'Heavy enough to last a tour. That is rare.',
    is_featured: true,
    joined_year: 2025,
  },
  {
    id: 'ar4',
    name: 'Sara Petrov',
    slug: 'sara-petrov',
    short_bio: 'Berlin jazz scene regular. 7A loyalist.',
    bio: 'Sara plays the Berlin jazz circuit five nights a week. She picked up the 7A in 2023 and has not changed since.',
    photo_url: `${IMG}1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=80`,
    endorsement_tier: 'approach',
    genres: ['Jazz', 'Acoustic'],
    country: 'Germany',
    city: 'Berlin',
    instagram_handle: 'sarapetrov',
    instagram_followers: 18500,
    favourite_stick: '7A',
    testimonial_quote: 'Articulate, light, balanced. The way a jazz stick should feel.',
    joined_year: 2023,
  },
  {
    id: 'ar5',
    name: 'Marcus Reid',
    slug: 'marcus-reid',
    short_bio: 'Glasgow indie band drummer. 5B Stealth player.',
    bio: 'Marcus is the drummer for one of Scotland’s most-streamed indie acts. The 5B Stealth is his weapon — “I hit hard and I want a stick that does not look beat up after one set.”',
    photo_url: `${IMG}1542178243-bc20204b769f?w=600&auto=format&fit=crop&q=80`,
    endorsement_tier: 'cruise',
    genres: ['Indie', 'Rock'],
    country: 'United Kingdom',
    city: 'Glasgow',
    instagram_handle: 'mreid.drums',
    instagram_followers: 4200,
    favourite_stick: '5B',
    testimonial_quote: 'Stealth Black. Always.',
    joined_year: 2025,
  },
  {
    id: 'ar6',
    name: 'Chiara Bianchi',
    slug: 'chiara-bianchi',
    short_bio: 'Milan session player. Custom engraved sticks for every tour.',
    bio: 'Chiara has played sessions for major Italian pop and rock acts since 2018. She orders custom engraved 5As for every tour with the band’s logo on the shaft.',
    photo_url: `${IMG}1531123897727-8f129e1688ce?w=600&auto=format&fit=crop&q=80`,
    endorsement_tier: 'approach',
    genres: ['Pop', 'Rock'],
    country: 'Italy',
    city: 'Milan',
    instagram_handle: 'chiarabianchidrums',
    instagram_followers: 27000,
    favourite_stick: '5A',
    testimonial_quote: 'The custom engraving is the best in the industry. Nobody else comes close.',
    joined_year: 2024,
  },
  {
    id: 'ar7',
    name: 'Olu Adeyemi',
    slug: 'olu-adeyemi',
    short_bio: 'Lagos Afrobeats player. Endorsed since 2022.',
    bio: 'Olu plays for one of the biggest Afrobeats acts on the international circuit. 5As, natural finish.',
    photo_url: `${IMG}1492562080023-ab3db95bfbce?w=600&auto=format&fit=crop&q=80`,
    endorsement_tier: 'impact',
    genres: ['Afrobeats', 'Highlife'],
    country: 'Nigeria',
    city: 'Lagos',
    instagram_handle: 'oludrums',
    instagram_followers: 312000,
    favourite_stick: '5A',
    testimonial_quote: 'You feel the music in these sticks.',
    joined_year: 2022,
  },
  {
    id: 'ar8',
    name: 'Dani Lopez',
    slug: 'dani-lopez',
    short_bio: 'Mexico City Latin pop session player.',
    bio: 'Dani is a session player based in Mexico City covering Latin pop, regional Mexican, and reggaeton sessions.',
    photo_url: `${IMG}1488161628813-04466f872be2?w=600&auto=format&fit=crop&q=80`,
    endorsement_tier: 'cruise',
    genres: ['Latin', 'Pop', 'Reggaeton'],
    country: 'Mexico',
    city: 'Mexico City',
    instagram_handle: 'danilopezdrums',
    instagram_followers: 6800,
    favourite_stick: '5A',
    testimonial_quote: 'Worth every penny.',
    joined_year: 2025,
  },
  {
    id: 'ar9',
    name: 'James Okafor',
    slug: 'james-okafor',
    short_bio: 'Nashville session player. 5B Reach exclusive.',
    bio: 'Nashville-based session drummer with credits across country, Americana, and rock.',
    photo_url: `${IMG}1463453091185-61582044d556?w=600&auto=format&fit=crop&q=80`,
    endorsement_tier: 'approach',
    genres: ['Country', 'Americana', 'Rock'],
    country: 'United States',
    city: 'Nashville',
    instagram_handle: 'jokafordrums',
    instagram_followers: 31500,
    favourite_stick: '5BR',
    testimonial_quote: 'The 5BR is the best country stick I have played.',
    joined_year: 2024,
  },
  {
    id: 'ar10',
    name: 'Priya Mehta',
    slug: 'priya-mehta',
    short_bio: 'Mumbai-based fusion player. 7AR fan.',
    bio: 'Priya plays Hindustani fusion with kit, tabla, and electronics. She has used the 7AR exclusively since 2024.',
    photo_url: `${IMG}1517841905240-472988babdf9?w=600&auto=format&fit=crop&q=80`,
    endorsement_tier: 'cruise',
    genres: ['Fusion', 'World'],
    country: 'India',
    city: 'Mumbai',
    instagram_handle: 'priya.drums',
    instagram_followers: 3200,
    favourite_stick: '7AR',
    testimonial_quote: 'Fast and articulate. They feel like an extension of my hand.',
    joined_year: 2024,
  },
  {
    id: 'ar11',
    name: 'Theo Larsson',
    slug: 'theo-larsson',
    short_bio: 'Stockholm hardcore drummer. Custom 2B engraved.',
    bio: 'Theo plays in one of Sweden’s most established hardcore bands. Custom black-engraved 2Bs every tour.',
    photo_url: `${IMG}1535713875002-d1d0cf377fde?w=600&auto=format&fit=crop&q=80`,
    endorsement_tier: 'approach',
    genres: ['Hardcore', 'Punk'],
    country: 'Sweden',
    city: 'Stockholm',
    instagram_handle: 'theolarssondrums',
    instagram_followers: 22000,
    favourite_stick: '2B',
    testimonial_quote: '2B Stealth. Forever.',
    joined_year: 2023,
  },
  {
    id: 'ar12',
    name: 'Amelia Quinn',
    slug: 'amelia-quinn',
    short_bio: 'Sydney indie drummer and educator.',
    bio: 'Amelia tours with one of Australia’s biggest indie exports and runs a Sydney-based drumming school.',
    photo_url: `${IMG}1488426862026-3ee34a7d66df?w=600&auto=format&fit=crop&q=80`,
    endorsement_tier: 'impact',
    genres: ['Indie', 'Pop'],
    country: 'Australia',
    city: 'Sydney',
    instagram_handle: 'ameliaquinn',
    instagram_followers: 108000,
    favourite_stick: '5A',
    testimonial_quote: 'I teach with these. Beginners to pros, they all work.',
    is_featured: true,
    joined_year: 2023,
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: 'b1',
    slug: '5a-vs-5b-which-drumstick-is-right-for-you',
    title: '5A vs 5B: Which Drumstick is Right for You?',
    excerpt:
      'The difference between the two most popular drumstick sizes — and how to pick the one that fits your playing.',
    content: `The 5A and 5B are the two most-played drumstick sizes on the planet. They are both 16 inches long. They are both made of American Hickory in our standard line. The difference, despite the small numerical change, matters more than most beginners realise.

## The numbers

The 5A measures 0.565 inches in diameter. The 5B measures 0.595 inches. That is three-hundredths of an inch — a difference smaller than most people can detect by sight. Pick them up and the difference is obvious. The 5A weighs around 47 grams. The 5B weighs around 53 grams.

## Who plays a 5A

Most drummers, most of the time. The 5A is the most-sold stick in the world for a reason. It sits at the centre of weight, balance, and durability. It works in jazz at low volume, in rock at moderate volume, in pop at gigging volume, and in funk at any volume. If you do not yet know what kind of drummer you are, play a 5A.

## Who plays a 5B

Drummers who play harder, louder, or longer. Hard rock players. Metal players who do not want to commit to a 2B. Drummers who break 5As before they wear them out — that is a sign you should be on a 5B. The 5B has more body, more stiffness, and more durability under heavy backbeats.

## What to actually do

Buy a pair of each. Play them for a week. The right stick is the one you do not think about — the one that disappears in your hand. If both feel right, default to the 5A. If the 5A feels too light, you are a 5B player. If the 5B feels clubby, you are a 5A player.

If you want our help, our [Stick Finder quiz](/stick-finder) is the fastest way to a recommendation.
`,
    featured_image: stickImg('1519892300165-cb5542fb47c7'),
    author: 'Carlton Banks',
    category: 'gear',
    tags: ['5A', '5B', 'beginner', 'gear-guide'],
    published_at: '2026-04-12',
    reading_time_minutes: 5,
  },
  {
    id: 'b2',
    slug: 'wood-tip-vs-nylon-tip',
    title: 'Wood Tip vs Nylon Tip: Which Should You Choose?',
    excerpt:
      'Two tip materials, two distinct sounds. A clear breakdown of when to use each.',
    content: `Wood tips and nylon tips give you different cymbals and different stick lifespans. Both have their place. Here is the short version.

## Wood tips

Warmer attack on cymbals. Slightly darker bell tone. Wears down with use, but the tone stays consistent until it does. Wood tip is the default — most pros, most genres, most of the time.

## Nylon tips

Brighter cymbal definition. Crisper articulation, especially on hi-hat tip work. The nylon tip itself outlasts a wood tip by 3–5x. The downside: when the nylon does eventually crack, the stick is done — there is no “sanding it back.”

## When to choose nylon

If your cymbals are dark and you want them to cut more in the mix. If you play heavy hi-hat tip work. If you play studio sessions where consistent tone matters. If you break tip after tip after tip.

## When to choose wood

For everything else.

We make every stick model in both wood and nylon. The choice is preference, not skill level.
`,
    featured_image: stickImg('1606127195898-1cdaf3d5db8a'),
    author: 'Carlton Banks',
    category: 'gear',
    tags: ['nylon-tip', 'wood-tip', 'gear-guide'],
    published_at: '2026-03-28',
    reading_time_minutes: 4,
  },
  {
    id: 'b3',
    slug: 'how-american-hickory-drumsticks-are-made',
    title: 'How American Hickory Drumsticks Are Made',
    excerpt:
      'From a 60-foot tree in Tennessee to a stick in your hand. The Collision manufacturing process.',
    content: `Every Collision drumstick starts as a slab of grade-A American Hickory in Tennessee. We buy our wood directly from the same supplier we have used since 2018, which means we know exactly which forest each stick came from.

## Grade-A only

We reject around 35% of the hickory we receive at the workshop. We do not use it. We do not sell it. The bar for our standard line is the bar — there is no “seconds” tier we slip into the box. Grade-A or it goes back.

## Turning

The slab is cut into 18-inch billets, then dowel-turned to a rough shape on CNC lathes. The rough shapes are then handed to a final-finish lathe operator who takes them to size — diameter, taper, and tip — by hand.

## Weight matching

This is where Collision differs from most studio brands. After turning, every stick is weighed individually. Sticks are paired only with another stick within ±1 gram. We then pitch-match — a quick tap on a steel block tells us if the pitch is consistent, and we re-pair if it is not. The pair is then bound and inspected.

## Finishing

Natural sticks get a thin oil finish — enough to protect the wood, not so much that grip suffers. Stealth Black sticks get a matte black coating applied in three thin layers, baked between coats. Custom engraved sticks get laser-engraved up to 4cm × 1.5cm on the shaft.

## Quality control

Every pair is hand-inspected before it is bagged. We reject visible knots, surface scratches, and any pair that fails the bend test (a quick stress test against the workbench).

It is slower than the way most stick brands do it. We are okay with that.
`,
    featured_image: stickImg('1564544193800-635aaad7a8d3'),
    author: 'Carlton Banks',
    category: 'guides',
    tags: ['manufacturing', 'hickory', 'process'],
    published_at: '2026-03-14',
    reading_time_minutes: 6,
  },
  {
    id: 'b4',
    slug: 'how-to-make-your-drumsticks-last-longer',
    title: 'How to Make Your Drumsticks Last Longer',
    excerpt: 'Four small changes to your technique and storage that double stick life.',
    content: `Drumsticks are consumables. They wear out. But they wear out faster than they have to if you make four common mistakes.

## 1. You are gripping too hard

A loose, fulcrum-anchored grip lets the stick do its work. A tight grip stops the rebound dead, which means you compensate by hitting harder, which means the stick wears faster. Loosen your grip and your sticks will outlast you.

## 2. You hit cymbals with the shoulder, not the bead

Cymbals are designed to be played with the shoulder of the stick (the taper just below the tip), not the tip itself. Hitting with the tip will eat the tip. Watch your favourite drummer — they hit the cymbal with the side, not the head.

## 3. You are storing them in the bag

Sticks left in a damp gig bag warp. Pull them out when you get home. Let them air. Store them flat.

## 4. You are buying mismatched pairs

Cheap sticks are not weight-matched. You think you are saving money but one stick is wearing faster than the other. After three sessions you have a mismatched pair you cannot use. We weight-match every pair to ±1 gram.
`,
    featured_image: stickImg('1571974599782-87624638275a'),
    author: 'Carlton Banks',
    category: 'tips',
    tags: ['durability', 'technique', 'tips'],
    published_at: '2026-02-22',
    reading_time_minutes: 4,
  },
  {
    id: 'b5',
    slug: 'artist-spotlight-maya-holloway',
    title: 'Artist Spotlight: Maya Holloway',
    excerpt:
      'The London-based session drummer on touring, gear, and why she only plays the 5A.',
    content: `Maya Holloway has been touring with one of the UK’s most prominent pop acts for the last six years. We caught up with her after a soundcheck at Brixton Academy.

## How did you find Collision?

A studio meeting in Camden, mid-2024. The MD of the session pulled out a pair of Collision 5As and asked if I had played them. I had not. I borrowed them for the take. By the end of the day I had ordered three boxes.

## Why the 5A specifically?

I have small hands. The 5A is the heaviest stick I can play comfortably for two hours. The 5B feels clubby in my grip. The 7A is too light for the gig I do. The 5A is the Goldilocks zone for me — and I think for most session players, honestly.

## What does your stick rotation look like on tour?

Three pairs per show. One in the holder, one as a backup, one for the encore. After each show the bandleader’s tech inspects them and tosses anything that is even slightly compromised. We get through about a dozen pairs a tour leg.

## What do you tell drummers who ask about endorsements?

Apply. Even if you do not think you have the following. Collision’s tier system means they take real players seriously, not just touring acts. The Cruise tier is genuine — I know players who started there and grew into Approach.

Maya plays Collision 5As exclusively. [Read her artist profile](/artists/maya-holloway).
`,
    featured_image: stickImg('1494790108377-be9c29b29330'),
    author: 'Collision Drumsticks',
    category: 'artist-spotlight',
    tags: ['artist-spotlight', 'maya-holloway', 'session'],
    published_at: '2026-02-08',
    reading_time_minutes: 5,
  },
  {
    id: 'b6',
    slug: 'getting-started-with-custom-engraved-drumsticks',
    title: 'Getting Started with Custom Engraved Drumsticks',
    excerpt: 'What you can engrave, what you cannot, and how to design for the small print area.',
    content: `Custom engraved drumsticks are one of the most-asked-about products in our line. Here is what you should know before you order.

## The print area

Every stick has a print area of 4cm × 1.5cm on the shaft. That is small. Designs that look great on a poster look like a smudge at that scale. Designs that work: a clean wordmark, a single-colour logo, a name in a bold font. Designs that do not: full-colour photography, designs with thin strokes under 1pt, anything with text smaller than 6pt.

## File formats

We accept SVG, PDF, PNG, and JPG. SVG is best — it scales without artefacts. If you only have a PNG, send the highest resolution you have.

## Production time

Custom sticks are made to order. Production is 7–10 business days, then standard shipping. We do not offer rush orders on custom sticks — quality control on engraved batches takes longer.

## What we cannot engrave

Trademarked artwork that is not yours. Anything explicit. Anything that looks like a competitor brand. We will reach out if there is an issue.

## What works best

A bold wordmark. A monogram. A band logo. Your full name in a thick font. The simpler the design, the better it reads on a stick at gig distance.

[Start your custom design here](/custom).
`,
    featured_image: stickImg('1571974599782-87624638275a'),
    author: 'Collision Drumsticks',
    category: 'tips',
    tags: ['custom', 'tips'],
    published_at: '2026-01-25',
    reading_time_minutes: 4,
  },
];

export const faqs: FAQ[] = [
  {
    id: 'f1',
    category: 'general',
    sort_order: 1,
    question: 'Where are Collision drumsticks made?',
    answer:
      'Every Collision drumstick is finished and weight-matched at our workshop in Newcastle, UK. The American Hickory is sourced from a single supplier in Tennessee.',
  },
  {
    id: 'f2',
    category: 'general',
    sort_order: 2,
    question: 'How long has Collision been around?',
    answer:
      'Collision was founded in 2014 by Carlton Banks. We have been making drumsticks under the Collision name for over a decade.',
  },
  {
    id: 'f3',
    category: 'products',
    sort_order: 1,
    question: 'What is the difference between 5A and 5B?',
    answer:
      'Both are 16 inches long. The 5A is 0.565" diameter and 47g; the 5B is 0.595" diameter and 53g. The 5A is the all-rounder; the 5B is for heavier hitters. See our [5A vs 5B guide](/resources/5a-vs-5b-which-drumstick-is-right-for-you).',
  },
  {
    id: 'f4',
    category: 'products',
    sort_order: 2,
    question: 'What is a Reach stick?',
    answer:
      'Our Reach series adds half an inch to a standard stick. Same diameter, same balance, more length. Useful for drummers with larger kits, lower stools, or longer arms.',
  },
  {
    id: 'f5',
    category: 'products',
    sort_order: 3,
    question: 'Do you offer left-handed sticks?',
    answer:
      'Drumsticks are not handed — they are symmetrical. Any stick works for right- or left-handed players.',
  },
  {
    id: 'f6',
    category: 'products',
    sort_order: 4,
    question: 'Are your sticks weight-matched?',
    answer:
      'Yes. Every pair is weighed individually and matched to within ±1 gram before being bound. We pitch-match where possible too.',
  },
  {
    id: 'f7',
    category: 'shipping',
    sort_order: 1,
    question: 'Do you offer free shipping?',
    answer: 'Free UK shipping on orders over £49. International shipping is calculated at checkout.',
  },
  {
    id: 'f8',
    category: 'shipping',
    sort_order: 2,
    question: 'How long does UK delivery take?',
    answer: '3–4 business days for stocked items via MyHermes.',
  },
  {
    id: 'f9',
    category: 'shipping',
    sort_order: 3,
    question: 'Do you ship internationally?',
    answer:
      'Yes. We ship worldwide via transglobal couriers. Delivery times vary by country — typically 7–14 business days for Europe, 10–21 for the rest of the world.',
  },
  {
    id: 'f10',
    category: 'shipping',
    sort_order: 4,
    question: 'Can I track my order?',
    answer: 'Yes. You will receive a tracking link by email within 24 hours of dispatch.',
  },
  {
    id: 'f11',
    category: 'custom',
    sort_order: 1,
    question: 'How long does a custom order take?',
    answer:
      'Custom engraved sticks take 7–10 business days to produce, plus standard shipping time.',
  },
  {
    id: 'f12',
    category: 'custom',
    sort_order: 2,
    question: 'What can I engrave?',
    answer:
      'Up to 4cm × 1.5cm of artwork — your name, band logo, monogram, or design. We accept SVG, PDF, PNG, and JPG. We cannot engrave trademarked third-party artwork.',
  },
  {
    id: 'f13',
    category: 'custom',
    sort_order: 3,
    question: 'Can I order more than 12 pairs custom?',
    answer:
      'Yes — see our [100 Pairs Custom](/wholesale) offer for bulk custom orders with extended discount.',
  },
  {
    id: 'f14',
    category: 'endorsements',
    sort_order: 1,
    question: 'How do I apply for an endorsement?',
    answer:
      'Through our [Endorsements page](/endorsements). We have three tiers — Cruise (1K+ followers), Approach (10K+), and Impact (100K+). Applications are reviewed within 7 days.',
  },
  {
    id: 'f15',
    category: 'endorsements',
    sort_order: 2,
    question: 'Do I need to be a touring artist to apply?',
    answer:
      'No. The Cruise tier is for grassroots players. We make exceptions for exceptional talent at every tier.',
  },
  {
    id: 'f16',
    category: 'endorsements',
    sort_order: 3,
    question: 'What do endorsed artists get?',
    answer:
      'A 50% artist discount on all sticks, social features, community access, and tier-dependent extras (free product, signature stick development at Impact tier).',
  },
  {
    id: 'f17',
    category: 'wholesale',
    sort_order: 1,
    question: 'Do you sell wholesale?',
    answer:
      'Yes. Submit a [wholesale enquiry](/wholesale) and we will get back to you within 3 business days with a price list and minimum order details.',
  },
  {
    id: 'f18',
    category: 'wholesale',
    sort_order: 2,
    question: 'What is the minimum wholesale order?',
    answer:
      'Wholesale minimums depend on the territory and product mix. Submit an enquiry for specifics.',
  },
  {
    id: 'f19',
    category: 'backstage',
    sort_order: 1,
    question: 'What is Collision Backstage?',
    answer:
      'A paid membership for serious drummers. Content library, community, networking, and growth strategies. £34/month, hosted separately from the main site.',
  },
  {
    id: 'f20',
    category: 'backstage',
    sort_order: 2,
    question: 'How do I join Backstage?',
    answer:
      'Through the [Backstage page](/backstage). Enrolment is open in waves — when doors are closed, join the waitlist.',
  },
];

export const reviews: Review[] = [
  {
    id: 'r1',
    product_slug: '5a-drumstick',
    customer_name: 'Tom W.',
    rating: 5,
    title: 'Best 5A I have played',
    body: 'I have played 5As from every major brand. Collision is the only one where the weight match is genuine pair to pair. Three boxes deep and not one outlier.',
    is_verified_purchase: true,
    created_at: '2026-04-02',
  },
  {
    id: 'r2',
    product_slug: '5a-drumstick',
    customer_name: 'Anika P.',
    rating: 5,
    title: 'Worth the price',
    body: 'A pound or two more than the supermarket sticks but they last 3x as long. Math works out.',
    is_verified_purchase: true,
    created_at: '2026-03-19',
  },
  {
    id: 'r3',
    product_slug: '5b-drumstick',
    customer_name: 'James C.',
    rating: 5,
    title: 'Heavy hitters approved',
    body: 'I play hardcore. These take it.',
    is_verified_purchase: true,
    created_at: '2026-03-30',
  },
  {
    id: 'r4',
    product_slug: '5a-stealth-black',
    customer_name: 'Lola B.',
    rating: 5,
    title: 'Look unreal under stage lights',
    body: 'Bought these for a show. Photographer kept asking about them after. They feel exactly like the natural 5A.',
    is_verified_purchase: true,
    created_at: '2026-04-11',
  },
  {
    id: 'r5',
    product_slug: 'custom-engraved-drumsticks',
    customer_name: 'Marco V.',
    rating: 5,
    title: 'Engraving is sharp',
    body: 'Got my band logo on a 6 pack of 5As. Looks better than I expected — sharper and cleaner. Will reorder.',
    is_verified_purchase: true,
    created_at: '2026-02-25',
  },
];

export const stats = {
  artists: 250,
  countries: 80,
  customers: 10000,
  community: 154000,
  rating: 4.99,
};

export const press = [
  { name: 'Music Observer', logo: '/press/music-observer.svg' },
  { name: 'Drum Magazine', logo: '/press/drum-magazine.svg' },
  { name: 'Modern Drummer', logo: '/press/modern-drummer.svg' },
  { name: 'Rhythm', logo: '/press/rhythm.svg' },
  { name: 'DrumHead', logo: '/press/drumhead.svg' },
  { name: 'Tom Tom', logo: '/press/tom-tom.svg' },
];
