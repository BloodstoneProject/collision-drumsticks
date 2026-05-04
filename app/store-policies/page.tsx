import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Store Policies',
  description: 'Shipping, returns, custom orders, and store policies for Collision Drumsticks.',
};

export default function StorePoliciesPage() {
  const policies = [
    { href: '/shipping-delivery', title: 'Shipping & Delivery', body: 'UK and international shipping costs and times.' },
    { href: '/returns-exchanges', title: 'Returns & Exchanges', body: '14-day return policy. Custom order exceptions.' },
    { href: '/privacy-policy', title: 'Privacy Policy', body: 'How we handle your data. GDPR compliant.' },
    { href: '/terms-conditions', title: 'Terms & Conditions', body: 'Terms of sale and site use.' },
    { href: '/faq', title: 'FAQ', body: 'Common questions, answered.' },
  ];
  return (
    <>
      <PageHero eyebrow="Store" title="Store policies." subtitle="Everything we promise, in writing." />
      <section className="container-narrow py-12 md:py-16">
        <div className="space-y-3">
          {policies.map((p) => (
            <Link key={p.href} href={p.href} className="block border border-line hover:border-ink p-6 transition-colors">
              <p className="font-display text-2xl">{p.title}</p>
              <p className="text-mute text-sm mt-1">{p.body}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
