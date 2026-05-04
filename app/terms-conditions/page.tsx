import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Terms of sale and use of collisiondrumsticks.com.',
};

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms & conditions." />
      <section className="container-narrow py-12 md:py-16 space-y-6 text-mute">
        <p className="text-sm">Last updated: 4 May 2026</p>
        <div>
          <h2 className="font-display text-xl text-ink mb-3">Acceptance</h2>
          <p>By using collisiondrumsticks.com you agree to these terms.</p>
        </div>
        <div>
          <h2 className="font-display text-xl text-ink mb-3">Pricing</h2>
          <p>Prices are in GBP unless toggled. We reserve the right to change pricing at any time. Orders honour the price displayed at checkout.</p>
        </div>
        <div>
          <h2 className="font-display text-xl text-ink mb-3">Stock</h2>
          <p>Stock levels update in real time. If an item becomes unavailable after order, we will refund or substitute with your permission.</p>
        </div>
        <div>
          <h2 className="font-display text-xl text-ink mb-3">Custom orders</h2>
          <p>Custom engraved sticks are made to order. Once production has started they cannot be cancelled. Production takes 7–10 business days.</p>
        </div>
        <div>
          <h2 className="font-display text-xl text-ink mb-3">Liability</h2>
          <p>Our liability is limited to the value of the order. Drumsticks are consumables — wear and breakage during normal play are not faults.</p>
        </div>
        <div>
          <h2 className="font-display text-xl text-ink mb-3">Governing law</h2>
          <p>These terms are governed by the laws of England and Wales.</p>
        </div>
      </section>
    </>
  );
}
