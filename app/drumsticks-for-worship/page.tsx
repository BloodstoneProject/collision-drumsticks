import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { CTABanner } from '@/components/CTABanner';
import { FAQAccordion } from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Best Drumsticks for Worship - 5A American Hickory',
  description:
    'The 5A is the standard worship drumstick. Dynamic range from quiet verse to driven chorus. The pick for Hillsong, Bethel, and Elevation house bands. From £13.50 a pair.',
};

const ALTERNATIVES = [
  {
    model: '7A',
    why: 'For smaller rooms, acoustic services, and youth bands. The 7A keeps you under a guitar amp without losing feel for the click.',
    href: '/product/7a-drumsticks',
  },
  {
    model: '5B',
    why: 'For large auditoriums, heavily produced services with multiple tracks, or in ear feeds where the kit needs to drive the band.',
    href: '/product/5b-drumsticks',
  },
];

const FAQ = [
  {
    id: 'worship-faq-1',
    question: 'What size drumsticks do worship drummers use?',
    answer:
      'The 5A wood tip is the standard. It has the dynamic range you need to play a quiet verse with brushes feel and then drive a chorus with a click and tracks. Larger churches with bigger production sometimes step up to a 5B for the projection. Smaller rooms and youth bands often drop to a 7A. The 5A is the right starting point for any worship drummer.',
    category: 'products' as const,
    sort_order: 1,
  },
  {
    id: 'worship-faq-2',
    question: 'Wood tip or nylon tip for worship?',
    answer:
      'Wood tip, almost always. Worship music lives on cymbal swell and warmth — the bell tone of a 22 inch ride and the wash of a 19 inch crash. Nylon tips give too much articulation and ping for that aesthetic. The exception is high energy gospel and some electronic worship where a brighter ride sound suits the production. Default to wood.',
    category: 'products' as const,
    sort_order: 2,
  },
  {
    id: 'worship-faq-3',
    question: 'Do worship drummers play with a click?',
    answer:
      'Almost always at any church running tracks or in ears. The click changes how you choose a stick. You need a stick that lets you play quiet ghost notes against the click in the verse without dropping behind, and then bring full energy in the chorus without flamming. The 5A is built for that range. A heavier stick costs you the verse, a lighter stick costs you the chorus.',
    category: 'products' as const,
    sort_order: 3,
  },
  {
    id: 'worship-faq-4',
    question: 'How do I keep stick volume down in a small church?',
    answer:
      'Three options. One: drop to a 7A for naturally lower volume. Two: use rods (Hot Rods style) for the entire service if you are in a 30 to 80 capacity room. Three: switch to mesh heads on the kit and run an electronic feed. Most worship drummers in small rooms blend options one and two — a 7A for some songs, rods for the quietest moments.',
    category: 'products' as const,
    sort_order: 4,
  },
  {
    id: 'worship-faq-5',
    question: 'What sticks do drummers in big house bands play?',
    answer:
      'The big production worship drummers we ship to (UK Hillsong style bands, Soul Survivor alumni, large independent church MDs) split roughly 70 percent on 5A wood tip and 25 percent on 5B wood tip. The remainder are 7A or signature models. Volume of the room is the deciding variable.',
    category: 'products' as const,
    sort_order: 5,
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Drumsticks for worship"
        title="The 5A is the answer."
        subtitle="The standard worship drumstick. Dynamic range from quiet verse to driven chorus. American Hickory, wood tip, made for the click and the cue."
      />

      <section className="container-page py-16 md:py-20">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-3">Why the 5A</p>
            <h2 className="font-display heading-md text-balance">
              Worship is the genre with the widest dynamic range of any modern style.
            </h2>
            <p className="mt-5 text-mute text-pretty leading-relaxed">
              In the same song you might play a held cymbal under a vocal in the verse, soft rim
              clicks under a swell in the bridge, and full open backbeats with crashes through the
              final chorus. No other commercial genre asks for that range in eight minutes.
            </p>
            <p className="mt-4 text-mute text-pretty leading-relaxed">
              The 5A is the only stick that handles all four parts. Light enough for the swell,
              heavy enough for the chorus, articulate enough to lock the click in your in ears,
              warm enough to sit under the bed of synths and pads in the mix.
            </p>
            <p className="mt-4 text-mute text-pretty leading-relaxed">
              Wood tip, every time. Worship cymbal sounds — bell tones, washy crashes, ride
              swells — were defined on wood tip. Nylon brings articulation that fights the bed of
              the mix.
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
              From £13.50 a pair. Free UK shipping over £49. Most worship drummers go through one
              pair a month — see{' '}
              <Link href="/shop/bundles" className="link-anim">subscribe options</Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="grain bg-ink text-bone">
        <div className="container-page py-16 md:py-20">
          <div className="max-w-3xl">
            <p className="eyebrow !text-bone/60 mb-3">If 5A is not right</p>
            <h2 className="font-display heading-md text-balance">
              Two alternatives for the smaller and bigger end of the worship room.
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
            <p className="eyebrow mb-3">Worship drummer FAQ</p>
            <h2 className="font-display heading-md text-balance">
              Five questions every worship drummer asks the church MD before buying.
            </h2>
            <p className="mt-4 text-mute text-pretty">
              Compare the 5A side by side with the{' '}
              <Link href="/compare/5a-vs-5b" className="link-anim">5B</Link>, or read about{' '}
              <Link href="/drumsticks-for-gospel" className="link-anim">drumsticks for gospel</Link> for
              the higher energy end.
            </p>
          </div>
          <div className="lg:col-span-8">
            <FAQAccordion items={FAQ} />
          </div>
        </div>
      </section>

      <CTABanner
        eyebrow="Other genres"
        title="Drumsticks for gospel, country, and funk."
        body="Each style has its own answer. Find yours through the stick finder, or browse the use case pages."
        primaryCta={{ label: 'Stick finder quiz', href: '/stick-finder' }}
        secondaryCta={{ label: 'For gospel players', href: '/drumsticks-for-gospel' }}
      />
    </>
  );
}
