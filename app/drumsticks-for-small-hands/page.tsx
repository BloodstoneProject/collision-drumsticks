import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { CTABanner } from '@/components/CTABanner';
import { FAQAccordion } from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Best Drumsticks for Small Hands - 7A American Hickory',
  description:
    'A 7A is the right starting drumstick for smaller hands. Lower diameter, lighter weight, faster rebound. Why a 5B feels wrong, and what working pro drummers with small hands actually play.',
};

const ALTERNATIVES = [
  {
    model: '5A',
    why: 'For drummers with smaller hands who play across genres or need volume. The standard size still suits smaller hands once technique is settled — many working pros with small hands play 5A.',
    href: '/product/5a-drumsticks',
  },
  {
    model: '7A Reach',
    why: 'For taller drummers with smaller hands, or anybody who wants the lighter feel of a 7A but with one inch more length to the back of the stick.',
    href: '/product/7a-reach-drumstick',
  },
];

const FAQ = [
  {
    id: 'sh-faq-1',
    question: 'Should I play a 7A if I have small hands?',
    answer:
      'For most drummers with smaller hands, yes — the 7A is the right starting point. The 13.7 mm diameter sits naturally in a smaller hand without the over reach that a 5B forces. The 46 gram weight is lighter on the wrist for long sessions. The shorter length puts the fulcrum closer to the natural pivot point of a smaller wrist. As your technique develops you may move up to a 5A — many working pros with small hands play 5A — but the 7A is the right place to start.',
    category: 'products' as const,
    sort_order: 1,
  },
  {
    id: 'sh-faq-2',
    question: 'Are heavier sticks bad for small hands?',
    answer:
      'Not bad, but harder to control. A 5B or 2B in a smaller hand creates a fulcrum problem — the back of the stick rotates more freely than the larger hand can grip, and the stroke becomes unstable at speed. You can play a 5B with small hands, and many drummers do, but only after building technique on a 5A or 7A first. Starting on a heavy stick teaches compensating habits that are hard to unlearn.',
    category: 'products' as const,
    sort_order: 2,
  },
  {
    id: 'sh-faq-3',
    question: 'Do female drummers usually play 7A?',
    answer:
      'Some, but the data is more nuanced than the assumption suggests. Female drummers with smaller hands often start on 7A and stay there if they play jazz, indie, or low volume genres. Female drummers playing rock, gospel, or function move to 5A or 5B once technique is settled — exactly the same pattern as male drummers with small hands. Hand size matters more than gender. Cindy Blackman, Sheila E, Kim Thompson, Anika Nilles all play 5A or heavier despite having smaller hands than the average male drummer.',
    category: 'products' as const,
    sort_order: 3,
  },
  {
    id: 'sh-faq-4',
    question: 'What sticks did Buddy Rich use? He had small hands.',
    answer:
      'A jazz model close to a modern 7A. Buddy Rich was famously a small handed drummer who built his technique around fast, controlled, finger driven playing — exactly what a 7A enables. The point is that small hands are not a limitation if you build technique around a stick that fits. The 7A is the modern equivalent of what Rich played in the 1950s.',
    category: 'products' as const,
    sort_order: 4,
  },
  {
    id: 'sh-faq-5',
    question: 'How do I know if my stick is too thick for my hand?',
    answer:
      'Three signs. One: the back of the stick rotates against your palm during fast single strokes, which destabilises the stroke. Two: your fingers cannot wrap fully around the shaft — the back three fingers should naturally curl around the stick without strain. Three: you fatigue inside ten minutes from gripping rather than playing. If any of these are true, drop a size. The 5A to 7A step is the most common move.',
    category: 'products' as const,
    sort_order: 5,
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Drumsticks for small hands"
        title="The 7A is the answer."
        subtitle="Lower diameter, lighter weight, faster rebound. The right starting size for drummers with smaller hands. Made in the UK from American Hickory."
      />

      <section className="container-page py-16 md:py-20">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-3">Why the 7A</p>
            <h2 className="font-display heading-md text-balance">
              The 5A is the world default, but the world has bigger hands than half of drummers.
            </h2>
            <p className="mt-5 text-mute text-pretty leading-relaxed">
              The 5A standard was set in mid 20th century America by drum manufacturers measuring
              the average male hand. Drummers with smaller hands — many female drummers, younger
              drummers, drummers with naturally narrow palms — get pushed toward a stick that does
              not actually fit them. The 7A solves the fit problem without compromising
              versatility.
            </p>
            <p className="mt-4 text-mute text-pretty leading-relaxed">
              At 13.7 mm diameter, the 7A sits naturally in a smaller hand. The fingers wrap
              fully around the shaft without strain, which means the grip pressure can stay light
              and the rebound stays usable. At 46 grams, the 7A is forgiving on the wrist over
              a four hour set.
            </p>
            <p className="mt-4 text-mute text-pretty leading-relaxed">
              Some working pros with smaller hands stay on 7A for life. Others build technique on
              7A and move to 5A once their grip is stable. Either is correct — the wrong move is
              starting on 5B because it is what your friend plays.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/product/7a-drumsticks" className="btn-accent">Shop the 7A</Link>
              <Link href="/stick-finder" className="btn-ghost">Take the stick finder quiz</Link>
            </div>
          </div>
          <div className="lg:col-span-5 bg-cream p-7 lg:sticky lg:top-24 self-start">
            <p className="eyebrow text-crimson">Recommendation</p>
            <p className="mt-3 font-display text-5xl">7A</p>
            <p className="text-sm text-mute mt-2">Wood tip, Natural finish</p>
            <dl className="mt-6 space-y-3 text-sm border-t border-line pt-4">
              <div className="flex justify-between">
                <dt className="text-mute">Length</dt>
                <dd className="font-semibold">13.97 in</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-mute">Diameter</dt>
                <dd className="font-semibold">13.7 mm</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-mute">Weight</dt>
                <dd className="font-semibold">46 g</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-mute">Tip</dt>
                <dd className="font-semibold">Acorn, wood</dd>
              </div>
            </dl>
            <p className="mt-6 text-xs text-mute">
              From £13.50 a pair. Free UK shipping over £49. Right size, right weight, right
              starting point.
            </p>
          </div>
        </div>
      </section>

      <section className="grain bg-ink text-bone">
        <div className="container-page py-16 md:py-20">
          <div className="max-w-3xl">
            <p className="eyebrow !text-bone/60 mb-3">After the 7A</p>
            <h2 className="font-display heading-md text-balance">
              Two cases for stepping up once your technique is settled.
            </h2>
          </div>
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {ALTERNATIVES.map((a) => (
              <Link
                key={a.model}
                href={a.href}
                className="block bg-ink border border-bone/15 p-7 hover:border-crimson transition-colors"
              >
                <p className="font-display text-3xl">{a.model}</p>
                <p className="mt-3 text-sm text-bone/75 text-pretty leading-relaxed">{a.why}</p>
                <p className="mt-5 text-xs uppercase tracking-[0.18em] font-semibold text-crimson">
                  Shop {a.model} &rarr;
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16 md:py-20 border-t border-line">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <p className="eyebrow mb-3">Small hands FAQ</p>
            <h2 className="font-display heading-md text-balance">
              Five questions drummers with smaller hands ask before buying.
            </h2>
            <p className="mt-4 text-mute text-pretty">
              Buying for a child? See{' '}
              <Link href="/drumsticks-for-kids" className="link-anim">drumsticks for kids</Link>. Or
              read{' '}
              <Link href="/how-to-hold-drumsticks" className="link-anim">how to hold drumsticks</Link>{' '}
              for grip technique that suits any hand.
            </p>
          </div>
          <div className="lg:col-span-8">
            <FAQAccordion items={FAQ} />
          </div>
        </div>
      </section>

      <CTABanner
        eyebrow="Find your fit"
        title="Take the stick finder quiz."
        body="Six questions including hand size, genre, and current pain points. We tell you exactly which Collision pair to start with."
        primaryCta={{ label: 'Start the quiz', href: '/stick-finder' }}
        secondaryCta={{ label: 'Or shop the 7A', href: '/product/7a-drumsticks' }}
      />
    </>
  );
}
