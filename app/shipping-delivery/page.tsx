import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Shipping & Delivery',
  description: 'UK and international shipping costs and delivery times for Collision Drumsticks.',
};

export default function ShippingPage() {
  return (
    <>
      <PageHero eyebrow="Shipping" title="Shipping & delivery." />
      <section className="container-narrow py-12 md:py-16 space-y-8">
        <div>
          <h2 className="font-display heading-sm mb-3">UK Shipping</h2>
          <p className="text-mute">
            All UK orders ship via MyHermes (Evri). Standard delivery is 3–4 business days from
            dispatch.
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li className="flex justify-between border-b border-line pb-2"><span>Orders under £49</span><strong>£3.99</strong></li>
            <li className="flex justify-between border-b border-line pb-2"><span>Orders £49 and over</span><strong>FREE</strong></li>
            <li className="flex justify-between border-b border-line pb-2"><span>Next-day delivery</span><strong>£8.99</strong></li>
          </ul>
        </div>

        <div>
          <h2 className="font-display heading-sm mb-3">International Shipping</h2>
          <p className="text-mute">
            We ship worldwide via transglobal couriers. Tracked. Customs duties and import taxes are
            paid by the recipient.
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li className="flex justify-between border-b border-line pb-2"><span>Europe — 7–14 days</span><strong>From £9.99</strong></li>
            <li className="flex justify-between border-b border-line pb-2"><span>USA / Canada — 10–14 days</span><strong>From £14.99</strong></li>
            <li className="flex justify-between border-b border-line pb-2"><span>Rest of world — 10–21 days</span><strong>From £19.99</strong></li>
          </ul>
        </div>

        <div>
          <h2 className="font-display heading-sm mb-3">Custom Orders</h2>
          <p className="text-mute">
            Custom engraved sticks add 7–10 business days for production. Delivery times above are
            from dispatch, not order placement.
          </p>
        </div>

        <div>
          <h2 className="font-display heading-sm mb-3">Tracking</h2>
          <p className="text-mute">
            Every order receives a tracking link by email within 24 hours of dispatch. If you have
            not received tracking after 48 hours, email sales@collisiondrumsticks.com.
          </p>
        </div>
      </section>
    </>
  );
}
