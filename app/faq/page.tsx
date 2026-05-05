import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { FAQAccordion } from '@/components/FAQAccordion';
import { getFAQs } from '@/lib/data';

export const revalidate = 600;
export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Frequently asked questions about Collision Drumsticks - products, shipping, custom orders, endorsements, wholesale, and Backstage.',
};

const CATEGORIES = [
  { slug: 'general', label: 'General' },
  { slug: 'products', label: 'Products' },
  { slug: 'shipping', label: 'Shipping & Delivery' },
  { slug: 'custom', label: 'Custom Orders' },
  { slug: 'endorsements', label: 'Endorsements' },
  { slug: 'wholesale', label: 'Wholesale' },
  { slug: 'backstage', label: 'Backstage' },
];

export default async function FAQPage() {
  const faqs = await getFAQs();
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <PageHero
        eyebrow="FAQ"
        title="Questions, answered."
        subtitle="Cannot find what you are looking for? Email sales@collisiondrumsticks.com - we reply within one business day."
      />
      <section className="container-page py-12 md:py-16 max-w-4xl">
        {CATEGORIES.map((cat) => {
          const items = faqs.filter((f) => f.category === cat.slug);
          if (items.length === 0) return null;
          return (
            <div key={cat.slug} className="mb-12">
              <h2 className="font-display heading-sm mb-4">{cat.label}</h2>
              <FAQAccordion items={items} />
            </div>
          );
        })}

        <div className="border-t border-line pt-10 mt-12">
          <p className="eyebrow mb-3">Cannot find what you need</p>
          <h2 className="font-display heading-sm mb-4">Try a more specific page.</h2>
          <ul className="grid sm:grid-cols-2 gap-3 text-sm">
            <li>
              <Link href="/contact" className="link-anim">Contact us directly</Link>
              {' '}for a personal reply within one working day.
            </li>
            <li>
              <Link href="/shipping-delivery" className="link-anim">Shipping & delivery</Link>
              {' '}for country by country lead times.
            </li>
            <li>
              <Link href="/returns-exchanges" className="link-anim">Returns & exchanges</Link>
              {' '}for the full returns policy.
            </li>
            <li>
              <Link href="/stick-finder" className="link-anim">Stick finder</Link>
              {' '}if your question is which model to buy.
            </li>
            <li>
              <Link href="/how-we-make-our-sticks" className="link-anim">How we make our sticks</Link>
              {' '}for manufacturing detail.
            </li>
            <li>
              <Link href="/best-drumsticks-uk" className="link-anim">UK customers</Link>
              {' '}for free UK shipping and delivery options.
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
