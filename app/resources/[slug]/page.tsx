import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { format } from 'date-fns';
import { getAllPostSlugs, getPost, getPosts } from '@/lib/data';
import { BlogCard } from '@/components/BlogCard';
import { NewsletterForm } from '@/components/NewsletterForm';

export const revalidate = 600;

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  // Cap pre-rendered slugs to keep the build small; the rest render on demand via ISR
  return slugs.slice(0, 50).map((slug) => ({ slug }));
}

export const dynamicParams = true;

export async function generateMetadata({
  params,
}: PageProps<'/resources/[slug]'>): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      images: [post.featured_image],
      publishedTime: post.published_at,
      authors: [post.author],
    },
  };
}

function renderMarkdown(md: string) {
  // simple line-based renderer for placeholder content
  const lines = md.split('\n');
  const out: React.ReactNode[] = [];
  let key = 0;
  let buffer: string[] = [];

  function flushPara() {
    if (buffer.length === 0) return;
    const text = buffer.join(' ');
    const formatted = text
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="underline hover:text-crimson">$1</a>')
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    out.push(
      <p key={key++} className="text-pretty leading-relaxed text-ink-soft" dangerouslySetInnerHTML={{ __html: formatted }} />
    );
    buffer = [];
  }

  for (const raw of lines) {
    const line = raw.trim();
    if (line.startsWith('## ')) {
      flushPara();
      out.push(
        <h2 key={key++} className="font-display heading-sm mt-12 mb-4">
          {line.slice(3)}
        </h2>
      );
    } else if (line === '') {
      flushPara();
    } else {
      buffer.push(line);
    }
  }
  flushPara();
  return out;
}

export default async function PostPage({ params }: PageProps<'/resources/[slug]'>) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const allPosts = await getPosts();
  const related = allPosts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  const FALLBACK: Record<string, string> = {
    gear: 'https://images.unsplash.com/photo-1606127195898-1cdaf3d5db8a?w=1600&auto=format&fit=crop&q=80',
    tips: 'https://images.unsplash.com/photo-1571974599782-87624638275a?w=1600&auto=format&fit=crop&q=80',
    guides: 'https://images.unsplash.com/photo-1485579149621-3123dd979885?w=1600&auto=format&fit=crop&q=80',
    community: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1600&auto=format&fit=crop&q=80',
    news: 'https://images.unsplash.com/photo-1564544193800-635aaad7a8d3?w=1600&auto=format&fit=crop&q=80',
    'artist-spotlight':
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1600&auto=format&fit=crop&q=80',
  };
  const heroImage = post.featured_image || FALLBACK[post.category] || FALLBACK.guides;

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    image: [heroImage],
    datePublished: post.published_at,
    author: { '@type': 'Person', name: post.author },
    description: post.excerpt,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <article>
        <div className="container-narrow pt-12 md:pt-16">
          <p className="eyebrow mb-3">{post.category.replace('-', ' ')}</p>
          <h1 className="font-display heading-lg text-balance">{post.title}</h1>
          <div className="mt-4 flex items-center gap-4 text-sm text-mute">
            <span>{post.author}</span>
            <span>·</span>
            <span>{format(new Date(post.published_at), 'd MMMM yyyy')}</span>
            <span>·</span>
            <span>{post.reading_time_minutes} min read</span>
          </div>
        </div>

        <div className="container-page mt-10">
          <div className="relative aspect-[16/9] bg-cream">
            <Image src={heroImage} alt={post.title} fill priority sizes="100vw" className="object-cover" />
          </div>
        </div>

        <div className="container-narrow py-12 md:py-16 space-y-4">{renderMarkdown(post.content)}</div>

        <div className="container-narrow py-10">
          <div className="bg-cream p-8 md:p-10 text-center">
            <p className="eyebrow mb-3">Impact Your Inbox</p>
            <h3 className="font-display text-2xl mb-4">More like this, every fortnight.</h3>
            <div className="max-w-sm mx-auto"><NewsletterForm /></div>
          </div>
        </div>

        {related.length > 0 && (
          <section className="container-page py-12 border-t border-line">
            <h2 className="font-display heading-md mb-8">Related Reading</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((p) => (
                <BlogCard key={p.id} post={p} />
              ))}
            </div>
          </section>
        )}

        <div className="container-page pb-12">
          <Link href="/resources" className="text-xs font-semibold uppercase tracking-[0.18em] underline underline-offset-4">
            ← All Resources
          </Link>
        </div>
      </article>
    </>
  );
}
