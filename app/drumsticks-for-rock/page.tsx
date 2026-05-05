import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { CTABanner } from '@/components/CTABanner';
import { FAQAccordion } from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Best Drumsticks for Rock - 5B American Hickory',
  description:
    'The 5B is the rock drumstick: heavier shaft, stronger backbeat, longer tip life on rock cymbals. Specs, alternates, and the gig kit a working rock drummer carries.',
};

const ALTERNATIVES = [
  {
    model: '2B',
    why: 'Heavier still. The choice for hard rock, classic metal, and the player who wants maximum volume from a single stroke.',
    href: '/product/2b-drumstick',
  },
  {
    model: '5BR Reach',
    why: 'A 5B weight with 1 inch extra length. Big stages, deep toms, theatre kits with a long reach to the ride.',
    href: '/product/5br-reach-drumstick',
  },
];

const FAQ = [
  {
    id: 'rock-faq-1',
    question: 'Why 5B over 5A for rock?',
    answer:
      'A 5B is roughly 6 grams heavier and 0.7 mm thicker than a 5A. That extra mass gives you more punch on the snare, more cut through a loud guitar mix, and more durability on the cymbals. The 5A is the all rounder, the 5B is the rock specific answer when the all rounder runs out of headroom.',
    category: 'products' as const,
    sort_order: 1,
  },
  {
    id: 'rock-faq-2',
    question: 'Wood tip or nylon tip for rock?',
    answer:
      'Either works, the call is about cymbal tone. Wood tip gives a warmer ride and crash sound, nylon adds bite and articulation that helps you cut through on really loud stages. Nylon also outlasts wood by 30 to 40 percent on rock cymbals because it does not chip. Most touring rock drummers we endorse run nylon for that one reason. See the wood tip vs nylon tip comparison for the full breakdown.',
    category: 'products' as const,
    sort_order: 2,
  },
  {
    id: 'rock-faq-3',
    question: 'How long does a pair of rock sticks last me?',
    answer:
      'Heavier players tend to break sticks rather than wear them out. A working rock drummer playing 8 to 10 hours a week typically gets 4 to 6 weeks from a 5B pair before a tip chip or a shaft fracture ends it. Subscribe & Save with two pairs every four weeks is the most common setup we ship to rock players.',
    category: 'products' as const,
    sort_order: 3,
  },
  {
    id: 'rock-faq-4',
    question: 'Does Stealth Black grip differently from Natural?',
    answer:
      'Slightly. The matte coat on Stealth Black is a fraction tackier than the oiled wood of Natural, which most players prefer in sweaty hands or on a hot stage. The flip side: in cold rehearsal rooms the matte can feel slightly grabbier than you want. See the natural vs Stealth Black comparison for the full call.',
    category: 'products' as const,
    sort_order: 4,
  },
];

export default function RockPage() {
  return (
    <>
      <PageHero
        eyebrow="Drumsticks for rock"
        title="The 5B is the answer."
        subtitle="Heavier shaft, fuller backbeat, longer tip life. The rock specific stick from a brand built by working drummers."
      />

      <section className="container-page py-16 md:py-20">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-3">Why the 5B</p>
            <h2 className="font-display heading-md text-balance">
              Six grams more mass. The whole rock argument fits in that gap.
            </h2>
            <p className="mt-5 text-mute text-pretty leading-relaxed">
              Rock drumming is a volume sport. You are competing with two distorted guitars, a
              bass cabinet, and a vocal monitor. Every gram of stick mass translates to attack,
              cut, and projection. A 5A will get you there for indie rock. A 5B will get you
              there for everything else.
            </p>
            <p className="mt-4 text-mute text-pretty leading-relaxed">
              The 5B weighs around 58 grams per stick. Its 15.1 mm shaft fills the hand without
              tiring it on a long set, and the longer tip taper holds up against thick cymbals
              and rim shots. We weight match every pair to within 1 gram so the rebound on your
              left hand matches the right.
            </p>
            <p className="mt-4 text-mute text-pretty leading-relaxed">
              For the loudest rooms or hard rock, step up to the 2B. For touring with deep kits
              and far set rides, take the 5BR Reach. Both are detailed below.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/product/5b-drumstick" className="btn-accent">Shop the 5B</Link>
              <Link href="/stick-finder" className="btn-ghost">Take the stick finder quiz</Link>
            </div>
          </div>
          <div className="lg:col-span-5 bg-cream p-7">
            <p className="eyebrow text-crimson">Recommendation</p>
            <p className="mt-3 font-display text-5xl">5B</p>
            <p className="text-sm text-mute mt-2">Wood or nylon tip, your call</p>
            <dl className="mt-6 space-y-3 text-sm border-t border-line pt-4">
              <div className="flex justify-between">
                <dt className="text-mute">Length</dt>
                <dd className="font-semibold">16.00 in</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-mute">Diameter</dt>
                <dd className="font-semibold">15.1 mm</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-mute">Weight</dt>
                <dd className="font-semibold">58 g</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-mute">Tip</dt>
                <dd className="font-semibold">Acorn</dd>
              </div>
            </dl>
            <p className="mt-6 text-xs text-mute">
              From £14.95 a pair. Free UK shipping over £49. Touring drummers tend to set up{' '}
              <Link href="/shop/bundles" className="underline hover:text-crimson">
                Subscribe & Save
              </Link>{' '}
              with two pairs a month.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ink text-bone">
        <div className="container-page py-16 md:py-20">
          <div className="max-w-3xl">
            <p className="eyebrow !text-bone/60 mb-3">If 5B is not heavy enough</p>
            <h2 className="font-display heading-md text-balance">
              Two alternatives for the louder end of rock.
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
            <p className="eyebrow mb-3">Rock player FAQ</p>
            <h2 className="font-display heading-md text-balance">
              Four questions rock drummers ask before they switch brand.
            </h2>
            <p className="mt-4 text-mute text-pretty">
              Compare the 5A and 5B side by side on the{' '}
              <Link href="/compare/5a-vs-5b" className="underline hover:text-crimson">
                comparison page
              </Link>
              , or browse the full{' '}
              <Link href="/shop/drumsticks" className="underline hover:text-crimson">
                drumsticks lineup
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
        title="Drumsticks for jazz, metal, and beginners."
        body="Each genre has its own answer. Find yours through the stick finder, or browse the use case pages."
        primaryCta={{ label: 'Stick finder quiz', href: '/stick-finder' }}
        secondaryCta={{ label: 'For metal players', href: '/drumsticks-for-metal' }}
      />
    </>
  );
}
