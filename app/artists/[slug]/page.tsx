import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { artists } from '@/lib/seed-data';
import { getProducts } from '@/lib/data';
import { ArtistCard } from '@/components/ArtistCard';

export const revalidate = 3600;

export async function generateStaticParams() {
  return artists.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<'/artists/[slug]'>): Promise<Metadata> {
  const { slug } = await params;
  const artist = artists.find((a) => a.slug === slug);
  if (!artist) return {};
  return {
    title: `${artist.name} - Collision Artist`,
    description: artist.short_bio,
    openGraph: { images: [artist.photo_url] },
  };
}

const TIER_LABEL = { cruise: 'Cruise', approach: 'Approach', impact: 'Impact' } as const;

export default async function ArtistPage({ params }: PageProps<'/artists/[slug]'>) {
  const { slug } = await params;
  const artist = artists.find((a) => a.slug === slug);
  if (!artist) notFound();

  const products = await getProducts();
  const stick = products.find((p) => p.stick_size === artist.favourite_stick && !p.subcategory?.includes('stealth'));
  const related = artists.filter((a) => a.id !== artist.id && a.genres.some((g) => artist.genres.includes(g))).slice(0, 4);

  const personLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: artist.name,
    image: artist.photo_url,
    description: artist.bio,
    nationality: artist.country,
    sameAs: [
      artist.instagram_handle ? `https://www.instagram.com/${artist.instagram_handle}` : null,
      artist.youtube_handle ? `https://www.youtube.com/@${artist.youtube_handle}` : null,
    ].filter(Boolean),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }} />
      <article>
        <section className="bg-ink text-bone">
          <div className="container-page py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/5] bg-ink-soft">
              <Image src={artist.photo_url} alt={artist.name} fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
            <div>
              <p className="eyebrow !text-bone/60 mb-3">{TIER_LABEL[artist.endorsement_tier]} · Joined {artist.joined_year}</p>
              <h1 className="font-display heading-xl text-balance">{artist.name}</h1>
              <p className="mt-4 text-bone/70">
                {artist.country}{artist.city ? ` · ${artist.city}` : ''}
              </p>
              <div className="flex flex-wrap gap-2 mt-6">
                {artist.genres.map((g) => (
                  <span key={g} className="text-[11px] uppercase tracking-[0.12em] border border-bone/20 px-3 py-1.5">
                    {g}
                  </span>
                ))}
              </div>
              <blockquote className="mt-8 font-display text-2xl md:text-3xl text-bone/90 text-balance">
                “{artist.testimonial_quote}”
              </blockquote>
              <div className="mt-8 flex gap-4">
                {artist.instagram_handle && (
                  <a
                    href={`https://www.instagram.com/${artist.instagram_handle}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs uppercase tracking-[0.15em] hover:text-amber underline-offset-4 hover:underline"
                  >
                    Instagram · @{artist.instagram_handle}
                  </a>
                )}
                {artist.youtube_handle && (
                  <a
                    href={`https://www.youtube.com/@${artist.youtube_handle}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs uppercase tracking-[0.15em] hover:text-amber underline-offset-4 hover:underline"
                  >
                    YouTube · {artist.youtube_handle}
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="container-page py-16 md:py-20 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h2 className="font-display heading-md mb-4">About {artist.name.split(' ')[0]}</h2>
            <p className="text-mute leading-relaxed text-pretty">{artist.bio}</p>
          </div>
          {stick && (
            <aside className="border border-line p-6 bg-cream h-fit">
              <p className="eyebrow mb-3">My Stick</p>
              <Link href={`/product/${stick.slug}`} className="block group">
                <div className="relative aspect-square bg-bone mb-3">
                  <Image src={stick.primary_image} alt={stick.name} fill sizes="240px" className="object-cover" />
                </div>
                <p className="font-display text-xl group-hover:text-crimson transition-colors">{stick.name}</p>
                <p className="text-xs text-mute mt-1">{stick.short_description}</p>
              </Link>
            </aside>
          )}
        </section>

        {related.length > 0 && (
          <section className="container-page pb-20">
            <h2 className="font-display heading-md mb-8">More from the Family</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((a) => (
                <ArtistCard key={a.id} artist={a} />
              ))}
            </div>
          </section>
        )}
      </article>
    </>
  );
}
