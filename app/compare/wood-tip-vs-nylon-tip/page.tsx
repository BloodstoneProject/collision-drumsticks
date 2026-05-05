import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { CTABanner } from '@/components/CTABanner';
import { FAQAccordion } from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Wood Tip vs Nylon Tip Drumsticks - Which to Buy?',
  description:
    'Side by side: wood tip vs nylon tip drumsticks. Cymbal tone, durability, feel, price, and the genres each tip suits best. Available on every Collision SKU.',
};

const SPECS = [
  { spec: 'Cymbal tone', wood: 'Warmer, woodier, darker', nylon: 'Brighter, more articulate, glassier' },
  { spec: 'Cymbal life', wood: 'Standard wear from chipping', nylon: '30 to 40% longer than wood' },
  { spec: 'Articulation', wood: 'Smoother attack', nylon: 'Sharper, more defined attack' },
  { spec: 'Volume cut through mix', wood: 'Standard', nylon: 'Slightly more cut at high volume' },
  { spec: 'Durability of tip itself', wood: 'Chips on rim shots and thick cymbals', nylon: 'Survives rim shots, occasional pop off' },
  { spec: 'Price', wood: 'Standard', nylon: '+£0.50 to £1 per pair' },
  { spec: 'Available on', wood: 'Every Collision model', nylon: 'Every Collision model' },
  { spec: 'Best for', wood: 'Jazz, indie, studio, beginners', nylon: 'Rock, metal, marching, loud live' },
];

const PICK = [
  {
    label: 'Pick wood tip if',
    bullets: [
      'You play jazz, indie, pop, or session work',
      'You record in a studio',
      'You are a beginner or intermediate',
      'You prefer a warmer, more traditional ride sound',
      'You play thinner cymbals or coated heads mostly',
    ],
    href: '/shop/drumsticks?subcategory=wood-tip',
    cta: 'Browse wood tip',
  },
  {
    label: 'Pick nylon tip if',
    bullets: [
      'You play rock, metal, or louder live',
      'You play heavier B20 cymbals',
      'You go through wood tips faster than you would like',
      'You want sharper articulation that cuts through guitars',
      'You play marching, percussion, or outdoor gigs',
    ],
    href: '/shop/drumsticks?subcategory=nylon-tip',
    cta: 'Browse nylon tip',
  },
];

const FAQ = [
  {
    id: 'wn-faq-1',
    question: 'Will the nylon tip really last 30 to 40% longer?',
    answer:
      'Yes, on cymbals specifically. The nylon tip does not chip the way wood does on the edge of a thick cymbal or on a rim shot. The shaft of the stick wears at the same rate either way, the difference is purely the tip itself. If your sticks are dying because the tips are chipping, switch to nylon. If they are dying because the shaft fractures, the tip type makes no difference.',
    category: 'products' as const,
    sort_order: 1,
  },
  {
    id: 'wn-faq-2',
    question: 'Is the cymbal tone difference real or marketing?',
    answer:
      'Real, but subtle in most rooms. The difference is most audible on a ride cymbal in a quiet acoustic setting. In a loud band mix the tone difference is largely lost in the wash. The articulation difference (sharper attack with nylon) is more noticeable than the tone shift in most situations.',
    category: 'products' as const,
    sort_order: 2,
  },
  {
    id: 'wn-faq-3',
    question: 'Do nylon tips really pop off?',
    answer:
      'Occasionally, in extreme heat or after thousands of strikes. Modern nylon tip construction (which is what we use) bonds the nylon to the wood with a heat fused joint that has been the industry standard since the late 1990s. We have shipped over 100,000 nylon tip pairs and seen fewer than 30 reports of tip separation. Replaced free of charge if it ever happens.',
    category: 'products' as const,
    sort_order: 3,
  },
  {
    id: 'wn-faq-4',
    question: 'Can I switch mid set or mid song?',
    answer:
      'Plenty of touring drummers do, especially if a song moves from a quieter intro to a louder section. Most just stick (no pun) with one for the night for consistency. The weight and balance of a wood tip and nylon tip stick of the same model are within 1 gram so the swap is seamless.',
    category: 'products' as const,
    sort_order: 4,
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Compare"
        title="Wood tip vs nylon tip."
        subtitle="The other big question on every Collision SKU. Wood for warmth, nylon for cut and durability."
      />

      <section className="container-page py-16 md:py-20">
        <div className="overflow-x-auto bg-bone border border-line">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-line text-xs uppercase tracking-[0.18em] text-mute">
                <th className="py-4 px-6 font-semibold">Spec</th>
                <th className="py-4 px-6 font-semibold">Wood tip</th>
                <th className="py-4 px-6 font-semibold">Nylon tip</th>
              </tr>
            </thead>
            <tbody>
              {SPECS.map((s) => (
                <tr key={s.spec} className="border-b border-line align-top">
                  <td className="py-5 px-6 font-display text-lg leading-tight">{s.spec}</td>
                  <td className="py-5 px-6 text-sm text-pretty">{s.wood}</td>
                  <td className="py-5 px-6 text-sm text-pretty">{s.nylon}</td>
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
            <p className="eyebrow mb-3">Tip type FAQ</p>
            <h2 className="font-display heading-md text-balance">
              Four questions every customer asks before they choose.
            </h2>
            <p className="mt-4 text-mute text-pretty">
              For more genre specific guidance, see{' '}
              <Link href="/drumsticks-for-jazz" className="link-anim">
                jazz
              </Link>
              ,{' '}
              <Link href="/drumsticks-for-rock" className="link-anim">
                rock
              </Link>
              , or{' '}
              <Link href="/drumsticks-for-metal" className="link-anim">
                metal
              </Link>{' '}
              recommendations. For finish, see{' '}
              <Link href="/compare/natural-vs-stealth-black" className="link-anim">
                Natural vs Stealth Black
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
        eyebrow="Still unsure"
        title="Take the 60 second stick finder."
        body="The quiz factors in tip preference along with genre, hand size, and venue."
        primaryCta={{ label: 'Take the quiz', href: '/stick-finder' }}
        secondaryCta={{ label: 'See the full lineup', href: '/shop/drumsticks' }}
      />
    </>
  );
}
