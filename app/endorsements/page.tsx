import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { Testimonial } from '@/components/Testimonial';
import { FAQAccordion } from '@/components/FAQAccordion';
import { EndorsementForm } from './EndorsementForm';
import { artists, stats } from '@/lib/seed-data';

export const metadata: Metadata = {
  title: 'Endorsements - Join the Collision Family',
  description: `${stats.artists}+ artists. 80+ countries. Three tiers, starting at 1,000 followers. Apply to play Collision drumsticks.`,
};

const TIERS = [
  {
    slug: 'cruise',
    label: 'Cruise',
    tagline: 'For working players building an audience.',
    minFollowers: '1,000+',
    gigs: '2 to 3 a month',
    benefits: [
      'Artist discount on all sticks',
      'Community access (Discord)',
      'Social features on @collisiondrumsticks',
    ],
  },
  {
    slug: 'approach',
    label: 'Approach',
    tagline: 'For active touring and recording drummers.',
    minFollowers: '10,000+',
    gigs: '3 to 5 a month',
    benefits: [
      'All Cruise benefits',
      'Extended artist discount',
      'Priority on social features',
      'Featured in artist roster',
    ],
  },
  {
    slug: 'impact',
    label: 'Impact',
    tagline: 'For full time professional artists.',
    minFollowers: '100,000+',
    gigs: 'Touring',
    benefits: [
      'All Approach benefits',
      'Free product allocation',
      'Signature stick development consideration',
      'Direct relationship with the studio',
    ],
  },
];

const SELECTION_CRITERIA = [
  {
    title: 'You actually play our sticks',
    body: 'We do not endorse drummers who have never picked up a Collision pair. Order a brace, sit with them for a month, then come back to us. We can tell from the second sentence of an application whether you have played them.',
  },
  {
    title: 'You show up online',
    body: 'A consistent presence on at least one platform. We are looking for drummers who post their playing, talk to other drummers, and show their setups. Follower count is the floor, not the ceiling. A 1,200 follower account that posts every week beats a 50K account that has not posted since 2023.',
  },
  {
    title: 'You play live or in studio regularly',
    body: 'A working drummer is somebody who is actually working. Cruise tier expects two to three paid or recorded engagements a month. We will ask for examples and we will check.',
  },
  {
    title: 'You can talk about gear honestly',
    body: 'If we send you a stick that does not work for you, we want to hear about it. The roster is full of players who have asked for changes that ended up in the next product. Yes-men are not useful to us.',
  },
  {
    title: 'You represent the brand the way it actually is',
    body: 'Independent. Open. UK based. Loud about transparency. If your public persona pulls in the opposite direction, we will probably both be happier somewhere else.',
  },
];

const CASE_STUDIES = [
  {
    tier: 'Cruise',
    name: 'Jamie R.',
    location: 'Manchester, UK',
    style: 'Wedding band, function, dep work',
    quote:
      'I applied at 1,400 followers in 2022, expecting to be told to come back later. Two weeks after I got accepted, I posted a clip with my sticks on the table and woke up to 30 new orders pinging the brand. Cruise is not a vanity tier. It actually moves things for you.',
    result: '1.4K to 9.2K followers in 18 months. Two paid clinics in 2025.',
  },
  {
    tier: 'Approach',
    name: 'Sara K.',
    location: 'Berlin, DE',
    style: 'Indie, post rock, session',
    quote:
      'The thing nobody tells you about Approach is that the team actually replies. I had a tip wear question on a Tuesday morning, had a reply from Carlton himself by lunch. That kind of access is rare in this industry, especially for a drummer with my numbers.',
    result: 'Played a Hamburg residency on Collision throughout 2025. Featured in Rhythm.',
  },
  {
    tier: 'Impact',
    name: 'Marcus T.',
    location: 'Los Angeles, US',
    style: 'Touring, arena pop',
    quote:
      'Signature stick development is not a marketing line. We had three prototype rounds, real measured changes between each, and the final spec went into production exactly the way we agreed. I have been on bigger brands with worse outcomes.',
    result: 'Signature line in production since 2024. On 80+ tour dates a year.',
  },
];

