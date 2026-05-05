import type { Metadata } from 'next';
import Image from 'next/image';
import { PageHero } from '@/components/PageHero';
import { CTABanner } from '@/components/CTABanner';
import { FAQAccordion } from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'How We Make Our Drumsticks',
  description:
    'From a 60 foot tree in Tennessee to a stick in your hand. The full Collision Drumsticks manufacturing process: wood sourcing, turning, weight matching, finishing.',
};

const STEPS = [
  {
    n: '01',
    title: 'Sourcing',
    body: 'Every Collision stick starts as a slab of grade A American Hickory in Tennessee. We have used the same supplier since 2018 so we know which forest each shipment came from.',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=1600&auto=format&fit=crop&q=80',
  },
  {
    n: '02',
    title: 'Cutting',
    body: 'Slabs are cut into 18 inch billets and sorted by grain pattern. Anything with a visible knot or cross grain is rejected. We reject 35% of incoming wood. It does not enter our line.',
    image: 'https://images.unsplash.com/photo-1611464908623-07b2bcb2080b?w=1600&auto=format&fit=crop&q=80',
  },
  {
    n: '03',
    title: 'Turning',
    body: 'Billets are CNC turned to a rough shape, then handed to a final finish operator who takes them to size (diameter, taper, and tip) by hand on a precision lathe.',
    image: 'https://images.unsplash.com/photo-1581782906856-a37f78ddca56?w=1600&auto=format&fit=crop&q=80',
  },
  {
    n: '04',
    title: 'Weight matching',
    body: 'Every stick is individually weighed. Pairs are matched to within 1 gram on a calibrated digital scale. We then pitch test on a steel block. If the pair does not ring at the same pitch we re match.',
    image: 'https://fqgrunquyoseksvrpvsg.supabase.co/storage/v1/object/public/product-images/6c34eba613c0.jpg',
  },
  {
    n: '05',
    title: 'Finishing',
    body: 'Natural sticks get an oil finish. Stealth Black sticks get three thin matte coats, baked between layers. Custom sticks are laser engraved at this stage, up to 4cm by 1.5cm.',
    image: 'https://fqgrunquyoseksvrpvsg.supabase.co/storage/v1/object/public/product-images/5eb743dbe667.png',
  },
  {
    n: '06',
    title: 'Quality control',
    body: 'Every pair is hand inspected, bend tested, and bagged. Pairs that fail any check go in the reject bin. There is no second tier line.',
    image: 'https://fqgrunquyoseksvrpvsg.supabase.co/storage/v1/object/public/product-images/3994dda808d6.jpg',
  },
];

const MATERIALS = [
  {
    label: 'American Hickory',
    spec: 'Carya tomentosa, Tennessee',
    body: 'Bright, hard, dense, dries straight. The industry default for a reason. We use grade A only, the top 2% of the supplier output by visual and density grade.',
  },
  {
    label: 'Kiln dried',
    spec: '10% to 12% moisture',
    body: 'Wood arrives kiln dried in Tennessee then climate held in our Newcastle store room. Moisture content is checked on every pallet before billets are cut.',
  },
  {
    label: 'Oil finish (Natural)',
    spec: 'Food safe linseed blend',
    body: 'Two coats applied by hand, buffed between coats. No varnish, no plastic, the wood breathes through the finish.',
  },
  {
    label: 'Matte coat (Stealth Black)',
    spec: 'Three layers, baked',
    body: 'Water based pigment, baked at 65 degrees between coats. Slightly tackier than Natural, holds well in sweaty hands.',
  },
];

const STATS = [
  { stat: '35%', label: 'Wood rejected', body: 'Of every Tennessee shipment that arrives at the workshop. Knots, cross grain, density faults, all out before turning.' },
  { stat: '1g', label: 'Pair tolerance', body: 'Maximum weight difference between the two sticks in any pair we ship. The industry default is closer to 4g.' },
  { stat: '14 min', label: 'Per pair', body: 'Average hands on time per pair across the full process from billet to packed box. Bulk runs are slightly faster, custom is slower.' },
  { stat: '2 of 7', label: 'In stock always', body: 'Of the seven base models, the 5A and 5B are always in stock to ship same day. The other five are on a 48 to 72 hour rotating lead time.' },
];

