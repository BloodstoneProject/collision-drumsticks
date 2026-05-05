import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { ProductCard } from '@/components/ProductCard';
import { CTABanner } from '@/components/CTABanner';
import { getProductsByCategory } from '@/lib/data';

export const revalidate = 600;
export const metadata: Metadata = {
  title: 'Drumsticks - American Hickory',
  description:
    'Every Collision drumstick model: 5A, 5B, 5AR Reach, 5BR Reach, 7A, 7AR, 2B. Wood and nylon tip. Natural and Stealth Black. Weight matched in Newcastle.',
};

const MODELS = [
  { model: '7A', length: '13.97 in', diameter: '13.7 mm', weight: '46 g', tip: 'Acorn / oval', use: 'Jazz, light pop, brushwork. The lightest stick we make.' },
  { model: '5A', length: '16.00 in', diameter: '14.4 mm', weight: '52 g', tip: 'Acorn / oval', use: 'The all rounder. If unsure, start here. Outsells everything else 4 to 1.' },
  { model: '5AR Reach', length: '17.00 in', diameter: '14.4 mm', weight: '54 g', tip: 'Acorn', use: '5A weight with an extra inch of reach. Tall players, deep kits.' },
  { model: '5B', length: '16.00 in', diameter: '15.1 mm', weight: '58 g', tip: 'Acorn', use: 'Heavier sibling of the 5A. Indie, alt rock, fuller pop.' },
  { model: '5BR Reach', length: '17.00 in', diameter: '15.1 mm', weight: '60 g', tip: 'Acorn', use: '5B weight with reach. Big stages, big toms.' },
  { model: '7AR', length: '15.00 in', diameter: '13.7 mm', weight: '48 g', tip: 'Acorn', use: '7A weight with extra reach. Studio session, intricate work.' },
  { model: '2B', length: '16.25 in', diameter: '16.0 mm', weight: '64 g', tip: 'Acorn', use: 'Heavy hitter. Rock, metal, marching, practice. The volume option.' },
];

const TIP_GUIDE = [
  {
    label: 'Wood tip',
    pitch: 'Warmer, woodier cymbal tone',
    durability: 'Wears slowly, replace when chipped',
    use: 'Default for most drummers. Better for jazz, indie, studio recording where cymbal warmth matters.',
  },
  {
    label: 'Nylon tip',
    pitch: 'Brighter, more articulate cymbal attack',
    durability: 'Outlasts wood on cymbals by 30 to 40%',
    use: 'Loud rooms, heavy genres, marching, anybody who hits cymbals like they owe them money.',
  },
];

const FINISH_GUIDE = [
  {
    label: 'Natural',
    body: 'Raw American Hickory with a thin oil finish. Best grip dry. Logo heat branded onto the shaft.',
  },
  {
    label: 'Stealth Black',
    body: 'Three thin matte black coats, baked between layers. Slightly tackier in the hand. Logo laser etched.',
  },
];

const SUBCATS = [
  { slug: 'wood-tip', label: 'Wood tip' },
  { slug: 'nylon-tip', label: 'Nylon tip' },
  { slug: 'reach-series', label: 'Reach series' },
  { slug: 'stealth', label: 'Stealth Black' },
  { slug: 'custom', label: 'Custom' },
];

