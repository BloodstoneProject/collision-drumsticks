import Image from 'next/image';
import Link from 'next/link';
import { Star } from 'lucide-react';
import type { Product } from '@/lib/types';
import { formatPrice } from '@/lib/utils';

const BADGE_LABEL: Record<string, string> = {
  'most-popular': 'Most Popular',
  'best-seller': 'Best Seller',
  'staff-pick': 'Staff Pick',
  'new-release': 'New',
};

export function ProductCard({ product, eager = false }: { product: Product; eager?: boolean }) {
  const lowest = product.variants.length
    ? Math.min(...product.variants.map((v) => v.price_gbp))
    : product.base_price_gbp;
  const hasMulti = product.variants.length > 1;

  return (
    <Link
      href={`/product/${product.slug}`}
      className="group block bg-bone border border-line hover:border-ink transition-colors"
    >
      <div className="relative aspect-square overflow-hidden bg-cream">
        <Image
          src={product.primary_image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          priority={eager}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-ink text-bone text-[0.65rem] uppercase tracking-[0.15em] font-bold px-2 py-1">
            {BADGE_LABEL[product.badge]}
          </span>
        )}
      </div>
      <div className="p-4 space-y-2">
        <h3 className="font-display text-lg leading-tight">{product.name}</h3>
        <div className="flex items-center gap-2 text-xs">
          <Star size={12} fill="currentColor" className="text-amber" />
          <span className="font-semibold">{product.average_rating.toFixed(2)}</span>
          <span className="text-mute">({product.review_count})</span>
        </div>
        <p className="text-sm text-mute line-clamp-2">{product.short_description}</p>
        <p className="font-semibold pt-1">
          {hasMulti ? 'From ' : ''}
          {formatPrice(lowest)}
        </p>
      </div>
    </Link>
  );
}
