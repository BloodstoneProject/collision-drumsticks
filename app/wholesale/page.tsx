import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { FAQAccordion } from '@/components/FAQAccordion';
import { CTABanner } from '@/components/CTABanner';
import { WholesaleForm } from './WholesaleForm';

export const metadata: Metadata = {
  title: 'Wholesale & Bulk Custom',
  description:
    'Stock Collision in your store. Trade pricing scales from 24 pairs. UK and EU dispatch in 5 days. Plus our 100 Pairs Custom programme.',
};

const PRICING_TIERS = [
  {
    band: 'Starter',
    moq: '24 pairs',
    discount: '30% off RRP',
    note: 'A first order to feel the brand. Mix any in stock SKU.',
  },
  {
    band: 'Stockist',
    moq: '72 pairs',
    discount: '40% off RRP',
    note: 'Standard trade tier. Most independent stores sit here.',
  },
  {
    band: 'Key Account',
    moq: '240 pairs',
    discount: '48% off RRP',
    note: 'Chains, distributors, multi store retailers. Quarterly restock plan.',
  },
  {
    band: 'Distributor',
    moq: 'POA',
    discount: 'Negotiated',
    note: 'Country level distribution. Exclusive territory available.',
  },
];

const TERRITORIES = [
  {
    region: 'UK & Ireland',
    leadTime: '2 to 3 working days',
    carrier: 'DPD overnight on orders dispatched before 1pm.',
  },
  {
    region: 'EU',
    leadTime: '4 to 7 working days',
    carrier: 'DPD Europe and FedEx International Priority. DDP available on request.',
  },
  {
    region: 'United States',
    leadTime: '5 to 9 working days',
    carrier: 'FedEx International Priority. We handle EEI filing for orders over $2,500.',
  },
  {
    region: 'Canada & Mexico',
    leadTime: '7 to 10 working days',
    carrier: 'FedEx International Priority. Customs paperwork prepared on our side.',
  },
  {
    region: 'Australia, NZ, Asia',
    leadTime: '8 to 14 working days',
    carrier: 'DHL Express Worldwide. Air freight quotes for pallet orders.',
  },
  {
    region: 'Rest of world',
    leadTime: '10 to 21 working days',
    carrier: 'DHL Express. We have shipped trade to 38 countries to date.',
  },
];

const STOCKIST_QUOTES = [
  {
    name: 'Westside Drum Shop',
    location: 'Glasgow, UK',
    years: 'Stocking since 2019',
    quote:
      'Collision are the easiest brand we work with. Order Tuesday, in the shop Thursday. The point of sale stuff they send is actually nice, not landfill cardboard like everyone else.',
  },
  {
    name: 'Beat Lab Berlin',
    location: 'Berlin, DE',
    years: 'Stocking since 2021',
    quote:
      'We carry seven stick brands. Collision sell through fastest by some distance, even at the higher trade price. Drummers who try a pair come back for the same SKU.',
  },
  {
    name: 'Mariposa Music',
    location: 'Toronto, CA',
    years: 'Stocking since 2022',
    quote:
      'The free shipping threshold for trade is reasonable, the duties are handled cleanly, and Carlton genuinely picks up the phone if there is a problem. Independent music retail needs more brands like this.',
  },
];

