import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { CTABanner } from '@/components/CTABanner';
import { FAQAccordion } from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Best Drumsticks for Electronic Drums - 7A Wood Tip',
  description:
    'The 7A wood tip is the right pick for Roland, Alesis, Yamaha and 2box e-kits. Why nylon damages mesh, why heavy sticks kill triggers, and what working e-kit drummers carry.',
};

const ALTERNATIVES = [
  {
    model: '5A wood',
    why: 'If you also play an acoustic kit at gigs, the 5A keeps your feel consistent. Slightly more wear on mesh heads but the cross over is worth it.',
    href: '/product/5a-drumsticks',
  },
  {
    model: '7A Reach',
    why: 'For taller drummers, deeper electronic kits, or anybody using the rim triggers on a Roland TD set far apart. One inch extra reach at the same weight.',
    href: '/product/7a-reach-drumstick',
  },
];

const FAQ = [
  {
    id: 'ekit-faq-1',
    question: 'What size drumsticks should I use on a Roland or Alesis e-kit?',
    answer:
      'A 7A wood tip is the right answer for most e-kit owners. The lighter weight reduces the wear on mesh heads, the wood tip prevents the dead spot indents that nylon tips create over time, and the rebound matches the natural feel of mesh. Heavier sticks (5B, 2B) reduce mesh head life by 30 to 50 percent and can damage rim triggers.',
    category: 'products' as const,
    sort_order: 1,
  },
  {
    id: 'ekit-faq-2',
    question: 'Will nylon tip drumsticks damage my mesh heads?',
    answer:
      'Yes, over time. Nylon tips create localised wear points where the mesh weave starts to fray, and after six to twelve months of regular play you will see thinning where you naturally hit. Wood tip distributes the impact across a slightly broader contact patch and wears the head more evenly. Stick to wood tip on any electronic kit with mesh heads.',
    category: 'products' as const,
    sort_order: 2,
  },
  {
    id: 'ekit-faq-3',
    question: 'Do I need special sticks for electronic drums?',
    answer:
      'No. Standard drumsticks are fine — you do not need an e-kit specific product. The brands marketing electronic drumsticks are mostly using the lighter weight as the differentiator, and a 7A from any reputable brand achieves the same outcome at a lower price.',
    category: 'products' as const,
    sort_order: 3,
  },
  {
    id: 'ekit-faq-4',
    question: 'Why do my hi-hat and cymbal triggers feel weird with heavier sticks?',
    answer:
      'Trigger thresholds are calibrated for typical wood stick velocity. A heavier stick at the same arm motion produces a higher input voltage, which gets misread as a louder hit. You compensate by playing softer, which feels weird. Use a lighter stick (7A) and let the module read your dynamic range correctly.',
    category: 'products' as const,
    sort_order: 4,
  },
  {
    id: 'ekit-faq-5',
    question: 'I play both acoustic and electronic — should I use the same stick?',
    answer:
      'Personal preference, but most working drummers we ship to keep two pairs in the bag. A 5A for the acoustic gigs and a 7A specifically for the e-kit at home. The cross over feel is close enough that you do not need to relearn anything when you swap kits.',
    category: 'products' as const,
    sort_order: 5,
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Drumsticks for electronic drums"
        title="The 7A wood tip wins on e-kits."
        subtitle="Lighter weight saves your mesh heads. Wood tip avoids the trigger dead spots nylon creates. The right pick for Roland, Alesis, Yamaha, and 2box."
      />

      <section className="container-page py-16 md:py-20">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-3">Why the 7A wood tip</p>
            <h2 className="font-display heading-md text-balance">
              Two reasons: mesh wear and trigger response. Both come down to weight and tip
              material.
            </h2>
            <p className="mt-5 text-mute text-pretty leading-relaxed">
              Mesh heads on a Roland TD, Alesis Strike, or 2box BlackBox are made of fine woven
              fabric stretched over a frame. They are durable, but they wear out around the impact
              zone. A heavier stick concentrates more force per square millimetre and accelerates
              that wear by 30 to 50 percent versus a 7A.
            </p>
            <p className="mt-4 text-mute text-pretty leading-relaxed">
              Nylon tips create a second problem. The harder polymer wears the mesh weave
              unevenly, leaving slightly thinner spots where you naturally hit. Wood tip
              distributes the impact across a marginally broader patch and wears the head evenly.
              Over a year of practice that difference shows.
            </p>
            <p className="mt-4 text-mute text-pretty leading-relaxed">
              Trigger response is the second reason. Modules are calibrated for the velocity range
              of a standard wood stick. A 5B or 2B sends voltage spikes the module reads as full
              dynamics at moderate effort, which compresses your dynamic range. The 7A keeps the
              full range of the module readable.
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
              From £13.50 a pair. Free UK shipping over £49. Built for use on Roland TD, Alesis
              Strike, Yamaha DTX, and 2box.
            </p>
          </div>
        </div>
      </section>

      <section className="grain bg-ink text-bone">
        <div className="container-page py-16 md:py-20">
          <div className="max-w-3xl">
            <p className="eyebrow !text-bone/60 mb-3">If 7A is not right</p>
            <h2 className="font-display heading-md text-balance">
              Two alternatives for cross over players and bigger kits.
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
            <p className="eyebrow mb-3">E-kit FAQ</p>
            <h2 className="font-display heading-md text-balance">
              Five questions every electronic drummer asks before buying their next pair.
            </h2>
            <p className="mt-4 text-mute text-pretty">
              Practice pad player too? See{' '}
              <Link href="/drumsticks-for-practice-pad" className="link-anim">drumsticks for practice pad</Link>.
              Or compare wood vs nylon{' '}
              <Link href="/compare/wood-tip-vs-nylon-tip" className="link-anim">side by side</Link>.
            </p>
          </div>
          <div className="lg:col-span-8">
            <FAQAccordion items={FAQ} />
          </div>
        </div>
      </section>

      <CTABanner
        eyebrow="Beyond the e-kit"
        title="Drumsticks for every kit you own."
        body="Cross over players keep two pairs. Take the quiz for a personalised recommendation, or browse all sticks."
        primaryCta={{ label: 'Stick finder quiz', href: '/stick-finder' }}
        secondaryCta={{ label: 'All drumsticks', href: '/shop/drumsticks' }}
      />
    </>
  );
}
