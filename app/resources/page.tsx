import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { BlogCard } from '@/components/BlogCard';
import { NewsletterForm } from '@/components/NewsletterForm';
import { getPosts } from '@/lib/data';

export const revalidate = 600;
export const metadata: Metadata = {
  title: 'Resources for Drummers',
  description:
    'Gear guides, drummer tips, artist spotlights, and community stories from Collision Drumsticks.',
};

const CATS = [
  { slug: 'all', label: 'All' },
  { slug: 'gear', label: 'Gear' },
  { slug: 'tips', label: 'Tips' },
  { slug: 'guides', label: 'Guides' },
  { slug: 'community', label: 'Community' },
  { slug: 'artist-spotlight', label: 'Artist Spotlights' },
  { slug: 'news', label: 'News' },
];

export default async function ResourcesPage() {
  const sorted = await getPosts();
  const featured = sorted[0];
  const rest = sorted.slice(1, 25);

  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Resources for drummers."
        subtitle="Gear guides, tips from working pros, and community stories. Updated regularly."
      />
      <section className="container-page py-12">
        <div className="flex flex-wrap gap-2 mb-10">
          {CATS.map((c) => (
            <Link
              key={c.slug}
              href={c.slug === 'all' ? '/resources' : `/resources/category/${c.slug}`}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] border transition-colors ${
                c.slug === 'all' ? 'bg-ink text-bone border-ink' : 'border-line hover:border-ink'
              }`}
            >
              {c.label}
            </Link>
          ))}
        </div>

        {featured && (
          <div className="mb-12">
            <BlogCard post={featured} size="large" />
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((p) => (
            <BlogCard key={p.id} post={p} />
          ))}
        </div>

        <div className="mt-20 bg-cream p-10 md:p-14 text-center">
          <p className="eyebrow mb-3">Impact Your Inbox</p>
          <h2 className="font-display heading-md mb-4">Resources, straight to your inbox.</h2>
          <p className="text-mute mb-6 max-w-md mx-auto">No spam. Drumming content only. One email a fortnight.</p>
          <div className="max-w-sm mx-auto"><NewsletterForm /></div>
        </div>
      </section>
    </>
  );
}
