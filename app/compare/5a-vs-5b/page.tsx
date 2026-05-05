import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { CTABanner } from '@/components/CTABanner';
import { FAQAccordion } from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: '5A vs 5B Drumsticks - Which Should You Buy?',
  description:
    'Side by side comparison of the Collision 5A and 5B. Length, diameter, weight, feel, and the genre each suits best. From £13.50 a pair, free UK shipping over £49.',
};

const SPECS = [
  { spec: 'Length', a: '16.00 in', b: '16.00 in', diff: 'Identical' },
  { spec: 'Diameter', a: '14.4 mm', b: '15.1 mm', diff: '0.7 mm thicker on 5B' },
  { spec: 'Weight', a: '52 g', b: '58 g', diff: '6 g heavier on 5B' },
  { spec: 'Tip', a: 'Acorn (wood or nylon)', b: 'Acorn (wood or nylon)', diff: 'Identical' },
  { spec: 'Best for', a: 'All round, pop, light rock, indie', b: 'Rock, alt rock, fuller pop, theatre' },
  { spec: 'Bias', a: 'Speed and finesse', b: 'Volume and durability' },
  { spec: 'Tip life', a: 'Standard', b: 'Slightly longer (more mass)' },
  { spec: 'Hand size', a: 'Any', b: 'Better in larger hands' },
  { spec: 'Price', a: 'From £13.50', b: 'From £14.95' },
];

const PICK = [
  {
    label: 'Pick the 5A if',
    bullets: [
      'You play across multiple genres in one week',
      'You teach, gig functions, or session record',
      'You are still building stamina',
      'You play kits with thinner cymbals',
      'You are buying your first pair from us',
    ],
    href: '/product/5a-drumstick',
    cta: 'Shop the 5A',
  },
  {
    label: 'Pick the 5B if',
    bullets: [
      'You play rock, alt rock, or louder pop',
      'You compete with two distorted guitars on stage',
      'You play thicker cymbals or heavier rim shots',
      'You have larger hands and find the 5A whippy',
      'You want sticks that survive longer between replacements',
    ],
    href: '/product/5b-drumstick',
    cta: 'Shop the 5B',
  },
];

const FAQ = [
  {
    id: '5a5b-faq-1',
    question: 'How big is the difference between a 5A and a 5B?',
    answer:
      '6 grams in weight, 0.7 mm in diameter, same length. In the hand it is a noticeable but not dramatic step. If you play a 5A and want a touch more punch, the 5B is the natural step. If you play a 2B and want speed back, the 5B is also the natural step (down).',
    category: 'products' as const,
    sort_order: 1,
  },
  {
    id: '5a5b-faq-2',
    question: 'Can I just buy both and decide?',
    answer:
      'Yes, this is what we recommend to anybody on the fence. The Explorer Pack gives you a 5A, a 7A, and a 5B at a bundle price that hits free UK shipping. Play each for a week and the right answer becomes obvious.',
    category: 'products' as const,
    sort_order: 2,
  },
  {
    id: '5a5b-faq-3',
    question: 'Do session drummers prefer 5A or 5B?',
    answer:
      'Mostly 5A. Studio recording rewards the lighter, more articulate stroke and the engineer can always add weight in the mix. 5B comes out for the rock and alt rock dates specifically. Most working session drummers we ship to keep both pairs in their kit bag.',
    category: 'products' as const,
    sort_order: 3,
  },
  {
    id: '5a5b-faq-4',
    question: 'Which lasts longer, 5A or 5B?',
    answer:
      'The 5B, marginally. The thicker shaft is more resistant to fracture under heavy play, and the slightly larger tip mass takes longer to chip on cymbals. Realistically, both last about the same in normal use. The variable that matters far more is your technique on rim shots, not the stick weight.',
    category: 'products' as const,
    sort_order: 4,
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Compare"
        title="5A vs 5B."
        subtitle="The two most asked about models in the Collision lineup. The short answer: 5A for everything, 5B for rock."
      />

      <section className="container-page py-16 md:py-20">
        <div className="overflow-x-auto bg-bone border border-line">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-line text-xs uppercase tracking-[0.18em] text-mute">
                <th className="py-4 px-6 font-semibold">Spec</th>
                <th className="py-4 px-6 font-semibold">5A</th>
                <th className="py-4 px-6 font-semibold">5B</th>
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
              Four questions every customer asks when choosing.
            </h2>
            <p className="mt-4 text-mute text-pretty">
              Want a 7A in the comparison too? See the{' '}
              <Link href="/drumsticks-for-jazz" className="underline hover:text-crimson">
                drumsticks for jazz
              </Link>{' '}
              page. Want the heavier end? See{' '}
              <Link href="/drumsticks-for-rock" className="underline hover:text-crimson">
                drumsticks for rock
              </Link>{' '}
              and{' '}
              <Link href="/drumsticks-for-metal" className="underline hover:text-crimson">
                metal
              </Link>
              .
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
