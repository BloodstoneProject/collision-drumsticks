import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { CTABanner } from '@/components/CTABanner';
import { FAQAccordion } from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: '2B vs 5B Drumsticks - Which Should You Buy?',
  description:
    'The 2B is the metal and marching stick. The 5B is the rock and theatre stick. Side by side comparison of length, diameter, weight, and what each genre demands.',
};

const SPECS = [
  { spec: 'Length', a: '16.25 in', b: '16.00 in', diff: '0.25 in longer on 2B' },
  { spec: 'Diameter', a: '15.6 mm', b: '15.1 mm', diff: '0.5 mm thicker on 2B' },
  { spec: 'Weight', a: '64 g', b: '58 g', diff: '6 g heavier on 2B' },
  { spec: 'Tip', a: 'Acorn (wood or nylon)', b: 'Acorn (wood or nylon)', diff: 'Identical' },
  { spec: 'Best for', a: 'Metal, hard rock, marching, practice', b: 'Rock, alt rock, theatre, fuller pop' },
  { spec: 'Bias', a: 'Maximum volume and durability', b: 'Volume with control' },
  { spec: 'Hand size', a: 'Average to large', b: 'Any (better with average to large)' },
  { spec: 'Stick life', a: 'Longest (heavier wood, denser fibres)', b: 'Longer than 5A, shorter than 2B' },
];

const PICK = [
  {
    label: 'Pick the 2B if',
    bullets: [
      'You play metal or hard rock professionally',
      'You play marching snare in school, corps, or pipe band',
      'You compete with two distorted guitars and a bass cab',
      'You break 5B sticks in under three gigs',
      'You want maximum durability over speed or finesse',
    ],
    href: '/product/2b-drumsticks',
    cta: 'Shop the 2B',
  },
  {
    label: 'Pick the 5B if',
    bullets: [
      'You play rock, alt rock, indie at full volume',
      'You play theatre or musicals',
      'You play modern country radio or stadium country',
      'You play big band or function with horn sections',
      'You want power without giving up speed',
    ],
    href: '/product/5b-drumsticks',
    cta: 'Shop the 5B',
  },
];

const FAQ = [
  {
    id: '2b5b-faq-1',
    question: 'How big is the difference between a 2B and a 5B?',
    answer:
      '6 grams in weight, 0.5 mm in diameter, a quarter inch in length. In the hand the difference is more pronounced than the numbers suggest because the 2B feels noticeably club like compared to the 5B. Drummers who play 5B comfortably often find the 2B fatiguing on long gigs. Drummers who play 2B comfortably find the 5B whippy and fast.',
    category: 'products' as const,
    sort_order: 1,
  },
  {
    id: '2b5b-faq-2',
    question: 'Do I need a 2B for metal or will a 5B work?',
    answer:
      'A 5B will work for moderate metal — the slower, groovier end (early Tool, Mastodon, Gojira ballads). Faster metal with double bass, blast beats, and constant rim shots wears the 5B out fast. For modern metal as a working drummer, the 2B nylon tip is the standard and the survival rate is meaningfully better. See drumsticks for metal for the full breakdown.',
    category: 'products' as const,
    sort_order: 2,
  },
  {
    id: '2b5b-faq-3',
    question: 'Is a 2B too heavy for everyday gigs?',
    answer:
      'For most working drummers, yes. A 2B in a pop or function context is overkill — it produces more volume than the room needs and fatigues your wrists faster than a 5B would over a four hour set. The 5B is the heaviest stick most drummers play day to day. Reserve the 2B for the gigs that genuinely need it.',
    category: 'products' as const,
    sort_order: 3,
  },
  {
    id: '2b5b-faq-4',
    question: 'Which lasts longer, 2B or 5B?',
    answer:
      'The 2B, by a real margin. The thicker shaft has more wood to absorb impact, the heavier mass means each strike requires less force to project, and the longer length puts the rim shot contact point further from the most fragile section. A 2B wood tip in metal lasts roughly 1.5x as long as a 5B in the same context.',
    category: 'products' as const,
    sort_order: 4,
  },
  {
    id: '2b5b-faq-5',
    question: 'Are 2B drumsticks good for practice?',
    answer:
      'There is an old school argument for practising on 2B to build wrist strength. Modern pedagogy has mostly moved away from this — the heavier stick teaches force based playing rather than rebound based playing, and the technique transfer to a 5A or 5B is poor. Practise on the stick you actually play. The 2B is for marching, metal, and the gigs that demand it, not as a strength training tool.',
    category: 'products' as const,
    sort_order: 5,
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Compare"
        title="2B vs 5B."
        subtitle="Both heavy sticks, both serious tools. The 2B is for metal and marching. The 5B is for rock and theatre. Pick the one that matches the loudest gig you regularly play."
      />

      <section className="container-page py-16 md:py-20">
        <div className="overflow-x-auto bg-bone border border-line">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-line text-xs uppercase tracking-[0.18em] text-mute">
                <th className="py-4 px-6 font-semibold">Spec</th>
                <th className="py-4 px-6 font-semibold">2B</th>
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
              Five questions every drummer asks when choosing between 2B and 5B.
            </h2>
            <p className="mt-4 text-mute text-pretty">
              Compare the lighter end of the spectrum on{' '}
              <Link href="/compare/5a-vs-5b" className="link-anim">5A vs 5B</Link>. Or read about{' '}
              <Link href="/drumsticks-for-metal" className="link-anim">drumsticks for metal</Link>{' '}
              for the 2B genre context.
            </p>
          </div>
          <div className="lg:col-span-8">
            <FAQAccordion items={FAQ} />
          </div>
        </div>
      </section>

      <CTABanner
        eyebrow="Two heavy sticks"
        title="Pick the right tool for the gig."
        body="If your loudest regular gig is rock, the 5B. If it is metal or marching, the 2B. Take the quiz if you are unsure."
        primaryCta={{ label: 'Stick finder quiz', href: '/stick-finder' }}
        secondaryCta={{ label: 'Drumstick sizes explained', href: '/drumstick-sizes-explained' }}
      />
    </>
  );
}
