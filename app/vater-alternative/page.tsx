import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { CTABanner } from '@/components/CTABanner';
import { FAQAccordion } from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Vater Alternative - Collision Drumsticks',
  description:
    'A UK alternative to Vater Los Angeles 5A and Power 5A. Same hickory, same specs, made by working drummers. Engraving from one pair, free UK shipping over £49.',
};

const COMPARE = [
  {
    spec: 'Wood',
    vt: 'American Hickory',
    cd: 'American Hickory',
    note: 'Identical material',
  },
  {
    spec: '5A length',
    vt: '16.00 in',
    cd: '16.00 in',
    note: 'Identical',
  },
  {
    spec: '5A diameter',
    vt: '14.5 mm',
    cd: '14.4 mm',
    note: '0.1 mm tighter',
  },
  {
    spec: 'Power 5A diameter',
    vt: '14.9 mm',
    cd: '15.1 mm (5B)',
    note: 'Collision 5B is the closest match',
  },
  {
    spec: 'Tip shape',
    vt: 'Acorn',
    cd: 'Acorn',
    note: 'Identical',
  },
  {
    spec: 'Stick pairing tolerance',
    vt: 'Pitch matched',
    cd: 'Pitch and weight matched within 5 percent',
    note: 'Comparable QC',
  },
  {
    spec: 'UK price (5A)',
    vt: 'Around £14',
    cd: 'From £13.50',
    note: 'Direct match',
  },
];

const FAQ = [
  {
    id: 'vt-faq-1',
    question: 'Are Collision drumsticks comparable to Vater Los Angeles 5A?',
    answer:
      'Yes. Both brands use American Hickory at industry standard 5A specs. The Vater LA 5A is a slightly faster taper than our standard 5A — it feels a touch whippier in the hand. Drummers who prefer the Vater LA might prefer our Reach line for similar feel. Drummers who prefer our standard 5A will find Vater LA slightly less stable on the rebound. Both are valid sticks.',
    category: 'products' as const,
    sort_order: 1,
  },
  {
    id: 'vt-faq-2',
    question: 'What is the Collision equivalent of a Vater Power 5A?',
    answer:
      'The closest match in our lineup is the 5B. The Vater Power 5A sits at 14.9 mm diameter, partway between our 5A (14.4 mm) and 5B (15.1 mm). If you specifically want the Vater Power 5A feel, the 5B is the closer of the two. If you find the 5B too heavy on the wrist, the standard 5A is the lighter alternative.',
    category: 'products' as const,
    sort_order: 2,
  },
  {
    id: 'vt-faq-3',
    question: 'Why would I switch from Vater to Collision?',
    answer:
      'Three reasons. One: lower shipping costs into the UK and EU — we are made in Britain, Vater ships from Boston. Two: custom engraving from a single pair, which Vater does not offer outside large bulk orders. Three: support for an independent UK manufacturer if that matters to you. The playing experience is comparable across the standard sizes.',
    category: 'products' as const,
    sort_order: 3,
  },
  {
    id: 'vt-faq-4',
    question: 'Do you have a Vater signature equivalent?',
    answer:
      'Not as a marketed signature line, no. Our endorsed artists have custom specs available through the Backstage Sticks line in the custom configurator. If you currently play a Vater signature stick, send us the spec sheet and we will match it from one pair upwards.',
    category: 'products' as const,
    sort_order: 4,
  },
  {
    id: 'vt-faq-5',
    question: 'Are Vater sticks better quality than other brands?',
    answer:
      'Vater have a strong reputation for pair matching and consistent batches. We hold the same standard — pairs are matched within 5 percent on weight and within a half tone on pitch, with grain alignment inspected on every dowel. Either brand will give you reliable pair to pair consistency.',
    category: 'products' as const,
    sort_order: 5,
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Vater alternative"
        title="The UK answer to Vater LA 5A."
        subtitle="Same American Hickory. Comparable specs. Made by working drummers in Britain. Engraving from one pair, no minimum order."
      />

      <section className="container-page py-16 md:py-20">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <p className="eyebrow mb-3">Side by side</p>
            <h2 className="font-display heading-md text-balance">
              Vater LA 5A and Collision 5A are within tolerance on every spec.
            </h2>
            <p className="mt-4 text-mute text-pretty">
              The Vater Power 5A sits between our 5A and 5B — most drummers crossing over from
              Power 5A end up on the Collision 5B.
            </p>
          </div>
          <div className="lg:col-span-8">
            <div className="overflow-x-auto bg-bone border border-line">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-line text-xs uppercase tracking-[0.18em] text-mute">
                    <th className="py-4 px-5 font-semibold">Spec</th>
                    <th className="py-4 px-5 font-semibold">Vater</th>
                    <th className="py-4 px-5 font-semibold">Collision</th>
                    <th className="py-4 px-5 font-semibold">Note</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARE.map((c) => (
                    <tr key={c.spec} className="border-b border-line align-top">
                      <td className="py-4 px-5 font-display text-base leading-tight">{c.spec}</td>
                      <td className="py-4 px-5 text-sm">{c.vt}</td>
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
              <p className="eyebrow text-crimson">UK shipping advantage</p>
              <p className="mt-4 text-sm text-pretty leading-relaxed">
                We ship from the UK. Vater ships from Boston. UK and EU customers save on
                shipping cost and avoid long transit times.
              </p>
            </div>
            <div className="bg-bone border border-line p-7">
              <p className="eyebrow text-crimson">Engraving from one pair</p>
              <p className="mt-4 text-sm text-pretty leading-relaxed">
                Vater requires bulk for custom orders. We engrave from a single pair through our
                custom configurator with a 7 to 10 day lead time.
              </p>
            </div>
            <div className="bg-bone border border-line p-7">
              <p className="eyebrow text-crimson">Pair matched within 5 percent</p>
              <p className="mt-4 text-sm text-pretty leading-relaxed">
                Same QC standard Vater is known for. Pairs matched within 5 percent on weight and
                within a half tone on pitch.
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
              Five questions Vater players ask before trying Collision.
            </h2>
            <p className="mt-4 text-mute text-pretty">
              Comparing all three of the big US brands? See our{' '}
              <Link href="/vic-firth-alternative" className="link-anim">Vic Firth alternative</Link>{' '}
              and{' '}
              <Link href="/promark-alternative" className="link-anim">ProMark alternative</Link>{' '}
              pages.
            </p>
          </div>
          <div className="lg:col-span-8">
            <FAQAccordion items={FAQ} />
          </div>
        </div>
      </section>

      <CTABanner
        eyebrow="Try one pair"
        title="A pair of 5A, on us if you are not happy."
        body="If your first Collision pair feels worse than your usual Vater, email us within 30 days and we will refund. We back the comparison."
        primaryCta={{ label: 'Try the 5A', href: '/product/5a-drumsticks' }}
        secondaryCta={{ label: 'Take the quiz first', href: '/stick-finder' }}
      />
    </>
  );
}
