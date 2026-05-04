import type { Metadata } from 'next';
import Image from 'next/image';
import { PageHero } from '@/components/PageHero';
import { CTABanner } from '@/components/CTABanner';

export const metadata: Metadata = {
  title: 'How We Make Our Drumsticks',
  description:
    'From a 60-foot tree in Tennessee to a stick in your hand. The full Collision Drumsticks manufacturing process — wood sourcing, turning, weight-matching, finishing.',
};

const STEPS = [
  {
    n: '01',
    title: 'Sourcing',
    body: 'Every Collision stick starts as a slab of grade-A American Hickory in Tennessee. We have used the same supplier since 2018 — we know which forest each shipment came from.',
    image: 'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=1600&auto=format&fit=crop&q=80',
  },
  {
    n: '02',
    title: 'Cutting',
    body: 'Slabs are cut into 18" billets, sorted by grain pattern. Anything with a visible knot or cross-grain is rejected. We reject 35% of incoming wood — it does not enter our line.',
    image: 'https://images.unsplash.com/photo-1473874964585-cd2841d92e88?w=1600&auto=format&fit=crop&q=80',
  },
  {
    n: '03',
    title: 'Turning',
    body: 'Billets are CNC-turned to a rough shape, then handed to a final-finish operator who takes them to size — diameter, taper, and tip — by hand on a precision lathe.',
    image: 'https://images.unsplash.com/photo-1541888894090-8a3a8158d3e1?w=1600&auto=format&fit=crop&q=80',
  },
  {
    n: '04',
    title: 'Weight matching',
    body: 'Every stick is individually weighed. Pairs are matched to within ±1 gram. We then pitch-test on a steel block — if the pair does not ring at the same pitch, we re-match.',
    image: 'https://images.unsplash.com/photo-1564544193800-635aaad7a8d3?w=1600&auto=format&fit=crop&q=80',
  },
  {
    n: '05',
    title: 'Finishing',
    body: 'Natural sticks get an oil finish. Stealth Black sticks get three thin matte coats, baked between layers. Custom sticks are laser-engraved at this stage — up to 4cm × 1.5cm.',
    image: 'https://images.unsplash.com/photo-1571974599782-87624638275a?w=1600&auto=format&fit=crop&q=80',
  },
  {
    n: '06',
    title: 'Quality control',
    body: 'Every pair is hand-inspected, bend-tested, and bagged. Pairs that fail any check go in the reject bin — there is no second-tier line.',
    image: 'https://images.unsplash.com/photo-1606127195898-1cdaf3d5db8a?w=1600&auto=format&fit=crop&q=80',
  },
];

export default function HowWeMakePage() {
  return (
    <>
      <PageHero
        eyebrow="Behind the Scenes"
        title="From seed to stick."
        subtitle="Six steps. Months of iteration. The most weight-consistent drumsticks on the market."
      />
      <div className="container-page py-12 md:py-16 max-w-4xl">
        <p className="text-mute text-pretty leading-relaxed text-lg">
          We get asked the same question constantly: why are Collision sticks more consistent than the
          big brands? The honest answer is that we make them slower. Below is exactly how it happens.
        </p>
      </div>

      {STEPS.map((step, i) => (
        <section
          key={step.n}
          className={`${i % 2 === 1 ? 'bg-cream' : ''} py-16 md:py-20`}
        >
          <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
            <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
              <div className="relative aspect-[4/3] bg-bone border border-line">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <p className="font-display text-7xl text-stone">{step.n}</p>
              <h2 className="font-display heading-md mt-2 text-balance">{step.title}</h2>
              <p className="mt-4 text-mute text-pretty leading-relaxed">{step.body}</p>
            </div>
          </div>
        </section>
      ))}

      <CTABanner
        eyebrow="Now in Your Hands"
        title="Try the sticks the right way."
        primaryCta={{ label: 'Take the Quiz', href: '/stick-finder' }}
        secondaryCta={{ label: 'Shop Drumsticks', href: '/shop/drumsticks' }}
      />
    </>
  );
}
