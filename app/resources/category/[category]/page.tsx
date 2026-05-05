import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageHero } from '@/components/PageHero';
import { BlogCard } from '@/components/BlogCard';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { getPostsByCategory } from '@/lib/data';

export const revalidate = 600;

const VALID = ['tips', 'gear', 'community', 'news', 'guides', 'artist-spotlight'];

export async function generateStaticParams() {
  return VALID.map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: PageProps<'/resources/category/[category]'>): Promise<Metadata> {
  const { category } = await params;
  return {
    title: `${category.replace('-', ' ')} - Resources`,
    description: `${category.replace('-', ' ')} posts from Collision Drumsticks.`,
  };
}

export default async function CategoryPage({ params }: PageProps<'/resources/category/[category]'>) {
  const { category } = await params;
  if (!VALID.includes(category)) notFound();

  const posts = await getPostsByCategory(category);

  return (
    <>
      <PageHero
        eyebrow="Resources"
        title={category.replace('-', ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
        subtitle={`${posts.length} post${posts.length === 1 ? '' : 's'} in this category.`}
      />
      <div className="container-page pt-6">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Resources', href: '/resources' },
            { label: category.replace('-', ' ') },
          ]}
        />
      </div>
      <section className="container-page py-12">
        {posts.length === 0 ? (
          <p className="text-mute">No posts yet in this category.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((p) => (
              <BlogCard key={p.id} post={p} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