export default async function DrumsticksPage() {
  const drumsticks = await getProductsByCategory('drumsticks');

  return (
    <>
      <PageHero
        eyebrow="Drumsticks"
        title="American Hickory. Weight matched. Built in Newcastle."
        subtitle="Every model in our standard lineup, from the lightweight 7A to the heavy hitting 2B."
      />

      <section className="container-page py-12">
        <div className="flex flex-wrap gap-2 mb-10">
          <Link href="/shop/drumsticks" className="px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] bg-ink text-bone">
            All
          </Link>
          {SUBCATS.map((s) => (
            <Link
              key={s.slug}
              href={`/shop/drumsticks?subcategory=${s.slug}`}
              className="px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] border border-line hover:border-ink transition-colors"
            >
              {s.label}
            </Link>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {drumsticks.map((p, i) => (
            <ProductCard key={p.id} product={p} eager={i < 4} />
          ))}
        </div>
      </section>

      <section className="bg-ink text-bone">
        <div className="container-page py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="eyebrow !text-bone/60 mb-3">Model comparison</p>
            <h2 className="font-display heading-md text-balance">
              Seven base models. Pick the line you want, then pick the finish.
            </h2>
            <p className="mt-4 text-bone/70 text-pretty max-w-2xl">
              Specs below are nominal. Actual weight matched within 1 gram per pair on a calibrated
              scale. Every model is available in wood or nylon tip, Natural or Stealth Black.
            </p>
          </div>
          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[760px] text-left">
              <thead>
                <tr className="border-b border-bone/30 text-xs uppercase tracking-[0.18em] text-bone/60">
                  <th className="py-4 pr-4 font-semibold">Model</th>
                  <th className="py-4 pr-4 font-semibold">Length</th>
                  <th className="py-4 pr-4 font-semibold">Diameter</th>
                  <th className="py-4 pr-4 font-semibold">Weight</th>
                  <th className="py-4 font-semibold">Best for</th>
                </tr>
              </thead>
              <tbody>
                {MODELS.map((m) => (
                  <tr key={m.model} className="border-b border-bone/15 align-top">
                    <td className="py-5 pr-4 font-display text-2xl">{m.model}</td>
                    <td className="py-5 pr-4 text-bone/85 text-sm">{m.length}</td>
                    <td className="py-5 pr-4 text-bone/85 text-sm">{m.diameter}</td>
                    <td className="py-5 pr-4 text-crimson font-semibold text-sm">{m.weight}</td>
                    <td className="py-5 text-bone/70 text-sm text-pretty">{m.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="container-page py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <p className="eyebrow mb-3">Tip guide</p>
            <h2 className="font-display heading-md text-balance">
              Wood or nylon. Two clear answers.
            </h2>
            <p className="mt-4 text-mute text-pretty max-w-md">
              The tip is doing the work on your cymbals. Pick the tone you want and the rest of the
              call follows.
            </p>
            <div className="mt-8 space-y-6">
              {TIP_GUIDE.map((t) => (
                <div key={t.label} className="border-t border-ink pt-5">
                  <p className="font-display text-2xl">{t.label}</p>
                  <p className="mt-2 text-sm text-ink-soft">
                    <span className="eyebrow">Tone</span>{' '}
                    <span className="ml-2">{t.pitch}</span>
                  </p>
                  <p className="text-sm text-ink-soft">
                    <span className="eyebrow">Durability</span>{' '}
                    <span className="ml-2">{t.durability}</span>
                  </p>
                  <p className="mt-2 text-sm text-mute text-pretty">{t.use}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="eyebrow mb-3">Finish guide</p>
            <h2 className="font-display heading-md text-balance">
              Natural or Stealth Black. Two finishes, same wood.
            </h2>
            <p className="mt-4 text-mute text-pretty max-w-md">
              Both start from the same grade A American Hickory. The finish changes the look, the
              grip feel, and the visibility on stage.
            </p>
            <div className="mt-8 space-y-6">
              {FINISH_GUIDE.map((f) => (
                <div key={f.label} className="border-t border-ink pt-5">
                  <p className="font-display text-2xl">{f.label}</p>
                  <p className="mt-2 text-sm text-mute text-pretty">{f.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 bg-cream p-6">
              <p className="eyebrow mb-2">Custom engraving</p>
              <p className="text-sm text-mute text-pretty">
                Want your name or logo on the shaft? Custom is available on every model from one
                pair upwards.
              </p>
              <Link href="/custom" className="btn-ghost mt-4">
                Build your own
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="container-page py-16 md:py-20">
          <div className="max-w-3xl">
            <p className="eyebrow mb-3">By genre</p>
            <h2 className="font-display heading-md text-balance">
              Pick by what you actually play.
            </h2>
            <p className="mt-4 text-mute text-pretty max-w-2xl">
              Four use case guides covering the genres we get asked about most. Each lands on a
              specific recommendation with two alternatives.
            </p>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Jazz', model: '7A', href: '/drumsticks-for-jazz' },
              { label: 'Rock', model: '5B', href: '/drumsticks-for-rock' },
              { label: 'Metal', model: '2B nylon', href: '/drumsticks-for-metal' },
              { label: 'Beginners', model: '5A', href: '/drumsticks-for-beginners' },
            ].map((g) => (
              <Link
                key={g.label}
                href={g.href}
                className="block bg-bone border border-line p-6 hover:border-ink transition-colors"
              >
                <p className="eyebrow text-crimson">For {g.label.toLowerCase()}</p>
                <p className="mt-3 font-display text-4xl">{g.model}</p>
                <p className="mt-3 text-xs uppercase tracking-[0.18em] font-semibold">
                  Read the guide &rarr;
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-12 max-w-3xl">
            <p className="eyebrow mb-3">Still comparing</p>
            <h3 className="font-display heading-sm text-balance">Three side by side breakdowns.</h3>
          </div>
          <div className="mt-6 grid sm:grid-cols-3 gap-4">
            {[
              { label: '5A vs 5B', href: '/compare/5a-vs-5b' },
              { label: 'Wood tip vs nylon tip', href: '/compare/wood-tip-vs-nylon-tip' },
              { label: 'Natural vs Stealth Black', href: '/compare/natural-vs-stealth-black' },
            ].map((c) => (
              <Link
                key={c.label}
                href={c.href}
                className="block bg-bone border border-line p-5 hover:border-ink transition-colors"
              >
                <p className="font-display text-xl leading-tight">{c.label}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.18em] font-semibold text-crimson">
                  Compare &rarr;
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        eyebrow="Still deciding"
        title="Take the 60 second stick finder."
        body="Six questions and we will land you on the right model."
        primaryCta={{ label: 'Find my stick', href: '/stick-finder' }}
        secondaryCta={{ label: 'Shop the 5A', href: '/product/5a-drumstick' }}
      />
    </>
  );
}
