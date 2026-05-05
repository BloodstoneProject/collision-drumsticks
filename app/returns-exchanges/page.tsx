import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { FAQAccordion } from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Returns & Exchanges',
  description:
    '14 day returns on unused product. Free UK return label. International instructions. Custom orders are non returnable. Faulty product replaced free.',
};

const RETURN_REGIONS = [
  {
    region: 'United Kingdom',
    method: 'Free Royal Mail Tracked 48 returns label, emailed within 24 hours of your request.',
    refund: 'Refund processed within 5 working days of arrival back at the workshop.',
  },
  {
    region: 'European Union',
    method: 'You arrange and prepay the return, mark the parcel as RETURNED GOODS on the customs declaration. We refund the original VAT once the parcel arrives.',
    refund: 'Refund processed within 5 working days of arrival. Original outbound shipping is non refundable.',
  },
  {
    region: 'United States & Canada',
    method: 'Return at your cost via the carrier of your choice (FedEx, UPS, USPS). Use the workshop address we send by email and declare RETURNED GOODS so duty is not charged inbound.',
    refund: 'Refund within 5 working days of arrival. Outbound shipping is non refundable. Any duty you paid on the original order is recoverable from the carrier, not from us.',
  },
  {
    region: 'Rest of world',
    method: 'Return at your cost via DHL, FedEx, or your local equivalent. Mark RETURNED GOODS clearly on the customs paperwork. We will email you the workshop address and a returns reference to write on the box.',
    refund: 'Refund within 5 working days of arrival. Outbound shipping and any inbound duty paid by you are non refundable.',
  },
];

const RETURN_STEPS = [
  {
    n: '01',
    title: 'Email us',
    body: 'Write to sales@collisiondrumsticks.com with your order number and what you want to return. No form to fill in.',
  },
  {
    n: '02',
    title: 'Get the label or instructions',
    body: 'UK customers get a free Royal Mail Tracked 48 label by reply. International customers get the workshop address and a returns reference to write on the box.',
  },
  {
    n: '03',
    title: 'Pack and post',
    body: 'Use the original packaging if you can. If not, anything padded and sealed. Post within 7 days of getting the label.',
  },
  {
    n: '04',
    title: 'Refund within 5 working days',
    body: 'Refund hits your original payment method 1 to 5 working days after the parcel arrives back at the workshop. We email you when it goes out.',
  },
];

const NOT_ACCEPTED = [
  {
    title: 'Custom engraved drumsticks',
    body: 'Made to order with your design or text. Not resellable to anyone else, so we cannot take them back. Faulty engraving is a different conversation, see the faulty product section.',
  },
  {
    title: 'Drumsticks that have been played',
    body: 'A pair that has been on a kit cannot be sold to the next customer. Open the box, inspect them, do not play them if you think you might return.',
  },
  {
    title: 'Apparel that has been worn or washed',
    body: 'Try on, do not wear out. Tags should still be attached for an apparel return.',
  },
  {
    title: 'Subscription orders past the 14 day window',
    body: 'Your refill window opens 14 days before each shipment. Skip, swap, or cancel from the customer portal in that window. After the parcel ships the standard return rules apply.',
  },
  {
    title: 'Gift cards',
    body: 'Non refundable, no expiry, transferable. If you bought one for somebody and changed your mind, hold on to it, it will not lapse.',
  },
];

const RETURNS_FAQ = [
  {
    id: 'ret-faq-1',
    question: 'How long do I have to return?',
    answer:
      '14 days from the day your parcel is delivered (per the carrier tracking event). The clock is on receipt of the goods, not on dispatch. If your 14 days falls over a UK public holiday, we extend by the number of working days lost.',
    category: 'general' as const,
    sort_order: 1,
  },
  {
    id: 'ret-faq-2',
    question: 'Do I need the original packaging?',
    answer:
      'Preferred but not required. If the original box is intact, use it. If not, anything padded and sealed is fine, sticks are robust and the workshop receiving team will repack on arrival.',
    category: 'general' as const,
    sort_order: 2,
  },
  {
    id: 'ret-faq-3',
    question: 'Do you do exchanges?',
    answer:
      'No direct exchanges. Return for a refund and place a new order. This is faster for you (the new order ships immediately, you do not wait for the original to arrive back) and cleaner for both of us on the paperwork.',
    category: 'general' as const,
    sort_order: 3,
  },
  {
    id: 'ret-faq-4',
    question: 'My sticks arrived broken or warped. What do I do?',
    answer:
      'Send us a photo within 7 days of delivery and we replace them free of charge with no return required. Our QC catches almost everything before it leaves the workshop, but if a pair has shifted in transit or come through warped we want to know about it. Email sales@collisiondrumsticks.com with the photo and your order number.',
    category: 'general' as const,
    sort_order: 4,
  },
  {
    id: 'ret-faq-5',
    question: 'Can I return part of an order?',
    answer:
      'Yes. Email us with the order number and the SKUs you want to send back. Refund is calculated on the items returned, the rest of the order stays as it is.',
    category: 'general' as const,
    sort_order: 5,
  },
  {
    id: 'ret-faq-6',
    question: 'Who pays return shipping?',
    answer:
      'In the UK, we cover it via a free Royal Mail Tracked 48 label. Internationally, you cover it. The exception is faulty product, where we always cover return shipping at our cost regardless of country.',
    category: 'general' as const,
    sort_order: 6,
  },
  {
    id: 'ret-faq-7',
    question: 'I bought from a stockist. Can I return to you?',
    answer:
      'No. Stockist purchases need to go back through the stockist you bought from, on their returns terms. Email us if you cannot reach the stockist and we will help mediate, but we cannot refund a transaction we did not process.',
    category: 'general' as const,
    sort_order: 7,
  },
  {
    id: 'ret-faq-8',
    question: 'Can I cancel an order before it ships?',
    answer:
      'Yes, no charge. Email us as soon as you decide. Stock orders ship same day if placed before 1pm UK time, so we may already be packing. Custom orders can be cancelled any time before production starts (we send an email when production begins).',
    category: 'general' as const,
    sort_order: 8,
  },
];

