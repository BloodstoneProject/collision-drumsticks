import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { bundles } from '@/lib/seed-data';
import { formatPrice } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Bundles & Subscriptions',
  description:
    'Pre-configured drumstick bundles built to hit free shipping. Plus our Subscribe & Save programme - never run out, save 20%.',
};

export default function BundlesPage() {
  return (
    <>
      <PageHero
        eyebrow="Bundles"
        title="Buy more, pay less, never run out."
        subtitle="Bundles designed to hit free shipping, save you money, and get you exactly what you need."
      />
      <section className="container-page py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bundles.map((b) => (
            <div key={b.slug} className="border border-line bg-bone hover:border-ink transition-colors">
              <div className="relative aspect-[4/3] bg-cream">
                <Image
                  src={b.image}
                  alt={b.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-2xl">{b.name}</h3>
                <p className="text-sm text-mute mt-2 text-pretty">{b.description}</p>
                <ul className="mt-4 text-sm space-y-1">
                  {b.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span>·</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex items-end justify-between">
                  <div>
                    <p className="font-display text-2xl">{formatPrice(b.price_gbp)}</p>
                    <p className="text-xs text-crimson font-semibold">Save {formatPrice(b.saving)}</p>
                  </div>
                  <Link href="/shop" className="btn-primary !py-3 !px-5">
                    Add to Cart
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
