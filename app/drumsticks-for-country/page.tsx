import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { CTABanner } from '@/components/CTABanner';
import { FAQAccordion } from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Best Drumsticks for Country - 5A Wood Tip',
  description:
    'A 5A wood tip is the country standard. Backbeat punch for the chorus, brushwork compatibility for the verse. The Nashville session stick.',
};

const ALTERNATIVES = [
  {
    model: '7A',
    why: 'For acoustic country, Americana, and singer songwriter sets where finesse matters more than projection. Pairs naturally with brushes.',
    href: '/product/7a-drumsticks',
  },
  {
    model: '5B',
    why: 'For modern country radio and stadium country (Luke Combs, Morgan Wallen) where the kit needs the volume of a rock setup.',
    href: '/product/5b-drumsticks',
  },
];

const FAQ = [
  {
    id: 'country-faq-1',
    question: 'What size drumsticks do country drummers use?',
    answer:
      'The 5A wood tip is the most common Nashville session stick. Country playing rewards a clean backbeat, smooth ride patterns, and the ability to swap between sticks and brushes within a song. The 5A handles all three. Some modern country drummers (the rock end of the genre) play 5B, but the 5A is the standard.',
    category: 'products' as const,
    sort_order: 1,
  },
  {
    id: 'country-faq-2',
    question: 'Wood tip or nylon tip for country?',
    answer:
      'Wood tip almost universally. Country cymbal sounds — warm rides, dry crashes, soft hi hat — are wood tip sounds. Nylon brings an articulation that suits modern pop country at radio level but does not fit traditional country, Americana, or singer songwriter material. Default to wood.',
    category: 'products' as const,
    sort_order: 2,
  },
  {
    id: 'country-faq-3',
    question: 'Do country drummers play with brushes?',
    answer:
      'Yes, regularly. Country and Americana drumming uses brushes more than any genre except jazz. The 5A pairs naturally with the standard wire brush — same length, similar weight, smooth transition during a song. If you play country regularly, keep a pair of brushes in the bag alongside your 5A. We do not yet make brushes — Vic Firth Heritage and Regal Tip Classic are the popular options.',
    category: 'products' as const,
    sort_order: 3,
  },
  {
    id: 'country-faq-4',
    question: 'What about modern stadium country?',
    answer:
      'The big country acts (Luke Combs, Morgan Wallen, Zach Bryan) play heavier than traditional country and the kit follows. Most stadium country drummers play a 5B wood tip rather than a 5A. The arena volume and the heavier production demand the extra mass. If you play modern radio country, stepping up to a 5B is reasonable.',
    category: 'products' as const,
    sort_order: 4,
  },
  {
    id: 'country-faq-5',
    question: 'Should country drummers play traditional grip?',
    answer:
      'Some do, especially older Nashville session players. The traditional grip pairs naturally with brushes and gives the lighter feel some country styles favour. But matched grip is now the dominant choice in country, especially among working session drummers under 50. Pick the grip you play best — neither is wrong for the genre.',
    category: 'products' as const,
    sort_order: 5,
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Drumsticks for country"
        title="The 5A is the answer."
        subtitle="The Nashville session stick. Backbeat punch for the chorus, brush compatibility for the verse. Made in the UK from American Hickory."
      />

      <section className="container-page py-16 md:py-20">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-3">Why the 5A</p>
            <h2 className="font-display heading-md text-balance">
              Country drumming swaps tools mid song. The 5A is the only size that pairs cleanly
              with brushes.
            </h2>
            <p className="mt-5 text-mute text-pretty leading-relaxed">
              Country and Americana use brushes more than any genre other than jazz. A working
              country drummer might play sticks on the chorus, brushes on the verse, and back to
              sticks for the bridge — sometimes within sixteen bars. The 5A transitions smoothly
              with a wire brush because the length and weight are close. A 5B feels heavy after
              brushes. A 7A feels thin against a 22 inch ride.
            </p>
            <p className="mt-4 text-mute text-pretty leading-relaxed">
              Wood tip every time. Country cymbal voicing is warm, dry, and unobtrusive — the
              opposite of nylon tip articulation. The exception is modern stadium country (Luke
              Combs, Morgan Wallen) where the kit borrows from rock production and a 5B wood or
              nylon makes sense.
            </p>
            <p className="mt-4 text-mute text-pretty leading-relaxed">
              The 5A is the most played size in the world for a reason. In country, that reason
              is the dynamic range it offers between chorus volume and verse subtlety, and the
              clean cross over to brushes when the song calls for it.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/product/5a-drumsticks" className="btn-accent">Shop the 5A</Link>
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
              From £13.50 a pair. Free UK shipping over £49. Pairs naturally with wire brushes.
            </p>
          </div>
        </div>
      </section>

      <section className="grain bg-ink text-bone">
        <div className="container-page py-16 md:py-20">
          <div className="max-w-3xl">
            <p className="eyebrow !text-bone/60 mb-3">If 5A is not right</p>
            <h2 className="font-display heading-md text-balance">
              Two alternatives for acoustic and stadium country.
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
            <p className="eyebrow mb-3">Country drummer FAQ</p>
            <h2 className="font-display heading-md text-balance">
              Five questions every country drummer asks before swapping brand.
            </h2>
            <p className="mt-4 text-mute text-pretty">
              Compare the 5A side by side with the{' '}
              <Link href="/compare/5a-vs-5b" className="link-anim">5B</Link> for modern country, or
              read about{' '}
              <Link href="/drumsticks-for-jazz" className="link-anim">drumsticks for jazz</Link> if you
              cross over.
            </p>
          </div>
          <div className="lg:col-span-8">
            <FAQAccordion items={FAQ} />
          </div>
        </div>
      </section>

      <CTABanner
        eyebrow="Adjacent genres"
        title="Drumsticks for jazz, funk, and worship."
        body="Each style has its own answer. Take the quiz, or browse the use case pages."
        primaryCta={{ label: 'Stick finder quiz', href: '/stick-finder' }}
        secondaryCta={{ label: 'For jazz players', href: '/drumsticks-for-jazz' }}
      />
    </>
  );
}
