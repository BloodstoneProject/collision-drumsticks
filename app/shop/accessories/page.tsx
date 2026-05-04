import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { ProductCard } from '@/components/ProductCard';
import { getProductsByCategory } from '@/lib/data';

export const revalidate = 600;
export const metadata: Metadata = {
  title: 'Accessories',
  description: 'Stick bags, practice pads, drum keys, and grip aids from Collision.',
};

export default async function AccessoriesPage() {
  const list = await getProductsByCategory('accessories');
  return (
    <>
      <PageHero
        eyebrow="Accessories"
        title="The kit around the kit."
        subtitle="Stick bags, practice pads, grip wax, and the small things that keep a session moving."
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
