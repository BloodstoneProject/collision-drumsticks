import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Checkout',
  description: 'Secure checkout for Collision Drumsticks.',
  robots: 'noindex, nofollow',
};

export default function CheckoutPage() {
  return (
    <>
      <PageHero eyebrow="Checkout" title="Secure checkout." />
      <section className="container-page py-12 md:py-16">
        <div className="max-w-3xl mx-auto bg-cream p-8 md:p-12 border border-line text-center">
          <p className="font-display heading-md mb-3">Snipcart overlay coming.</p>
          <p className="text-mute text-pretty">
            Checkout is handled by Snipcart, an embedded overlay that fires from the cart. When the
            ecommerce layer is wired in production, the overlay opens here. Until then, this is the
            placeholder route the cart routes through.
          </p>
        </div>
      </section>
    </>
  );
}
