import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Returns & Exchanges',
  description: '14-day return policy. Exceptions for custom orders and used drumsticks.',
};

export default function ReturnsPage() {
  return (
    <>
      <PageHero eyebrow="Returns" title="Returns & exchanges." />
      <section className="container-narrow py-12 md:py-16 space-y-8">
        <div>
          <h2 className="font-display heading-sm mb-3">14-Day Return Policy</h2>
          <p className="text-mute">
            We accept returns within 14 days of delivery on unopened, unused product. Refund issued
            to the original payment method within 5 business days of receipt.
          </p>
        </div>

        <div>
          <h2 className="font-display heading-sm mb-3">What we cannot accept</h2>
          <ul className="text-mute space-y-2">
            <li>· Custom engraved drumsticks (made to order)</li>
            <li>· Drumsticks that have been played</li>
            <li>· Apparel that has been worn or washed</li>
            <li>· Subscription orders past the 14-day window</li>
          </ul>
        </div>

        <div>
          <h2 className="font-display heading-sm mb-3">How to return</h2>
          <ol className="text-mute space-y-2 list-decimal list-inside">
            <li>Email sales@collisiondrumsticks.com with your order number</li>
            <li>We send a returns label (UK) or instructions (international)</li>
            <li>Pack and post within 7 days of receiving the label</li>
            <li>Refund processed within 5 business days of arrival</li>
          </ol>
        </div>

        <div>
          <h2 className="font-display heading-sm mb-3">Exchanges</h2>
          <p className="text-mute">
            We do not process direct exchanges — return for a refund and place a new order. This
            way you receive the new product faster than waiting for the exchange to clear.
          </p>
        </div>

        <div>
          <h2 className="font-display heading-sm mb-3">Faulty product</h2>
          <p className="text-mute">
            If a stick arrives broken or warped, send us a photo within 7 days and we will replace
            free of charge. Our quality control catches almost everything but not everything.
          </p>
        </div>
      </section>
    </>
  );
}
