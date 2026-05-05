import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { CTABanner } from '@/components/CTABanner';
import { FAQAccordion } from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'ProMark Alternative - Collision Drumsticks',
  description:
    'A UK alternative to ProMark Classic 5A and Forward 5A. Same American Hickory, comparable specs, made in the UK. Engraving from one pair, free shipping over £49.',
};

const COMPARE = [
  {
    spec: 'Wood',
    pm: 'American Hickory or Japanese Shira Kashi Oak',
    cd: 'American Hickory',
    note: 'Hickory matches directly',
  },
  {
    spec: '5A length',
    pm: '16.00 in',
    cd: '16.00 in',
    note: 'Identical',
  },
  {
    spec: '5A diameter',
    pm: '14.5 mm',
    cd: '14.4 mm',
    note: '0.1 mm tighter',
  },
  {
    spec: '5A weight',
    pm: '~52 g',
    cd: '52 g',
    note: 'Within tolerance',
  },
  {
    spec: 'Tip shape',
    pm: 'Acorn or oval (varies by model)',
    cd: 'Acorn',
    note: 'Direct match for ProMark Classic',
  },
  {
    spec: 'Pair matching',
    pm: 'Tone matched',
    cd: 'Tone and weight matched within 5 percent',
    note: 'Comparable QC standard',
  },
  {
    spec: 'UK price (5A)',
    pm: 'Around £14',
    cd: 'From £13.50',
    note: 'Direct match',
  },
];

const FAQ = [
  {
    id: 'pm-faq-1',
    question: 'How does Collision compare to ProMark Classic 5A?',
    answer:
      'On the spec sheet they match — same length, near identical diameter, same weight class, same wood. The differences are taper profile (Collision has a slightly faster taper, giving more rebound) and shoulder length (the section between the taper and the tip). Most drummers cannot tell the two apart blind. The price is comparable, the playing experience is comparable.',
    category: 'products' as const,
    sort_order: 1,
  },
  {
    id: 'pm-faq-2',
    question: 'Do you make an oak drumstick like ProMark Shira Kashi?',
    answer:
      'No. We make every Collision pair from American Hickory because it offers the best balance of weight, durability, and feel for the genres we serve. Japanese oak is harder and lasts longer but feels stiff in the hand and is heavier per millimetre of diameter. If you specifically want oak durability, ProMark Shira Kashi is the right product. If you want the hickory standard at a UK price with engraving available, we are the right product.',
    category: 'products' as const,
    sort_order: 2,
  },
  {
    id: 'pm-faq-3',
    question: 'Why would I switch from ProMark to Collision?',
    answer:
      'Three reasons. One: we are made in the UK, so shipping is faster and cheaper if you are in the UK or EU. Two: custom engraving from a single pair, no minimum. ProMark requires bulk for custom orders. Three: support for an independent UK brand if that matters. The hickory playing experience is comparable.',
    category: 'products' as const,
    sort_order: 3,
  },
  {
    id: 'pm-faq-4',
    question: 'What about ProMark Forward 5A?',
    answer:
      'The ProMark Forward range has a forward weighted balance — heavier near the tip. Our standard 5A and 5B are balanced more traditionally. The closest feel match for a Forward 5A user in our lineup is the 5B (slightly heavier, slightly thicker), or our Reach 5A (one inch longer, same weight, which shifts the balance very slightly forward). Try both if you have been on Forward 5A for a while.',
    category: 'products' as const,
    sort_order: 4,
  },
  {
    id: 'pm-faq-5',
    question: 'Are ProMark sticks the best quality on the market?',
    answer:
      'ProMark have an excellent reputation for consistency and pair matching, and they earned it. We hold the same standard — every pair matched within 5 percent on weight and within a half tone on pitch, with grain alignment inspected on every dowel. Either brand will give you reliable batch consistency. The defining variable is which feel you prefer.',
    category: 'products' as const,
    sort_order: 5,
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="ProMark alternative"
        title="The UK answer to ProMark Classic."
        subtitle="Same American Hickory. Comparable specs. Made by working drummers in Britain, with engraving available from a single pair."
      />

      <section className="container-page py-16 md:py-20">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <p className="eyebrow mb-3">Side by side</p>
            <h2 className="font-display heading-md text-balance">
              The Collision 5A and ProMark Classic 5A are within tolerance on every spec.
            </h2>
            <p className="mt-4 text-mute text-pretty">
              The drummers who switch are mostly switching for the price advantage and the
              custom engraving option, not because of any meaningful playing difference.
            </p>
          </div>
          <div className="lg:col-span-8">
            <div className="overflow-x-auto bg-bone border border-line">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-line text-xs uppercase tracking-[0.18em] text-mute">
                    <th className="py-4 px-5 font-semibold">Spec</th>
                    <th className="py-4 px-5 font-semibold">ProMark</th>
                    <th className="py-4 px-5 font-semibold">Collision</th>
                    <th className="py-4 px-5 font-semibold">Note</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARE.map((c) => (
                    <tr key={c.spec} className="border-b border-line align-top">
                      <td className="py-4 px-5 font-display text-base leading-tight">{c.spec}</td>
                      <td className="py-4 px-5 text-sm">{c.pm}</td>
                      <td className="py-4 px-5 text-sm">{c.cd}</td>
                      <td className="py-4 px-5 text-sm text-crimson font-semibold text-pretty">{c.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="container-page py-16 md:py-20">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-bone border border-line p-7">
              <p className="eyebrow text-crimson">Made in the UK</p>
              <p className="mt-4 text-sm text-pretty leading-relaxed">
                Faster delivery for UK and EU customers, lower carbon shipping than US imports,
                and a real alternative to the big three US brands.
              </p>
            </div>
            <div className="bg-bone border border-line p-7">
              <p className="eyebrow text-crimson">Engraving from one pair</p>
              <p className="mt-4 text-sm text-pretty leading-relaxed">
                ProMark requires bulk for custom orders. We engrave from a single pair through
                our custom configurator. 7 to 10 day lead time.
              </p>
            </div>
            <div className="bg-bone border border-line p-7">
              <p className="eyebrow text-crimson">Same QC standard</p>
              <p className="mt-4 text-sm text-pretty leading-relaxed">
                Pairs matched within 5 percent on weight and within a half tone on pitch. Every
                dowel inspected for grain alignment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-16 md:py-20 border-t border-line">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <p className="eyebrow mb-3">Switching FAQ</p>
            <h2 className="font-display heading-md text-balance">
              Five questions ProMark players ask before trying Collision.
            </h2>
            <p className="mt-4 text-mute text-pretty">
              Comparing all three of the big US brands? See our{' '}
              <Link href="/vic-firth-alternative" className="link-anim">Vic Firth alternative</Link>{' '}
              and{' '}
              <Link href="/vater-alternative" className="link-anim">Vater alternative</Link> pages.
            </p>
          </div>
          <div className="lg:col-span-8">
            <FAQAccordion items={FAQ} />
          </div>
        </div>
      </section>

      <CTABanner
        eyebrow="Make the switch"
        title="A pair of 5A, on us if you are not happy."
        body="If your first Collision pair feels worse than your usual ProMark, email us within 30 days and we will refund. We back the comparison."
        primaryCta={{ label: 'Try the 5A', href: '/product/5a-drumsticks' }}
        secondaryCta={{ label: 'Take the quiz first', href: '/stick-finder' }}
      />
    </>
  );
}
