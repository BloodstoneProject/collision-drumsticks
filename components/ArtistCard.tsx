import Image from 'next/image';
import Link from 'next/link';
import type { Artist } from '@/lib/types';

const TIER_LABEL: Record<Artist['endorsement_tier'], string> = {
  cruise: 'Cruise',
  approach: 'Approach',
  impact: 'Impact',
};

export function ArtistCard({ artist }: { artist: Artist }) {
  return (
    <Link
      href={`/artists/${artist.slug}`}
      className="group block bg-bone border border-line hover:border-ink transition-colors"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-cream">
        <Image
          src={artist.photo_url}
          alt={artist.name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute top-3 left-3 bg-bone text-ink text-[0.65rem] uppercase tracking-[0.15em] font-bold px-2 py-1">
          {TIER_LABEL[artist.endorsement_tier]}
        </span>
      </div>
      <div className="p-4 space-y-1">
        <h3 className="font-display text-lg leading-tight">{artist.name}</h3>
        <p className="text-xs text-mute uppercase tracking-[0.1em]">
          {artist.country}{artist.city ? ` · ${artist.city}` : ''}
        </p>
        <div className="flex flex-wrap gap-1 pt-2">
          {artist.genres.slice(0, 3).map((g) => (
            <span key={g} className="text-[10px] uppercase tracking-[0.1em] border border-line px-2 py-0.5">
              {g}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
