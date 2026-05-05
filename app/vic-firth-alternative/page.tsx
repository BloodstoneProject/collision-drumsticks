import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { CTABanner } from '@/components/CTABanner';
import { FAQAccordion } from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Vic Firth Alternative - Collision Drumsticks',
  description:
    'A direct UK alternative to Vic Firth American Classic. Same American Hickory, comparable specs, made by working drummers in the UK. Free shipping over £49.',
};

const COMPARE = [
  {
    spec: 'Wood',
    vf: 'American Hickory',
    cd: 'American Hickory',
    note: 'Identical material',
  },
  {
    spec: '5A length',
    vf: '16.00 in',
    cd: '16.00 in',
    note: 'Identical',
  },
  {
    spec: '5A diameter',
    vf: '14.5 mm',
    cd: '14.4 mm',
    note: '0.1 mm tighter',
  },
  {
    spec: '5A weight',
    vf: '~52 g',
    cd: '52 g',
    note: 'Within tolerance',
  },
  {
    spec: 'Tip shape',
    vf: 'Acorn',
    cd: 'Acorn',
    note: 'Identical',
  },
  {
    spec: 'Lacquer',
    vf: 'Clear water based',
    cd: 'Clear water based',
    note: 'Same finish family',
  },
  {
    spec: 'UK price (5A)',
    vf: 'Around £13.50',
    cd: 'From £13.50',
    note: 'Direct match',
  },
  {
    spec: 'Where made',
    vf: 'Maine, USA',
    cd: 'United Kingdom',
    note: 'Lower carbon shipping for UK / EU customers',
  },
];

const FAQ = [
  {
    id: 'vf-faq-1',
    question: 'Are Collision Drumsticks really comparable to Vic Firth?',
    answer:
      'Yes, on the spec sheet. Both brands use American Hickory, both turn to industry standard 5A, 5B, 7A, and 2B dimensions, both finish with a clear water based lacquer. The differences are taper profile (a small feel detail) and country of manufacture. We are made in the UK, which makes us cheaper to ship to UK and EU customers and a real alternative for European drummers paying import inflated Vic Firth prices.',
    category: 'products' as const,
    sort_order: 1,
  },
  {
    id: 'vf-faq-2',
    question: 'Why would I switch from Vic Firth to Collision?',
    answer:
      'Three reasons. One: lower carbon shipping if you are in the UK or EU. Two: support for an independent UK manufacturer rather than a Korean conglomerate (Vic Firth was acquired by D Addario in 2010, who are owned by a Korean parent). Three: custom engraving from one pair upwards, which Vic Firth does not offer outside large bulk orders. The playing experience is comparable.',
    category: 'products' as const,
    sort_order: 2,
  },
  {
    id: 'vf-faq-3',
    question: 'Is the Collision 5A the same as the Vic Firth American Classic 5A?',
    answer:
      'On the spec sheet yes — same length, same wood, near identical diameter and weight. In the hand the small differences are taper profile (Collision tapers slightly faster, giving marginally more rebound speed) and shoulder shape (Collision has a slightly longer shoulder for better cymbal warmth). Most drummers cannot tell the two apart blind. The drummers who can tend to prefer the Collision feel for the rebound.',
    category: 'products' as const,
    sort_order: 3,
  },
  {
    id: 'vf-faq-4',
    question: 'Do you make a Vic Firth signature equivalent?',
    answer:
      'No, and we do not plan to. Signature drumsticks are a specific drummer endorsement product. Our roster of endorsed artists have their own custom specs available through the custom configurator (Backstage Sticks line) but we do not market them as signature products. If you currently play a Vic Firth signature stick, take the spec sheet to our custom configurator and we will match it.',
    category: 'products' as const,
    sort_order: 4,
  },
  {
    id: 'vf-faq-5',
    question: 'Will Vic Firth dealers carry Collision sticks?',
    answer:
      'No — drumstick brand distribution is exclusive in most music stores. UK retailers stocking Collision are listed on our wholesale page, but most customers buy direct from us for the price advantage and the engraving option.',
    category: 'products' as const,
    sort_order: 5,
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Vic Firth alternative"
        title="A UK made stick at the same price."
        subtitle="Same American Hickory. Same 5A, 5B, 7A, 2B sizing. Made in the UK by working drummers, with custom engraving from one pair upwards."
      />

      <section className="container-page py-16 md:py-20">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <p className="eyebrow mb-3">Side by side</p>
            <h2 className="font-display heading-md text-balance">
              Spec for spec, Collision matches Vic Firth American Classic.
            </h2>
            <p className="mt-4 text-mute text-pretty">
              The differences are taper profile, country of manufacture, and the engraving
              option. Everything else is the same.
            </p>
          </div>
          <div className="lg:col-span-8">
            <div className="overflow-x-auto bg-bone border border-line">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-line text-xs uppercase tracking-[0.18em] text-mute">
                    <th className="py-4 px-5 font-semibold">Spec</th>
                    <th className="py-4 px-5 font-semibold">Vic Firth</th>
                    <th className="py-4 px-5 font-semibold">Collision</th>
                    <th className="py-4 px-5 font-semibold">Note</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARE.map((c) => (
                    <tr key={c.spec} className="border-b border-line align-top">
                      <td className="py-4 px-5 font-display text-base leading-tight">{c.spec}</td>
                      <td className="py-4 px-5 text-sm">{c.vf}</td>
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
              <p className="eyebrow text-crimson">Lower shipping cost</p>
              <p className="mt-4 text-sm text-pretty leading-relaxed">
                Made in the UK. Free over £49 in the UK and direct EU rates without the import
                inflation Vic Firth pays at the border.
              </p>
            </div>
            <div className="bg-bone border border-line p-7">
              <p className="eyebrow text-crimson">Engraving from one pair</p>
              <p className="mt-4 text-sm text-pretty leading-relaxed">
                Vic Firth needs bulk minimums for custom. We engrave from a single pair through
                our custom configurator with no minimum order.
              </p>
            </div>
            <div className="bg-bone border border-line p-7">
              <p className="eyebrow text-crimson">Independent UK brand</p>
              <p className="mt-4 text-sm text-pretty leading-relaxed">
                Founded 2009, owner operated, made by working drummers. Vic Firth is now owned by
                D Addario, owned by a Korean parent group.
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
              Five questions Vic Firth players ask before trying Collision.
            </h2>
            <p className="mt-4 text-mute text-pretty">
              Considering other brands too? See our{' '}
              <Link href="/vater-alternative" className="link-anim">Vater alternative</Link> and{' '}
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
        eyebrow="Make the switch"
        title="A pair of 5A, on us if you are not happy."
        body="If your first Collision pair feels worse than your usual Vic Firth, email us within 30 days and we will refund. We back the comparison."
        primaryCta={{ label: 'Try the 5A', href: '/product/5a-drumsticks' }}
        secondaryCta={{ label: 'Take the quiz first', href: '/stick-finder' }}
      />
    </>
  );
}
