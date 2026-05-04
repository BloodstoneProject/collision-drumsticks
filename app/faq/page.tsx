import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { FAQAccordion } from '@/components/FAQAccordion';
import { faqs } from '@/lib/seed-data';

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Frequently asked questions about Collision Drumsticks — products, shipping, custom orders, endorsements, wholesale, and Backstage.',
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

export default function FAQPage() {
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
        subtitle="Cannot find what you are looking for? Email sales@collisiondrumsticks.com — we reply within one business day."
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
      </section>
    </>
  );
}
