import Image from 'next/image';
import Link from 'next/link';
import { Hero } from '@/components/Hero';
import { TrustBar } from '@/components/TrustBar';
import { ProductCard } from '@/components/ProductCard';
import { ArtistCard } from '@/components/ArtistCard';
import { BlogCard } from '@/components/BlogCard';
import { SectionHeader } from '@/components/SectionHeader';
import { Testimonial } from '@/components/Testimonial';
import { PressBar } from '@/components/PressBar';
import { StatsBar } from '@/components/StatsBar';
import { CTABanner } from '@/components/CTABanner';
import { getFeaturedProducts, getFeaturedArtists, getPosts } from '@/lib/data';

export const revalidate = 600;

export default async function HomePage() {
  const [featuredProducts, featuredArtists, latestPosts] = await Promise.all([
    getFeaturedProducts(4),
    getFeaturedArtists(3),
    getPosts(3),
  ]);

  return (
    <>
      <Hero />
      <TrustBar />

      <section className="container-page py-20 md:py-28">
        <SectionHeader
          eyebrow="Best Sellers"
          title="The sticks that built our reputation."
          cta={{ label: 'Shop All Drumsticks', href: '/shop/drumsticks' }}
        />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {featuredProducts.map((p, i) => (
            <ProductCard key={p.id} product={p} eager={i < 2} />
          ))}
        </div>
      </section>

      <section className="bg-cream">
        <div className="container-page py-20 md:py-28 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="eyebrow mb-3">Stick Finder</p>
            <h2 className="font-display heading-lg text-balance">
              Not sure which stick is right for you?
            </h2>
            <p className="mt-4 text-mute max-w-md text-pretty">
              Our 60-second quiz cross-references your genre, style, and experience against every
              stick we make. By the end you will know exactly which to play.
            </p>
            <div className="mt-8">
              <Link href="/stick-finder" className="btn-primary">
                Take the 60-Second Quiz
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden border border-line">
            <Image
              src="https://images.unsplash.com/photo-1485579149621-3123dd979885?w=1400&auto=format&fit=crop&q=80"
              alt="Collision drumsticks"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-ink/40 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 text-bone">
              <p className="font-display text-3xl md:text-4xl">5A · 5B · 7A · 2B</p>
              <p className="text-xs uppercase tracking-[0.18em] mt-2 text-bone/80">Find yours</p>
            </div>
          </div>
        </div>
      </section>

      <PressBar />

      <section className="container-page py-20 md:py-28">
        <SectionHeader
          eyebrow="The Family"
          title="What our artists say."
          cta={{ label: 'Meet the Roster', href: '/artists' }}
        />
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {featuredArtists.map((a) => (
            <Testimonial key={a.id} artist={a} />
          ))}
        </div>
      </section>

      <section className="container-page py-20 md:py-28 border-t border-line">
        <SectionHeader
          eyebrow="Built By Artists"
          title="For the artist."
        />
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: 'Community',
              body: 'Started by a working drummer in Newcastle. Endorsement tiers anyone with a kit and a following can apply to.',
            },
            {
              title: 'Quality',
              body: 'Grade-A American Hickory, weight-matched to ±1g, finished by hand. The other 35% does not leave the shop.',
            },
            {
              title: 'Transparency',
              body: 'We tell you where the wood is from, how the sticks are made, and what we charge. No hidden margin.',
            },
          ].map((pillar) => (
            <div key={pillar.title} className="border-t border-ink pt-6">
              <p className="font-display text-2xl">{pillar.title}</p>
              <p className="text-mute mt-3 text-pretty">{pillar.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cream py-20 md:py-28">
        <div className="container-page">
          <SectionHeader
            eyebrow="Featured Artist"
            title="This week on the kit."
            cta={{ label: 'Full Profile', href: `/artists/${featuredArtists[0]?.slug ?? ''}` }}
          />
          {featuredArtists[0] && (
            <div className="grid md:grid-cols-3 gap-6">
              <ArtistCard artist={featuredArtists[0]} />
              <div className="md:col-span-2 flex flex-col justify-center">
                <p className="font-display heading-md text-balance">
                  “{featuredArtists[0].testimonial_quote}”
                </p>
                <p className="mt-6 text-mute text-pretty">{featuredArtists[0].bio}</p>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="container-page py-20 md:py-28">
        <SectionHeader
          eyebrow="From the Blog"
          title="Resources for drummers."
          cta={{ label: 'View All', href: '/resources' }}
        />
        <div className="grid md:grid-cols-3 gap-6">
          {latestPosts.map((p) => (
            <BlogCard key={p.id} post={p} />
          ))}
        </div>
      </section>

      <StatsBar />

      <CTABanner
        eyebrow="Impact Your Sound"
        title="Find the stick that disappears in your hand."
        body="Or skip the search and grab a 5A — there is a reason it outsells everything else."
        primaryCta={{ label: 'Take the Quiz', href: '/stick-finder' }}
        secondaryCta={{ label: 'Shop the 5A', href: '/product/5a-drumstick' }}
      />
    </>
  );
}