const COMPARISON = [
  { factor: 'Wood grade', us: 'Grade A American Hickory only, 35% rejected', them: 'Mixed grade, often Asian Hickory or maple substitution' },
  { factor: 'Weight match', us: '1g tolerance, calibrated scale, every pair', them: '3g to 5g tolerance, batch sampled' },
  { factor: 'Finish', us: 'Hand applied oil or 3 coat baked matte', them: 'Spray booth automated, single coat' },
  { factor: 'QC', us: 'Hand inspected and pitch tested per pair', them: 'Visual sample inspection per case' },
  { factor: 'Provenance', us: 'Single Tennessee supplier since 2018', them: 'Mixed supplier rotation, often unstated' },
  { factor: 'Made in', us: 'Newcastle, UK', them: 'China or Taiwan, shipped to UK' },
];

const PROCESS_FAQ = [
  {
    id: 'proc-faq-1',
    question: 'Why grade A hickory and not maple or oak?',
    answer:
      'Hickory is harder, denser, and more shock absorbent than maple, which is why it survives a tour. Oak is harder still but too heavy for most playing and the grain is less consistent. Maple players exist (lighter feel, brighter cymbal note) but the volume of demand does not justify a separate line.',
    category: 'products' as const,
    sort_order: 100,
  },
  {
    id: 'proc-faq-2',
    question: 'How long does the full process take, billet to box?',
    answer:
      'Average is 14 minutes of hands on time per pair across all six stages. Most of that is in turning and finishing. Total elapsed time is closer to 4 days because of the rest periods between turning, finishing, and final QC, and the cure time on Stealth Black between coats.',
    category: 'products' as const,
    sort_order: 101,
  },
  {
    id: 'proc-faq-3',
    question: 'What happens to the rejected wood?',
    answer:
      'Most goes to a Newcastle furniture maker who turns it into chair components and small homewares. The unusable scraps go to a local pizza oven for fuel. We send roughly 4kg of hickory shavings a week to a guitar luthier for fretboard inlay work. Nothing goes to landfill.',
    category: 'products' as const,
    sort_order: 102,
  },
  {
    id: 'proc-faq-4',
    question: 'Is the pitch test actually different from weight matching?',
    answer:
      'Yes. Two sticks can weigh the same and ring at different pitches if the density is unevenly distributed. The pitch test catches that. We hold each stick at the balance point and tap on a steel block. If the fundamentals do not match within a quarter tone, we re match the pair.',
    category: 'products' as const,
    sort_order: 103,
  },
  {
    id: 'proc-faq-5',
    question: 'How much does the wood actually cost vs the labour?',
    answer:
      'Roughly 30% wood, 55% labour and overhead, 15% finish and packaging on a Natural pair. Stealth Black tilts to about 25% wood, 50% labour, 25% finish (the baking step is energy intensive). Custom shifts again because of the engraving setup time per design.',
    category: 'products' as const,
    sort_order: 104,
  },
  {
    id: 'proc-faq-6',
    question: 'Are the sticks vegan and food safe?',
    answer:
      'Yes to both. The oil finish on Natural is a food safe linseed blend. The matte coat on Stealth Black is water based and contains no animal derivatives. The brand iron uses no inks or dyes, the logo is a heat mark on the wood itself.',
    category: 'products' as const,
    sort_order: 105,
  },
  {
    id: 'proc-faq-7',
    question: 'Do you do limited runs or one off prototypes?',
    answer:
      'Yes. Most artist signature lines start as a one off prototype that goes through three or four spec changes before we commit to production. We also run roughly two limited drops a year for Backstage members, usually a colour or finish that does not stay in the lineup.',
    category: 'products' as const,
    sort_order: 106,
  },
];

