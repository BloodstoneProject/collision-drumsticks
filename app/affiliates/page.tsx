import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { CTABanner } from '@/components/CTABanner';

export const metadata: Metadata = {
  title: 'Affiliate Programme',
  description:
    'Earn 10% commission promoting Collision drumsticks. Marketing assets included. 60-day cookie.',
};

const STEPS = [
  { n: '01', title: 'Sign up', body: 'Apply through our affiliate dashboard. We approve in 48 hours.' },
  { n: '02', title: 'Share', body: 'Use your unique link in YouTube descriptions, Instagram bios, blog posts.' },
  { n: '03', title: 'Earn', body: '10% commission on every order. 60-day cookie. Monthly payout.' },
];

export default function AffiliatesPage() {
  return (
    <>
      <PageHero
        eyebrow="Affiliates"
        title="Earn with Collision."
        subtitle="If you talk drumsticks online, you should be earning commission when your audience buys them."
        align="center"
        backgroundImage="https://images.unsplash.com/photo-1571974599782-87624638275a?w=1920&auto=format&fit=crop&q=80"
      />

      <section className="container-page py-16">
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {STEPS.map((s) => (
            <div key={s.n} className="border border-line p-8 bg-bone">
              <p className="font-display text-5xl text-stone">{s.n}</p>
              <p className="font-display text-2xl mt-2">{s.title}</p>
              <p className="text-mute mt-2 text-sm text-pretty">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <p className="eyebrow mb-3">Commission Structure</p>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between border-b border-line pb-2"><span>Standard</span><strong>10%</strong></li>
              <li className="flex justify-between border-b border-line pb-2"><span>£500+ per month earned</span><strong>12%</strong></li>
              <li className="flex justify-between border-b border-line pb-2"><span>£2,500+ per month earned</span><strong>15%</strong></li>
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-3">What You Get</p>
            <ul className="space-y-2 text-sm">
              {[
                'Marketing asset library (banners, lifestyle imagery, video)',
                'Discount codes for your audience',
                '60-day cookie window',
                'Monthly payout via Stripe',
                'Real-time dashboard',
              ].map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="text-crimson">✓</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a href="https://affiliate.collisiondrumsticks.com" target="_blank" rel="noopener noreferrer" className="btn-accent">
            Apply to the Programme
          </a>
        </div>
      </section>

      <CTABanner
        title="Don’t talk online — but want to play?"
        body="Apply for an artist endorsement instead."
        primaryCta={{ label: 'Endorsement Application', href: '/endorsements' }}
      />
    </>
  );
}
