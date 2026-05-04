import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { BlogCard } from '@/components/BlogCard';
import { NewsletterForm } from '@/components/NewsletterForm';
import { getPosts, getPostsCount, getPostsPaged } from '@/lib/data';

export const revalidate = 600;

const PER_PAGE = 24;

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

export default async function ResourcesPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const sp = await searchParams;
  const page = Math.max(1, Number(sp?.page ?? 1));

  const [total, postsThisPage, latestForFeature] = await Promise.all([
    getPostsCount(),
    getPostsPaged(page, PER_PAGE),
    page === 1 ? getPosts(1) : Promise.resolve([]),
  ]);

  const totalPages = Math.max(1, Math.ceil(total / PER_PAGE));
  const featured = page === 1 ? latestForFeature[0] : null;
  const rest = page === 1 ? postsThisPage.slice(1) : postsThisPage;

  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Resources for drummers."
        subtitle={`${total} guides, gear breakdowns, tips, and artist spotlights. Updated regularly.`}
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

        {totalPages > 1 && (
          <Pagination current={page} total={totalPages} />
        )}

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

function Pagination({ current, total }: { current: number; total: number }) {
  const pages: (number | 'gap')[] = [];
  const window = 1;
  for (let i = 1; i <= total; i++) {
    if (i === 1 || i === total || (i >= current - window && i <= current + window)) {
      pages.push(i);
    } else if (pages[pages.length - 1] !== 'gap') {
      pages.push('gap');
    }
  }
  return (
    <nav className="mt-12 flex items-center justify-center gap-2 text-xs uppercase tracking-[0.15em] font-semibold">
      {current > 1 && (
        <Link
          href={current === 2 ? '/resources' : `/resources?page=${current - 1}`}
          className="px-3 py-2 border border-line hover:border-ink"
        >
          ← Prev
        </Link>
      )}
      {pages.map((p, i) =>
        p === 'gap' ? (
          <span key={`gap-${i}`} className="px-2 text-mute">…</span>
        ) : (
          <Link
            key={p}
            href={p === 1 ? '/resources' : `/resources?page=${p}`}
            className={`px-3 py-2 border ${
              p === current ? 'border-ink bg-ink text-bone' : 'border-line hover:border-ink'
            }`}
          >
            {p}
          </Link>
        )
      )}
      {current < total && (
        <Link
          href={`/resources?page=${current + 1}`}
          className="px-3 py-2 border border-line hover:border-ink"
        >
          Next →
        </Link>
      )}
    </nav>
  );
}
