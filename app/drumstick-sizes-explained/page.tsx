import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { CTABanner } from '@/components/CTABanner';
import { FAQAccordion } from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Drumstick Sizes Explained - 7A, 5A, 5B, 2B and What They Mean',
  description:
    'A plain English guide to drumstick sizes. What 7A, 5A, 5B and 2B actually mean. Length, diameter, weight, and which size fits your playing.',
};

const SIZES = [
  {
    label: '7A',
    weight: 'Lightest',
    length: '13.97 in',
    diameter: '13.7 mm',
    grams: '46 g',
    bestFor: 'Jazz, brushwork, fast bebop, low volume gigs, small hands',
    href: '/product/7a-drumsticks',
  },
  {
    label: '5A',
    weight: 'Standard',
    length: '16.00 in',
    diameter: '14.4 mm',
    grams: '52 g',
    bestFor: 'Pop, indie, function, recording, the default for any drummer',
    href: '/product/5a-drumsticks',
  },
  {
    label: '5B',
    weight: 'Heavier',
    length: '16.00 in',
    diameter: '15.1 mm',
    grams: '58 g',
    bestFor: 'Rock, alt rock, theatre, bigger pop, fuller volume',
    href: '/product/5b-drumsticks',
  },
  {
    label: '2B',
    weight: 'Heaviest standard',
    length: '16.25 in',
    diameter: '15.6 mm',
    grams: '64 g',
    bestFor: 'Metal, hard rock, orchestral practice, marching pad work',
    href: '/product/2b-drumsticks',
  },
];

