import { Star } from 'lucide-react';

export function RatingStars({
  rating,
  reviewCount,
  size = 14,
}: {
  rating: number;
  reviewCount?: number;
  size?: number;
}) {
  return (
    <div className="flex items-center gap-1.5 text-amber">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          size={size}
          className={s <= Math.round(rating) ? 'fill-current' : 'text-line fill-current'}
        />
      ))}
      {reviewCount !== undefined && (
        <span className="text-xs text-mute ml-1">
          {rating.toFixed(2)} ({reviewCount})
        </span>
      )}
    </div>
  );
}
