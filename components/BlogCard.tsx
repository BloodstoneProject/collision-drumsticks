import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';
import type { BlogPost } from '@/lib/types';

export function BlogCard({
  post,
  size = 'default',
}: {
  post: BlogPost;
  size?: 'default' | 'large';
}) {
  const aspect = size === 'large' ? 'aspect-[16/9]' : 'aspect-[4/3]';
  return (
    <Link
      href={`/resources/${post.slug}`}
      className="group block bg-bone border border-line hover:border-ink transition-colors"
    >
      <div className={`relative ${aspect} overflow-hidden bg-cream`}>
        <Image
          src={post.featured_image}
          alt={post.title}
          fill
          sizes={size === 'large' ? '100vw' : '(max-width: 768px) 100vw, 33vw'}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5 space-y-2">
        <p className="eyebrow">{post.category.replace('-', ' ')}</p>
        <h3 className={`font-display ${size === 'large' ? 'text-2xl md:text-3xl' : 'text-xl'} leading-tight`}>
          {post.title}
        </h3>
        <p className="text-sm text-mute line-clamp-2">{post.excerpt}</p>
        <p className="text-xs text-mute pt-2">
          {format(new Date(post.published_at), 'd MMM yyyy')} · {post.reading_time_minutes} min read
        </p>
      </div>
    </Link>
  );
}
