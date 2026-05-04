import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { CTABanner } from '@/components/CTABanner';
import { stats } from '@/lib/seed-data';

export const metadata: Metadata = {
  title: 'About Collision',
  description:
    'Founded in Newcastle by working drummer Carlton Banks. Built for the artist, by the artist. Read the Collision story.',
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="The story behind the sticks."
        subtitle="Built by a working drummer in Newcastle. Now played in 80+ countries."
      />
      <section className="container-page py-16 md:py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-[4/5] bg-cream">
          <Image
            src="https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=1200&auto=format&fit=crop&q=80"
            alt="Carlton Banks"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <div>
          <p className="eyebrow mb-3">Founded 2014</p>
          <h2 className="font-display heading-md text-balance">
            Carlton spent fifteen years gigging before he got tired of buying bad sticks.
          </h2>
          <p className="mt-6 text-mute text-pretty">
            Collision was started in 2014 by Carlton Banks - a working drummer with a drumkit, a CNC
            lathe, and a problem. Every box of sticks he bought had at least one warped pair, and
            none of the brands available in the UK were weight-matching to a standard he was happy
            to play with.
          </p>
          <p className="mt-4 text-mute text-pretty">
            So he started making them himself. American Hickory from Tennessee. Weight-matched to
            within a gram. Every pair hand-inspected before it left the workshop.
          </p>
          <p className="mt-4 text-mute text-pretty">
            Twelve years later we ship to over 80 countries, count {stats.artists}+ endorsed artists
            among our family, and still finish every stick at the same workshop in Newcastle.
          </p>
        </div>
      </section>

      <section className="container-page py-16 md:py-20 border-t border-line">
        <p className="eyebrow mb-3">Our Values</p>
        <h2 className="font-display heading-md mb-12 text-balance max-w-2xl">
          Five things we will not compromise on.
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {[
            { title: 'Identity', body: 'We do not chase trends. We make the sticks we play.' },
            { title: 'Quality', body: 'Grade-A hickory only. The other 35% never leaves the shop.' },
            { title: 'Community', body: 'Endorsements open to anyone with 1K+ followers. Not just touring acts.' },
            { title: 'Transparency', body: 'You see where the wood is from, how the sticks are made, and what we charge.' },
            { title: 'Diversity', body: 'Our roster spans 80+ countries, every genre, every gender, every background.' },
          ].map((v) => (
            <div key={v.title} className="border-t border-ink pt-5">
              <p className="font-display text-2xl">{v.title}</p>
              <p className="text-mute mt-2 text-sm text-pretty">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cream">
        <div className="container-page py-16 md:py-20">
          <p className="eyebrow mb-3">By the Numbers</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
            {[
              ['2014', 'Founded'],
              [`${stats.artists}+`, 'Artists'],
              [`${stats.countries}+`, 'Countries'],
              [`${stats.customers.toLocaleString()}+`, 'Customers'],
            ].map(([v, l]) => (
              <div key={l}>
                <p className="font-display text-5xl md:text-6xl">{v}</p>
                <p className="eyebrow mt-2">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16 md:py-20">
        <p className="eyebrow mb-3">Press</p>
        <h2 className="font-display heading-md mb-6 text-balance">Featured in.</h2>
        <p className="text-mute mb-8 max-w-2xl">
          We have been profiled in Music Observer and reviewed across the major drumming press. Read our coverage on the {' '}
          <Link href="/resources" className="underline hover:text-crimson">resources</Link> page.
        </p>
      </section>

      <CTABanner
        eyebrow="Work With Us"
        title="Endorsements, wholesale, or affiliates."
        body="If you play, sell, or promote drumsticks, there is a programme for you."
        primaryCta={{ label: 'Apply for Endorsement', href: '/endorsements' }}
        secondaryCta={{ label: 'Wholesale Enquiry', href: '/wholesale' }}
      />
    </>
  );
}
