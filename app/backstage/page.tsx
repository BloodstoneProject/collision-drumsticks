import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { CTABanner } from '@/components/CTABanner';
import { FAQAccordion } from '@/components/FAQAccordion';
import { getFAQs } from '@/lib/data';

export const revalidate = 600;

export const metadata: Metadata = {
  title: 'Collision Backstage — Membership for Modern Drummers',
  description:
    'A paid community for serious drummers. Content library, networking, growth strategies. £34/month. Hosted on Kajabi.',
};

const KAJABI_URL = 'https://collision.mykajabi.com/offers/rGyr2hFS/checkout';

export default async function BackstagePage() {
  const faqs = await getFAQs();
  const backstageFaqs = faqs.filter((f) => f.category === 'backstage');
  const doorsOpen = false; // placeholder

  return (
    <>
      <PageHero
        eyebrow="Backstage"
        title="Collision Backstage."
        subtitle="The membership for the modern drummer. Content, community, and growth strategies — built by working pros."
        align="center"
        variant="dark"
      />

      <section className="container-page py-16">
        <div className="max-w-3xl mx-auto">
          <p className="eyebrow mb-3">Why Backstage</p>
          <h2 className="font-display heading-md text-balance">
            Most drummer communities are noise. Backstage is signal.
          </h2>
          <p className="mt-6 text-mute text-pretty leading-relaxed">
            Backstage exists for drummers who treat the kit seriously — gigging musicians,
            educators, content creators, and the players who plan to be. We give you a content
            library that actually moves the needle, a community of pros who pick up the phone, and
            a structured monthly programme on building a career around drums.
          </p>
        </div>
      </section>

      <section className="bg-cream">
        <div className="container-page py-16">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <p className="eyebrow mb-3">What You Get</p>
              <ul className="space-y-3 text-sm">
                {[
                  'Content library — practice routines, gigging templates, business of drums',
                  'Live monthly Q&As with touring pros',
                  'Private community (Discord) — 50+ Backstage crew members',
                  'Social media growth playbooks for drummers',
                  'Booking & rate negotiation guides',
                  'Partner discounts across UK gear suppliers',
                ].map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="text-crimson">✓</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-line bg-bone p-8">
              <p className="eyebrow mb-3">Membership</p>
              <p className="font-display text-5xl">£34<span className="text-2xl text-mute">/mo</span></p>
              <p className="text-sm text-mute mt-2">Cancel anytime. Hosted on Kajabi.</p>
              <div className="mt-6 border-t border-line pt-4">
                <p className="text-xs uppercase tracking-[0.15em] mb-2">Doors</p>
                <p className={doorsOpen ? 'text-amber font-semibold' : 'text-mute font-semibold'}>
                  {doorsOpen ? 'OPEN — join now' : 'CLOSED — join the waitlist'}
                </p>
              </div>
              {doorsOpen ? (
                <a href={KAJABI_URL} target="_blank" rel="noopener noreferrer" className="btn-accent w-full mt-6">
                  Get Your Backstage Pass
                </a>
              ) : (
                <form className="mt-6 flex gap-2">
                  <input type="email" placeholder="your@email.com" className="input-field flex-1" />
                  <button type="submit" className="btn-primary !px-5 !py-3">Notify Me</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="max-w-3xl mx-auto">
          <p className="eyebrow mb-3">FAQ</p>
          <h2 className="font-display heading-md mb-8 text-balance">Backstage questions, answered.</h2>
          <FAQAccordion items={backstageFaqs} />
        </div>
      </section>

      <CTABanner
        title="Open or closed, the brand is built around our artists."
        body="Apply for an endorsement, become a Backstage member, or join the family on Instagram."
        primaryCta={{ label: 'Apply for Endorsement', href: '/endorsements' }}
      />
    </>
  );
}
