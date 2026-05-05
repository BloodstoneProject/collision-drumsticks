import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { ContactForm } from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact Collision',
  description:
    'Get in touch with Collision Drumsticks. sales@collisiondrumsticks.com, 07399 319852, 09:00 to 16:00 GMT, Monday to Friday. One business day reply on all email.',
};

const ROUTING = [
  {
    label: 'Order question',
    sla: 'Same working day before 4pm',
    email: 'sales@collisiondrumsticks.com',
    note: 'Tracking, delivery date, change of address, refund status. Quote your order number.',
  },
  {
    label: 'Faulty or missing item',
    sla: 'Same working day before 4pm',
    email: 'sales@collisiondrumsticks.com',
    note: 'Photo and order number gets you a replacement or refund without a return ticket.',
  },
  {
    label: 'Custom or bulk quote',
    sla: 'Within 24 hours',
    email: 'custom@collisiondrumsticks.com',
    note: 'Use the configurator for one off custom. Email for 100+ pair runs and white label.',
  },
  {
    label: 'Wholesale or stockist',
    sla: 'Within 24 hours',
    email: 'trade@collisiondrumsticks.com',
    note: 'New trade applications, reorders, marketing collateral. See the wholesale page first.',
  },
  {
    label: 'Press or media',
    sla: 'Within 48 hours',
    email: 'press@collisiondrumsticks.com',
    note: 'Interviews with Carlton, product samples for review, asset requests, comment.',
  },
  {
    label: 'Endorsements',
    sla: '5 working days',
    email: 'artists@collisiondrumsticks.com',
    note: 'Apply through the endorsements page rather than emailing. We read every application.',
  },
];

const CHANNELS = [
  { label: 'Instagram', handle: '@collisiondrumsticks', body: 'DMs answered Monday to Friday by the artist relations team. Tag us in clips, we reshare the best ones.' },
  { label: 'YouTube', handle: '@collisiondrumsticks', body: 'Long form workshop content, artist features, technique deep dives. New video every other week.' },
  { label: 'Discord', handle: 'Backstage members only', body: 'Private community for Backstage members. Daily activity, monthly live Q&As, partner discounts.' },
  { label: 'Newsletter', handle: 'collisiondrumsticks.com/subscribe', body: 'One email a month, no more. New launches, member only colourways, recent press.' },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch."
        subtitle="One business day reply on email. Same day if you write before 4pm UK time."
      />

      <section className="container-page py-12 md:py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <p className="eyebrow mb-3">Direct</p>
            <ul className="space-y-4 text-sm">
              <li>
                <p className="font-semibold">Email</p>
                <a href="mailto:sales@collisiondrumsticks.com" className="text-mute hover:text-ink">
                  sales@collisiondrumsticks.com
                </a>
              </li>
              <li>
                <p className="font-semibold">Phone</p>
                <a href="tel:07399319852" className="text-mute hover:text-ink">07399 319852</a>
                <span className="text-mute"> &middot; </span>
                <a href="tel:01388488088" className="text-mute hover:text-ink">01388 488088</a>
              </li>
              <li>
                <p className="font-semibold">Hours</p>
                <p className="text-mute">Monday to Friday, 09:00 to 16:00 GMT</p>
              </li>
              <li>
                <p className="font-semibold">Workshop</p>
                <p className="text-mute">Newcastle, UK<br />Address available on request</p>
              </li>
            </ul>

            <div className="mt-10">
              <p className="eyebrow mb-3">Self serve first</p>
              <ul className="space-y-2 text-sm">
                <li><Link href="/faq" className="underline hover:text-crimson">FAQ (52 entries across 7 topics)</Link></li>
                <li><Link href="/shipping-delivery" className="underline hover:text-crimson">Shipping & delivery times by country</Link></li>
                <li><Link href="/returns-exchanges" className="underline hover:text-crimson">Returns & refund policy</Link></li>
                <li><Link href="/endorsements" className="underline hover:text-crimson">Endorsement applications</Link></li>
                <li><Link href="/wholesale" className="underline hover:text-crimson">Wholesale enquiries</Link></li>
                <li><Link href="/affiliates" className="underline hover:text-crimson">Affiliate programme</Link></li>
              </ul>
            </div>
          </div>

          <div>
            <p className="eyebrow mb-3">Send a message</p>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="bg-ink text-bone">
        <div className="container-page py-16 md:py-20">
          <div className="max-w-3xl">
            <p className="eyebrow !text-bone/60 mb-3">Routing</p>
            <h2 className="font-display heading-md text-balance">
              Send it to the right address. Get a faster answer.
            </h2>
            <p className="mt-4 text-bone/70 text-pretty max-w-2xl">
              Six inboxes, six teams. SLA below is the worst case, most messages get a reply
              significantly faster.
            </p>
          </div>
          <div className="mt-12 grid md:grid-cols-2 gap-px bg-bone/10">
            {ROUTING.map((r) => (
              <article key={r.label} className="bg-ink p-6">
                <p className="font-display text-xl">{r.label}</p>
                <p className="mt-2 text-sm">
                  <span className="eyebrow !text-crimson">SLA</span>
                  <span className="ml-2 text-bone/85">{r.sla}</span>
                </p>
                <p className="mt-1 text-sm">
                  <a href={`mailto:${r.email}`} className="text-bone/85 underline hover:text-crimson">
                    {r.email}
                  </a>
                </p>
                <p className="mt-3 text-sm text-bone/65 text-pretty">{r.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16 md:py-20">
        <div className="max-w-3xl">
          <p className="eyebrow mb-3">Find us elsewhere</p>
          <h2 className="font-display heading-md text-balance">Four other places we live online.</h2>
          <p className="mt-4 text-mute text-pretty max-w-2xl">
            Email is fastest for an answer. Social is best for keeping up with launches and seeing
            what the artists are playing.
          </p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CHANNELS.map((c) => (
            <div key={c.label} className="border border-line p-6">
              <p className="font-display text-2xl">{c.label}</p>
              <p className="text-xs uppercase tracking-[0.18em] text-crimson mt-1">{c.handle}</p>
              <p className="mt-3 text-sm text-mute text-pretty leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
