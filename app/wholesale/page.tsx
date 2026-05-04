import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { WholesaleForm } from './WholesaleForm';

export const metadata: Metadata = {
  title: 'Wholesale & Bulk Custom',
  description:
    'Stock Collision in your store. Plus our 100 Pairs Custom programme - bulk-engraved sticks for music schools, bands, and brands.',
};

export default function WholesalePage() {
  return (
    <>
      <PageHero
        eyebrow="Wholesale"
        title="Stock Collision."
        subtitle="UK-based, fast restocking, marketing support, competitive margins. Plus our 100 Pairs Custom programme for bulk engraving."
        backgroundImage="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=1920&auto=format&fit=crop&q=80"
      />

      <section className="container-page py-16">
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            { title: 'UK Made', body: 'Newcastle workshop. Faster turnaround than US-imported brands.' },
            { title: 'Marketing Support', body: 'Co-branded social, point-of-sale collateral, listing assets.' },
            { title: 'Competitive Margins', body: 'Trade pricing scaled to volume. No exclusivity required.' },
          ].map((b) => (
            <div key={b.title} className="border-t border-ink pt-5">
              <p className="font-display text-2xl">{b.title}</p>
              <p className="text-mute mt-2 text-sm text-pretty">{b.body}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <p className="eyebrow mb-3">100 Pairs Custom</p>
            <h2 className="font-display heading-md mb-4 text-balance">
              Bulk custom engraving for schools, bands, and brands.
            </h2>
            <p className="text-mute text-pretty leading-relaxed">
              Need 100+ pairs of custom-engraved drumsticks? We run regular bulk batches for music
              schools, drum schools, branded merch programmes, and large bands. Trade pricing,
              expedited production where possible, and full design support.
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              {[
                'From 100 pairs',
                'Up to 4cm × 1.5cm engraving',
                '14–21 day production',
                'Shipped worldwide',
                'Volume pricing scales - ask for a quote',
              ].map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="text-crimson">✓</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-3">Submit an Enquiry</p>
            <WholesaleForm />
          </div>
        </div>
      </section>
    </>
  );
}
