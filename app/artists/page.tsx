import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { ArtistCard } from '@/components/ArtistCard';
import { Testimonial } from '@/components/Testimonial';
import { CTABanner } from '@/components/CTABanner';
import { getArtists, getFeaturedArtists } from '@/lib/data';

export const revalidate = 600;

export const metadata: Metadata = {
  title: 'The Collision Family - Endorsed Artists',
  description:
    'Endorsed artists across 156 countries. Pop, rock, jazz, gospel, metal. Browse the full Collision roster, filter by tier, find the players you follow.',
};

export default async function ArtistsPage() {
  const [all, featured] = await Promise.all([getArtists(), getFeaturedArtists(3)]);

  const total = all.length;
  const countries = new Set(all.map((a) => a.country).filter(Boolean)).size;

  const byTier = all.reduce<Record<string, number>>((acc, a) => {
    const t = a.endorsement_tier || 'cruise';
    acc[t] = (acc[t] || 0) + 1;
    return acc;
  }, {});

  const topCountries = Object.entries(
    all.reduce<Record<string, number>>((acc, a) => {
      if (!a.country) return acc;
      acc[a.country] = (acc[a.country] || 0) + 1;
      return acc;
    }, {}),
  )
    .sort(([, a], [, b]) => b - a)
    .slice(0, 6);

  const topGenres = Object.entries(
    all.reduce<Record<string, number>>((acc, a) => {
      (a.genres || []).forEach((g) => {
        acc[g] = (acc[g] || 0) + 1;
      });
      return acc;
    }, {}),
  )
    .sort(([, a], [, b]) => b - a)
    .slice(0, 6);

  return (
    <>
      <PageHero
        eyebrow="The family"
        title={`${total}+ artists across ${countries}+ countries.`}
        subtitle="The drummers who play Collision. Browse the roster, filter by tier, find the players you follow."
      />

      <section className="bg-cream">
        <div className="container-page py-12 md:py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line">
            <div className="bg-bone p-6">
              <p className="font-display text-5xl">{total.toLocaleString()}</p>
              <p className="eyebrow mt-2">Total artists</p>
            </div>
            <div className="bg-bone p-6">
              <p className="font-display text-5xl">{countries}</p>
              <p className="eyebrow mt-2">Countries</p>
            </div>
            <div className="bg-bone p-6">
              <p className="font-display text-5xl">{(byTier.cruise || 0).toLocaleString()}</p>
              <p className="eyebrow mt-2">Cruise tier</p>
            </div>
            <div className="bg-bone p-6">
              <p className="font-display text-5xl">{(byTier.approach || 0).toLocaleString()}</p>
              <p className="eyebrow mt-2">Approach tier</p>
            </div>
          </div>
        </div>
      </section>

      {featured.length > 0 && (
        <section className="container-page py-16 md:py-20">
          <div className="max-w-3xl mb-10">
            <p className="eyebrow mb-3">Featured this month</p>
            <h2 className="font-display heading-md text-balance">
              Three players the team have been listening to.
            </h2>
            <p className="mt-4 text-mute text-pretty max-w-2xl">
              Rotated monthly by the artist relations team. These are the drummers we have been
              passing round the workshop on Spotify in the last 30 days.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {featured.map((a) => (
              <Testimonial key={a.id} artist={a} />
            ))}
          </div>
        </section>
      )}

      {(topCountries.length > 0 || topGenres.length > 0) && (
        <section className="bg-ink text-bone">
          <div className="container-page py-16 md:py-20">
            <div className="max-w-3xl">
              <p className="eyebrow !text-bone/60 mb-3">By country, by genre</p>
              <h2 className="font-display heading-md text-balance">
                Where the roster lives, what the roster plays.
              </h2>
              <p className="mt-4 text-bone/70 text-pretty max-w-2xl">
                Live counts from the database. Six leading countries and six leading genres,
                scroll the full roster below to see all of it.
              </p>
            </div>
            <div className="mt-12 grid lg:grid-cols-2 gap-12">
              <div>
                <p className="eyebrow !text-bone/60 mb-4">Top countries</p>
                <ul className="space-y-3">
                  {topCountries.map(([country, count]) => (
                    <li key={country} className="flex items-center justify-between border-b border-bone/15 pb-2">
                      <span className="font-display text-lg">{country}</span>
                      <span className="font-display text-2xl text-crimson">{count}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="eyebrow !text-bone/60 mb-4">Top genres</p>
                <ul className="space-y-3">
                  {topGenres.map(([genre, count]) => (
                    <li key={genre} className="flex items-center justify-between border-b border-bone/15 pb-2">
                      <span className="font-display text-lg capitalize">{genre}</span>
                      <span className="font-display text-2xl text-crimson">{count}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="container-page py-12">
        <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
          <div>
            <p className="eyebrow mb-2">Full roster</p>
            <h2 className="font-display heading-md text-balance">
              Every endorsed Collision player.
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
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
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {all.map((a) => (
            <ArtistCard key={a.id} artist={a} />
          ))}
        </div>
      </section>

      <CTABanner
        eyebrow="Join the family"
        title="Three tiers. Open at 1,000 followers."
        body="If you play, post, and gig regularly, you can apply at any tier. The Cruise tier is open to anyone with a real audience, not just touring acts."
        primaryCta={{ label: 'Apply for endorsement', href: '/endorsements' }}
        secondaryCta={{ label: 'See selection criteria', href: '/endorsements#apply' }}
      />
    </>
  );
}
