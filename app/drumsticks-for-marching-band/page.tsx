import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { CTABanner } from '@/components/CTABanner';
import { FAQAccordion } from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Best Drumsticks for Marching Band - 2B and Heavier',
  description:
    'A 2B is the entry level marching stick. SD2 sized models for snareline, deeper carriers for tenors. The right pick for high school, drum corps, and pipe band.',
};

const ALTERNATIVES = [
  {
    model: '5B',
    why: 'For indoor marching practice, drumline rehearsal, or smaller community bands. Lighter weight reduces wrist fatigue across long rehearsals.',
    href: '/product/5b-drumsticks',
  },
  {
    model: 'Custom 2B',
    why: 'Engrave your section name, your school, or your band on every pair. Useful for keeping sticks matched across a snareline or tenor section.',
    href: '/custom',
  },
];

const FAQ = [
  {
    id: 'march-faq-1',
    question: 'What size drumsticks do marching band drummers use?',
    answer:
      'For snareline drummers, the standard is a heavy stick — typically 2B size or a marching specific SD2 / SD4 model. Carrier snares are tensioned high (often above 8 ply Kevlar at high pressure) and need a heavy stick to drive the head. Tenor players use even heavier sticks or mallets. Bass line drummers use specific bass mallets, not standard drumsticks. Pit percussion uses standard drumsticks (5A, 5B) plus mallets and brushes depending on the part.',
    category: 'products' as const,
    sort_order: 1,
  },
  {
    id: 'march-faq-2',
    question: 'Are drum corps sticks different from band sticks?',
    answer:
      'In broad strokes yes. Drum corps sticks are typically a notch heavier (closer to a 1B or SD4) than high school marching band sticks (typically 2B or SD2). The reason is volume — drum corps perform in stadium settings and the heads are tensioned for projection, not feel. High school marching is usually a step quieter and forgiving on a 2B.',
    category: 'products' as const,
    sort_order: 2,
  },
  {
    id: 'march-faq-3',
    question: 'Wood tip or nylon tip for marching?',
    answer:
      'Wood tip, almost universally. The big concern in marching is durability under heavy play, and wood tip drumsticks fail at the shaft (rim shots, edge dings) rather than the tip. Nylon tip would not extend stick life in this context. Stick to wood.',
    category: 'products' as const,
    sort_order: 3,
  },
  {
    id: 'march-faq-4',
    question: 'How long do marching drumsticks last?',
    answer:
      'A snareline drummer in heavy rehearsal goes through a pair every two to four weeks. Performance season can be one pair per show. Drum corps drummers in tour mode go through pairs even faster. Buying in dozens (or in bulk for a section) is standard. Our wholesale page covers section pricing.',
    category: 'products' as const,
    sort_order: 4,
  },
  {
    id: 'march-faq-5',
    question: 'Do you supply drumsticks to schools and drum corps?',
    answer:
      'Yes. We have a wholesale programme for school marching programmes, drum corps, and pipe bands. Bulk pricing kicks in at 25 pairs and gets significant discounts at 100, 250, and 500. Custom engraving with your school or corps name is available at any volume from one pair. See the wholesale page for details.',
    category: 'products' as const,
    sort_order: 5,
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Drumsticks for marching band"
        title="The 2B is the snareline standard."
        subtitle="Heavier mass for high tension Kevlar heads. Wood tip for shaft survival under rim shots. Engrave your school or corps for free at order."
      />

      <section className="container-page py-16 md:py-20">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-3">Why the 2B</p>
            <h2 className="font-display heading-md text-balance">
              Marching snare heads are tensioned higher than any kit. They need a heavier stick.
            </h2>
            <p className="mt-5 text-mute text-pretty leading-relaxed">
              A high school marching snare runs Kevlar heads at tension that would make a kit
              snare unusable. Driving that head with a 5A produces a thin, choked tone. The 2B
              has the mass to engage the head and the diameter to survive the rim shots that
              define marching playing.
            </p>
            <p className="mt-4 text-mute text-pretty leading-relaxed">
              Sticks die fast in marching. A snareline drummer in rehearsal season goes through a
              pair every two to four weeks. In show season the rate doubles. Buying in volume is
              standard practice — we ship dozens at school and section pricing through our
              wholesale programme.
            </p>
            <p className="mt-4 text-mute text-pretty leading-relaxed">
              For tenor players, the 2B is the entry point — many tenor sections use slightly
              heavier custom sized sticks. For pit drummers, standard 5A and 5B is the right
              answer. For bass line, you are using mallets, not drumsticks.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/product/2b-drumsticks" className="btn-accent">Shop the 2B</Link>
              <Link href="/wholesale" className="btn-ghost">School and section pricing</Link>
            </div>
          </div>
          <div className="lg:col-span-5 bg-cream p-7 lg:sticky lg:top-24 self-start">
            <p className="eyebrow text-crimson">Recommendation</p>
            <p className="mt-3 font-display text-5xl">2B</p>
            <p className="text-sm text-mute mt-2">Wood tip, Natural finish</p>
            <dl className="mt-6 space-y-3 text-sm border-t border-line pt-4">
              <div className="flex justify-between">
                <dt className="text-mute">Length</dt>
                <dd className="font-semibold">16.25 in</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-mute">Diameter</dt>
                <dd className="font-semibold">15.6 mm</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-mute">Weight</dt>
                <dd className="font-semibold">64 g</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-mute">Tip</dt>
                <dd className="font-semibold">Acorn, wood</dd>
              </div>
            </dl>
            <p className="mt-6 text-xs text-mute">
              Bulk pricing from 25 pairs through{' '}
              <Link href="/wholesale" className="link-anim">wholesale</Link>. School engraving
              from one pair upwards.
            </p>
          </div>
        </div>
      </section>

      <section className="grain bg-ink text-bone">
        <div className="container-page py-16 md:py-20">
          <div className="max-w-3xl">
            <p className="eyebrow !text-bone/60 mb-3">If 2B is not right</p>
            <h2 className="font-display heading-md text-balance">
              Two alternatives for indoor rehearsal and section identity.
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
                  See &rarr;
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16 md:py-20 border-t border-line">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <p className="eyebrow mb-3">Marching FAQ</p>
            <h2 className="font-display heading-md text-balance">
              Five questions every marching drummer or section leader asks before ordering.
            </h2>
            <p className="mt-4 text-mute text-pretty">
              Section leader? See{' '}
              <Link href="/wholesale" className="link-anim">wholesale pricing</Link>. Or read{' '}
              <Link href="/why-drumsticks-break" className="link-anim">why drumsticks break</Link>{' '}
              for technique that extends stick life.
            </p>
          </div>
          <div className="lg:col-span-8">
            <FAQAccordion items={FAQ} />
          </div>
        </div>
      </section>

      <CTABanner
        eyebrow="Section pricing"
        title="Order in bulk for your school, corps, or band."
        body="Wholesale pricing kicks in at 25 pairs. Engraving available from one pair upwards. Free UK delivery on bulk orders."
        primaryCta={{ label: 'See wholesale', href: '/wholesale' }}
        secondaryCta={{ label: 'Or buy a single pair', href: '/product/2b-drumsticks' }}
      />
    </>
  );
}
