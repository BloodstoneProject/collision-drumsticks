import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { ProductCard } from '@/components/ProductCard';
import { products } from '@/lib/seed-data';

export const metadata: Metadata = {
  title: 'Apparel',
  description: 'Heavyweight tees, hoodies, and headwear from Collision Drumsticks.',
};

export default function ApparelPage() {
  const list = products.filter((p) => p.category === 'apparel');
  return (
    <>
      <PageHero
        eyebrow="Apparel"
        title="Wear the brand."
        subtitle="Tees, hoodies, and caps in heavyweight cotton. Cut to gig in."
      />
      <section className="container-page py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {list.map((p, i) => (
            <ProductCard key={p.id} product={p} eager={i < 4} />
          ))}
        </div>
      </section>
    </>
  );
}
