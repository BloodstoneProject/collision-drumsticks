import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { CTABanner } from '@/components/CTABanner';
import { stats } from '@/lib/seed-data';

export const metadata: Metadata = {
  title: 'About Collision',
  description:
    'Founded in Newcastle in 2014 by working drummer Carlton Banks. American Hickory, weight matched, hand inspected. Read the full Collision story.',
};

const timeline = [
  {
    year: '2009',
    title: 'Carlton goes full time behind the kit',
    body: 'After years of moonlighting, Carlton quits the day job and takes on every gig the North East will book. Function bands, depping for touring acts, theatre pits, drum tuition. Wears out two pairs of sticks a week.',
  },
  {
    year: '2013',
    title: 'First prototypes on a borrowed lathe',
    body: 'Sick of warped pairs out of the box, Carlton rents bench time on a friend\'s CNC lathe. Turns thirty pairs of his own 5A. They feel right. He gives a few away and they keep getting asked for more.',
  },
  {
    year: '2014',
    title: 'Collision is born',
    body: 'Six SKUs, one logo burned in by hand, a single Shopify store. The first thousand pairs ship to drummers Carlton has either played with or taught.',
  },
  {
    year: '2016',
    title: 'First overseas order',
    body: 'A jazz player in Melbourne orders a brace of 7A. Within twelve months Collision is in twelve countries. The Newcastle workshop gets its first dedicated weight matching scale.',
  },
  {
    year: '2018',
    title: 'Endorsement programme opens',
    body: 'Carlton wants to back working drummers, not just headline names. The Approach tier launches with a 1,000 follower threshold. Within a year the roster is over 100 artists across 30 countries.',
  },
  {
    year: '2020',
    title: 'Resources hub goes live',
    body: 'Lockdown hits, gigs vanish. Collision pivots part of the team to publishing free technique articles, gear breakdowns, and practice plans. Traffic doubles every quarter.',
  },
  {
    year: '2022',
    title: 'Backstage members open',
    body: 'A subscription tier built for serious players. Discounted refills, priority on new launches, members only practice content, behind the scenes from the workshop.',
  },
  {
    year: '2024',
    title: '10 years on the bench',
    body: 'A decade of turning. The Cruise, Approach, and Impact tiers have grown to over 600 endorsed players. Collision sticks have been on stages from Glastonbury to a wedding in Reykjavik.',
  },
  {
    year: '2026',
    title: 'Where we are now',
    body: `${stats.artists}+ artists, ${stats.countries}+ countries, ${stats.customers.toLocaleString()}+ customers. Same workshop. Same lathe operator. Same standard for what leaves the door.`,
  },
];

const workshopSteps = [
  {
    n: '01',
    title: 'Source',
    body: 'American Hickory dowels, grade A only, kiln dried in Tennessee then shipped to Newcastle in 250kg lots. Roughly 35% of stock is rejected before it ever sees the lathe.',
  },
  {
    n: '02',
    title: 'Turn',
    body: 'Every blank is turned on the same CNC lathe to a tolerance of 0.1mm on the shaft and 0.05mm on the tip profile. Sanded by hand at three grits.',
  },
  {
    n: '03',
    title: 'Match',
    body: 'Pairs are weight matched on a calibrated digital scale to within one gram, then pitch matched by ear. If a pair does not ring at the same fundamental, it is broken up.',
  },
  {
    n: '04',
    title: 'Finish',
    body: 'Lacquer or raw, your call on the SKU. Logos are heat branded one stick at a time. No screen printing, no stickers, nothing that wears off in the first session.',
  },
  {
    n: '05',
    title: 'Inspect & pack',
    body: 'Visual check, flex test, final weight read. Each pair is bagged with the date of pack on the seal. Carlton signs the QC log every Friday.',
  },
];

