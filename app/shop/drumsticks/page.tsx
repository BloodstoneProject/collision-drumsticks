import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { ProductCard } from '@/components/ProductCard';
import { products } from '@/lib/seed-data';

export const metadata: Metadata = {
  title: 'Drumsticks — American Hickory',
  description:
    'Every Collision drumstick model: 5A, 5B, 5AR Reach, 5BR Reach, 7A, 7AR, 2B. Wood and nylon tip. Natural and Stealth Black. Weight-matched in Newcastle.',
};

export default function DrumsticksPage() {
  const drumsticks = products.filter((p) => p.category === 'drumsticks');
  const subcats = [
    { slug: 'wood-tip', label: 'Wood Tip' },
    { slug: 'nylon-tip', label: 'Nylon Tip' },
    { slug: 'reach-series', label: 'Reach Series' },
    { slug: 'stealth', label: 'Stealth Black' },
    { slug: 'custom', label: 'Custom' },
  ];

  return (
    <>
      <PageHero
        eyebrow="Drumsticks"
        title="American Hickory. Weight-matched. Built in Newcastle."
        subtitle="Every model in our standard lineup, from the lightweight 7A to the heavy-hitting 2B."
      />
      <section className="container-page py-12">
        <div className="flex flex-wrap gap-2 mb-10">
          <Link href="/shop/drumsticks" className="px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] bg-ink text-bone">
            All
          </Link>
          {subcats.map((s) => (
            <Link
              key={s.slug}
              href={`/shop/drumsticks?subcategory=${s.slug}`}
              className="px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] border border-line hover:border-ink transition-colors"
            >
              {s.label}
            </Link>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {drumsticks.map((p, i) => (
            <ProductCard key={p.id} product={p} eager={i < 4} />
          ))}
        </div>
      </section>
    </>
  );
}
