import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { CTABanner } from '@/components/CTABanner';
import { FAQAccordion } from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Best Drumsticks for Practice Pad - 5A American Hickory',
  description:
    'A 5A wood tip is the right pick for any practice pad. Why heavier sticks build the wrong habits, and what tradeoffs the 7A and 5B introduce. From £13.50 a pair.',
};

const ALTERNATIVES = [
  {
    model: '7A',
    why: 'For finger control practice and fast double stroke work. Lighter weight rewards precise technique. Useful as a second pair specifically for pad sessions.',
    href: '/product/7a-drumsticks',
  },
  {
    model: '5B',
    why: 'For drummers building wrist strength or transitioning from a lighter stick to rock or theatre work. Heavier mass forces the technique fundamentals to be right.',
    href: '/product/5b-drumsticks',
  },
];

const FAQ = [
  {
    id: 'pad-faq-1',
    question: 'What size drumsticks should I practise with?',
    answer:
      'A 5A wood tip. The same stick you play your gigs with. Your pad practice should build the technique you use on a kit, and that means using the same weight and feel. Practising on a heavier stick to build strength is a tradition that mostly produces drummers who play rigidly when they go back to a 5A. Use the stick you actually play.',
    category: 'products' as const,
    sort_order: 1,
  },
  {
    id: 'pad-faq-2',
    question: 'Do drumsticks last longer on a practice pad?',
    answer:
      'Significantly longer. A pair of 5A wood tip on a rubber practice pad lasts most drummers months, sometimes a year. There are no rim shots, no cymbal edges, and the rubber surface absorbs impact. Practice pad use is the kindest environment for a stick.',
    category: 'products' as const,
    sort_order: 2,
  },
  {
    id: 'pad-faq-3',
    question: 'Should beginners practise with heavier sticks?',
    answer:
      'No. The advice to practise on a 2B or 5B to build wrist strength is mostly outdated. Modern drumming pedagogy focuses on relaxation and rebound rather than brute strength, and the 5A is the right tool for that. A heavier stick teaches you to drive the rebound rather than ride it. Stay on the stick you actually use.',
    category: 'products' as const,
    sort_order: 3,
  },
  {
    id: 'pad-faq-4',
    question: 'What kind of practice pad should I use with a 5A?',
    answer:
      'For most drummers, a single sided 8 to 12 inch rubber pad gives the right rebound for a 5A. Gum rubber pads (orange or red) are softer and quieter — useful for quiet practice. Black rubber pads are harder and rebound faster — closer to a real drum head feel. We do not make pads ourselves, but the popular options are RealFeel, Vic Firth Heavy Hitter, and Evans RealFeel.',
    category: 'products' as const,
    sort_order: 4,
  },
  {
    id: 'pad-faq-5',
    question: 'Should I use the same tip type on a pad as my gigs?',
    answer:
      'Wood tip in both places. Nylon tips wear evenly on a pad too, but the slight bounce difference between wood and nylon is small enough on rubber that you can practise on wood and still gig nylon if you prefer. The bigger consistency win is matching weight, not tip material.',
    category: 'products' as const,
    sort_order: 5,
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Drumsticks for practice pad"
        title="Practice on the stick you play."
        subtitle="The 5A wood tip is the right pad stick for almost every drummer. Why heavier sticks build the wrong habits, and the case for a second 7A specifically for finger work."
      />

      <section className="container-page py-16 md:py-20">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-3">Why the 5A</p>
            <h2 className="font-display heading-md text-balance">
              Pad practice should reinforce the technique you use on a kit, not replace it.
            </h2>
            <p className="mt-5 text-mute text-pretty leading-relaxed">
              The traditional advice — practise with a 2B to build wrist strength — produced a
              generation of drummers who tense up at gigs because their muscles know the heavier
              tool. Modern technique relies on relaxation and rebound, not brute force. The pad is
              where you train rebound. You need the right weight in your hand to do that.
            </p>
            <p className="mt-4 text-mute text-pretty leading-relaxed">
              The 5A is the most played size in the world for the same reason it is the right pad
              stick. It teaches a stroke that translates to any kit you sit down at. Pad work on a
              5A wood tip is the most efficient daily practice you can do.
            </p>
            <p className="mt-4 text-mute text-pretty leading-relaxed">
              Sticks last on a pad. A single pair of 5A wood tip on rubber gets months of daily
              use without splintering, chipping, or denting. The dollar cost per practice hour is
              negligible.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/product/5a-drumsticks" className="btn-accent">Shop the 5A</Link>
              <Link href="/stick-finder" className="btn-ghost">Take the stick finder quiz</Link>
            </div>
          </div>
          <div className="lg:col-span-5 bg-cream p-7 lg:sticky lg:top-24 self-start">
            <p className="eyebrow text-crimson">Recommendation</p>
            <p className="mt-3 font-display text-5xl">5A</p>
            <p className="text-sm text-mute mt-2">Wood tip, Natural finish</p>
            <dl className="mt-6 space-y-3 text-sm border-t border-line pt-4">
              <div className="flex justify-between">
                <dt className="text-mute">Length</dt>
                <dd className="font-semibold">16.00 in</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-mute">Diameter</dt>
                <dd className="font-semibold">14.4 mm</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-mute">Weight</dt>
                <dd className="font-semibold">52 g</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-mute">Tip</dt>
                <dd className="font-semibold">Acorn, wood</dd>
              </div>
            </dl>
            <p className="mt-6 text-xs text-mute">
              From £13.50 a pair. Free UK shipping over £49. A pair lasts most drummers months on
              a rubber pad.
            </p>
          </div>
        </div>
      </section>

      <section className="grain bg-ink text-bone">
        <div className="container-page py-16 md:py-20">
          <div className="max-w-3xl">
            <p className="eyebrow !text-bone/60 mb-3">If 5A is not right</p>
            <h2 className="font-display heading-md text-balance">
              Two cases for a different stick on the pad.
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
            <p className="eyebrow mb-3">Practice pad FAQ</p>
            <h2 className="font-display heading-md text-balance">
              Five questions every drummer asks about pad practice and stick choice.
            </h2>
            <p className="mt-4 text-mute text-pretty">
              Want to make sticks last? Read{' '}
              <Link href="/why-drumsticks-break" className="link-anim">why drumsticks break</Link>.
              Or check{' '}
              <Link href="/how-to-hold-drumsticks" className="link-anim">how to hold drumsticks</Link>{' '}
              for grip technique.
            </p>
          </div>
          <div className="lg:col-span-8">
            <FAQAccordion items={FAQ} />
          </div>
        </div>
      </section>

      <CTABanner
        eyebrow="Practice every day"
        title="Subscribe and Save: a fresh pair, every month."
        body="A 5A pair lasts months on a pad and weeks on a kit. The Subscribe and Save plan covers both."
        primaryCta={{ label: 'See subscribe options', href: '/shop/bundles' }}
        secondaryCta={{ label: 'How to choose drumsticks', href: '/how-to-choose-drumsticks' }}
      />
    </>
  );
}
