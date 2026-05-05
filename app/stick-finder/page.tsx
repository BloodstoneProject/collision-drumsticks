import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { StickFinder } from './StickFinder';

export const metadata: Metadata = {
  title: 'Stick Finder Quiz',
  description:
    'Answer six questions and we will tell you exactly which Collision drumstick is right for your playing. Six questions. One recommendation.',
};

const QUICK_LINKS = [
  { model: '5A', why: 'The all rounder. Most popular in our lineup.', href: '/product/5a-drumstick' },
  { model: '5B', why: 'A touch heavier than 5A. Indie, alt rock, fuller pop.', href: '/product/5b-drumstick' },
  { model: '7A', why: 'The light option. Jazz, brushwork, light pop.', href: '/product/7a-drumstick' },
  { model: '2B', why: 'The heavy option. Rock, metal, marching, practice.', href: '/product/2b-drumstick' },
];

const QUIZ_LOGIC = [
  {
    title: 'Genre weighting',
    body: 'Each genre maps to a stick weight bias. Jazz biases toward 7A and lighter, rock toward 5B and heavier, all rounder pop sits on 5A. Multi genre players get the most universal answer.',
  },
  {
    title: 'Hand size and reach',
    body: 'Tall players, deeper kits, and longer reach drive a Reach series recommendation. Smaller hands push lighter and shorter.',
  },
  {
    title: 'Cymbal preference',
    body: 'If you said you want warmer cymbal tone, the answer is wood tip. Brighter and more articulate pushes nylon. If you did not have a strong opinion, we default to wood.',
  },
  {
    title: 'Volume and venue',
    body: 'Bedroom, rehearsal, club, theatre, festival. Each tier shifts the recommendation toward a heavier or lighter stick that suits the room volume.',
  },
];

export default function StickFinderPage() {
  return (
    <>
      <PageHero
        eyebrow="Stick finder"
        title="Find your stick in 60 seconds."
        subtitle="Six questions. One recommendation. We pair your genre, style, and experience against every model we make."
        align="center"
        variant="cream"
      />

      <section className="container-page py-12 md:py-16">
        <StickFinder />
      </section>

      <section className="bg-cream">
        <div className="container-page py-16 md:py-20">
          <div className="max-w-3xl">
            <p className="eyebrow mb-3">Already know what you want</p>
            <h2 className="font-display heading-md text-balance">
              Skip the quiz. Go straight to a model.
            </h2>
            <p className="mt-4 text-mute text-pretty max-w-2xl">
              The quiz exists for the players who want a guided answer. If you have a model in
              mind, the four below are where most of our orders land.
            </p>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {QUICK_LINKS.map((q) => (
              <Link
                key={q.model}
                href={q.href}
                className="block border border-line bg-bone p-6 hover:border-ink transition-colors"
              >
                <p className="font-display text-5xl">{q.model}</p>
                <p className="mt-3 text-sm text-mute text-pretty">{q.why}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-crimson">
                  Shop {q.model} &rarr;
                </p>
              </Link>
            ))}
          </div>
          <p className="mt-8 text-sm text-mute">
            Want the full lineup with specs side by side?{' '}
            <Link href="/shop/drumsticks" className="underline hover:text-crimson">
              See the comparison table on the drumsticks page
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="container-page py-16 md:py-24">
        <div className="max-w-3xl">
          <p className="eyebrow mb-3">How the quiz works</p>
          <h2 className="font-display heading-md text-balance">
            Four inputs. One deterministic recommendation.
          </h2>
          <p className="mt-4 text-mute text-pretty max-w-2xl">
            No machine learning, no black box. The recommendation is a transparent score across
            four dimensions. Same answers always give the same result.
          </p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 gap-6">
          {QUIZ_LOGIC.map((q) => (
            <div key={q.title} className="border-t border-ink pt-5">
              <p className="font-display text-xl">{q.title}</p>
              <p className="mt-2 text-sm text-mute text-pretty leading-relaxed">{q.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 bg-ink text-bone p-8 max-w-3xl">
          <p className="eyebrow !text-bone/60 mb-3">Result not quite right</p>
          <p className="text-bone/85 text-pretty">
            The quiz lands you in the right neighbourhood, not always the exact pair. If the
            recommendation feels off, retake with a different volume or hand size answer, or order
            an Explorer Pack (one pair each of 5A, 7A, and 5B) and play your way to the answer.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/shop/bundles" className="btn-inverted">Explorer Pack</Link>
            <Link href="/contact" className="text-sm text-bone/85 underline self-center">
              Or ask us directly
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
