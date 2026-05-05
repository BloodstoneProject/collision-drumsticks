import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { CTABanner } from '@/components/CTABanner';
import { FAQAccordion } from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Best Drumsticks for Gospel - 5B Wood Tip',
  description:
    'A 5B wood tip is the standard gospel drumstick. Volume for the chops, control for the linear runs. The pick for Aaron Spears, Calvin Rodgers, and most modern gospel chairs.',
};

const ALTERNATIVES = [
  {
    model: '5A',
    why: 'For smaller gospel rooms, brunch services, or quieter sets where finesse matters more than volume. The 5A keeps gospel chops accessible without overpowering.',
    href: '/product/5a-drumsticks',
  },
  {
    model: '2B',
    why: 'For the heaviest gospel scenes — modern praise and worship that crosses into rock territory, or arena gospel events where projection is everything.',
    href: '/product/2b-drumsticks',
  },
];

const FAQ = [
  {
    id: 'gospel-faq-1',
    question: 'What size drumsticks do gospel drummers use?',
    answer:
      'The 5B wood tip is the most common gospel stick. Gospel playing rewards both volume (the choir, the band, the room) and the linear chops the genre is famous for. The 5B has the mass to drive the volume and the diameter to survive the rim shots without sacrificing control. Some gospel drummers play a 5A for finesse, but the 5B is the working standard.',
    category: 'products' as const,
    sort_order: 1,
  },
  {
    id: 'gospel-faq-2',
    question: 'Wood tip or nylon tip for gospel?',
    answer:
      'Mostly wood tip, but nylon has a real argument in gospel. Wood gives the warmer, fuller cymbal tone that the older school (Calvin Rodgers, Gerald Heyward) favoured. Nylon adds the articulation that modern gospel (Aaron Spears, Eric Moore) often prefers for the speed work. Both are widely used. Default to wood unless you specifically want the brighter modern sound.',
    category: 'products' as const,
    sort_order: 2,
  },
  {
    id: 'gospel-faq-3',
    question: 'How do gospel drummers play so fast and clean?',
    answer:
      'Stick choice is part of it. A 5B with controlled rebound supports the fast linear runs better than a 5A (too whippy at speed) or a 2B (too heavy to recover quickly between hits). Beyond that, gospel chops are technique — finger control, French grip, and thousands of pad hours. The stick is enabling, not the secret.',
    category: 'products' as const,
    sort_order: 3,
  },
  {
    id: 'gospel-faq-4',
    question: 'Do gospel drummers break sticks faster?',
    answer:
      'Generally yes. Gospel involves heavy rim shots, fast linear playing on rims, and high stage volumes. A 5B in a gospel context lasts roughly half as long as the same stick in pop or indie. Most gospel drummers we ship to go through one to two pairs a month and rotate Subscribe and Save plans for the consistent supply.',
    category: 'products' as const,
    sort_order: 4,
  },
  {
    id: 'gospel-faq-5',
    question: 'How does gospel differ from worship in drumstick choice?',
    answer:
      'Worship music sits at the lighter end of the dynamic curve and rewards finesse. The 5A is the worship stick. Gospel sits at the heavier end and rewards both finesse and volume — the 5B is the gospel stick. The two genres overlap in rooms (modern praise and worship borrows heavily from gospel) but the typical stick choice differs by half a size.',
    category: 'products' as const,
    sort_order: 5,
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Drumsticks for gospel"
        title="The 5B is the answer."
        subtitle="Mass for the volume, control for the chops. The stick behind the modern gospel chair, from Aaron Spears to Calvin Rodgers."
      />

      <section className="container-page py-16 md:py-20">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-3">Why the 5B</p>
            <h2 className="font-display heading-md text-balance">
              Gospel demands both volume and speed. The 5B is the only stick that delivers
              both without compromising either.
            </h2>
            <p className="mt-5 text-mute text-pretty leading-relaxed">
              Gospel drumming sits at the intersection of three demands. You need volume — the
              choir is loud, the band is loud, the room is rarely small. You need speed — the
              linear chops the genre is famous for require a stick that recovers fast between
              hits. And you need rim shot durability because rims are part of the vocabulary,
              not just a fill device.
            </p>
            <p className="mt-4 text-mute text-pretty leading-relaxed">
              The 5B handles all three. It has 6 grams more mass than a 5A — enough to drive
              the kit through a 60 piece choir without losing the cymbal swell. Its 15.1 mm
              shaft survives rim shots better than a 5A. And it is light enough that fast
              linear runs do not turn into wrist work.
            </p>
            <p className="mt-4 text-mute text-pretty leading-relaxed">
              Wood tip is the traditional choice. Nylon has gained ground in modern gospel for
              the brighter, faster ride articulation. Both are valid. If you are unsure, start
              wood and try nylon as a second pair.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/product/5b-drumsticks" className="btn-accent">Shop the 5B</Link>
              <Link href="/stick-finder" className="btn-ghost">Take the stick finder quiz</Link>
            </div>
          </div>
          <div className="lg:col-span-5 bg-cream p-7 lg:sticky lg:top-24 self-start">
            <p className="eyebrow text-crimson">Recommendation</p>
            <p className="mt-3 font-display text-5xl">5B</p>
            <p className="text-sm text-mute mt-2">Wood tip, Natural finish</p>
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
                <dd className="font-semibold">Acorn, wood</dd>
              </div>
            </dl>
            <p className="mt-6 text-xs text-mute">
              From £14.95 a pair. Most gospel drummers go through one to two pairs a month — see{' '}
              <Link href="/shop/bundles" className="link-anim">subscribe options</Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="grain bg-ink text-bone">
        <div className="container-page py-16 md:py-20">
          <div className="max-w-3xl">
            <p className="eyebrow !text-bone/60 mb-3">If 5B is not right</p>
            <h2 className="font-display heading-md text-balance">
              Two alternatives for smaller rooms and the heaviest gospel scenes.
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
            <p className="eyebrow mb-3">Gospel drummer FAQ</p>
            <h2 className="font-display heading-md text-balance">
              Five questions every gospel drummer asks before switching brand.
            </h2>
            <p className="mt-4 text-mute text-pretty">
              For lighter rooms see{' '}
              <Link href="/drumsticks-for-worship" className="link-anim">drumsticks for worship</Link>.
              For the funk side of the gospel coin see{' '}
              <Link href="/drumsticks-for-funk" className="link-anim">drumsticks for funk</Link>.
            </p>
          </div>
          <div className="lg:col-span-8">
            <FAQAccordion items={FAQ} />
          </div>
        </div>
      </section>

      <CTABanner
        eyebrow="A pair a month"
        title="Subscribe and Save: never run out of fresh sticks."
        body="Most gospel drummers go through one to two pairs a month. Subscribe and save 15 percent versus one off pricing."
        primaryCta={{ label: 'See subscribe options', href: '/shop/bundles' }}
        secondaryCta={{ label: 'For worship players', href: '/drumsticks-for-worship' }}
      />
    </>
  );
}
