import Image from 'next/image';
import type { Artist } from '@/lib/types';

export function Testimonial({ artist }: { artist: Artist }) {
  return (
    <figure className="bg-cream p-8 md:p-10 flex flex-col gap-6 h-full">
      <blockquote className="font-display text-2xl md:text-3xl leading-tight text-ink text-balance">
        “{artist.testimonial_quote}”
      </blockquote>
      <figcaption className="flex items-center gap-3 mt-auto">
        <div className="relative w-12 h-12 rounded-full overflow-hidden bg-ink/10">
          <Image src={artist.photo_url} alt={artist.name} fill sizes="48px" className="object-cover" />
        </div>
        <div>
          <p className="font-semibold text-sm">{artist.name}</p>
          <p className="text-xs text-mute uppercase tracking-[0.1em]">
            {artist.endorsement_tier} · plays {artist.favourite_stick}
          </p>
        </div>
      </figcaption>
    </figure>
  );
}
