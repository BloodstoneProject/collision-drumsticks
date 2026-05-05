import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { CTABanner } from '@/components/CTABanner';
import { FAQAccordion } from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'How to Choose Drumsticks - The Complete 2026 Buyer Guide',
  description:
    'A working drummers guide to choosing the right drumsticks. Size, weight, tip, wood, and the five questions that decide it. From a UK brand trusted by 10,000+ drummers.',
};

const STEPS = [
  {
    n: '01',
    title: 'Decide your size first',
    body: 'Stick numbers are not random. The lower the number, the thicker the stick. The letter (A, B, S) was originally for orchestra, band, and street use. In 2026 the four pairs every shop carries are 7A (lightest), 5A (standard), 5B (heavier), 2B (heaviest). Pick the one that matches the loudest gig you regularly play.',
  },
  {
    n: '02',
    title: 'Pick wood tip or nylon tip',
    body: 'Wood tip gives a warmer, woodier cymbal tone. Nylon tip gives a brighter, more articulate ping. Wood is the default for jazz, indie, soul, country, and recording. Nylon suits metal, fast hard rock, and live situations where the ride needs to cut through two distorted guitars.',
  },
  {
    n: '03',
    title: 'Match the wood to your hands',
    body: 'American Hickory is the standard. It is dense, rebounds well, and absorbs shock. Maple is lighter and faster but breaks sooner. Oak is heaviest and lasts longest but feels stiff. We make every Collision pair from American Hickory because it is the best compromise across all four genres.',
  },
  {
    n: '04',
    title: 'Buy two pairs, not one',
    body: 'A working drummer never carries one pair. You want a primary stick for your main genre and a backup half a step lighter or heavier for the edge cases. The Explorer Pack covers this with three pairs in one bundle.',
  },
  {
    n: '05',
    title: 'Replace before they fail',
    body: 'A stick that is dented, splintered, or cracked is a stick that will fail mid set. Inspect after every gig. A pair of Collision sticks under normal play lasts a working drummer four to eight gigs. Heavier hitters get less.',
  },
];

const QUICK = [
  { genre: 'Jazz, brushwork, finesse', stick: '7A wood', href: '/drumsticks-for-jazz' },
  { genre: 'All round, pop, indie, function', stick: '5A wood', href: '/product/5a-drumsticks' },
  { genre: 'Rock, alt rock, theatre', stick: '5B wood', href: '/drumsticks-for-rock' },
  { genre: 'Metal, hard rock', stick: '2B wood', href: '/drumsticks-for-metal' },
  { genre: 'Worship, gospel, soul', stick: '5A wood', href: '/drumsticks-for-worship' },
  { genre: 'Electronic kit (e-kit)', stick: '7A wood', href: '/drumsticks-for-electronic-drums' },
  { genre: 'Practice pad only', stick: '5A wood', href: '/drumsticks-for-practice-pad' },
  { genre: 'Marching band', stick: '2B or SD2', href: '/drumsticks-for-marching-band' },
];

