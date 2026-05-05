import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { ProductCard } from '@/components/ProductCard';
import { CTABanner } from '@/components/CTABanner';
import { getProductsByCategory } from '@/lib/data';

export const revalidate = 600;
export const metadata: Metadata = {
  title: 'Accessories',
  description:
    'Stick bags, practice pads, drum keys, grip wax, and the small things that keep a session moving. Built around the kit, not bolted on.',
};

const USE_CASES = [
  {
    title: 'Stick bags',
    body: 'Heavyweight canvas with a felt lined main pocket and three quick draw side slots. Hangs off a floor tom hoop with the magnetic clip.',
  },
  {
    title: 'Practice pads',
    body: 'Two surfaces (gum rubber and a quieter neoprene) on a screw together hub. 6 inch and 12 inch sizes. Threads onto any standard snare stand.',
  },
  {
    title: 'Drum keys',
    body: 'CNC machined steel, knurled grip, magnetic. The one that does not get lost. Comes with a leather lanyard and a clip for your kit case.',
  },
  {
    title: 'Grip wax & rosin',
    body: 'Beeswax based grip stick for sweaty hands and outdoor gigs. Rosin block for the smaller hand size 7A players. Both fit in the bag side pocket.',
  },
];

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

      <section className="bg-cream">
        <div className="container-page py-16 md:py-20">
          <div className="max-w-3xl">
            <p className="eyebrow mb-3">Built around the kit</p>
            <h2 className="font-display heading-md text-balance">
              Four categories. Everything we make is something Carlton uses.
            </h2>
            <p className="mt-4 text-mute text-pretty max-w-2xl">
              We do not stock white labelled accessories. Every item below was designed and tested
              in the workshop because the existing options were not good enough.
            </p>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {USE_CASES.map((u) => (
              <div key={u.title} className="border-t border-ink pt-5">
                <p className="font-display text-xl">{u.title}</p>
                <p className="mt-2 text-sm text-mute text-pretty leading-relaxed">{u.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        eyebrow="The full lineup"
        title="Sticks plus accessories together hit free shipping."
        body="Most accessory orders combined with a single pair of sticks clear the £49 threshold."
        primaryCta={{ label: 'Browse drumsticks', href: '/shop/drumsticks' }}
        secondaryCta={{ label: 'See bundles', href: '/shop/bundles' }}
      />
    </>
  );
}
