import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { CTABanner } from '@/components/CTABanner';
import { FAQAccordion } from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Hickory vs Maple Drumsticks - Which Wood Should You Buy?',
  description:
    'American Hickory is the standard. Maple is lighter and faster but breaks sooner. Side by side comparison of weight, durability, feel, and which wood suits your playing.',
};

const SPECS = [
  { spec: 'Density', a: 'Higher (~750 kg/m³)', b: 'Lower (~620 kg/m³)', diff: 'Hickory is roughly 20 percent denser' },
  { spec: 'Weight at same dimensions', a: 'Heavier', b: 'Lighter', diff: 'A maple 5A weighs ~46 g vs hickory ~52 g' },
  { spec: 'Feel', a: 'Grounded, balanced', b: 'Whippy, fast', diff: 'Maple feels closer to a 7A even at 5A spec' },
  { spec: 'Durability', a: 'High', b: 'Lower', diff: 'Hickory lasts 1.5 to 2x longer than maple' },
  { spec: 'Shock absorption', a: 'High (kinder on wrists)', b: 'Lower (transmits more vibration)', diff: 'Hickory wins for long sets' },
  { spec: 'Sound', a: 'Warmer cymbal tone', b: 'Brighter, more articulated', diff: 'Wood density affects cymbal voicing' },
  { spec: 'Best for', a: 'All round, rock, function, metal', b: 'Jazz, fast technical playing, low volume' },
  { spec: 'Price', a: 'Standard pricing', b: 'Specialty (rare in our lineup)', diff: 'Hickory is the industry default' },
];

const PICK = [
  {
    label: 'Pick hickory if',
    bullets: [
      'You play across multiple genres or volumes',
      'You play any gig that involves rim shots',
      'You want sticks that survive at least four to eight gigs',
      'You play function, rock, theatre, or metal',
      'You are buying your first serious pair',
    ],
    href: '/product/5a-drumsticks',
    cta: 'Shop hickory 5A',
  },
  {
    label: 'Maple is right if',
    bullets: [
      'You play strictly jazz, bebop, or low volume gigs',
      'You play fast technical material where weight matters',
      'You have wrist injuries and need the lightest option',
      'You play short sets where stick durability is irrelevant',
      'You already play 7A hickory and want even lighter',
    ],
    href: '/product/7a-drumsticks',
    cta: 'Or try the 7A hickory',
  },
];

const FAQ = [
  {
    id: 'hm-faq-1',
    question: 'Why is hickory the standard wood for drumsticks?',
    answer:
      'Three reasons. One: density. Hickory is dense enough to drive a kit at full volume but not so dense it transmits painful vibration to the wrists. Two: durability. Hickory fibres run long and straight when cut from the lower trunk, which resists the cracking that ends most sticks. Three: cost. Hickory is widely available across the eastern United States, which keeps the raw material affordable. Maple, oak, and birch all have specific advantages but none beat hickory across all three measures.',
    category: 'products' as const,
    sort_order: 1,
  },
  {
    id: 'hm-faq-2',
    question: 'Are maple drumsticks worse than hickory?',
    answer:
      'Not worse — different. Maple is lighter for the same dimensions, which suits jazz, fast technical playing, and drummers with smaller hands or wrist issues. The trade off is durability. A maple 5A breaks in roughly half the time of a hickory 5A under similar play. If you are willing to pay the durability cost for the lighter feel, maple is a real option. We do not currently make maple sticks because the volume of drummers who specifically need maple is small, and a hickory 7A solves the same lightness problem without the durability hit.',
    category: 'products' as const,
    sort_order: 2,
  },
  {
    id: 'hm-faq-3',
    question: 'What about oak drumsticks?',
    answer:
      'Oak (specifically Japanese Shira Kashi oak) is denser and harder than hickory. The trade off is feel — oak sticks transmit more vibration to the wrists and feel stiffer in the hand. Drummers with healthy wrists who want maximum stick life sometimes prefer oak, especially for marching or heavy metal. We make hickory because it offers the best feel to durability balance for the genres our drummers play.',
    category: 'products' as const,
    sort_order: 3,
  },
  {
    id: 'hm-faq-4',
    question: 'Does the wood actually change the cymbal sound?',
    answer:
      'Yes, marginally. Maple gives a slightly brighter, more articulated cymbal voicing because the lighter wood transfers energy faster. Hickory gives a warmer, fuller tone. Oak gives the brightest, hardest tone. The difference is real but smaller than the difference between wood tip and nylon tip on the same stick. Most drummers cannot tell a hickory 5A from a maple 5A in a blind cymbal test, but they can tell a wood tip from a nylon tip.',
    category: 'products' as const,
    sort_order: 4,
  },
  {
    id: 'hm-faq-5',
    question: 'Why do all Collision drumsticks use American Hickory?',
    answer:
      'Because it is the right material for the genres our drummers play. Pop, indie, rock, function, theatre, gospel, worship, and metal all benefit from hickorys density, durability, and feel. The drummers who specifically need maple (jazz, fast technical work) are well served by our 7A hickory, which solves the lightness problem at hickory durability. We considered adding a maple line and decided the hickory 7A covered the use case.',
    category: 'products' as const,
    sort_order: 5,
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Compare"
        title="Hickory vs Maple."
        subtitle="The two most asked about woods in drumstick manufacture. The short answer: hickory is the standard for a reason. Maple has its place. Oak is a third option."
      />

      <section className="container-page py-16 md:py-20">
        <div className="overflow-x-auto bg-bone border border-line">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-line text-xs uppercase tracking-[0.18em] text-mute">
                <th className="py-4 px-6 font-semibold">Spec</th>
                <th className="py-4 px-6 font-semibold">Hickory</th>
                <th className="py-4 px-6 font-semibold">Maple</th>
                <th className="py-4 px-6 font-semibold">Difference</th>
              </tr>
            </thead>
            <tbody>
              {SPECS.map((s) => (
                <tr key={s.spec} className="border-b border-line align-top">
                  <td className="py-5 px-6 font-display text-lg leading-tight">{s.spec}</td>
                  <td className="py-5 px-6 text-sm">{s.a}</td>
                  <td className="py-5 px-6 text-sm">{s.b}</td>
                  <td className="py-5 px-6 text-sm text-crimson font-semibold text-pretty">{s.diff}</td>
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
            <p className="eyebrow mb-3">Wood comparison FAQ</p>
            <h2 className="font-display heading-md text-balance">
              Five questions every drummer asks about drumstick wood.
            </h2>
            <p className="mt-4 text-mute text-pretty">
              Want to read about how we manufacture? See{' '}
              <Link href="/how-we-make-our-sticks" className="link-anim">how we make our sticks</Link>.
              Or compare{' '}
              <Link href="/compare/wood-tip-vs-nylon-tip" className="link-anim">wood tip vs nylon tip</Link>.
            </p>
          </div>
          <div className="lg:col-span-8">
            <FAQAccordion items={FAQ} />
          </div>
        </div>
      </section>

      <CTABanner
        eyebrow="Hickory is the answer"
        title="Every Collision pair is American Hickory."
        body="The right wood for almost every drumming context. From the 7A for jazz to the 2B for metal, all hickory."
        primaryCta={{ label: 'Shop all drumsticks', href: '/shop/drumsticks' }}
        secondaryCta={{ label: 'How we make our sticks', href: '/how-we-make-our-sticks' }}
      />
    </>
  );
}
