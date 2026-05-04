import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { ProductCard } from '@/components/ProductCard';
import { products } from '@/lib/seed-data';

export const metadata: Metadata = {
  title: 'Shop',
  description: 'Premium American Hickory drumsticks, accessories, and apparel. Free UK shipping over £49.',
};

export default function ShopPage() {
  const cats = [
    { slug: 'drumsticks', label: 'Drumsticks' },
    { slug: 'accessories', label: 'Accessories' },
    { slug: 'apparel', label: 'Apparel' },
    { slug: 'bundles', label: 'Bundles' },
  ];
  return (
    <>
      <PageHero
        eyebrow="Shop"
        title="Every stick, every accessory, everything we make."
        subtitle="Filter by category or browse the full lineup below."
      />
      <section className="container-page py-12">
        <div className="flex flex-wrap gap-2 mb-10">
          <Link href="/shop" className="px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] bg-ink text-bone">
            All
          </Link>
          {cats.map((c) => (
            <Link
              key={c.slug}
              href={`/shop/${c.slug}`}
              className="px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] border border-line hover:border-ink transition-colors"
            >
              {c.label}
            </Link>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((p, i) => (
            <ProductCard key={p.id} product={p} eager={i < 4} />
          ))}
        </div>
      </section>
    </>
  );
}