const APPLICATION_FAQ = [
  {
    id: 'endorse-faq-1',
    question: 'How long does the review process take?',
    answer:
      'Five working days from submission to decision. We read every application by hand. If we are travelling for a trade show or out at NAMM, we say so on the application page so you know to expect a delay.',
    category: 'endorsements' as const,
    sort_order: 1,
  },
  {
    id: 'endorse-faq-2',
    question: 'Do I lose my endorsement if my follower count drops?',
    answer:
      'No. The threshold is for getting in. Once you are on the roster you are on it. We review tier placement annually but only to move you up, never to bump you out. The only thing that ends an endorsement is no longer playing the sticks.',
    category: 'endorsements' as const,
    sort_order: 2,
  },
  {
    id: 'endorse-faq-3',
    question: 'Can I be endorsed by Collision and another stick brand at the same time?',
    answer:
      'On Cruise and Approach, yes, but you cannot publicly endorse a competing stick brand. On Impact, the relationship is exclusive. We do not stop you from playing other gear (cymbals, heads, hardware) for whoever you like.',
    category: 'endorsements' as const,
    sort_order: 3,
  },
  {
    id: 'endorse-faq-4',
    question: 'I do not gig much but I have a popular YouTube channel. Where do I sit?',
    answer:
      'Online performance counts. If your channel posts consistent drumming content with measurable audience interaction, we treat that as gig equivalent for tier placement. Mention it on the application.',
    category: 'endorsements' as const,
    sort_order: 4,
  },
  {
    id: 'endorse-faq-5',
    question: 'What does free product allocation actually mean on the Impact tier?',
    answer:
      'A quarterly allocation sized to your tour schedule. We agree the volume up front based on average gigs per month and breakage rate. If you tour harder than expected we top up. We have never said no to a top up request.',
    category: 'endorsements' as const,
    sort_order: 5,
  },
  {
    id: 'endorse-faq-6',
    question: 'I am under 18. Can I apply?',
    answer:
      'Yes. We have endorsed players as young as 14 with a parent or guardian co signing the application. The tier criteria do not change based on age.',
    category: 'endorsements' as const,
    sort_order: 6,
  },
  {
    id: 'endorse-faq-7',
    question: 'You rejected my application. Can I reapply?',
    answer:
      'Always. Six months on from the decision, with a note about what has changed. About a third of our current roster came in on a second or third application. We keep the original on file so we can see the progress.',
    category: 'endorsements' as const,
    sort_order: 7,
  },
];

