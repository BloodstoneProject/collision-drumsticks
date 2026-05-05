import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { CTABanner } from '@/components/CTABanner';
import { FAQAccordion } from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Best Drumsticks for Funk - 5A Wood Tip',
  description:
    'A 5A wood tip is the funk standard. Light enough for ghost note finesse, heavy enough for backbeat punch. The Bernard Purdie, Steve Jordan, James Gadson stick.',
};

const ALTERNATIVES = [
  {
    model: '7A',
    why: 'For lighter funk and neo soul where ghost notes drive the groove. Better articulation on the snare for the under the radar 16th note feel.',
    href: '/product/7a-drumsticks',
  },
  {
    model: '5B',
    why: 'For modern funk fusion or louder situations where the kit needs to compete with horn sections. The 5B keeps the backbeat huge.',
    href: '/product/5b-drumsticks',
  },
];

const FAQ = [
  {
    id: 'funk-faq-1',
    question: 'What size drumsticks do funk drummers use?',
    answer:
      'The 5A wood tip is the most common funk stick. The whole genre is built around the contrast between barely audible ghost notes and powerful backbeats — the 5A handles both ends of that range better than any other size. Lighter sticks lose the backbeat. Heavier sticks lose the ghost notes. The 5A is the sweet spot.',
    category: 'products' as const,
    sort_order: 1,
  },
  {
    id: 'funk-faq-2',
    question: 'Wood tip or nylon tip for funk?',
    answer:
      'Wood tip, almost always. Funk relies on warmth and feel rather than articulation. The genre was defined on wood tip sticks — Bernard Purdie, Steve Gadd, Steve Jordan all played wood. Nylon brings a brightness that fights the warm pocket the genre is known for.',
    category: 'products' as const,
    sort_order: 2,
  },
  {
    id: 'funk-faq-3',
    question: 'How important are ghost notes in funk?',
    answer:
      'Ghost notes are the genre. The 16th note pattern between the backbeats — those quiet snare hits — define the groove and separate funk from rock. Your stick choice should reward that finesse. The 5A gives you control of the ghost note dynamic without losing the punch on the 2 and 4. Light sticks make ghost notes too quiet, heavy sticks make them too prominent.',
    category: 'products' as const,
    sort_order: 3,
  },
  {
    id: 'funk-faq-4',
    question: 'Should funk drummers play matched grip or traditional grip?',
    answer:
      'Both are valid in funk, but matched grip is now the more common choice among modern funk drummers. Traditional grip suits the lighter ghost note feel some players prefer, but modern funk fusion (Vulfpeck, Snarky Puppy) is overwhelmingly matched. Pick the grip that gives you the cleanest ghost notes — that is the funk priority.',
    category: 'products' as const,
    sort_order: 4,
  },
  {
    id: 'funk-faq-5',
    question: 'What about sticks for neo soul drumming?',
    answer:
      'Neo soul (Anderson Paak, Cleo Sol, the Robert Glasper school) sits between funk and hip hop. Most drummers in this style use a 7A wood tip rather than a 5A — the lighter weight matches the laid back, slightly behind the beat feel. If you play strictly neo soul, the 7A is worth trying alongside the 5A.',
    category: 'products' as const,
    sort_order: 5,
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Drumsticks for funk"
        title="The 5A is the answer."
        subtitle="Light enough for ghost notes, heavy enough for the backbeat. The stick that defined Bernard Purdie, Steve Jordan, James Gadson, and the whole funk pocket."
      />

      <section className="container-page py-16 md:py-20">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-3">Why the 5A</p>
            <h2 className="font-display heading-md text-balance">
              Funk lives in the dynamic gap between a ghost note and a backbeat. The 5A is the
              only size that handles both well.
            </h2>
            <p className="mt-5 text-mute text-pretty leading-relaxed">
              The genre is defined by 16th note ghost notes filling the space between cracks on
              the 2 and 4. A heavier stick collapses that gap — the ghost notes become too loud
              and the groove loses its taste. A lighter stick loses the backbeat. The 5A sits
              right in the middle.
            </p>
            <p className="mt-4 text-mute text-pretty leading-relaxed">
              Wood tip, every time. Funk cymbal sounds — buttery hi hats, rich ride bell tones,
              warm crashes — were built on wood tip. Nylon adds an articulation that fights the
              pocket and reads as too modern for the genre.
            </p>
            <p className="mt-4 text-mute text-pretty leading-relaxed">
              For neo soul specifically, consider stepping down to a 7A. The lighter weight
              matches the laid back feel of the modern soul scene. For traditional James Brown
              style funk, stay on the 5A.
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
              From £13.50 a pair. Free UK shipping over £49. The most played stick in the world
              for the most dynamic genre in the world.
            </p>
          </div>
        </div>
      </section>

      <section className="grain bg-ink text-bone">
        <div className="container-page py-16 md:py-20">
          <div className="max-w-3xl">
            <p className="eyebrow !text-bone/60 mb-3">If 5A is not right</p>
            <h2 className="font-display heading-md text-balance">
              Two alternatives for the lighter and heavier ends of the funk spectrum.
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
            <p className="eyebrow mb-3">Funk drummer FAQ</p>
            <h2 className="font-display heading-md text-balance">
              Five questions every funk and neo soul drummer asks before swapping brand.
            </h2>
            <p className="mt-4 text-mute text-pretty">
              Want to compare sizes side by side? See{' '}
              <Link href="/compare/5a-vs-5b" className="link-anim">5A vs 5B</Link> or{' '}
              <Link href="/compare/5a-vs-7a" className="link-anim">5A vs 7A</Link>.
            </p>
          </div>
          <div className="lg:col-span-8">
            <FAQAccordion items={FAQ} />
          </div>
        </div>
      </section>

      <CTABanner
        eyebrow="Adjacent genres"
        title="Drumsticks for gospel, country, and worship."
        body="Each style has its own answer. Take the quiz, or browse the use case pages."
        primaryCta={{ label: 'Stick finder quiz', href: '/stick-finder' }}
        secondaryCta={{ label: 'For gospel players', href: '/drumsticks-for-gospel' }}
      />
    </>
  );
}
