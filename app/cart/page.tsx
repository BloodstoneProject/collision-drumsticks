import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { PageHero } from '@/components/PageHero';
import { ProductCard } from '@/components/ProductCard';
import { getProducts } from '@/lib/data';
import { formatPrice } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Cart',
  description: 'Your Collision Drumsticks cart.',
};

export default async function CartPage() {
  const products = await getProducts();
  // Placeholder cart - Snipcart will replace this with a server-rendered cart
  const cart = [
    { product: products[0], quantity: 1, variant: products[0]?.variants[0] },
    { product: products[7], quantity: 1, variant: products[7]?.variants[0] },
  ].filter((item) => item.product && item.variant);

  const subtotal = cart.reduce((sum, item) => sum + (item.variant?.price_gbp ?? 0) * item.quantity, 0);
  const remainingForFreeShipping = Math.max(0, 49 - subtotal);
  const cross = products.filter((p) => p.category === 'accessories').slice(0, 4);

  return (
    <>
      <PageHero eyebrow="Cart" title="Your cart." />
      <section className="container-page py-8 md:py-12">
        {cart.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-mute mb-6">Your cart is empty.</p>
            <Link href="/shop" className="btn-primary">Shop the Lineup</Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item, i) => item.product && item.variant ? (
                <div key={i} className="grid grid-cols-[80px_1fr_auto] md:grid-cols-[120px_1fr_auto_auto] gap-4 items-center border border-line p-4">
                  <div className="relative aspect-square bg-cream">
                    <Image src={item.product.primary_image} alt={item.product.name} fill sizes="120px" className="object-cover" />
                  </div>
                  <div>
                    <Link href={`/product/${item.product.slug}`} className="font-display text-xl hover:text-crimson">
                      {item.product.name}
                    </Link>
                    <p className="text-xs text-mute">{item.variant.variant_name}</p>
                    <p className="text-sm font-semibold mt-1 md:hidden">{formatPrice(item.variant.price_gbp * item.quantity)}</p>
                  </div>
                  <div className="flex items-center border border-line">
                    <button type="button" className="px-2 py-1 hover:bg-cream">−</button>
                    <span className="px-3 text-sm">{item.quantity}</span>
                    <button type="button" className="px-2 py-1 hover:bg-cream">+</button>
                  </div>
                  <p className="hidden md:block font-semibold">{formatPrice(item.variant.price_gbp * item.quantity)}</p>
                </div>
              ) : null)}
            </div>

            <aside className="border border-line p-6 bg-cream h-fit space-y-4">
              <p className="eyebrow">Order Summary</p>
              <dl className="space-y-2 text-sm">
                <div className="flex justify-between"><dt>Subtotal</dt><dd>{formatPrice(subtotal)}</dd></div>
                <div className="flex justify-between"><dt>Shipping</dt><dd>{remainingForFreeShipping > 0 ? '£3.99' : 'Free'}</dd></div>
              </dl>

              {remainingForFreeShipping > 0 ? (
                <div className="text-xs">
                  <p className="text-mute mb-1">Add <strong>{formatPrice(remainingForFreeShipping)}</strong> for free UK shipping.</p>
                  <div className="h-1.5 bg-line">
                    <div className="h-full bg-amber" style={{ width: `${(subtotal / 49) * 100}%` }} />
                  </div>
                </div>
              ) : (
                <p className="text-xs font-semibold text-amber">✓ Free UK shipping unlocked</p>
              )}

              <div className="border-t border-line pt-4 flex justify-between font-display text-2xl">
                <span>Total</span>
                <span>{formatPrice(subtotal + (remainingForFreeShipping > 0 ? 3.99 : 0))}</span>
              </div>

              <Link href="/checkout" className="btn-accent w-full">Checkout</Link>
              <Link href="/shop" className="block text-center text-xs font-semibold uppercase tracking-[0.18em] underline">
                ← Continue Shopping
              </Link>
            </aside>
          </div>
        )}
      </section>

      <section className="container-page py-12 border-t border-line">
        <h2 className="font-display heading-md mb-8">You might also like</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {cross.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </>
  );
}