const FAQ = [
  {
    id: 'choose-faq-1',
    question: 'I have never bought drumsticks before. Just tell me what to get.',
    answer:
      'Buy the 5A in American Hickory with a wood tip. It is the most played drumstick model in the world for a reason. It covers pop, indie, rock at moderate volume, function gigs, lessons, and most recording. Once you have played it for a month you will know whether to step lighter (7A) or heavier (5B). The 5A is the right starting point for 80 percent of drummers.',
    category: 'products' as const,
    sort_order: 1,
  },
  {
    id: 'choose-faq-2',
    question: 'How do I know if my drumsticks are too heavy or too light?',
    answer:
      'Too heavy: your hands fatigue inside ten minutes, your double strokes feel laboured, and your ghost notes lose definition. Too light: your stroke feels thin, your rim shots lack body, and the stick whips through the air rather than driving the head. The Goldilocks stick lets you play a full hour without wrist strain and still hits a rim shot that fills the room.',
    category: 'products' as const,
    sort_order: 2,
  },
  {
    id: 'choose-faq-3',
    question: 'Wood tip or nylon tip — does it really matter?',
    answer:
      'Yes. The tip is what touches the cymbal, so it defines the cymbal sound more than the stick weight does. Wood gives warmth, nylon gives brightness. Most drummers settle on wood. Heavy rock and metal players go nylon for the cut. The full breakdown is on the wood tip vs nylon tip page.',
    category: 'products' as const,
    sort_order: 3,
  },
  {
    id: 'choose-faq-4',
    question: 'What length should drumsticks be?',
    answer:
      'Standard 5A length is 16 inches. If you play a deep kit, sit further from the snare than usual, or have long arms, the Reach line is one inch longer (17 inches) at the same weight. Anything beyond that gets unwieldy. Anything shorter than 15 inches is junior or specialty.',
    category: 'products' as const,
    sort_order: 4,
  },
  {
    id: 'choose-faq-5',
    question: 'Do drumstick brands actually matter?',
    answer:
      'Yes, but not for the reasons most beginners think. The wood matters (American Hickory cut from the dense lower trunk lasts longer than budget shells of mixed hardwood). The pairing matters (good brands match pairs by weight and pitch within five percent). The dipping matters (a clear lacquer absorbs sweat without making the stick slippery). Cheap drumsticks fail on all three.',
    category: 'products' as const,
    sort_order: 5,
  },
  {
    id: 'choose-faq-6',
    question: 'How often should I replace my drumsticks?',
    answer:
      'When the tip is chipped, the shaft is dented, or you can hear a hairline crack when you tap them together. A typical Collision pair under normal pop or indie play lasts four to eight gigs. Heavy rock and metal players replace every two to three. Every drummer should keep a fresh pair in the bag at all times — failure mid set is avoidable.',
    category: 'products' as const,
    sort_order: 6,
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Buyer guide"
        title="How to choose your drumsticks."
        subtitle="Five steps, six FAQs, and a quick lookup by genre. Built by working drummers, written for drummers who do not have an hour to read a forum thread."
      />

      <section className="container-page py-16 md:py-20">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <p className="eyebrow mb-3">The five steps</p>
            <h2 className="font-display heading-md text-balance">
              Most drummers buy the wrong stick because they skip step one.
            </h2>
            <p className="mt-4 text-mute text-pretty">
              The size question is not about your hand size. It is about the loudest gig you
              regularly play. Get that right and the rest follows.
            </p>
          </div>
          <div className="lg:col-span-8 space-y-8">
            {STEPS.map((s) => (
              <div key={s.n} className="border-t border-line pt-6">
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-3xl text-crimson">{s.n}</span>
                  <h3 className="font-display text-xl">{s.title}</h3>
                </div>
                <p className="mt-3 text-mute text-pretty leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grain bg-ink text-bone">
        <div className="container-page py-16 md:py-20">
          <p className="eyebrow !text-bone/60 mb-3">Quick lookup</p>
          <h2 className="font-display heading-md text-balance max-w-3xl">
            What to buy, by what you play.
          </h2>
          <div className="mt-10 grid md:grid-cols-2 gap-4">
            {QUICK.map((q) => (
              <Link
                key={q.genre}
                href={q.href}
                className="bg-ink border border-bone/15 p-5 hover:border-crimson transition-colors flex items-center justify-between"
              >
                <span className="text-bone/85">{q.genre}</span>
                <span className="font-display text-lg text-crimson">{q.stick} &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16 md:py-20 border-t border-line">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <p className="eyebrow mb-3">Buyer guide FAQ</p>
            <h2 className="font-display heading-md text-balance">
              The six questions every drummer asks before buying their first serious pair.
            </h2>
            <p className="mt-4 text-mute text-pretty">
              Still unsure? Take the{' '}
              <Link href="/stick-finder" className="link-anim">
                stick finder quiz
              </Link>{' '}
              for a personalised recommendation, or compare{' '}
              <Link href="/compare/5a-vs-5b" className="link-anim">
                5A vs 5B
              </Link>{' '}
              side by side.
            </p>
          </div>
          <div className="lg:col-span-8">
            <FAQAccordion items={FAQ} />
          </div>
        </div>
      </section>

      <CTABanner
        eyebrow="Skip the reading"
        title="Take the 60-second stick finder quiz."
        body="Six questions about your kit, your genre, and your hands. We tell you which Collision pair to start with."
        primaryCta={{ label: 'Start the quiz', href: '/stick-finder' }}
        secondaryCta={{ label: 'Or browse all sticks', href: '/shop/drumsticks' }}
      />
    </>
  );
}
