import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { CTABanner } from '@/components/CTABanner';
import { FAQAccordion } from '@/components/FAQAccordion';
import { stats } from '@/lib/seed-data';

export const metadata: Metadata = {
  title: 'Best Drumsticks in the UK - Made in Newcastle, Free UK Shipping',
  description:
    'UK made drumsticks from Newcastle. Same day dispatch on stock orders before 1pm. Free UK shipping over £49. American Hickory weight matched to 1g. Used by 250+ endorsed UK and international artists.',
};

const WHY_UK = [
  {
    title: 'UK made',
    body: 'Every stick turned, weighed, and packed in our Newcastle workshop. Not assembled in the UK from imported components, manufactured in the UK end to end.',
  },
  {
    title: 'Same day dispatch',
    body: 'Stock orders placed before 1pm UK time ship the same working day via Evri, Royal Mail Tracked 48, or DPD next day before 1pm.',
  },
  {
    title: 'Free UK shipping over £49',
    body: 'Most pairs are £14 to £18, so a brace of three plus a stick bag clears the threshold. UK delivery typically lands in 2 to 4 working days.',
  },
  {
    title: 'No customs, no duty',
    body: 'Inside the UK, no border charges. Unlike imported brands shipped from the US or Asia, your delivery price at checkout is your final price.',
  },
];

const UK_OPTIONS = [
  { label: 'Standard (Evri)', time: '3 to 4 working days', price: '£3.99' },
  { label: 'Tracked 48 (Royal Mail)', time: '2 to 3 working days', price: '£4.99' },
  { label: 'Free over £49', time: '3 to 4 working days', price: 'FREE' },
  { label: 'Next day (DPD before 1pm)', time: '1 working day', price: '£8.99' },
  { label: 'Saturday delivery (DPD)', time: 'Next Saturday', price: '£12.99' },
];

const UK_HIGHLIGHTS = [
  {
    label: 'Drum schools',
    body: 'Used as the house stick by independent drum schools across London, Manchester, Glasgow, Cardiff, and Birmingham.',
  },
  {
    label: 'Working drummers',
    body: 'On the kit bag of touring acts, function band drummers, theatre pit musicians, and session players the country over.',
  },
  {
    label: 'Independent music shops',
    body: 'Stocked by 40+ independent UK music shops on Stockist and Key Account trade tiers. Faster restock than US imported brands.',
  },
];

