import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { CTABanner } from '@/components/CTABanner';
import { FAQAccordion } from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Quiet Drumsticks - Practice Without Annoying the Neighbours',
  description:
    'How to play drums quietly. The 7A wood tip, rods, brushes, mesh heads, and the four steps that turn an apartment kit into a 60 dB practice setup.',
};

const STEPS = [
  {
    n: '01',
    title: 'Switch to a 7A wood tip',
    body: 'A lighter stick reduces volume by 3 to 5 dB at the same effort. The 7A is the lightest standard size we make. Wood tip rather than nylon — wood is naturally quieter on the cymbal because the contact patch is softer. This change alone takes you from a 95 dB rock kit to a 90 dB practice kit.',
    href: '/product/7a-drumsticks',
    cta: 'Shop the 7A',
  },
  {
    n: '02',
    title: 'Use rods for the quietest sessions',
    body: 'Hot Rods style multi rods (bundles of thin dowels) cut volume by another 8 to 12 dB versus a 7A. They feel different and limit your dynamic range, but for late night practice in an apartment they are the difference between possible and impossible. We do not make rods, but the popular options are Vic Firth Rute, Pro Mark Hot Rods, and Vater Splashstick.',
  },
  {
    n: '03',
    title: 'Move snare wires to off',
    body: 'A tip many drummers miss. Disengaging the snare wires (the strainer lever on the side of the snare) cuts the snare sustain dramatically. The pad still has the body of the drum but loses the hiss. Combined with rods this gets you to roughly 75 dB at the seat — quieter than a vacuum cleaner.',
  },
  {
    n: '04',
    title: 'Mesh heads and an electronic feed',
    body: 'For the quietest possible setup, swap your acoustic heads for mesh heads (Roland, Evans, or Aquarian make compatible kits) and add triggers to feed an electronic module. With headphones on, your kit makes the sound of fabric being struck — measurably quieter than a TV at low volume. This is the apartment drummer end game.',
  },
];

