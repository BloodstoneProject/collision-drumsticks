import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { CTABanner } from '@/components/CTABanner';
import { bundles } from '@/lib/seed-data';
import { formatPrice } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Bundles & Subscriptions',
  description:
    'Pre configured drumstick bundles built to hit free shipping. Plus our Subscribe & Save programme. Save 20%, never run out, cancel anytime.',
};

const SUBSCRIBE_BENEFITS = [
  {
    title: 'Save 20%',
    body: 'Every shipment, no matter the cadence. Stacks with the artist discount if you are on the endorsement roster.',
  },
  {
    title: 'Pick your cadence',
    body: 'Every 4, 8, or 12 weeks. Change it from the customer portal whenever you want, no penalty.',
  },
  {
    title: 'Skip or pause anytime',
    body: 'Touring? On a break? One click pauses your subscription. We do not charge while it is paused.',
  },
  {
    title: 'Swap models freely',
    body: 'Decided you prefer the 5B over the 5A? Switch the SKU on your next shipment from the portal. No call, no email.',
  },
];

const COMPARISON = [
  { label: 'One off pair', price: '£14.95', note: 'Standard checkout, ships next working day.' },
  { label: 'Three pair Gigging Pack', price: '£39.99', note: 'Save £4.98 vs three single pairs. Hits free UK shipping.' },
  { label: 'Subscribe & Save (1 pair / month)', price: '£11.99', note: 'Save 20% per pair forever. Free UK shipping every third order.' },
  { label: 'Subscribe & Save (3 pair / month)', price: '£35.85', note: 'Save 20% on every pair, free UK shipping every shipment.' },
];

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
                    Add to cart
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cream">
        <div className="container-page py-16 md:py-20">
          <div className="max-w-3xl">
            <p className="eyebrow mb-3">Compare</p>
            <h2 className="font-display heading-md text-balance">
              How four ways of buying the same sticks stack up.
            </h2>
            <p className="mt-4 text-mute text-pretty max-w-2xl">
              The 5A at single pair price versus the same SKU through bundles and subscribe. The
              cheapest way to play Collision is on Subscribe & Save.
            </p>
          </div>
          <div className="mt-10 overflow-x-auto bg-bone border border-line">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-line text-xs uppercase tracking-[0.18em] text-mute">
                  <th className="py-4 px-6 font-semibold">Option</th>
                  <th className="py-4 px-6 font-semibold">Effective price</th>
                  <th className="py-4 px-6 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((c) => (
                  <tr key={c.label} className="border-b border-line align-top">
                    <td className="py-5 px-6 font-display text-lg leading-tight">{c.label}</td>
                    <td className="py-5 px-6 font-display text-2xl text-crimson">{c.price}</td>
                    <td className="py-5 px-6 text-sm text-mute text-pretty">{c.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="container-page py-16 md:py-24">
        <div className="max-w-3xl">
          <p className="eyebrow mb-3">Subscribe & Save</p>
          <h2 className="font-display heading-md text-balance">
            Set it once. Refills land before you run out.
          </h2>
          <p className="mt-4 text-mute text-pretty max-w-2xl">
            The most popular setup is one pair every four weeks at the Subscribe & Save price. You
            stay in control: skip, pause, swap models, change cadence, all from one screen.
          </p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SUBSCRIBE_BENEFITS.map((b) => (
            <div key={b.title} className="border-t border-ink pt-5">
              <p className="font-display text-xl">{b.title}</p>
              <p className="mt-2 text-sm text-mute text-pretty leading-relaxed">{b.body}</p>
            </div>
          ))}
        </div>
      </section>

      <CTABanner
        eyebrow="Gift"
        title="Bundles ship gift wrapped on request."
        body="Add a note at checkout and we will pack it in a kraft gift box with a hand written card. No charge."
        primaryCta={{ label: 'Shop bundles', href: '/shop/bundles' }}
        secondaryCta={{ label: 'Custom engraved gift', href: '/custom' }}
      />
    </>
  );
}
