import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { ContactForm } from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact Collision',
  description:
    'Get in touch with Collision Drumsticks. sales@collisiondrumsticks.com · 07399 319852 · 09:00–16:00 GMT.',
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Get in touch." subtitle="We answer every email within one business day." />
      <section className="container-page py-12 md:py-16 grid lg:grid-cols-2 gap-12">
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
              <span className="text-mute">  ·  </span>
              <a href="tel:01388488088" className="text-mute hover:text-ink">01388 488088</a>
            </li>
            <li>
              <p className="font-semibold">Hours</p>
              <p className="text-mute">Monday–Friday, 09:00–16:00 GMT</p>
            </li>
            <li>
              <p className="font-semibold">Workshop</p>
              <p className="text-mute">Newcastle, UK<br />Address available on request</p>
            </li>
          </ul>

          <div className="mt-10">
            <p className="eyebrow mb-3">Looking for…</p>
            <ul className="space-y-2 text-sm">
              <li><a href="/endorsements" className="underline hover:text-crimson">Endorsement applications</a></li>
              <li><a href="/wholesale" className="underline hover:text-crimson">Wholesale enquiries</a></li>
              <li><a href="/affiliates" className="underline hover:text-crimson">Affiliate programme</a></li>
              <li><a href="/faq" className="underline hover:text-crimson">FAQ</a></li>
            </ul>
          </div>
        </div>

        <div>
          <p className="eyebrow mb-3">Send a message</p>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
