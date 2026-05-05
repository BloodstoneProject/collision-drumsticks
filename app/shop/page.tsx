import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { ProductCard } from '@/components/ProductCard';
import { CTABanner } from '@/components/CTABanner';
import { getProducts } from '@/lib/data';

export const revalidate = 600;
export const metadata: Metadata = {
  title: 'Shop',
  description:
    'Premium American Hickory drumsticks, accessories, apparel, and bundles. Free UK shipping over £49. Weight matched in Newcastle.',
};

const CATS = [
  {
    slug: 'drumsticks',
    label: 'Drumsticks',
    blurb: '7 models. Wood and nylon tip. Natural and Stealth Black. The product the brand was built on.',
    count: '18 SKUs',
    image: 'https://images.unsplash.com/photo-1485579149621-3123dd979885?w=1200&auto=format&fit=crop&q=80',
  },
  {
    slug: 'accessories',
    label: 'Accessories',
    blurb: 'Stick bags, practice pads, drum keys, grip wax. The bits you actually reach for between songs.',
    count: '9 SKUs',
    image: 'https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=1200&auto=format&fit=crop&q=80',
  },
  {
    slug: 'apparel',
    label: 'Apparel',
    blurb: 'Heavyweight tees, hoodies, caps. Cut to gig in, washed enough times to know it lasts.',
    count: '11 SKUs',
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=1200&auto=format&fit=crop&q=80',
  },
  {
    slug: 'bundles',
    label: 'Bundles & Subscribe',
    blurb: 'Pre built packs that hit free shipping, plus our Subscribe & Save programme so you never run out.',
    count: '4 packs',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&auto=format&fit=crop&q=80',
  },
];

const REASONS = [
  {
    title: 'Made in the UK',
    body: 'Every stick turned, weighed, and packed in our Newcastle workshop. Two day dispatch on stock orders.',
  },
  {
    title: 'Weight matched to 1g',
    body: 'Calibrated digital scale, every pair, every day. The other 35% of stock never leaves the shop.',
  },
  {
    title: 'Free UK shipping over £49',
    body: 'Most pairs are £14 to £18 so a brace of three plus a stick bag clears the threshold.',
  },
  {
    title: 'Replaced free if it breaks early',
    body: 'Snap a stick in the first 7 days from honest play, send a photo, we replace at our cost. No quibble.',
  },
];

export default async function ShopPage() {
  const products = await getProducts();

  return (
    <>
      <PageHero
        eyebrow="Shop"
        title="Every stick, every accessory, everything we make."
        subtitle="Filter by category or browse the full lineup below."
      />

      <section className="container-page py-16 md:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATS.map((c) => (
            <Link
              key={c.slug}
              href={`/shop/${c.slug}`}
              className="group border border-line bg-bone overflow-hidden hover:border-ink transition-colors"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={c.image}
                  alt={c.label}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <p className="eyebrow text-crimson">{c.count}</p>
                <p className="mt-2 font-display text-2xl">{c.label}</p>
                <p className="mt-2 text-sm text-mute text-pretty">{c.blurb}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-ink group-hover:text-crimson">
                  Browse {c.label.toLowerCase()} &rarr;
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-cream">
        <div className="container-page py-12 md:py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {REASONS.map((r) => (
              <div key={r.title} className="border-t border-ink pt-5">
                <p className="font-display text-xl">{r.title}</p>
                <p className="mt-2 text-sm text-mute text-pretty">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
          <div>
            <p className="eyebrow mb-2">All products</p>
            <h2 className="font-display heading-md text-balance">The full lineup.</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link href="/shop" className="px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] bg-ink text-bone">
              All
            </Link>
            {CATS.map((c) => (
              <Link
                key={c.slug}
                href={`/shop/${c.slug}`}
                className="px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] border border-line hover:border-ink transition-colors"
              >
                {c.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((p, i) => (
            <ProductCard key={p.id} product={p} eager={i < 4} />
          ))}
        </div>
      </section>

      <CTABanner
        eyebrow="Not sure where to start"
        title="Take the 60 second stick finder."
        body="Six questions, one recommendation. Or grab a 5A, the most played pair in our lineup."
        primaryCta={{ label: 'Find my stick', href: '/stick-finder' }}
        secondaryCta={{ label: 'Shop the 5A', href: '/product/5a-drumstick' }}
      />
    </>
  );
}
