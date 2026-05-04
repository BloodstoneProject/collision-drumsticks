import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { Testimonial } from '@/components/Testimonial';
import { EndorsementForm } from './EndorsementForm';
import { artists, stats } from '@/lib/seed-data';

export const metadata: Metadata = {
  title: 'Endorsements — Join the Collision Family',
  description: `${stats.artists}+ artists. 80+ countries. Three tiers, starting at 1,000 followers. Apply to play Collision drumsticks.`,
};

const TIERS = [
  {
    slug: 'cruise',
    label: 'Cruise',
    minFollowers: '1,000+',
    gigs: '2–3 / month',
    benefits: [
      'Artist discount on all sticks',
      'Community access (Discord)',
      'Social features on @collisiondrumsticks',
    ],
  },
  {
    slug: 'approach',
    label: 'Approach',
    minFollowers: '10,000+',
    gigs: '3–5 / month',
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

export default function EndorsementsPage() {
  return (
    <>
      <PageHero
        eyebrow="Endorsements"
        title="Join the Collision family."
        subtitle={`${stats.artists}+ artists. ${stats.countries}+ countries. Three tiers — and yes, you can apply at the first one with 1,000 followers.`}
        align="center"
        variant="cream"
      />

      <section className="container-page py-16">
        <div className="grid md:grid-cols-3 gap-6">
          {TIERS.map((tier) => (
            <div key={tier.slug} className="border border-line p-8 bg-bone">
              <p className="eyebrow mb-2">Tier</p>
              <h2 className="font-display heading-md">{tier.label}</h2>
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
              <ul className="mt-6 space-y-2 text-sm">
                {tier.benefits.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="text-crimson">✓</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <a
                href={`#apply-${tier.slug}`}
                className="mt-8 block btn-ghost w-full text-center"
              >
                Apply for {tier.label}
              </a>
            </div>
          ))}
        </div>
        <p className="mt-10 text-sm text-mute text-center">
          Exceptions considered for exceptional talent. Build a real relationship with the brand
          first — engage on social, play the sticks, then apply.
        </p>
      </section>

      <section className="bg-cream">
        <div className="container-page py-16">
          <p className="eyebrow mb-3 text-center">From the Family</p>
          <h2 className="font-display heading-md mb-10 text-center text-balance">
            What our artists say.
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {artists.filter((a) => a.is_featured).slice(0, 3).map((a) => (
              <Testimonial key={a.id} artist={a} />
            ))}
          </div>
        </div>
      </section>

      <section id="apply" className="container-page py-16 md:py-20">
        <div className="max-w-3xl mx-auto">
          <p className="eyebrow mb-3">Application</p>
          <h2 className="font-display heading-md mb-3 text-balance">Tell us about your playing.</h2>
          <p className="text-mute mb-10 text-pretty">
            Five quick steps. Five-day review window. Honest feedback either way.
          </p>
          <EndorsementForm />
        </div>
      </section>
    </>
  );
}
