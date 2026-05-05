import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { CTABanner } from '@/components/CTABanner';
import { FAQAccordion } from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Best Drumsticks for Beginners - Start with the 5A',
  description:
    'The 5A is the universal beginner drumstick: balanced, forgiving, the size every drum teacher in the UK starts a student on. From £13.50 a pair, free UK shipping over £49.',
};

const STARTER_KIT = [
  {
    title: 'One pair of 5A',
    body: 'Your everyday stick. The all rounder that works across rock, pop, jazz, and practice. Buy one pair to start.',
    href: '/product/5a-drumstick',
  },
  {
    title: 'A practice pad',
    body: 'A 12 inch pad with two surfaces (gum rubber and quieter neoprene) is the single highest leverage purchase a beginner can make.',
    href: '/shop/accessories',
  },
  {
    title: 'A stick bag',
    body: 'Holds your sticks, a pad, a key, a metronome lead. Stops sticks rolling around in your kit case.',
    href: '/shop/accessories',
  },
];

const FAQ = [
  {
    id: 'beg-faq-1',
    question: 'Why 5A as the beginner stick?',
    answer:
      'The 5A is the universally accepted starter size. It is heavy enough to develop technique without being so heavy that you fight it, light enough to play fast patterns without straining the wrist, and balanced in a way that translates to almost any other stick you might try later. Every drum teacher we know in the UK starts students on a 5A.',
    category: 'products' as const,
    sort_order: 1,
  },
  {
    id: 'beg-faq-2',
    question: 'How many pairs should I buy to start?',
    answer:
      'One pair is plenty for the first few weeks. Once you are practising 30 minutes a day, get a second pair so you have a backup ready when one breaks. Avoid the temptation to buy a different size as your second pair, build feel on one size first.',
    category: 'products' as const,
    sort_order: 2,
  },
  {
    id: 'beg-faq-3',
    question: 'Wood tip or nylon tip for a beginner?',
    answer:
      'Wood tip. Beginners are not playing loud venues with thick metal cymbals, so the durability advantage of nylon does not matter yet. Wood gives a warmer, more pleasing tone on practice cymbals and a coated head, which is what you will be hitting most. Switch to nylon later if you find yourself playing rock or metal seriously.',
    category: 'products' as const,
    sort_order: 3,
  },
  {
    id: 'beg-faq-4',
    question: 'Are heavier sticks better for building strength?',
    answer:
      'No, this is a common myth. Practising with sticks heavier than you need teaches incorrect technique and builds tension in the wrist and shoulder, both of which are hard to undo. Build technique on a 5A first. Strength comes from time at the kit, not from playing with a 2B you cannot control.',
    category: 'products' as const,
    sort_order: 4,
  },
  {
    id: 'beg-faq-5',
    question: 'How long should one pair last me as a beginner?',
    answer:
      'Most beginners practising 30 to 60 minutes a day get 3 to 6 months from a pair. The most common cause of stick failure for a beginner is not playing too hard, it is hitting the rim accidentally during a fill, which chips the wood. Aim for cleaner technique and your sticks will last twice as long.',
    category: 'products' as const,
    sort_order: 5,
  },
];

export default function BeginnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Drumsticks for beginners"
        title="Start with the 5A."
        subtitle="The universal first drumstick. Balanced, forgiving, the size every drum teacher in the UK starts a student on."
      />

      <section className="container-page py-16 md:py-20">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-3">Why the 5A</p>
            <h2 className="font-display heading-md text-balance">
              The size that gets out of your way while you learn the technique.
            </h2>
            <p className="mt-5 text-mute text-pretty leading-relaxed">
              You will get a hundred opinions online about which stick a beginner should start
              on. Here is the only one that matters: the 5A. It is the size taught at every drum
              school in the UK, the size every working drummer keeps in their bag, and the size
              that translates to anything else you might try in your second year.
            </p>
            <p className="mt-4 text-mute text-pretty leading-relaxed">
              At 16 inches long with a 14.4 mm shaft and 52 grams of weight, the 5A is balanced
              for the rebound that wrist and finger technique actually depends on. Heavier sticks
              build tension. Lighter sticks build sloppy strokes. The 5A is the right floor.
            </p>
            <p className="mt-4 text-mute text-pretty leading-relaxed">
              Wood tip is the right call for a beginner: warmer cymbal sound, easier on practice
              kits and electronic pads, and you simply do not need the durability of nylon yet.
              Natural finish over Stealth Black for the same reason, the wood grip is more
              forgiving on a learning grip.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/product/5a-drumstick" className="btn-accent">Shop the 5A</Link>
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
              From £13.50 a pair. Free UK shipping over £49. The{' '}
              <Link href="/shop/bundles" className="link-anim">
                Starter Pack
              </Link>{' '}
              gives you a 5A, a 5B, and a stick bag in one go.
            </p>
          </div>
        </div>
      </section>

      <section className="grain bg-ink text-bone">
        <div className="container-page py-16 md:py-20">
          <div className="max-w-3xl">
            <p className="eyebrow !text-bone/60 mb-3">Beginner starter kit</p>
            <h2 className="font-display heading-md text-balance">
              The three things you actually need on day one.
            </h2>
            <p className="mt-4 text-bone/70 text-pretty max-w-2xl">
              Skip the gimmicks. A pair of sticks, a pad, and a bag will keep you progressing for
              the first six months without spending more.
            </p>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-px bg-bone/10">
            {STARTER_KIT.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="block bg-ink p-7 hover:bg-ink-soft transition-colors"
              >
                <p className="font-display text-2xl">{s.title}</p>
                <p className="mt-3 text-sm text-bone/75 text-pretty leading-relaxed">{s.body}</p>
                <p className="mt-5 text-xs uppercase tracking-[0.18em] font-semibold text-crimson">
                  Browse &rarr;
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16 md:py-20 border-t border-line">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <p className="eyebrow mb-3">Beginner FAQ</p>
            <h2 className="font-display heading-md text-balance">
              Five things every new drummer asks us in their first month.
            </h2>
            <p className="mt-4 text-mute text-pretty">
              For a side by side of the 5A and 5B, see the{' '}
              <Link href="/compare/5a-vs-5b" className="link-anim">
                comparison page
              </Link>
              . For practice plans and learning content, the{' '}
              <Link href="/resources" className="link-anim">
                resources
              </Link>{' '}
              section is the place to start.
            </p>
          </div>
          <div className="lg:col-span-8">
            <FAQAccordion items={FAQ} />
          </div>
        </div>
      </section>

      <CTABanner
        eyebrow="When you are ready for more"
        title="Take the stick finder quiz."
        body="Six questions and we land you on the right model for what you actually play."
        primaryCta={{ label: 'Find my next stick', href: '/stick-finder' }}
        secondaryCta={{ label: 'Browse drumsticks', href: '/shop/drumsticks' }}
      />
    </>
  );
}