const WHOLESALE_FAQ = [
  {
    id: 'wh-faq-1',
    question: 'What is the minimum first order?',
    answer:
      '24 pairs at the Starter tier, mix and match across any in stock SKU. We do not require you to take a full case of one model. The 24 pair minimum keeps the freight cost economic on your end.',
    category: 'wholesale' as const,
    sort_order: 1,
  },
  {
    id: 'wh-faq-2',
    question: 'How quickly do reorders ship?',
    answer:
      'Trade orders are picked the same working day if placed before 1pm UK time. Most UK accounts have stock on the shelf 48 hours after submitting a PO. EU is 4 to 7 days, US 5 to 9 days. See the territory table above for the full breakdown.',
    category: 'wholesale' as const,
    sort_order: 2,
  },
  {
    id: 'wh-faq-3',
    question: 'Do you offer exclusive territories?',
    answer:
      'For Distributor accounts, yes. We have one country level distributor in five territories already, with first refusal on others as they come up. For Stockist and Key Account tiers we do not enforce exclusivity, but we do not stack three stockists on the same high street either.',
    category: 'wholesale' as const,
    sort_order: 3,
  },
  {
    id: 'wh-faq-4',
    question: 'What marketing support do I get?',
    answer:
      'Co branded social posts (artist tagged where relevant), printed point of sale collateral (counter cards, shelf wobblers, posters) sent free with your second order, listing assets (high res images, copy, dimensions) on a shared Drive folder, and a quarterly newsletter to stockists with new launches before they hit our own site.',
    category: 'wholesale' as const,
    sort_order: 4,
  },
  {
    id: 'wh-faq-5',
    question: 'How are duties and VAT handled outside the UK?',
    answer:
      'EU orders ship DDP (delivered duty paid) on request, so your customer is not asked for anything at the door. US orders over $800 incur duty paid by the importer of record, which is you. We file the EEI for any order over $2,500. Asia and Pacific is sender prepared paperwork, recipient pays duty.',
    category: 'wholesale' as const,
    sort_order: 5,
  },
  {
    id: 'wh-faq-6',
    question: 'Can I return slow moving stock?',
    answer:
      'Yes, on the Stockist tier and above, with 90 days notice, for credit against future orders. We do not refund cash. We have never refused a return request from an account in good standing.',
    category: 'wholesale' as const,
    sort_order: 6,
  },
  {
    id: 'wh-faq-7',
    question: 'Do you do drop shipping?',
    answer:
      'Not currently. We have looked at it twice and the per unit fulfilment cost erodes the margin you would actually take on a sale. We are happy to point you at distributors who do.',
    category: 'wholesale' as const,
    sort_order: 7,
  },
];

