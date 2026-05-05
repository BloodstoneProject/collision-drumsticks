import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { CTABanner } from '@/components/CTABanner';
import { FAQAccordion } from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Natural vs Stealth Black Drumsticks - Which to Buy?',
  description:
    'Side by side: Natural oiled hickory vs Stealth Black matte coated. Grip feel, durability, stage look, and which suits your playing.',
};

const SPECS = [
  { spec: 'Wood', natural: 'Grade A American Hickory', stealth: 'Grade A American Hickory' },
  { spec: 'Finish', natural: 'Two coat hand applied food safe linseed oil', stealth: 'Three coat baked water based matte black' },
  { spec: 'Logo', natural: 'Heat branded into wood', stealth: 'Laser etched into matte coat' },
  { spec: 'Grip feel', natural: 'Smooth oiled wood, slightly slicker dry', stealth: 'Slightly tackier matte, better in sweat' },
  { spec: 'Stage look', natural: 'Warm honey hickory tone', stealth: 'Pure matte black' },
  { spec: 'Visible wear', natural: 'Wears to lighter wood gradually', stealth: 'Coat scuffs to wood at high wear points' },
  { spec: 'Weight', natural: 'Identical to Stealth Black', stealth: 'Identical to Natural' },
  { spec: 'Sound', natural: 'Identical to Stealth Black', stealth: 'Identical to Natural' },
  { spec: 'Price', natural: 'Standard', stealth: '+£1 to £2 per pair' },
];

const PICK = [
  {
    label: 'Pick Natural if',
    bullets: [
      'You prefer the look of bare wood',
      'You play in cool venues or rehearsal rooms',
      'You play studio sessions where stage look does not matter',
      'You want the lowest priced version of any model',
      'You like to see the wear pattern on your sticks',
    ],
    href: '/shop/drumsticks',
    cta: 'Browse Natural',
  },
  {
    label: 'Pick Stealth Black if',
    bullets: [
      'You play hot stages, festivals, or sweaty venues',
      'You want a pure black matte stick on stage',
      'You play metal, hard rock, or genres where the look matches',
      'You find Natural slips in sweaty hands',
      'You want a slightly more dramatic visual signature',
    ],
    href: '/shop/drumsticks?subcategory=stealth',
    cta: 'Browse Stealth Black',
  },
];

const FAQ = [
  {
    id: 'ns-faq-1',
    question: 'Do they actually feel different in the hand?',
    answer:
      'Subtly, yes. Natural is the bare oiled wood, smooth and warm. Stealth Black has a fine matte coat that adds about 0.05 mm to the diameter and a slightly tackier surface. Most players notice the difference in the first few minutes then forget about it. The weight is identical between the two.',
    category: 'products' as const,
    sort_order: 1,
  },
  {
    id: 'ns-faq-2',
    question: 'Does the matte coat affect the sound?',
    answer:
      'No, not measurably. The coat is thin enough that the contact tone of stick on cymbal and stick on drum is identical to the bare wood. We have done back to back recordings to confirm this and even careful listening on headphones cannot tell them apart.',
    category: 'products' as const,
    sort_order: 2,
  },
  {
    id: 'ns-faq-3',
    question: 'Will the black coat wear off?',
    answer:
      'At the highest wear points (the tip from cymbal contact, the centre of the shaft from rim shots) you will see the coat scuff to bare wood after a few weeks of heavy play. This is cosmetic only, the stick performance is unchanged. Most touring drummers we ship to consider it part of the look.',
    category: 'products' as const,
    sort_order: 3,
  },
  {
    id: 'ns-faq-4',
    question: 'Can I get my sticks engraved on Stealth Black?',
    answer:
      'Yes. The laser engraving on Stealth Black creates a striking light against dark contrast that looks particularly good on a stage spotlight. Custom engraving is available on every Collision finish. See the custom page for the configurator.',
    category: 'products' as const,
    sort_order: 4,
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Compare"
        title="Natural vs Stealth Black."
        subtitle="Same wood, same dimensions, same weight. The finish is the only thing that changes between the two."
      />

      <section className="container-page py-16 md:py-20">
        <div className="overflow-x-auto bg-bone border border-line">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-line text-xs uppercase tracking-[0.18em] text-mute">
                <th className="py-4 px-6 font-semibold">Spec</th>
                <th className="py-4 px-6 font-semibold">Natural</th>
                <th className="py-4 px-6 font-semibold">Stealth Black</th>
              </tr>
            </thead>
            <tbody>
              {SPECS.map((s) => (
                <tr key={s.spec} className="border-b border-line align-top">
                  <td className="py-5 px-6 font-display text-lg leading-tight">{s.spec}</td>
                  <td className="py-5 px-6 text-sm text-pretty">{s.natural}</td>
                  <td className="py-5 px-6 text-sm text-pretty">{s.stealth}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="bg-cream">
        <div className="container-page py-16 md:py-20">
          <div className="grid md:grid-cols-2 gap-6">
            {PICK.map((p) => (
              <div key={p.label} className="bg-bone border border-line p-7 flex flex-col">
                <p className="eyebrow text-crimson">{p.label}</p>
                <ul className="mt-5 space-y-2 text-sm flex-1">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="text-crimson">✓</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <Link href={p.href} className="btn-primary mt-7 w-full">
                  {p.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16 md:py-20 border-t border-line">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <p className="eyebrow mb-3">Finish FAQ</p>
            <h2 className="font-display heading-md text-balance">
              Four questions every customer asks before they pick.
            </h2>
            <p className="mt-4 text-mute text-pretty">
              For tip type, see the{' '}
              <Link href="/compare/wood-tip-vs-nylon-tip" className="underline hover:text-crimson">
                wood vs nylon comparison
              </Link>
              . For model selection, the{' '}
              <Link href="/compare/5a-vs-5b" className="underline hover:text-crimson">
                5A vs 5B comparison
              </Link>{' '}
              and{' '}
              <Link href="/stick-finder" className="underline hover:text-crimson">
                stick finder quiz
              </Link>{' '}
              are the next places to look.
            </p>
          </div>
          <div className="lg:col-span-8">
            <FAQAccordion items={FAQ} />
          </div>
        </div>
      </section>

      <CTABanner
        eyebrow="Want it engraved"
        title="Custom on either finish, from one pair upwards."
        body="Heat brand on Natural, laser etch on Stealth Black, both look distinctive on stage."
        primaryCta={{ label: 'Build a custom pair', href: '/custom' }}
        secondaryCta={{ label: 'See the full lineup', href: '/shop/drumsticks' }}
      />
    </>
  );
}