export default function ReturnsPage() {
  return (
    <>
      <PageHero
        eyebrow="Returns"
        title="Returns & exchanges."
        subtitle="14 day returns on unused product. Free UK label. Faulty product replaced free worldwide."
      />

      <section className="container-page py-16 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="eyebrow mb-3">14 day return policy</p>
            <h2 className="font-display heading-md mb-4 text-balance">
              The short version.
            </h2>
            <p className="text-mute text-pretty">
              We accept returns within 14 days of delivery on unopened, unused product. UK
              customers get a free Royal Mail Tracked 48 label. International customers cover
              return shipping. Refund is processed to the original payment method within 5 working
              days of the parcel arriving back at the workshop.
            </p>
            <p className="mt-4 text-mute text-pretty">
              Some categories cannot be returned (custom engraved sticks, played sticks, worn
              apparel) and faulty product is handled separately. Both are detailed below.
            </p>
          </div>
          <ol className="grid sm:grid-cols-2 gap-6">
            {RETURN_STEPS.map((s) => (
              <li key={s.n} className="border-t border-ink pt-5">
                <p className="font-display text-2xl text-crimson">{s.n}</p>
                <p className="mt-2 font-display text-xl">{s.title}</p>
                <p className="mt-2 text-sm text-mute text-pretty leading-relaxed">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-cream">
        <div className="container-page py-16 md:py-20">
          <div className="max-w-3xl">
            <p className="eyebrow mb-3">By region</p>
            <h2 className="font-display heading-md text-balance">
              How returns work where you are.
            </h2>
            <p className="mt-4 text-mute text-pretty max-w-2xl">
              Return shipping is free in the UK and at your cost everywhere else. Refund timing
              and customs treatment vary by region, here is the breakdown.
            </p>
          </div>
          <div className="mt-12 grid md:grid-cols-2 gap-px bg-line">
            {RETURN_REGIONS.map((r) => (
              <div key={r.region} className="bg-bone p-7">
                <p className="font-display text-2xl">{r.region}</p>
                <p className="mt-4 eyebrow">Method</p>
                <p className="mt-1 text-sm text-mute text-pretty">{r.method}</p>
                <p className="mt-4 eyebrow">Refund</p>
                <p className="mt-1 text-sm text-mute text-pretty">{r.refund}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16 md:py-20">
        <div className="max-w-3xl">
          <p className="eyebrow mb-3">What we cannot accept</p>
          <h2 className="font-display heading-md text-balance">
            Five categories outside the standard returns window.
          </h2>
        </div>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {NOT_ACCEPTED.map((n) => (
            <div key={n.title} className="border border-line p-6">
              <p className="font-display text-xl">{n.title}</p>
              <p className="mt-3 text-sm text-mute text-pretty leading-relaxed">{n.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ink text-bone">
        <div className="container-page py-16 md:py-20">
          <div className="max-w-2xl">
            <p className="eyebrow !text-bone/60 mb-3">Faulty product</p>
            <h2 className="font-display heading-md text-balance">
              Broken, warped, or QC missed it. Same answer.
            </h2>
            <p className="mt-4 text-bone/80 text-pretty">
              Send a photo to{' '}
              <a href="mailto:sales@collisiondrumsticks.com" className="underline">
                sales@collisiondrumsticks.com
              </a>{' '}
              within 7 days of delivery. We replace at our cost, no return required, anywhere in
              the world. Our weight match tolerance is 1 gram and our visual QC catches almost
              everything before it leaves the workshop. Almost is not always.
            </p>
          </div>
        </div>
      </section>

      <section className="container-page py-16 md:py-20 border-t border-line">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <p className="eyebrow mb-3">Returns FAQ</p>
            <h2 className="font-display heading-md text-balance">
              The questions customers email us most.
            </h2>
            <p className="mt-4 text-mute text-pretty">
              For shipping options and lead times, see the{' '}
              <Link href="/shipping-delivery" className="underline hover:text-crimson">
                shipping page
              </Link>
              .
            </p>
          </div>
          <div className="lg:col-span-8">
            <FAQAccordion items={RETURNS_FAQ} />
          </div>
        </div>
      </section>
    </>
  );
}
