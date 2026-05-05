import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { CTABanner } from '@/components/CTABanner';
import { FAQAccordion } from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Best Drumsticks for Metal - 2B Hickory, Nylon Tip',
  description:
    'The 2B nylon tip is the metal drumstick: heaviest shaft, brightest cymbal articulation, longest life under blast beats. Specs, alternates, and the metal kit bag.',
};

const ALTERNATIVES = [
  {
    model: '5B',
    why: 'Step lighter than the 2B if you want speed back. Death metal and tech metal blast beat players often prefer the 5B for stamina.',
    href: '/product/5b-drumstick',
  },
  {
    model: '5BR Reach',
    why: 'A 5B weight with extra length. Useful for big stage metal kits with floor toms set wide and rides positioned for stick over ride playing.',
    href: '/product/5br-reach-drumstick',
  },
];

const FAQ = [
  {
    id: 'metal-faq-1',
    question: 'Do I really need a 2B over a 5B for metal?',
    answer:
      'Depends on the subgenre. Doom, sludge, classic heavy metal, and melodic metal benefit from the 2B mass for the heavier backbeat. Death metal, blast beat heavy tech metal, and grindcore players almost universally use the 5B for the sheer volume of fast strokes per minute. Take a 5B and a 2B, play both for a week, the right answer becomes obvious.',
    category: 'products' as const,
    sort_order: 1,
  },
  {
    id: 'metal-faq-2',
    question: 'Wood tip or nylon tip for metal?',
    answer:
      'Nylon, almost always. Three reasons: brighter cymbal attack cuts through high gain guitars, the tip outlasts wood on heavy thick metal cymbals by 30 to 40 percent, and wood tips chip on rim shots which a metal drummer is doing constantly. Wood is fine if you specifically want a darker ride tone.',
    category: 'products' as const,
    sort_order: 2,
  },
  {
    id: 'metal-faq-3',
    question: 'Will the sticks survive blast beats?',
    answer:
      'The shaft will survive longer than the tip. We weight match every pair to within 1 gram so you do not waste energy fighting an uneven pair under speed. Most metal drummers we ship to break a stick on a rim shot or a cymbal edge before the shaft fatigues. Run two pairs alternately on a long set if speed and stamina is the priority.',
    category: 'products' as const,
    sort_order: 3,
  },
  {
    id: 'metal-faq-4',
    question: 'Stealth Black or Natural for metal?',
    answer:
      'Stealth Black, on aesthetics alone. The matte black finish suits the metal stage look, and the slightly tackier coat helps in a sweaty live setting. Natural is fine if you genuinely prefer the look of the wood, the playing characteristics are identical.',
    category: 'products' as const,
    sort_order: 4,
  },
];

export default function MetalPage() {
  return (
    <>
      <PageHero
        eyebrow="Drumsticks for metal"
        title="The 2B nylon tip is the answer."
        subtitle="The heaviest stick in our lineup with the brightest cymbal articulation. Built for the loudest rooms and the longest sets."
      />

      <section className="container-page py-16 md:py-20">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-3">Why the 2B nylon</p>
            <h2 className="font-display heading-md text-balance">
              Maximum mass for the backbeat. Maximum cut for the cymbals.
            </h2>
            <p className="mt-5 text-mute text-pretty leading-relaxed">
              Metal asks more of a drumstick than any other genre. Heavier than rock, faster than
              prog, with cymbals that demand articulation and snare hits that compete with two
              high gain guitar amps. The 2B nylon answers all three.
            </p>
            <p className="mt-4 text-mute text-pretty leading-relaxed">
              The 2B weighs around 64 grams per stick with a 16 mm shaft. That is the heaviest
              standard stick we make and within 1 gram of the heaviest stick anyone produces. The
              nylon tip outlasts wood by a third on thick metal cymbals, where wood tips would
              chip in a single set.
            </p>
            <p className="mt-4 text-mute text-pretty leading-relaxed">
              For blast beat focused subgenres (death metal, tech death, grindcore) where stamina
              matters more than mass, drop down to the 5B nylon tip and play two pairs alternately
              over a long set.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/product/2b-drumstick" className="btn-accent">Shop the 2B</Link>
              <Link href="/stick-finder" className="btn-ghost">Take the stick finder quiz</Link>
            </div>
          </div>
          <div className="lg:col-span-5 bg-cream p-7 lg:sticky lg:top-24 self-start">
            <p className="eyebrow text-crimson">Recommendation</p>
            <p className="mt-3 font-display text-5xl">2B</p>
            <p className="text-sm text-mute mt-2">Nylon tip, Stealth Black</p>
            <dl className="mt-6 space-y-3 text-sm border-t border-line pt-4">
              <div className="flex justify-between">
                <dt className="text-mute">Length</dt>
                <dd className="font-semibold">16.25 in</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-mute">Diameter</dt>
                <dd className="font-semibold">16.0 mm</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-mute">Weight</dt>
                <dd className="font-semibold">64 g</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-mute">Tip</dt>
                <dd className="font-semibold">Acorn, nylon</dd>
              </div>
            </dl>
            <p className="mt-6 text-xs text-mute">
              From £15.95 a pair. Free UK shipping over £49. Touring metal drummers tend to run{' '}
              <Link href="/shop/bundles" className="link-anim">
                Subscribe & Save
              </Link>{' '}
              on three pairs a month.
            </p>
          </div>
        </div>
      </section>

      <section className="grain bg-ink text-bone">
        <div className="container-page py-16 md:py-20">
          <div className="max-w-3xl">
            <p className="eyebrow !text-bone/60 mb-3">Lighter alternatives</p>
            <h2 className="font-display heading-md text-balance">
              When you want speed back over mass.
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
            <p className="eyebrow mb-3">Metal player FAQ</p>
            <h2 className="font-display heading-md text-balance">
              Four questions metal drummers ask before they swap.
            </h2>
            <p className="mt-4 text-mute text-pretty">
              See the wood vs nylon{' '}
              <Link href="/compare/wood-tip-vs-nylon-tip" className="link-anim">
                comparison page
              </Link>{' '}
              for the durability numbers, or compare Natural and Stealth Black on the{' '}
              <Link href="/compare/natural-vs-stealth-black" className="link-anim">
                finish comparison
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
        title="Drumsticks for jazz, rock, and beginners."
        body="Each genre has its own answer. Find yours through the stick finder, or browse the use case pages."
        primaryCta={{ label: 'Stick finder quiz', href: '/stick-finder' }}
        secondaryCta={{ label: 'For rock players', href: '/drumsticks-for-rock' }}
      />
    </>
  );
}