export default function EndorsementsPage() {
  const featuredArtists = artists.filter((a) => a.is_featured).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow="Endorsements"
        title="Join the Collision family."
        subtitle={`${stats.artists}+ artists. ${stats.countries}+ countries. Three tiers, and yes, you can apply at the first one with 1,000 followers.`}
        align="center"
        backgroundImage="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1920&auto=format&fit=crop&q=80"
      />

      <section className="container-page py-16">
        <div className="grid md:grid-cols-3 gap-6">
          {TIERS.map((tier) => (
            <div key={tier.slug} className="border border-line p-8 bg-bone flex flex-col">
              <p className="eyebrow mb-2">Tier</p>
              <h2 className="font-display heading-md">{tier.label}</h2>
              <p className="mt-2 text-sm text-mute text-pretty">{tier.tagline}</p>
              <dl className="mt-6 space-y-3 text-sm border-t border-line pt-4">
                <div className="flex justify-between">
                  <dt className="text-mute">Min followers</dt>
                  <dd className="font-semibold">{tier.minFollowers}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-mute">Gig frequency</dt>
                  <dd className="font-semibold">{tier.gigs}</dd>
                </div>
              </dl>
              <ul className="mt-6 space-y-2 text-sm flex-1">
                {tier.benefits.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="text-crimson">✓</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#apply"
                className="mt-8 block btn-ghost w-full text-center"
              >
                Apply for {tier.label}
              </a>
            </div>
          ))}
        </div>
        <p className="mt-10 text-sm text-mute text-center max-w-2xl mx-auto text-pretty">
          Exceptions considered for exceptional talent. Build a real relationship with the brand
          first. Engage on social, play the sticks, then apply.
        </p>
      </section>

      <section className="bg-ink text-bone">
        <div className="container-page py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="eyebrow !text-bone/60 mb-3">What we look for</p>
            <h2 className="font-display heading-md text-balance">
              Five things we read every application against.
            </h2>
            <p className="mt-4 text-bone/70 text-pretty max-w-2xl">
              We do not score applications on a spreadsheet. We read them. These are the five
              things we are reading for.
            </p>
          </div>
          <ol className="mt-12 grid md:grid-cols-2 gap-6">
            {SELECTION_CRITERIA.map((c, i) => (
              <li key={c.title} className="border border-bone/15 p-6">
                <p className="font-display text-3xl text-crimson">0{i + 1}</p>
                <p className="mt-3 font-display text-xl leading-tight">{c.title}</p>
                <p className="mt-3 text-sm text-bone/75 text-pretty leading-relaxed">{c.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="container-page py-16 md:py-24">
        <div className="max-w-3xl">
          <p className="eyebrow mb-3">Case studies</p>
          <h2 className="font-display heading-md text-balance">
            One drummer per tier. What endorsement actually changed.
          </h2>
          <p className="mt-4 text-mute text-pretty max-w-2xl">
            The numbers are real, the names are anonymised at the artist&apos;s request. If you
            want to talk to one of them before applying, we can put you in touch.
          </p>
        </div>
        <div className="mt-12 grid lg:grid-cols-3 gap-6">
          {CASE_STUDIES.map((cs) => (
            <article key={cs.name} className="border border-line bg-bone p-7 flex flex-col">
              <p className="eyebrow text-crimson">{cs.tier} tier</p>
              <p className="mt-3 font-display text-2xl">{cs.name}</p>
              <p className="text-sm text-mute">{cs.location}</p>
              <p className="text-xs text-mute mt-1 uppercase tracking-wider">{cs.style}</p>
              <blockquote className="mt-5 text-sm text-ink-soft text-pretty leading-relaxed border-l-2 border-crimson pl-4 flex-1">
                {cs.quote}
              </blockquote>
              <p className="mt-5 pt-5 border-t border-line text-xs text-mute uppercase tracking-wider">
                Result
              </p>
              <p className="mt-2 text-sm text-ink text-pretty">{cs.result}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-cream">
        <div className="container-page py-16 md:py-20">
          <p className="eyebrow mb-3 text-center">From the family</p>
          <h2 className="font-display heading-md mb-10 text-center text-balance">
            What our artists say.
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredArtists.map((a) => (
              <Testimonial key={a.id} artist={a} />
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16 md:py-20 border-t border-line">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <p className="eyebrow mb-3">Application FAQ</p>
            <h2 className="font-display heading-md text-balance">
              The questions every applicant asks us.
            </h2>
            <p className="mt-4 text-mute text-pretty">
              Read these before you apply. It will save us both an email exchange and it makes
              your application stronger.
            </p>
          </div>
          <div className="lg:col-span-8">
            <FAQAccordion items={APPLICATION_FAQ} />
          </div>
        </div>
      </section>

      <section id="apply" className="container-page py-16 md:py-20">
        <div className="max-w-3xl mx-auto">
          <p className="eyebrow mb-3">Application</p>
          <h2 className="font-display heading-md mb-3 text-balance">Tell us about your playing.</h2>
          <p className="text-mute mb-10 text-pretty">
            Five quick steps. Five day review window. Honest feedback either way.
          </p>
          <EndorsementForm />
        </div>
      </section>
    </>
  );
}