export default function HowWeMakePage() {
  return (
    <>
      <PageHero
        eyebrow="Behind the scenes"
        title="From seed to stick."
        subtitle="Six steps. Months of iteration. The most weight consistent drumsticks on the market."
      />

      <div className="container-page py-12 md:py-16 max-w-4xl">
        <p className="text-mute text-pretty leading-relaxed text-lg">
          We get asked the same question constantly: why are Collision sticks more consistent than
          the big brands? The honest answer is that we make them slower. Below is exactly how it
          happens.
        </p>
      </div>

      {STEPS.map((step, i) => (
        <section
          key={step.n}
          className={`reveal ${i % 2 === 1 ? 'bg-cream' : ''} py-16 md:py-20`}
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

      <section className="reveal grain bg-ink text-bone">
        <div className="container-page py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="eyebrow !text-bone/60 mb-3">By the numbers</p>
            <h2 className="font-display heading-md text-balance">
              Four stats from the workshop floor.
            </h2>
            <p className="mt-4 text-bone/70 text-pretty max-w-2xl">
              Pulled from the production log over the last six months. We re publish these every
              quarter. If a number drifts the wrong direction, we say so.
            </p>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-bone/10">
            {STATS.map((s) => (
              <div key={s.label} className="bg-ink p-6">
                <p className="font-display text-5xl text-crimson">{s.stat}</p>
                <p className="mt-2 eyebrow">{s.label}</p>
                <p className="mt-3 text-sm text-bone/70 text-pretty">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="reveal container-page py-16 md:py-24">
        <div className="max-w-3xl">
          <p className="eyebrow mb-3">Materials</p>
          <h2 className="font-display heading-md text-balance">
            Four inputs. Nothing else goes into a Collision stick.
          </h2>
          <p className="mt-4 text-mute text-pretty max-w-2xl">
            We do not use plastic dip coatings, painted bands, or printed logos that wear off.
            What goes into a stick is what comes out the other side.
          </p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MATERIALS.map((m) => (
            <div key={m.label} className="border border-line p-6">
              <p className="font-display text-xl">{m.label}</p>
              <p className="eyebrow text-crimson mt-1">{m.spec}</p>
              <p className="mt-3 text-sm text-mute text-pretty leading-relaxed">{m.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="reveal bg-cream">
        <div className="container-page py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="eyebrow mb-3">Vs imported brands</p>
            <h2 className="font-display heading-md text-balance">
              Six honest points of difference.
            </h2>
            <p className="mt-4 text-mute text-pretty max-w-2xl">
              We are not naming brands but if you played a 5A from a major in the last three years
              you can fill in the right column yourself.
            </p>
          </div>
          <div className="mt-10 overflow-x-auto bg-bone border border-line">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-line text-xs uppercase tracking-[0.18em] text-mute">
                  <th className="py-4 px-6 font-semibold">Factor</th>
                  <th className="py-4 px-6 font-semibold text-crimson">Collision</th>
                  <th className="py-4 px-6 font-semibold">Typical imported brand</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((c) => (
                  <tr key={c.factor} className="border-b border-line align-top">
                    <td className="py-5 px-6 font-display text-lg leading-tight">{c.factor}</td>
                    <td className="py-5 px-6 text-sm text-ink-soft text-pretty">{c.us}</td>
                    <td className="py-5 px-6 text-sm text-mute text-pretty">{c.them}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="reveal container-page py-16 md:py-20 border-t border-line">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <p className="eyebrow mb-3">Process FAQ</p>
            <h2 className="font-display heading-md text-balance">
              The seven manufacturing questions we get most.
            </h2>
          </div>
          <div className="lg:col-span-8">
            <FAQAccordion items={PROCESS_FAQ} />
          </div>
        </div>
      </section>

      <CTABanner
        eyebrow="Now in your hands"
        title="Try the sticks the right way."
        primaryCta={{ label: 'Take the quiz', href: '/stick-finder' }}
        secondaryCta={{ label: 'Shop drumsticks', href: '/shop/drumsticks' }}
      />
    </>
  );
}
