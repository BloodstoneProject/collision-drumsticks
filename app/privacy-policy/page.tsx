import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Collision Drumsticks handles your data. GDPR-compliant.',
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy policy." />
      <section className="container-narrow py-12 md:py-16 space-y-6 text-mute">
        <p className="text-sm">Last updated: 4 May 2026</p>

        <div>
          <h2 className="font-display text-xl text-ink mb-3">Who we are</h2>
          <p>Collision Drumsticks Ltd, registered in England, Newcastle, UK. Contact: sales@collisiondrumsticks.com.</p>
        </div>
        <div>
          <h2 className="font-display text-xl text-ink mb-3">What we collect</h2>
          <p>Order data (name, address, email, phone), payment data (handled by Stripe — we do not store card numbers), newsletter subscribers (email only), endorsement and wholesale enquiries (the data you submit on our forms), and standard analytics (page views, anonymised device info).</p>
        </div>
        <div>
          <h2 className="font-display text-xl text-ink mb-3">Why we collect it</h2>
          <p>To fulfil orders, send relevant updates, review applications, and improve the website. We do not sell your data, ever.</p>
        </div>
        <div>
          <h2 className="font-display text-xl text-ink mb-3">Cookies</h2>
          <p>We use essential cookies (cart, session) and analytics cookies (Vercel Analytics, Google Analytics 4). You can opt out of analytics in our cookie banner.</p>
        </div>
        <div>
          <h2 className="font-display text-xl text-ink mb-3">Your rights</h2>
          <p>Under GDPR you can request access, correction, deletion, or export of your data at any time. Email sales@collisiondrumsticks.com.</p>
        </div>
      </section>
    </>
  );
}