const FAQ = [
  {
    id: 'quiet-faq-1',
    question: 'What is the quietest drumstick?',
    answer:
      'A 7A wood tip is the quietest standard drumstick we make — about 3 to 5 dB quieter than a 5A at the same effort. Beyond that, you move into rods (Hot Rods style) which cut volume by another 8 to 12 dB, then brushes which are quieter still. Rods are the right tool when you specifically want quiet practice but still want stick feel rather than brush feel.',
    category: 'products' as const,
    sort_order: 1,
  },
  {
    id: 'quiet-faq-2',
    question: 'Are quiet drumsticks the same as practice drumsticks?',
    answer:
      'No, but they overlap. Practice drumsticks are usually whatever you play normally, used on a quieter surface (rubber pad, mesh head, low volume cymbal). Quiet drumsticks are specifically lighter or differently constructed sticks designed to reduce volume on a normal acoustic kit. Most drummers in apartments use both — a 7A on the kit, plus a regular 5A on the pad.',
    category: 'products' as const,
    sort_order: 2,
  },
  {
    id: 'quiet-faq-3',
    question: 'Will a 7A help me play late at night?',
    answer:
      'It will help, but it is not a complete solution on an acoustic kit. A 7A on a normal kit still produces 85 to 90 dB at the seat — louder than most apartment walls can absorb without bothering neighbours. To genuinely practise late at night, combine the 7A with rods, low volume cymbals (Zildjian L80 or Sabian Quiet Tone), and ideally mesh heads. The 7A is one part of the puzzle, not the whole answer.',
    category: 'products' as const,
    sort_order: 3,
  },
  {
    id: 'quiet-faq-4',
    question: 'What is the difference between rods and brushes?',
    answer:
      'Rods are bundles of thin wooden dowels held together with a rubber band. They feel like a soft stick — you get rebound, snare definition, and cymbal articulation, just at a much lower volume. Brushes are wire fans with no rebound — you sweep them across the head rather than striking. Rods are right for quiet practice with a stick like feel. Brushes are right for the genres that use them (jazz, country, ballads).',
    category: 'products' as const,
    sort_order: 4,
  },
  {
    id: 'quiet-faq-5',
    question: 'Should I just buy an electronic kit instead?',
    answer:
      'For some apartment drummers, yes. A Roland TD-07KV or Alesis Nitro Mesh kit gets you near silent practice with headphones at around the same price as a serious acoustic kit setup. The trade off is feel — even the best electronic kits feel different from acoustic, and your technique transfers imperfectly. If you have access to acoustic kits at studios or rehearsal rooms regularly, an e-kit at home plus 7A on the road is a strong setup. If your home kit is your only kit, mesh heads and quiet sticks on acoustic is the alternative.',
    category: 'products' as const,
    sort_order: 5,
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Quiet drumsticks"
        title="Practise without annoying the neighbours."
        subtitle="A 7A wood tip is the quietest stick we make. Combined with rods, low volume cymbals, and mesh heads, you can practise an acoustic kit at conversation volume."
      />

      <section className="container-page py-16 md:py-20">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-3">The four step setup</p>
            <h2 className="font-display heading-md text-balance">
              Four changes that turn an apartment acoustic kit into a 60 to 75 dB practice rig.
            </h2>
            <p className="mt-5 text-mute text-pretty leading-relaxed">
              Drumstick choice is one part of a quiet kit setup. By itself, a 7A reduces volume
              by 3 to 5 dB versus a 5A. Combined with the other three changes below, you can
              take a kit from rehearsal room volumes to under 70 dB at the seat — quieter than
              a hairdryer, quiet enough for shared accommodation.
            </p>
            <div className="mt-8 space-y-6">
              {STEPS.map((s) => (
                <div key={s.n} className="border-t border-line pt-5">
                  <div className="flex items-baseline gap-4">
                    <span className="font-display text-2xl text-crimson">{s.n}</span>
                    <h3 className="font-display text-lg">{s.title}</h3>
                  </div>
                  <p className="mt-2 text-mute text-pretty leading-relaxed text-sm">{s.body}</p>
                  {s.href && s.cta && (
                    <Link href={s.href} className="mt-3 inline-block text-xs uppercase tracking-[0.16em] font-semibold text-crimson">
                      {s.cta} &rarr;
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5 bg-cream p-7 lg:sticky lg:top-24 self-start">
            <p className="eyebrow text-crimson">The quiet stick</p>
            <p className="mt-3 font-display text-5xl">7A</p>
            <p className="text-sm text-mute mt-2">Wood tip, Natural finish</p>
            <dl className="mt-6 space-y-3 text-sm border-t border-line pt-4">
              <div className="flex justify-between">
                <dt className="text-mute">Length</dt>
                <dd className="font-semibold">13.97 in</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-mute">Diameter</dt>
                <dd className="font-semibold">13.7 mm</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-mute">Weight</dt>
                <dd className="font-semibold">46 g</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-mute">Volume reduction</dt>
                <dd className="font-semibold">~4 dB vs 5A</dd>
              </div>
            </dl>
            <p className="mt-6 text-xs text-mute">
              From £13.50 a pair. Quietest stick in our lineup. Pair with rods for late night
              sessions.
            </p>
          </div>
        </div>
      </section>

      <section className="container-page py-16 md:py-20 border-t border-line">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <p className="eyebrow mb-3">Quiet practice FAQ</p>
            <h2 className="font-display heading-md text-balance">
              Five questions apartment drummers ask before setting up a quiet kit.
            </h2>
            <p className="mt-4 text-mute text-pretty">
              For e-kit owners, see{' '}
              <Link href="/drumsticks-for-electronic-drums" className="link-anim">drumsticks for electronic drums</Link>.
              Or read about{' '}
              <Link href="/drumsticks-for-practice-pad" className="link-anim">practice pad sticks</Link>.
            </p>
          </div>
          <div className="lg:col-span-8">
            <FAQAccordion items={FAQ} />
          </div>
        </div>
      </section>

      <CTABanner
        eyebrow="Practise more"
        title="Quiet sticks plus a practice pad keeps the neighbours happy."
        body="The 7A on the kit, a 5A on the pad. Cover both setups with the Explorer Pack."
        primaryCta={{ label: 'Buy Explorer Pack', href: '/shop/bundles' }}
        secondaryCta={{ label: 'See the 7A', href: '/product/7a-drumsticks' }}
      />
    </>
  );
}
