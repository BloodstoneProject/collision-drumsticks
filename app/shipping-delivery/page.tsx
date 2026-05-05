import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { FAQAccordion } from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Shipping & Delivery',
  description:
    'UK and worldwide shipping for Collision drumsticks. Royal Mail, Evri, DPD, FedEx, DHL. Country by country lead times, free shipping over £49.',
};

const UK_OPTIONS = [
  { label: 'Standard (Evri)', time: '3 to 4 working days', price: '£3.99' },
  { label: 'Tracked 48 (Royal Mail)', time: '2 to 3 working days', price: '£4.99' },
  { label: 'Free over £49', time: '3 to 4 working days', price: 'FREE' },
  { label: 'Next day (DPD before 1pm)', time: '1 working day', price: '£8.99' },
  { label: 'Saturday delivery (DPD)', time: 'Next Saturday', price: '£12.99' },
];

const COUNTRY_TIMES = [
  { country: 'Republic of Ireland', time: '3 to 5 working days', from: '£8.99', carrier: 'An Post via Royal Mail', customs: 'Customer pays VAT at delivery on orders over €150.' },
  { country: 'Germany', time: '4 to 6 working days', from: '£11.99', carrier: 'DPD Europe', customs: 'IOSS used for orders under €150, no charge at door.' },
  { country: 'France', time: '4 to 6 working days', from: '£11.99', carrier: 'DPD Europe', customs: 'IOSS under €150, customer pays VAT above.' },
  { country: 'Netherlands', time: '3 to 5 working days', from: '£11.99', carrier: 'DPD Europe', customs: 'IOSS under €150.' },
  { country: 'Belgium', time: '3 to 5 working days', from: '£11.99', carrier: 'DPD Europe', customs: 'IOSS under €150.' },
  { country: 'Spain', time: '5 to 8 working days', from: '£12.99', carrier: 'DPD Europe', customs: 'IOSS under €150.' },
  { country: 'Italy', time: '5 to 8 working days', from: '£12.99', carrier: 'DPD Europe', customs: 'IOSS under €150.' },
  { country: 'Sweden, Denmark, Norway', time: '5 to 8 working days', from: '£14.99', carrier: 'DHL Express Worldwide', customs: 'Norway not in EU, customer pays VAT and clearance fee.' },
  { country: 'United States', time: '5 to 9 working days', from: '£16.99', carrier: 'FedEx International Economy', customs: 'Duty free under USD 800 (Section 321 de minimis).' },
  { country: 'Canada', time: '6 to 10 working days', from: '£18.99', carrier: 'FedEx International Economy', customs: 'GST and duty payable above CAD 150 by recipient.' },
  { country: 'Australia', time: '8 to 12 working days', from: '£22.99', carrier: 'DHL Express Worldwide', customs: 'GST collected at checkout for orders under AUD 1,000.' },
  { country: 'New Zealand', time: '8 to 12 working days', from: '£22.99', carrier: 'DHL Express Worldwide', customs: 'GST collected at checkout under NZD 1,000.' },
  { country: 'Japan, South Korea, Singapore', time: '6 to 10 working days', from: '£19.99', carrier: 'DHL Express Worldwide', customs: 'Duty and consumption tax paid by recipient.' },
  { country: 'UAE, Saudi Arabia', time: '7 to 11 working days', from: '£21.99', carrier: 'DHL Express Worldwide', customs: 'VAT and clearance fee paid by recipient.' },
  { country: 'India', time: '8 to 14 working days', from: '£23.99', carrier: 'DHL Express Worldwide', customs: 'IGST and customs duty paid by recipient.' },
  { country: 'Brazil, Mexico, Argentina', time: '10 to 18 working days', from: '£26.99', carrier: 'DHL Express Worldwide', customs: 'High duty rates apply, expect 60% of order value.' },
  { country: 'South Africa', time: '10 to 14 working days', from: '£24.99', carrier: 'DHL Express Worldwide', customs: 'VAT and duty paid by recipient.' },
  { country: 'Rest of world', time: '10 to 21 working days', from: '£24.99', carrier: 'DHL Express Worldwide', customs: 'Duties handled by recipient. We file all paperwork.' },
];

