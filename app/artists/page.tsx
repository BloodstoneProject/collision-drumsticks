import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { ArtistCard } from '@/components/ArtistCard';
import { getArtists } from '@/lib/data';

export const revalidate = 600;

export const metadata: Metadata = {
  title: 'The Collision Family - Endorsed Artists',
  description: 'Endorsed artists across 156 countries. Pop, rock, jazz, gospel, metal - find the players who play Collision.',
};

export default async function ArtistsPage() {
  const all = await getArtists();
  const total = all.length;
  const countries = new Set(all.map((a) => a.country).filter(Boolean)).size;

  return (
    <>
      <PageHero
        eyebrow="The Family"
        title={`${total}+ artists across ${countries}+ countries.`}
        subtitle="The drummers who play Collision exclusively. Browse the roster, filter by tier, find the players you follow."
      />
      <section className="container-page py-12">
        <div className="flex flex-wrap gap-2 mb-10">
          {(['All', 'Cruise', 'Approach', 'Impact'] as const).map((label) => (
            <button
              key={label}
              type="button"
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] border transition-colors ${
                label === 'All' ? 'bg-ink text-bone border-ink' : 'border-line hover:border-ink'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {all.map((a) => (
            <ArtistCard key={a.id} artist={a} />
          ))}
        </div>
      </section>
    </>
  );
}