export default function WholesalePage() {
  return (
    <>
      <PageHero
        eyebrow="Wholesale"
        title="Stock Collision."
        subtitle="UK based, fast restocking, marketing support, competitive margins. Plus our 100 Pairs Custom programme for bulk engraving."
        backgroundImage="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=1920&auto=format&fit=crop&q=80"
      />

      <section className="container-page py-16">
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            { title: 'UK made', body: 'Newcastle workshop. Faster turnaround than US imported brands.' },
            { title: 'Marketing support', body: 'Co branded social, point of sale collateral, listing assets.' },
            { title: 'Competitive margins', body: 'Trade pricing scaled to volume. No exclusivity required.' },
          ].map((b) => (
            <div key={b.title} className="border-t border-ink pt-5">
              <p className="font-display text-2xl">{b.title}</p>
              <p className="text-mute mt-2 text-sm text-pretty">{b.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grain bg-ink text-bone">
        <div className="container-page py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="eyebrow !text-bone/60 mb-3">Trade pricing</p>
            <h2 className="font-display heading-md text-balance">
              Four bands. Discount scales with the order.
            </h2>
            <p className="mt-4 text-bone/70 text-pretty max-w-2xl">
              Indicative discounts off published RRP for in stock SKUs. We do not chase you up the
              tiers, you order what your shelf needs. Custom and signature lines are quoted
              separately.
            </p>
          </div>
          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[640px] text-left">
              <thead>
                <tr className="border-b border-bone/30 text-xs uppercase tracking-[0.18em] text-bone/60">
                  <th className="py-4 pr-4 font-semibold">Tier</th>
                  <th className="py-4 pr-4 font-semibold">Min order</th>
                  <th className="py-4 pr-4 font-semibold">Discount</th>
                  <th className="py-4 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                {PRICING_TIERS.map((p) => (
                  <tr key={p.band} className="border-b border-bone/15">
                    <td className="py-5 pr-4 font-display text-2xl">{p.band}</td>
                    <td className="py-5 pr-4 text-bone/85">{p.moq}</td>
                    <td className="py-5 pr-4 text-crimson font-semibold">{p.discount}</td>
                    <td className="py-5 text-sm text-bone/70 text-pretty">{p.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-xs text-bone/50">
            Pricing review every January. Existing accounts always honoured at the rate they were
            opened on.
          </p>
        </div>
      </section>

      <section className="container-page py-16 md:py-24">
        <div className="max-w-3xl">
          <p className="eyebrow mb-3">Territory & dispatch</p>
          <h2 className="font-display heading-md text-balance">
            Where we ship trade, and how long it takes.
          </h2>
          <p className="mt-4 text-mute text-pretty max-w-2xl">
            Real lead times from the workshop door, by region. All trade orders go out tracked,
            insured, and signed for at the destination.
          </p>
        </div>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-line">
          {TERRITORIES.map((t) => (
            <div key={t.region} className="bg-bone p-6">
              <p className="font-display text-xl">{t.region}</p>
              <p className="mt-3 text-sm font-semibold text-crimson">{t.leadTime}</p>
              <p className="mt-2 text-sm text-mute text-pretty">{t.carrier}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cream">
        <div className="container-page py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="eyebrow mb-3">Stockist proof</p>
            <h2 className="font-display heading-md text-balance">
              Hear it from accounts that re order every month.
            </h2>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {STOCKIST_QUOTES.map((q) => (
              <article key={q.name} className="bg-bone border border-line p-7 flex flex-col">
                <p className="font-display text-2xl">{q.name}</p>
                <p className="text-sm text-mute">{q.location}</p>
                <p className="eyebrow mt-1">{q.years}</p>
                <blockquote className="mt-5 text-sm text-ink-soft text-pretty leading-relaxed border-l-2 border-crimson pl-4 flex-1">
                  {q.quote}
                </blockquote>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16 md:py-20 border-t border-line">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <p className="eyebrow mb-3">Wholesale FAQ</p>
            <h2 className="font-display heading-md text-balance">
              The questions buyers ask before they place a first PO.
            </h2>
          </div>
          <div className="lg:col-span-8">
            <FAQAccordion items={WHOLESALE_FAQ} />
          </div>
        </div>
      </section>

      <section className="container-page py-16 border-t border-line">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <p className="eyebrow mb-3">100 pairs custom</p>
            <h2 className="font-display heading-md mb-4 text-balance">
              Bulk custom engraving for schools, bands, and brands.
            </h2>
            <p className="text-mute text-pretty leading-relaxed">
              Need 100+ pairs of custom engraved drumsticks? We run regular bulk batches for music
              schools, drum schools, branded merch programmes, and large bands. Trade pricing,
              expedited production where possible, and full design support. For one off custom
              from a single pair, see the{' '}
              <Link href="/custom" className="link-anim">custom configurator</Link>
              .
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              {[
                'From 100 pairs',
                'Up to 4cm by 1.5cm engraving area',
                '14 to 21 day production',
                'Shipped worldwide',
                'Volume pricing scales, ask for a quote',
              ].map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="text-crimson">✓</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 grid grid-cols-3 gap-4 text-sm border-t border-line pt-6">
              <div>
                <p className="font-display text-3xl">£3.20</p>
                <p className="eyebrow mt-1">Per pair, 100</p>
              </div>
              <div>
                <p className="font-display text-3xl">£2.85</p>
                <p className="eyebrow mt-1">Per pair, 250</p>
              </div>
              <div>
                <p className="font-display text-3xl">£2.45</p>
                <p className="eyebrow mt-1">Per pair, 500</p>
              </div>
            </div>
            <p className="mt-3 text-xs text-mute">
              Indicative on a standard 5A blank with single side engraving. Final quote depends on
              the design and finish.
            </p>
          </div>
          <div>
            <p className="eyebrow mb-3">Submit an enquiry</p>
            <WholesaleForm />
            <p className="mt-6 text-xs text-mute">
              For UK shipping options on stock orders, see the{' '}
              <Link href="/shipping-delivery" className="link-anim">shipping page</Link>
              . For made in the UK background, see{' '}
              <Link href="/best-drumsticks-uk" className="link-anim">why UK made</Link>
              .
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        eyebrow="Other ways to work with us"
        title="Endorsements and affiliates also open."
        body="If you sell, play, or promote drumsticks, there is a programme that fits."
        primaryCta={{ label: 'Affiliate programme', href: '/affiliates' }}
        secondaryCta={{ label: 'Endorsements', href: '/endorsements' }}
      />
    </>
  );
}
