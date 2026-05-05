import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { CTABanner } from '@/components/CTABanner';
import { FAQAccordion } from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'How to Hold Drumsticks - Matched Grip vs Traditional Grip',
  description:
    'Learn the three drumstick grips: matched, traditional, and French. The fulcrum, the stick angle, and the mistakes that cause wrist pain. Written for working drummers.',
};

const GRIPS = [
  {
    name: 'Matched grip',
    summary:
      'Both hands hold the stick the same way. Index and thumb form the fulcrum, the other three fingers wrap loosely. Stick rests on the meaty pad behind the second knuckle.',
    use: 'The default for rock, pop, indie, metal, worship, gospel, and most studio work. 80 percent of working drummers play matched grip.',
  },
  {
    name: 'Traditional grip (left hand)',
    summary:
      'Left hand holds the stick between thumb and index, resting on the cuticle of the ring finger. Right hand stays matched. Originated from marching snare drum carried at an angle.',
    use: 'Jazz drummers, big band players, some funk drummers who want quieter ghost notes on a snare positioned at an angle. Lower power ceiling than matched. Steeper learning curve.',
  },
  {
    name: 'French grip',
    summary:
      'Matched grip variant where palms face each other (vertical), fingers do most of the stroke work, wrists barely move. Stick sits on the pad behind the index knuckle.',
    use: 'Fast technical playing, finger control work, jazz ride patterns. Most drummers blend French grip into their right hand for the ride and stay matched on the snare.',
  },
];

const MISTAKES = [
  {
    title: 'Death grip',
    body: 'Squeezing the stick stops the rebound. The stick is supposed to bounce off the head and you let it. Hold tight enough to control, loose enough to feel the rebound. If your forearm aches after 20 minutes, you are gripping too tight.',
  },
  {
    title: 'Fulcrum too far back',
    body: 'The fulcrum (pivot point between thumb and index) should sit roughly one third of the way down from the butt end. Too far back and the stick whips wildly. Too far forward and you lose rebound. The marker on a Collision stick is the engraved logo on the back third — that is roughly your fulcrum.',
  },
  {
    title: 'All wrist, no fingers',
    body: 'A stroke uses wrist for power and fingers for speed. Beginners do everything from the wrist. Past a certain BPM the wrist cannot keep up. Train fingers early. Practise on a pad with the back three fingers driving the stick — it will feel weak for a week, then snap into place.',
  },
  {
    title: 'Tense shoulders',
    body: 'Wrist pain often starts in the shoulder. Shoulders should be down, not hunched up. If you finish a gig with neck ache, the cause is shoulder tension above the wrist, not the stick.',
  },
];

const FAQ = [
  {
    id: 'grip-faq-1',
    question: 'Should I learn matched grip or traditional grip first?',
    answer:
      'Matched grip first, every time. It is more intuitive, transfers to all genres, and gets you to a usable level faster. Traditional grip is a specialism worth learning later if you play jazz or want to expand your vocabulary, but you do not need it to be a working drummer.',
    category: 'products' as const,
    sort_order: 1,
  },
  {
    id: 'grip-faq-2',
    question: 'Why do my wrists hurt after I play?',
    answer:
      'Three causes, in order of likelihood. One: you are gripping too tight (death grip). Two: your stick is too heavy for your hand size or your endurance level. Three: your shoulders are tense. Fix the grip first, then look at the stick weight, then the posture. If pain persists past two weeks of correction, see a sports physio — long term tendinopathy is treatable but worsens if ignored.',
    category: 'products' as const,
    sort_order: 2,
  },
  {
    id: 'grip-faq-3',
    question: 'Where on the stick should the fulcrum be?',
    answer:
      'About one third from the butt end. On a 16 inch 5A that puts the fulcrum roughly 5 to 6 inches from the back of the stick. The Collision logo is engraved on the back third of every stick — it is a useful visual marker. Find your point and stay consistent across both hands.',
    category: 'products' as const,
    sort_order: 3,
  },
  {
    id: 'grip-faq-4',
    question: 'How do I stop dropping my drumsticks?',
    answer:
      'Three causes. One: sweaty hands — switch to a stick with grip tape or our wax stick treatment. Two: death grip causing micro fatigue that loosens at the worst moment — practise relaxing your back fingers between phrases. Three: stick is too long and the back end is rotating out — try a Reach version (one inch longer with same weight) only if you are tall, otherwise stay with standard.',
    category: 'products' as const,
    sort_order: 4,
  },
  {
    id: 'grip-faq-5',
    question: 'Do thicker drumsticks help with grip?',
    answer:
      'Slightly, but not the way most people think. A thicker stick (5B over 5A) is easier to hold but harder to control. The thicker shaft does not solve a grip problem — it just makes a wrong grip less obvious. Fix the grip before you change the stick.',
    category: 'products' as const,
    sort_order: 5,
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Technique"
        title="How to hold drumsticks."
        subtitle="The three grips, the four mistakes, and the simple fulcrum check that fixes most beginner wrist pain inside a week."
      />

      <section className="container-page py-16 md:py-20">
        <div className="grid lg:grid-cols-3 gap-6">
          {GRIPS.map((g) => (
            <div key={g.name} className="bg-cream p-7">
              <p className="eyebrow text-crimson">{g.name}</p>
              <p className="mt-4 text-sm text-pretty leading-relaxed">{g.summary}</p>
              <p className="mt-5 text-xs text-mute uppercase tracking-[0.16em] font-semibold">
                Used for
              </p>
              <p className="mt-2 text-sm text-mute text-pretty">{g.use}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grain bg-ink text-bone">
        <div className="container-page py-16 md:py-20">
          <p className="eyebrow !text-bone/60 mb-3">The four mistakes</p>
          <h2 className="font-display heading-md text-balance max-w-3xl">
            If your wrists hurt, your problem is on this list.
          </h2>
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {MISTAKES.map((m) => (
              <div key={m.title} className="bg-ink border border-bone/15 p-7">
                <p className="font-display text-2xl">{m.title}</p>
                <p className="mt-4 text-sm text-bone/75 text-pretty leading-relaxed">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16 md:py-20 border-t border-line">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <p className="eyebrow mb-3">Grip FAQ</p>
            <h2 className="font-display heading-md text-balance">
              Five questions every drummer asks the first month they take it seriously.
            </h2>
            <p className="mt-4 text-mute text-pretty">
              Need a grip that feels secure? Try our{' '}
              <Link href="/product/collision-stick-wrap" className="link-anim">
                stick wrap
              </Link>{' '}
              or read{' '}
              <Link href="/why-drumsticks-break" className="link-anim">
                why drumsticks break
              </Link>{' '}
              if technique is not the issue.
            </p>
          </div>
          <div className="lg:col-span-8">
            <FAQAccordion items={FAQ} />
          </div>
        </div>
      </section>

      <CTABanner
        eyebrow="Hands first"
        title="Start with a stick that fits your hand."
        body="The 5A is the right size for most drummers. The 7A suits smaller hands. The 5B suits larger hands. Take the quiz if you are unsure."
        primaryCta={{ label: 'Stick finder quiz', href: '/stick-finder' }}
        secondaryCta={{ label: 'Drumstick sizes explained', href: '/drumstick-sizes-explained' }}
      />
    </>
  );
}
