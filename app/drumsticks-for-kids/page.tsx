import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { CTABanner } from '@/components/CTABanner';
import { FAQAccordion } from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Best Drumsticks for Kids - 7A Junior American Hickory',
  description:
    'A 7A is the right starting drumstick for most children aged 7 to 13. Lighter weight, smaller diameter, safer rebound. UK made, safe-tested, free shipping over £49.',
};

const ALTERNATIVES = [
  {
    model: '5A',
    why: 'For older teenagers (14+) or kids in their second year of lessons. The standard adult size, ready for a full kit at moderate volume.',
    href: '/product/5a-drumsticks',
  },
  {
    model: 'Custom engraved 7A',
    why: 'A pair of 7A drumsticks engraved with their name. The thoughtful gift that turns a beginner into a kid who genuinely wants to practise.',
    href: '/custom',
  },
];

const FAQ = [
  {
    id: 'kids-faq-1',
    question: 'What size drumsticks should a child use?',
    answer:
      'A 7A wood tip is the right starting drumstick for most children aged 7 to 13. The lighter weight (46 grams versus 52 for a 5A) is forgiving on developing wrists, the smaller diameter sits naturally in a smaller hand, and the rebound is safe at the volumes a child plays. Younger children (under 7) sometimes use junior sticks shorter than 13 inches, but a 7A is appropriate for most.',
    category: 'products' as const,
    sort_order: 1,
  },
  {
    id: 'kids-faq-2',
    question: 'Are drumsticks safe for children?',
    answer:
      'Yes, with normal supervision. Collision drumsticks are turned from kiln dried American Hickory with no toxic finishes — our lacquer is a clear water based product. The standard precautions apply: ensure the child is grasping the stick correctly (not holding it too far back), is hitting drums and pads rather than walls or furniture, and is using sticks the right size for their hands. We do not recommend our standard 5B or 2B for children under 13.',
    category: 'products' as const,
    sort_order: 2,
  },
  {
    id: 'kids-faq-3',
    question: 'My child is starting drum lessons — what do I buy?',
    answer:
      'A pair of 7A wood tip drumsticks and a 6 to 8 inch rubber practice pad. Total cost around £35. The pad makes home practice possible without full kit volume, and the 7A is the size their drum teacher will use in lessons. Ask the teacher first if they recommend a specific size — some traditional teachers still start beginners on a 5A.',
    category: 'products' as const,
    sort_order: 3,
  },
  {
    id: 'kids-faq-4',
    question: 'Do drumsticks make a good gift for a young drummer?',
    answer:
      'Yes — and engraved drumsticks are one of the best gifts you can give a kid who is starting out. A pair with their name on the shaft turns the sticks from a tool into a possession, and that often kicks off a year of more committed practice. We engrave from one pair upwards through the custom configurator with no minimum order.',
    category: 'products' as const,
    sort_order: 4,
  },
  {
    id: 'kids-faq-5',
    question: 'What about kids who hit really hard?',
    answer:
      'A heavy hitting child usually has a technique issue, not a stick choice issue. Heavier sticks reward harder hitting and reinforce the bad habit. Stay on the 7A and ask the drum teacher to spend some lesson time on relaxed grip and rebound. If your child is consistently breaking 7A drumsticks, the problem is rim shots — see why drumsticks break for the technique fix.',
    category: 'products' as const,
    sort_order: 5,
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Drumsticks for kids"
        title="The 7A is the right size."
        subtitle="Lighter weight, smaller diameter, forgiving rebound. The pick for most children aged 7 to 13. Safe wood, safe lacquer, made in the UK."
      />

      <section className="container-page py-16 md:py-20">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-3">Why the 7A</p>
            <h2 className="font-display heading-md text-balance">
              Smaller hands need smaller sticks. The 7A is the only size designed for children
              that is also a real drumstick.
            </h2>
            <p className="mt-5 text-mute text-pretty leading-relaxed">
              A 7A weighs 46 grams. A 5A weighs 52 grams. A 2B weighs 64 grams. For an adult those
              differences are subtle. For a 9 year old learning to control rebound, six grams is
              an enormous gap. The lighter stick is faster, more forgiving, and lets a child
              practise for an hour without wrist fatigue.
            </p>
            <p className="mt-4 text-mute text-pretty leading-relaxed">
              The 13.7 mm shaft sits comfortably in a smaller hand. Anything thicker creates a
              grip your child will compensate for, often with bad habits that take years to
              unlearn. The 7A is the right size and the right diameter for most children aged 7
              to 13.
            </p>
            <p className="mt-4 text-mute text-pretty leading-relaxed">
              Wood tip, every time. Children should be learning to listen to cymbal warmth before
              they learn cymbal articulation. Wood gives the right starting tone.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/product/7a-drumsticks" className="btn-accent">Shop the 7A</Link>
              <Link href="/custom" className="btn-ghost">Engrave their name</Link>
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
              From £13.50 a pair. Engraving available from one pair. The thoughtful gift for a
              kid in lessons.
            </p>
          </div>
        </div>
      </section>

      <section className="grain bg-ink text-bone">
        <div className="container-page py-16 md:py-20">
          <div className="max-w-3xl">
            <p className="eyebrow !text-bone/60 mb-3">After the 7A</p>
            <h2 className="font-display heading-md text-balance">
              When to step up, and the gift option that gets practised every day.
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
            <p className="eyebrow mb-3">Parent FAQ</p>
            <h2 className="font-display heading-md text-balance">
              Five questions parents ask before buying drumsticks for a child.
            </h2>
            <p className="mt-4 text-mute text-pretty">
              Looking for something thoughtful? See{' '}
              <Link href="/custom" className="link-anim">custom engraved drumsticks</Link>. Or read{' '}
              <Link href="/drumsticks-for-beginners" className="link-anim">drumsticks for beginners</Link>{' '}
              for older starters.
            </p>
          </div>
          <div className="lg:col-span-8">
            <FAQAccordion items={FAQ} />
          </div>
        </div>
      </section>

      <CTABanner
        eyebrow="Make it personal"
        title="Engrave their name on the sticks."
        body="A pair of 7A drumsticks with your child's name turns a beginner into a kid who wants to practise. From one pair, no minimum order."
        primaryCta={{ label: 'Customise a pair', href: '/custom' }}
        secondaryCta={{ label: 'Or shop the standard 7A', href: '/product/7a-drumsticks' }}
      />
    </>
  );
}