const FAQ = [
  {
    id: 'uk-faq-1',
    question: 'Are these actually made in the UK?',
    answer:
      'Yes, end to end. The American Hickory raw stock arrives at our Newcastle workshop in pre cut billets. Every stage from there (turning, weight matching, finishing, QC, packing) happens in the same building. We are not assembling US made sticks in a UK box, we are making them here.',
    category: 'shipping' as const,
    sort_order: 1,
  },
  {
    id: 'uk-faq-2',
    question: 'How fast is UK delivery?',
    answer:
      'For stock orders before 1pm UK time, same working day dispatch. Standard Evri is 3 to 4 working days, Royal Mail Tracked 48 is 2 to 3, DPD next day before 1pm gets it to most UK addresses by 6pm the next working day. Saturday delivery available on Friday orders.',
    category: 'shipping' as const,
    sort_order: 2,
  },
  {
    id: 'uk-faq-3',
    question: 'Is shipping really free over £49?',
    answer:
      'Yes, on every UK address (mainland, Highlands, Islands, NI). The free option uses Evri standard. Faster shipping is paid even on orders over £49, though it is heavily discounted vs the standalone price.',
    category: 'shipping' as const,
    sort_order: 3,
  },
  {
    id: 'uk-faq-4',
    question: 'Where can I buy in person?',
    answer:
      'Through 40+ independent UK music shops we trade with. Email sales@collisiondrumsticks.com with your postcode and we will tell you the nearest stockist. Direct from the Newcastle workshop is by appointment only, we are a manufacturer not a retail showroom.',
    category: 'shipping' as const,
    sort_order: 4,
  },
  {
    id: 'uk-faq-5',
    question: 'Do you sponsor UK drummers?',
    answer:
      `Yes, the Collision endorsement programme has over ${stats.artists} artists worldwide with a strong UK presence across all three tiers (Cruise, Approach, Impact). Open application from 1,000 followers upwards. See the endorsements page for the criteria.`,
    category: 'endorsements' as const,
    sort_order: 5,
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="UK drumsticks"
        title="The best drumsticks in the UK are made in the UK."
        subtitle="Newcastle workshop. Same day dispatch before 1pm. Free shipping over £49. American Hickory, weight matched to 1 gram."
      />

      <section className="reveal container-page py-16 md:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_UK.map((w) => (
            <div key={w.title} className="border-t border-ink pt-5">
              <p className="font-display text-xl">{w.title}</p>
              <p className="mt-2 text-sm text-mute text-pretty leading-relaxed">{w.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="reveal grain bg-ink text-bone">
        <div className="container-page py-16 md:py-20">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <p className="eyebrow !text-bone/60 mb-3">UK delivery</p>
              <h2 className="font-display heading-md text-balance">
                Five UK shipping options at checkout.
              </h2>
              <p className="mt-4 text-bone/70 text-pretty">
                Pick the speed and price that suits the gig. Free shipping standard over £49,
                next day available on every postcode in mainland UK.
              </p>
              <p className="mt-4 text-bone/70 text-pretty">
                For full carrier and customs detail, see the{' '}
                <Link href="/shipping-delivery" className="link-anim">
                  shipping page
                </Link>
                .
              </p>
            </div>
            <div className="lg:col-span-7">
              <ul className="divide-y divide-bone/15">
                {UK_OPTIONS.map((o) => (
                  <li key={o.label} className="flex justify-between py-4">
                    <span>
                      <span className="font-display text-lg">{o.label}</span>
                      <span className="block text-xs text-bone/60 mt-1">{o.time}</span>
                    </span>
                    <strong className="font-display text-2xl text-crimson">{o.price}</strong>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="reveal container-page py-16 md:py-20">
        <div className="max-w-3xl">
          <p className="eyebrow mb-3">Played across the UK</p>
          <h2 className="font-display heading-md text-balance">
            From Newcastle to Cornwall, the kit bags we already live in.
          </h2>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {UK_HIGHLIGHTS.map((h) => (
            <div key={h.label} className="border border-line p-7">
              <p className="font-display text-2xl">{h.label}</p>
              <p className="mt-3 text-sm text-mute text-pretty leading-relaxed">{h.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-mute">
          For the full roster of endorsed artists worldwide,{' '}
          <Link href="/artists" className="link-anim">
            browse the family
          </Link>
          . To apply to the UK roster, see the{' '}
          <Link href="/endorsements" className="link-anim">
            endorsements page
          </Link>
          .
        </p>
      </section>

      <section className="reveal bg-cream">
        <div className="container-page py-16 md:py-20">
          <div className="max-w-3xl">
            <p className="eyebrow mb-3">Pick a model</p>
            <h2 className="font-display heading-md text-balance">
              Four UK favourites by genre.
            </h2>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'For all rounders', model: '5A', href: '/drumsticks-for-beginners' },
              { label: 'For rock', model: '5B', href: '/drumsticks-for-rock' },
              { label: 'For metal', model: '2B', href: '/drumsticks-for-metal' },
              { label: 'For jazz', model: '7A', href: '/drumsticks-for-jazz' },
            ].map((p) => (
              <Link
                key={p.model}
                href={p.href}
                className="block bg-bone border border-line p-6 hover:border-ink transition-colors"
              >
                <p className="eyebrow text-crimson">{p.label}</p>
                <p className="mt-3 font-display text-5xl">{p.model}</p>
                <p className="mt-3 text-xs uppercase tracking-[0.18em] font-semibold">
                  Read the guide &rarr;
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="reveal container-page py-16 md:py-20 border-t border-line">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <p className="eyebrow mb-3">UK customer FAQ</p>
            <h2 className="font-display heading-md text-balance">
              Five questions UK drummers ask first.
            </h2>
            <p className="mt-4 text-mute text-pretty">
              For the full list of FAQs across all topics, the{' '}
              <Link href="/faq" className="link-anim">
                FAQ page
              </Link>{' '}
              has 78 entries across 7 categories.
            </p>
          </div>
          <div className="lg:col-span-8">
            <FAQAccordion items={FAQ} />
          </div>
        </div>
      </section>

      <CTABanner
        eyebrow="Get started"
        title="Pick a stick. Free UK shipping over £49."
        body="Stock orders before 1pm dispatch the same working day."
        primaryCta={{ label: 'Take the stick finder quiz', href: '/stick-finder' }}
        secondaryCta={{ label: 'Browse drumsticks', href: '/shop/drumsticks' }}
      />
    </>
  );
}