const team = [
  {
    name: 'Carlton Banks',
    role: 'Founder, head of product',
    bio: 'Working drummer for twenty years before Collision was a company. Still gigs most weekends. Still signs the QC log.',
  },
  {
    name: 'Workshop crew',
    role: 'Newcastle, UK',
    bio: 'A small, full time team running the lathe, the matching bench, the brand iron, and the pack line. Nobody on the floor has been here less than three years.',
  },
  {
    name: 'Artist relations',
    role: 'Endorsements & community',
    bio: 'The team that reads every Approach application, manages the Cruise roster, and posts free practice content five days a week.',
  },
  {
    name: 'You, eventually',
    role: 'We are usually hiring',
    bio: 'If the words "I love wood" do not put you off, drop us a line. Workshop, customer service, or content. We post openings on the resources page.',
  },
];

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
            alt="Carlton Banks at the kit"
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
            Collision was started in 2014 by Carlton Banks, a working drummer with a drum kit, a CNC
            lathe, and a problem. Every box of sticks he bought had at least one warped pair, and
            none of the brands available in the UK were weight matching to a standard he was happy
            to play with.
          </p>
          <p className="mt-4 text-mute text-pretty">
            So he started making them himself. American Hickory from Tennessee. Weight matched to
            within a gram. Every pair hand inspected before it left the workshop.
          </p>
          <p className="mt-4 text-mute text-pretty">
            Twelve years later we ship to over 80 countries, count {stats.artists}+ endorsed artists
            among our family, and still finish every stick at the same workshop in Newcastle.
          </p>
          <p className="mt-4 text-mute text-pretty">
            Nothing about the company has been outsourced. The wood is sourced by Carlton. The
            lathe is set by the same operator every morning. The QC bench is two metres from the
            pack line. If a stick has the Collision logo on it, somebody on this team put it there.
          </p>
        </div>
      </section>

      <section className="bg-ink text-bone">
        <div className="container-page py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="eyebrow !text-bone/60 mb-3">Timeline</p>
            <h2 className="font-display heading-md text-balance">
              From a borrowed lathe to a roster of {stats.artists}+ artists.
            </h2>
            <p className="mt-4 text-bone/70 text-pretty max-w-2xl">
              The short version of how Collision got from a single pair of prototypes to a stick
              brand played on six continents.
            </p>
          </div>
          <ol className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-bone/10">
            {timeline.map((t) => (
              <li key={t.year} className="bg-ink p-7">
                <p className="font-display text-4xl text-crimson">{t.year}</p>
                <p className="mt-3 font-display text-xl leading-tight">{t.title}</p>
                <p className="mt-3 text-sm text-bone/70 text-pretty leading-relaxed">{t.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="container-page py-16 md:py-24">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-3">Workshop tour</p>
            <h2 className="font-display heading-md text-balance">
              Five steps between a tree in Tennessee and your snare.
            </h2>
            <p className="mt-5 text-mute text-pretty">
              No part of how a Collision stick is made is a secret. If anything we wish more brands
              were this open about it. Here is the route every pair takes from raw dowel to packed
              order.
            </p>
            <div className="mt-8 relative aspect-[4/3] bg-cream">
              <Image
                src="https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=1200&auto=format&fit=crop&q=80"
                alt="Workshop lathe at Collision in Newcastle"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
          <ol className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {workshopSteps.map((s) => (
              <li key={s.n} className="border-t border-ink pt-5">
                <p className="font-display text-2xl text-crimson">{s.n}</p>
                <p className="mt-2 font-display text-xl">{s.title}</p>
                <p className="mt-2 text-sm text-mute text-pretty leading-relaxed">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="container-page py-16 md:py-20 border-t border-line">
        <p className="eyebrow mb-3">Our values</p>
        <h2 className="font-display heading-md mb-12 text-balance max-w-2xl">
          Five things we will not compromise on.
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {[
            { title: 'Identity', body: 'We do not chase trends. We make the sticks we play.' },
            { title: 'Quality', body: 'Grade A hickory only. The other 35% never leaves the shop.' },
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
          <p className="eyebrow mb-3">By the numbers</p>
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

      <section className="container-page py-16 md:py-24">
        <div className="max-w-3xl">
          <p className="eyebrow mb-3">The team</p>
          <h2 className="font-display heading-md text-balance">
            Small workshop. Big roster. Same standard for both.
          </h2>
          <p className="mt-4 text-mute text-pretty max-w-2xl">
            Collision is run by a tight team in Newcastle and a global crew of artist relations,
            content, and customer support. None of it is outsourced.
          </p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line">
          {team.map((m) => (
            <div key={m.name} className="bg-bone p-7">
              <p className="font-display text-2xl">{m.name}</p>
              <p className="eyebrow mt-2">{m.role}</p>
              <p className="mt-4 text-sm text-mute text-pretty leading-relaxed">{m.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page py-16 md:py-20 border-t border-line">
        <p className="eyebrow mb-3">Press</p>
        <h2 className="font-display heading-md mb-6 text-balance">Featured in.</h2>
        <p className="text-mute mb-8 max-w-2xl text-pretty">
          We have been profiled in Music Observer and reviewed across the major drumming press,
          including coverage in Rhythm, Drummer, Modern Drummer, and Mike Dolbear. Read the
          highlights on the {' '}
          <Link href="/resources" className="underline hover:text-crimson">resources</Link> page.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-8">
          {[
            'Music Observer',
            'Rhythm',
            'Drummer',
            'Modern Drummer',
            'Mike Dolbear',
          ].map((p) => (
            <div key={p} className="border border-line py-6 text-center">
              <p className="font-display text-lg leading-tight">{p}</p>
            </div>
          ))}
        </div>
      </section>

      <CTABanner
        eyebrow="Work with us"
        title="Endorsements, wholesale, or affiliates."
        body="If you play, sell, or promote drumsticks, there is a programme for you."
        primaryCta={{ label: 'Apply for endorsement', href: '/endorsements' }}
        secondaryCta={{ label: 'Wholesale enquiry', href: '/wholesale' }}
      />
    </>
  );
}
