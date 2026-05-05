import { NextResponse } from 'next/server';
import { getProducts, getArtists, getPosts } from '@/lib/data';

export const revalidate = 600;

type Entry = {
  title: string;
  subtitle?: string;
  type: 'product' | 'artist' | 'post' | 'page';
  href: string;
  keywords?: string;
};

const STATIC_PAGES: Entry[] = [
  { title: 'Stick finder quiz', subtitle: 'Six questions to your model', type: 'page', href: '/stick-finder', keywords: 'quiz find recommendation' },
  { title: 'Custom engraving', subtitle: 'Build your own pair', type: 'page', href: '/custom', keywords: 'engrave logo personalised' },
  { title: 'How we make our sticks', subtitle: 'Six step manufacturing tour', type: 'page', href: '/how-we-make-our-sticks', keywords: 'workshop process newcastle' },
  { title: 'Endorsements', subtitle: 'Apply to the artist roster', type: 'page', href: '/endorsements', keywords: 'sponsor artist programme' },
  { title: 'Wholesale', subtitle: 'Trade pricing and stockist info', type: 'page', href: '/wholesale', keywords: 'trade retailer bulk' },
  { title: 'Affiliates', subtitle: 'Earn 10 to 15% commission', type: 'page', href: '/affiliates', keywords: 'partner referral commission' },
  { title: 'Backstage', subtitle: 'Paid drummer membership', type: 'page', href: '/backstage', keywords: 'membership community subscription' },
  { title: 'Resources hub', subtitle: 'Guides and articles', type: 'page', href: '/resources', keywords: 'blog articles guides tips' },
  { title: 'Artists roster', subtitle: '620+ endorsed players', type: 'page', href: '/artists', keywords: 'family endorsed players' },
  { title: 'Shop drumsticks', subtitle: 'All seven models', type: 'page', href: '/shop/drumsticks', keywords: '5a 5b 7a 2b reach' },
  { title: 'Shop accessories', subtitle: 'Bags, pads, keys', type: 'page', href: '/shop/accessories', keywords: 'accessories bag pad' },
  { title: 'Shop apparel', subtitle: 'Tees, hoodies, caps', type: 'page', href: '/shop/apparel', keywords: 'clothing merch tee hoodie' },
  { title: 'Shop bundles', subtitle: 'Subscribe & Save', type: 'page', href: '/shop/bundles', keywords: 'subscription discount bundle' },
  { title: 'Drumsticks for jazz', subtitle: 'Recommends 7A', type: 'page', href: '/drumsticks-for-jazz', keywords: 'jazz 7a brushwork ride' },
  { title: 'Drumsticks for rock', subtitle: 'Recommends 5B', type: 'page', href: '/drumsticks-for-rock', keywords: 'rock 5b loud backbeat' },
  { title: 'Drumsticks for metal', subtitle: 'Recommends 2B nylon', type: 'page', href: '/drumsticks-for-metal', keywords: 'metal 2b nylon heavy' },
  { title: 'Drumsticks for beginners', subtitle: 'Recommends 5A', type: 'page', href: '/drumsticks-for-beginners', keywords: 'beginner student new' },
  { title: '5A vs 5B', subtitle: 'Side by side comparison', type: 'page', href: '/compare/5a-vs-5b', keywords: 'compare difference' },
  { title: 'Wood vs nylon tip', subtitle: 'Tone and durability', type: 'page', href: '/compare/wood-tip-vs-nylon-tip', keywords: 'compare tip type' },
  { title: 'Natural vs Stealth Black', subtitle: 'Finish comparison', type: 'page', href: '/compare/natural-vs-stealth-black', keywords: 'finish colour matte' },
  { title: 'Best drumsticks UK', subtitle: 'Made in Newcastle', type: 'page', href: '/best-drumsticks-uk', keywords: 'uk britain newcastle' },
  { title: 'FAQ', subtitle: '78 questions answered', type: 'page', href: '/faq', keywords: 'help questions support' },
  { title: 'Contact', subtitle: 'Get in touch', type: 'page', href: '/contact', keywords: 'email phone help' },
  { title: 'Shipping & delivery', subtitle: 'UK and worldwide', type: 'page', href: '/shipping-delivery', keywords: 'delivery shipping carrier' },
  { title: 'Returns & exchanges', subtitle: '14 day return policy', type: 'page', href: '/returns-exchanges', keywords: 'return refund exchange' },
  { title: 'About Collision', subtitle: 'Founder story and timeline', type: 'page', href: '/about', keywords: 'about story carlton' },
];

export async function GET() {
  const [products, artists, posts] = await Promise.all([
    getProducts(),
    getArtists(),
    getPosts(),
  ]);

  const productEntries: Entry[] = products.map((p) => ({
    title: p.name,
    subtitle: p.short_description,
    type: 'product',
    href: `/product/${p.slug}`,
    keywords: `${p.stick_size ?? ''} ${p.tip_type ?? ''} ${p.finish ?? ''} ${(p.best_for ?? []).join(' ')}`,
  }));

  const artistEntries: Entry[] = artists.slice(0, 200).map((a) => ({
    title: a.name,
    subtitle: `${a.endorsement_tier} tier${a.country ? ', ' + a.country : ''}`,
    type: 'artist',
    href: `/artists/${a.slug}`,
    keywords: `${(a.genres ?? []).join(' ')} ${a.country} ${a.city ?? ''}`,
  }));

  const postEntries: Entry[] = posts.slice(0, 60).map((p) => ({
    title: p.title,
    subtitle: p.excerpt?.slice(0, 80),
    type: 'post',
    href: `/resources/${p.slug}`,
    keywords: `${p.category} ${(p.tags ?? []).join(' ')}`,
  }));

  return NextResponse.json({
    entries: [...STATIC_PAGES, ...productEntries, ...artistEntries, ...postEntries],
  });
}