const SHIPPING_FAQ = [
  {
    id: 'ship-faq-1',
    question: 'When does my order ship?',
    answer:
      'Stock orders placed before 1pm UK time ship the same working day. Orders after 1pm ship the next working day. We do not ship Saturday, Sunday, or UK public holidays. Custom and engraved orders add 7 to 10 working days for production before dispatch.',
    category: 'shipping' as const,
    sort_order: 1,
  },
  {
    id: 'ship-faq-2',
    question: 'How do I track my order?',
    answer:
      'Tracking link is emailed within 24 hours of dispatch (usually under 4). UK orders track on the carrier site (Evri, Royal Mail, or DPD), international orders track end to end on FedEx or DHL. If you have not had tracking after 48 hours, email sales@collisiondrumsticks.com and we will resend.',
    category: 'shipping' as const,
    sort_order: 2,
  },
  {
    id: 'ship-faq-3',
    question: 'Do I pay customs or import tax?',
    answer:
      'Inside the UK, no. Inside the EU, we use IOSS for orders under €150 so VAT is paid at checkout and there is no charge at the door. Above €150 in the EU and for most non EU destinations, the recipient pays duty and tax to the carrier on delivery. The country table above gives the headline rule for each region.',
    category: 'shipping' as const,
    sort_order: 3,
  },
  {
    id: 'ship-faq-4',
    question: 'Can I get next day delivery?',
    answer:
      'On UK addresses (excluding Highlands and Islands), yes. Order before 1pm UK time, select the DPD next day option at checkout, and the parcel will be on your doorstep before 6pm the next working day. Saturday delivery is also available for orders dispatched on a Friday before 1pm.',
    category: 'shipping' as const,
    sort_order: 4,
  },
  {
    id: 'ship-faq-5',
    question: 'My country is not on the list.',
    answer:
      'We have shipped to 98 countries to date, the table above is just the most common destinations. If your country is not listed, the rest of world rate applies and DHL Express Worldwide will quote on the cart page once you enter your address. If DHL does not service your address, we will email you with options.',
    category: 'shipping' as const,
    sort_order: 5,
  },
  {
    id: 'ship-faq-6',
    question: 'What if my parcel is lost or damaged?',
    answer:
      'All shipments are insured. Email sales@collisiondrumsticks.com with your order number and (for damage) a photo within 7 days of delivery. We replace at our cost, no quibble. Lost parcel claims can take 14 days to settle with the carrier but we send the replacement immediately, you do not wait for the claim.',
    category: 'shipping' as const,
    sort_order: 6,
  },
  {
    id: 'ship-faq-7',
    question: 'Can I change my delivery address after placing the order?',
    answer:
      'Up until dispatch, yes, email us straight away and we will catch it on the pack bench. After dispatch, all our carriers allow address change in flight via the tracking link. UK delivery slot changes are also available from the Evri or DPD app on your phone.',
    category: 'shipping' as const,
    sort_order: 7,
  },
];

export default function ShippingPage() {
  return (
    <>
      <PageHero
        eyebrow="Shipping"
        title="Shipping & delivery."
        subtitle="Free UK shipping over £49. Tracked worldwide. Real lead times by country."
      />

      <section className="container-page py-16 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <p className="eyebrow mb-3">United Kingdom</p>
            <h2 className="font-display heading-md mb-4 text-balance">
              Five UK options at checkout.
            </h2>
            <p className="text-mute text-pretty">
              We ship from Newcastle every working day. Standard service is Evri 3 to 4 day. If
              you need it faster, DPD next day before 1pm has not let us down in five years.
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              {UK_OPTIONS.map((o) => (
                <li key={o.label} className="flex justify-between border-b border-line py-3">
                  <span>
                    <span className="font-display text-base">{o.label}</span>
                    <span className="block text-xs text-mute mt-1">{o.time}</span>
                  </span>
                  <strong className="font-display text-lg">{o.price}</strong>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-cream p-8">
            <p className="eyebrow mb-3">Custom orders</p>
            <h3 className="font-display text-2xl mb-3">Add 7 to 10 working days for production.</h3>
            <p className="text-sm text-mute text-pretty">
              Custom engraved sticks are made to order in the workshop. Delivery times above are
              from dispatch, not from order placement.
            </p>
            <p className="mt-6 eyebrow mb-3">Tracking</p>
            <p className="text-sm text-mute text-pretty">
              Every order gets a tracking link by email within 24 hours of dispatch (usually under
              4). If you have not received it after 48 hours, write to{' '}
              <a href="mailto:sales@collisiondrumsticks.com" className="link-anim">
                sales@collisiondrumsticks.com
              </a>
              .
            </p>
            <p className="mt-6 eyebrow mb-3">Working days</p>
            <p className="text-sm text-mute text-pretty">
              Monday to Friday, excluding UK public holidays. We are closed 24 December to 2
              January each year.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ink text-bone">
        <div className="container-page py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="eyebrow !text-bone/60 mb-3">Worldwide</p>
            <h2 className="font-display heading-md text-balance">
              Country by country, real lead times and real customs rules.
            </h2>
            <p className="mt-4 text-bone/70 text-pretty max-w-2xl">
              We have shipped to 98 countries. The table below is the most asked about. From rate
              shown is for orders up to 1kg, charged at the cart, and is fully tracked.
            </p>
          </div>
          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[860px] text-left">
              <thead>
                <tr className="border-b border-bone/30 text-xs uppercase tracking-[0.18em] text-bone/60">
                  <th className="py-4 pr-4 font-semibold">Country</th>
                  <th className="py-4 pr-4 font-semibold">Lead time</th>
                  <th className="py-4 pr-4 font-semibold">From</th>
                  <th className="py-4 pr-4 font-semibold">Carrier</th>
                  <th className="py-4 font-semibold">Customs</th>
                </tr>
              </thead>
              <tbody>
                {COUNTRY_TIMES.map((c) => (
                  <tr key={c.country} className="border-b border-bone/15 align-top">
                    <td className="py-5 pr-4 font-display text-lg leading-tight">{c.country}</td>
                    <td className="py-5 pr-4 text-bone/85 text-sm">{c.time}</td>
                    <td className="py-5 pr-4 text-crimson font-semibold text-sm">{c.from}</td>
                    <td className="py-5 pr-4 text-bone/70 text-sm">{c.carrier}</td>
                    <td className="py-5 text-bone/70 text-sm text-pretty">{c.customs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="container-page py-16 md:py-20 border-t border-line">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <p className="eyebrow mb-3">Shipping FAQ</p>
            <h2 className="font-display heading-md text-balance">
              Everything else worth knowing.
            </h2>
            <p className="mt-4 text-mute text-pretty">
              For returns and refunds, see the{' '}
              <Link href="/returns-exchanges" className="link-anim">
                returns page
              </Link>
              .
            </p>
          </div>
          <div className="lg:col-span-8">
            <FAQAccordion items={SHIPPING_FAQ} />
          </div>
        </div>
      </section>
    </>
  );
}
