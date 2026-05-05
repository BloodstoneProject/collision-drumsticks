import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { CTABanner } from '@/components/CTABanner';
import { FAQAccordion } from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Best Drumsticks for Jazz - 7A American Hickory',
  description:
    'The 7A is the standard jazz drumstick: lighter, faster, brush compatible. Lengths and weights, alternatives, and the gig kit a working jazz drummer carries.',
};

const ALTERNATIVES = [
  {
    model: '7AR Reach',
    why: 'A 7A weight with 1 inch extra length. Useful if your ride is set far out or you play a deeper kit.',
    href: '/product/7ar-reach-drumstick',
  },
  {
    model: '5A',
    why: 'The half step heavier option. If your jazz work crosses into louder fusion or pop, the 5A handles both rooms.',
    href: '/product/5a-drumstick',
  },
];

const FAQ = [
  {
    id: 'jazz-faq-1',
    question: 'Why 7A and not 5A for jazz?',
    answer:
      'The 7A is roughly 6 grams lighter than the 5A. That difference is small in the hand but huge for the rebound speed you need for fast bebop, brush work, and intricate ride patterns. The 5A is a fine all rounder, but the 7A is what most jazz teachers in the UK still hand a new student on the first lesson.',
    category: 'products' as const,
    sort_order: 1,
  },
  {
    id: 'jazz-faq-2',
    question: 'Can I use these sticks with brushes too?',
    answer:
      'You will swap stick and brush during a set. The 7A pairs naturally with our standard wire brush because the weight is similar in the hand, so the transition between the two is smooth. We do not yet make brushes ourselves, most players use Vic Firth Heritage or Regal Tip Classic alongside our 7A.',
    category: 'products' as const,
    sort_order: 2,
  },
  {
    id: 'jazz-faq-3',
    question: 'Wood tip or nylon tip for jazz?',
    answer:
      'Wood tip, almost always. Wood gives the warmer, woodier ride cymbal tone that defines the jazz sound. Nylon adds bite and articulation that suits louder genres but cuts through the mix in a way most jazz drummers actively avoid. See the wood tip vs nylon tip comparison page for the full breakdown.',
    category: 'products' as const,
    sort_order: 3,
  },
  {
    id: 'jazz-faq-4',
    question: 'What is in a typical working jazz drummer kit bag?',
    answer:
      'Three pairs of 7A wood tip (one in use, two spares), one pair of brushes, one pair of multi rods (Hot Rods style) for low volume gigs, a small drum key on a clip, and a microfibre cloth for cymbal cleaning between sets. The Explorer Pack covers the stick side of that bag.',
    category: 'products' as const,
    sort_order: 4,
  },
];

export default function JazzPage() {
  return (
    <>
      <PageHero
        eyebrow="Drumsticks for jazz"
        title="The 7A is the answer."
        subtitle="Light, fast, brush compatible. The standard jazz drumstick from the standard jazz brand built by working drummers."
      />

      <section className="container-page py-16 md:py-20">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-3">Why the 7A</p>
            <h2 className="font-display heading-md text-balance">
              Six grams lighter than a 5A. That is the entire jazz argument.
            </h2>
            <p className="mt-5 text-mute text-pretty leading-relaxed">
              Jazz playing rewards rebound speed. You are working the ride with single strokes,
              moving across the kit with finger control, and articulating ghost notes that need
              to actually disappear in the mix. A heavier stick fights you on all three.
            </p>
            <p className="mt-4 text-mute text-pretty leading-relaxed">
              The 7A weighs around 46 grams per stick. Its 13.7 mm shaft fits naturally between
              the thumb and the side of the index finger for German grip, and it bounces back off
              a coated head with the lightness that jazz feel actually depends on.
            </p>
            <p className="mt-4 text-mute text-pretty leading-relaxed">
              Wood tip, every time. The acorn profile gives a warm, woody ride cymbal tone that
              nylon will never reproduce. If you need brighter articulation for a fusion gig, take
              a 5A wood tip as your second pair, not nylon.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/product/7a-drumstick" className="btn-accent">Shop the 7A</Link>
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
              From £13.50 a pair. Free UK shipping over £49. Three pair Gigging Pack available
              from{' '}
              <Link href="/shop/bundles" className="underline hover:text-crimson">
                bundles
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ink text-bone">
        <div className="container-page py-16 md:py-20">
          <div className="max-w-3xl">
            <p className="eyebrow !text-bone/60 mb-3">If 7A is not right</p>
            <h2 className="font-display heading-md text-balance">
              Two alternatives we recommend over a 5A as a first jazz stick.
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
            <p className="eyebrow mb-3">Jazz player FAQ</p>
            <h2 className="font-display heading-md text-balance">
              Four questions every jazz drummer asks before swapping brand.
            </h2>
            <p className="mt-4 text-mute text-pretty">
              For a side by side of the 7A against the 5A, see the{' '}
              <Link href="/compare/5a-vs-5b" className="underline hover:text-crimson">
                model comparison
              </Link>{' '}
              page. For the full lineup, see{' '}
              <Link href="/shop/drumsticks" className="underline hover:text-crimson">
                the drumsticks page
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
        eyebrow="Other genres"
        title="Drumsticks for rock, metal, and beginners."
        body="Each genre has its own answer. Find yours through the stick finder, or browse the use case pages."
        primaryCta={{ label: 'Stick finder quiz', href: '/stick-finder' }}
        secondaryCta={{ label: 'For rock players', href: '/drumsticks-for-rock' }}
      />
    </>
  );
}
