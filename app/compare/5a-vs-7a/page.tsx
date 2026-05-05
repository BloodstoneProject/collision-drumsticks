import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { CTABanner } from '@/components/CTABanner';
import { FAQAccordion } from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: '5A vs 7A Drumsticks - Which Should You Buy?',
  description:
    'Side by side comparison of the Collision 5A and 7A. Length, diameter, weight, feel, and which genre each suits. From £13.50 a pair, free UK shipping over £49.',
};

const SPECS = [
  { spec: 'Length', a: '16.00 in', b: '13.97 in', diff: 'Standard 5A is 2 inches longer' },
  { spec: 'Diameter', a: '14.4 mm', b: '13.7 mm', diff: '0.7 mm thicker on 5A' },
  { spec: 'Weight', a: '52 g', b: '46 g', diff: '6 g heavier on 5A' },
  { spec: 'Tip', a: 'Acorn (wood or nylon)', b: 'Acorn (wood or nylon)', diff: 'Identical tip' },
  { spec: 'Best for', a: 'Pop, indie, function, recording, all round', b: 'Jazz, brushwork, low volume gigs, smaller hands' },
  { spec: 'Bias', a: 'Volume and durability', b: 'Speed and finesse' },
  { spec: 'Hand size', a: 'Any', b: 'Better in smaller hands' },
  { spec: 'Price', a: 'From £13.50', b: 'From £13.50' },
];

const PICK = [
  {
    label: 'Pick the 5A if',
    bullets: [
      'You play across multiple genres (pop, indie, function)',
      'You gig with a band that has guitars and keyboards',
      'You record in studios at moderate volume',
      'You have average to large hands',
      'You are buying your first pair from us',
    ],
    href: '/product/5a-drumsticks',
    cta: 'Shop the 5A',
  },
  {
    label: 'Pick the 7A if',
    bullets: [
      'You play jazz, bebop, or trad jazz',
      'You use brushes regularly during sets',
      'You play low volume gigs (cafes, hotels, dinner)',
      'You have smaller hands or your wrists fatigue easily',
      'You play a Roland or Alesis e-kit at home',
    ],
    href: '/product/7a-drumsticks',
    cta: 'Shop the 7A',
  },
];

const FAQ = [
  {
    id: '5a7a-faq-1',
    question: 'How big is the difference between a 5A and a 7A?',
    answer:
      '6 grams in weight, 0.7 mm in diameter, 2 inches in length. In the hand it is a noticeable step. The 7A feels distinctly faster and lighter than the 5A. The 5A feels more grounded and produces more volume on the same stroke. This is the second most asked comparison after 5A vs 5B.',
    category: 'products' as const,
    sort_order: 1,
  },
  {
    id: '5a7a-faq-2',
    question: 'Is a 7A a good first drumstick for a beginner?',
    answer:
      'For most adult beginners, no — the 5A is the better starting point because it transfers to any kit you sit down at. For children aged 7 to 13, the 7A is the right starting size because it suits smaller hands. For adults specifically learning jazz, the 7A is correct because it is the genre standard.',
    category: 'products' as const,
    sort_order: 2,
  },
  {
    id: '5a7a-faq-3',
    question: 'Can I use a 7A for rock or pop gigs?',
    answer:
      'You can. Many drummers do, especially in indie and singer songwriter contexts where the kit is dialed back. The trade off is volume and projection. A 7A behind a loud rhythm section will struggle to be felt in the room without your dynamics being uncomfortably high. If your band runs guitar amps above 60 watts, default to a 5A.',
    category: 'products' as const,
    sort_order: 3,
  },
  {
    id: '5a7a-faq-4',
    question: 'Which lasts longer, 5A or 7A?',
    answer:
      'The 5A, by a small margin. The thicker shaft and slightly heavier mass distribute impact across more wood, which delays the cracking and splintering that ends most sticks. In genres where the 7A is appropriate (jazz, low volume) the lifespan difference is small because rim shots are rare. In genres where you would push a 7A beyond its design (heavy pop, soft rock), the 7A breaks much faster.',
    category: 'products' as const,
    sort_order: 4,
  },
  {
    id: '5a7a-faq-5',
    question: 'Do session drummers use 7A?',
    answer:
      'Some, in specific contexts. Jazz session players, drum and bass writers cutting acoustic kit demos, indie folk records, and any session at low volume where the engineer wants warmth over articulation. For most pop and rock session work, the 5A remains standard. Many working session drummers keep both pairs in the kit bag.',
    category: 'products' as const,
    sort_order: 5,
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Compare"
        title="5A vs 7A."
        subtitle="The two ends of the everyday drumstick spectrum. The short answer: 5A for everything modern, 7A for jazz and finesse work."
      />

      <section className="container-page py-16 md:py-20">
        <div className="overflow-x-auto bg-bone border border-line">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-line text-xs uppercase tracking-[0.18em] text-mute">
                <th className="py-4 px-6 font-semibold">Spec</th>
                <th className="py-4 px-6 font-semibold">5A</th>
                <th className="py-4 px-6 font-semibold">7A</th>
                <th className="py-4 px-6 font-semibold">Difference</th>
              </tr>
            </thead>
            <tbody>
              {SPECS.map((s) => (
                <tr key={s.spec} className="border-b border-line align-top">
                  <td className="py-5 px-6 font-display text-lg leading-tight">{s.spec}</td>
                  <td className="py-5 px-6 text-sm">{s.a}</td>
                  <td className="py-5 px-6 text-sm">{s.b}</td>
                  <td className="py-5 px-6 text-sm text-crimson font-semibold text-pretty">{s.diff}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="bg-cream">
        <div className="container-page py-16 md:py-20">
          <div className="grid md:grid-cols-2 gap-6">
            {PICK.map((p) => (
              <div key={p.label} className="bg-bone border border-line p-7 flex flex-col">
                <p className="eyebrow text-crimson">{p.label}</p>
                <ul className="mt-5 space-y-2 text-sm flex-1">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="text-crimson">✓</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <Link href={p.href} className="btn-primary mt-7 w-full">
                  {p.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16 md:py-20 border-t border-line">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <p className="eyebrow mb-3">Comparison FAQ</p>
            <h2 className="font-display heading-md text-balance">
              Five questions every customer asks when choosing between 5A and 7A.
            </h2>
            <p className="mt-4 text-mute text-pretty">
              Want both? See the{' '}
              <Link href="/shop/bundles" className="link-anim">Explorer Pack</Link> bundle, which
              includes 5A, 7A, and 5B in one pack. Or compare{' '}
              <Link href="/compare/5a-vs-5b" className="link-anim">5A vs 5B</Link>.
            </p>
          </div>
          <div className="lg:col-span-8">
            <FAQAccordion items={FAQ} />
          </div>
        </div>
      </section>

      <CTABanner
        eyebrow="Try both"
        title="Explorer Pack: 5A, 7A, and 5B in one bundle."
        body="The cheapest way to find your stick. Three pairs, free UK shipping over £49."
        primaryCta={{ label: 'Buy Explorer Pack', href: '/shop/bundles' }}
        secondaryCta={{ label: 'Take the quiz instead', href: '/stick-finder' }}
      />
    </>
  );
}