const FAQ = [
  {
    id: 'sizes-faq-1',
    question: 'What does the number actually mean?',
    answer:
      'The number is an old shaft diameter spec carried over from early 20th century American drum manufacturers. Lower numbers mean thicker shafts. So a 2B is thicker than a 5B, and a 5B is thicker than a 7A. The numbering is not linear (a 6A does not sit halfway between 5A and 7A) but the direction is consistent. Think of it as a coarse weight ladder: 7A is the lightest off the shelf, 2B is the heaviest standard.',
    category: 'products' as const,
    sort_order: 1,
  },
  {
    id: 'sizes-faq-2',
    question: 'What does the letter mean?',
    answer:
      'The letter was originally for use case. A was orchestra (lighter shaft for finesse), B was band (medium shaft for general use), and S was street and marching (heavy shaft for outdoor projection). In modern drumstick terms only A and B are still common, and the meaning has drifted. Today A is the lighter option in any pair, B is the heavier option, and S only appears in marching specific lines.',
    category: 'products' as const,
    sort_order: 2,
  },
  {
    id: 'sizes-faq-3',
    question: 'Are bigger drumsticks better for beginners?',
    answer:
      'No. Beginners are often handed 2B or even 5B because the teacher wants the student to build wrist strength. This is mostly outdated thinking. A modern beginner is better off on a 5A wood tip — the standard size makes technique transfer to any kit they encounter, the weight is forgiving on the hands, and they will not develop the over reliance on arm strokes that heavier sticks encourage. Start on a 5A unless your teacher specifically asks otherwise.',
    category: 'products' as const,
    sort_order: 3,
  },
  {
    id: 'sizes-faq-4',
    question: 'What about 3A, 8D, or other less common numbers?',
    answer:
      '3A sits between 5A and 5B. Some pop and country drummers prefer it for the tonal middle ground. 8D is a longer, slightly heavier 7A used by jazz and orchestral players who want extra reach. SD1, SD2, and SD4 are concert and pad models. We focus the Collision lineup on the four sizes 95 percent of working drummers actually buy: 7A, 5A, 5B, 2B.',
    category: 'products' as const,
    sort_order: 4,
  },
  {
    id: 'sizes-faq-5',
    question: 'Is there a standard for drumstick sizing across brands?',
    answer:
      'Loosely. A 5A from Collision, Vic Firth, Vater, and ProMark are all within roughly 5 percent of each other on length and diameter. The wood, lacquer, taper profile, and tip shape all vary. So a 5A is broadly the same product across brands, but the feel in the hand can differ. The biggest variable is taper length — a longer taper feels whippier even at the same weight.',
    category: 'products' as const,
    sort_order: 5,
  },
  {
    id: 'sizes-faq-6',
    question: 'How do I move up or down a size without losing my technique?',
    answer:
      'Practise an existing piece you know well at moderate volume on the new size for a week. Do not jump straight onto a gig. Your wrists will adapt to a half step heavier or lighter inside about ten hours of practice. A full step (going from 7A to 5B) takes longer and may require adjusting your stick height and grip slightly.',
    category: 'products' as const,
    sort_order: 6,
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Drumstick guide"
        title="Drumstick sizes explained."
        subtitle="What 7A, 5A, 5B and 2B actually mean. Why the numbering is not linear. And how to pick the right one without buying four pairs to find out."
      />

      <section className="container-page py-16 md:py-20">
        <div className="overflow-x-auto bg-bone border border-line">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-line text-xs uppercase tracking-[0.18em] text-mute">
                <th className="py-4 px-6 font-semibold">Size</th>
                <th className="py-4 px-6 font-semibold">Weight class</th>
                <th className="py-4 px-6 font-semibold">Length</th>
                <th className="py-4 px-6 font-semibold">Diameter</th>
                <th className="py-4 px-6 font-semibold">Mass</th>
                <th className="py-4 px-6 font-semibold">Best for</th>
              </tr>
            </thead>
            <tbody>
              {SIZES.map((s) => (
                <tr key={s.label} className="border-b border-line align-top">
                  <td className="py-5 px-6">
                    <Link href={s.href} className="font-display text-2xl text-crimson link-anim">
                      {s.label}
                    </Link>
                  </td>
                  <td className="py-5 px-6 text-sm">{s.weight}</td>
                  <td className="py-5 px-6 text-sm">{s.length}</td>
                  <td className="py-5 px-6 text-sm">{s.diameter}</td>
                  <td className="py-5 px-6 text-sm">{s.grams}</td>
                  <td className="py-5 px-6 text-sm text-mute text-pretty">{s.bestFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="bg-cream">
        <div className="container-page py-16 md:py-20">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <p className="eyebrow mb-3">The shape of the ladder</p>
              <h2 className="font-display heading-md text-balance">
                Think of it as four steps, each adding around 6 grams.
              </h2>
              <p className="mt-5 text-mute text-pretty leading-relaxed">
                7A to 5A is a 6 gram step up. 5A to 5B is another 6 gram step. 5B to 2B is another
                6 gram step. The numbering looks chaotic because it predates modern stick design,
                but the actual weight progression across the four common sizes is clean and even.
              </p>
              <p className="mt-4 text-mute text-pretty leading-relaxed">
                If your current stick feels close but slightly off, take one step in the right
                direction. Almost no drummer needs to jump two steps. The drummers who do are
                usually moving genres entirely (jazz to metal, function to theatre).
              </p>
            </div>
            <div className="lg:col-span-5 bg-bone p-7">
              <p className="eyebrow text-crimson">Most asked</p>
              <p className="mt-3 font-display text-4xl">5A vs 5B</p>
              <p className="text-sm text-mute mt-3 text-pretty">
                The single most common comparison. Same length, 5B is 0.7 mm thicker and 6 grams
                heavier. The 5A is the do everything stick. The 5B is the rock stick.
              </p>
              <Link href="/compare/5a-vs-5b" className="btn-primary mt-6 w-full">
                Read the 5A vs 5B comparison
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-16 md:py-20 border-t border-line">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <p className="eyebrow mb-3">Sizing FAQ</p>
            <h2 className="font-display heading-md text-balance">
              Six questions about drumstick sizing, answered without the forum threads.
            </h2>
            <p className="mt-4 text-mute text-pretty">
              Want a personalised pick? The{' '}
              <Link href="/stick-finder" className="link-anim">
                stick finder quiz
              </Link>{' '}
              uses six questions to recommend a starting size.
            </p>
          </div>
          <div className="lg:col-span-8">
            <FAQAccordion items={FAQ} />
          </div>
        </div>
      </section>

      <CTABanner
        eyebrow="Try the ladder"
        title="Explorer Pack: 7A, 5A, and 5B in one bundle."
        body="Three of the four standard sizes. Play each for a week. The right answer becomes obvious."
        primaryCta={{ label: 'Buy Explorer Pack', href: '/shop/bundles' }}
        secondaryCta={{ label: 'Take the stick finder quiz', href: '/stick-finder' }}
      />
    </>
  );
}
