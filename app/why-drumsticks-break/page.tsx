import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { CTABanner } from '@/components/CTABanner';
import { FAQAccordion } from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Why Do Drumsticks Break - And How to Make Yours Last Longer',
  description:
    'The four reasons drumsticks break, and the four habits that double the life of a pair. From a UK brand making American Hickory drumsticks for working drummers since 2009.',
};

const REASONS = [
  {
    title: 'Rim shots, every time',
    body: 'The rim is harder than the stick. A rim shot puts the entire stroke energy onto a 4 mm steel hoop right where the shaft is thinnest. This is the single largest cause of broken drumsticks. You cannot stop rim shots — they are part of rock, pop, and gospel — but you can refine the technique. Hit the rim with the back third of the stick, not the middle. The middle is where it splinters.',
  },
  {
    title: 'Cymbal edge dings',
    body: 'Striking a cymbal on the edge with the shaft (rather than the tip) chips the wood and starts a hairline crack. Most drummers do this without noticing during fills. Aim crashes with the shoulder of the stick (the shaped part just above the taper) and tip strikes for the bow.',
  },
  {
    title: 'Wood that should never have left the factory',
    body: 'Cheap drumsticks are made from mixed hardwood offcuts with visible grain runout. They fail at the first rim shot. Real drumsticks are made from straight grain American Hickory, cut from the dense lower trunk where the wood resists fracture. We reject around 12 percent of our incoming dowel for grain alignment alone.',
  },
  {
    title: 'A drummer who does not warm up',
    body: 'Cold hands play tense. Tense playing locks the wrist and increases impact force on the stick. A five minute warm up on a pad before a gig reduces stick breakage measurably. It also reduces injuries, which is the more important point.',
  },
];

const TIPS = [
  {
    n: '01',
    title: 'Rotate two pairs, do not play one to death',
    body: 'Two pairs in rotation last roughly 1.6x as long as one pair played to failure. The reason is fibre fatigue — wood under repeated stress recovers between sessions. Play pair A on Monday and Wednesday, pair B on Friday and the gig.',
  },
  {
    n: '02',
    title: 'Inspect after every gig',
    body: 'Roll each stick on a flat surface. Listen for the click of a hairline crack. Look for tip chips, shaft dents, and shoulder splinters. A pair that fails inspection goes in the bin, not back in the bag. A failed stick mid set is worse than a fresh pair every gig.',
  },
  {
    n: '03',
    title: 'Use a stick wrap on heavy nights',
    body: 'A grip wrap (or our Collision wrap) cushions the shaft and reduces the surface impact on rim shots by absorbing some of the energy. It is not a magic fix, but it adds 15 to 20 percent stick life on a heavy rock or gospel night.',
  },
  {
    n: '04',
    title: 'Match the stick to the gig',
    body: 'Playing 5A on a metal date is asking for splinters. The 2B was designed for that volume. A heavier stick on a heavier night is not weakness — it is the right tool. Most drummers we ship to keep two sizes in the bag for this reason.',
  },
];

const FAQ = [
  {
    id: 'break-faq-1',
    question: 'How long should a pair of drumsticks last?',
    answer:
      'Working drummer averages, with normal play and reasonable technique. Pop and indie: 8 to 12 gigs. Function and theatre: 6 to 10. Rock: 4 to 6. Metal: 2 to 3. Practice pad only: months, sometimes a year. If you are getting half these numbers, the cause is technique. If you are getting double, you may be undersized for your genre.',
    category: 'products' as const,
    sort_order: 1,
  },
  {
    id: 'break-faq-2',
    question: 'Are some drumsticks more durable than others?',
    answer:
      'Yes, materially. American Hickory cut from the lower trunk lasts longer than maple. Oak lasts longer than hickory but feels stiff. Within hickory, grain alignment matters — sticks where the grain runs straight along the shaft outlast sticks with grain runout. Brand quality control on grain is the variable that separates a £5 pair from a £14 pair. Collision rejects around 12 percent of incoming dowel for this reason.',
    category: 'products' as const,
    sort_order: 2,
  },
  {
    id: 'break-faq-3',
    question: 'Should I use plastic or rubber tips to make drumsticks last longer?',
    answer:
      'Nylon tips do extend tip life, by roughly 30 to 40 percent. The trade off is sound — nylon tips give a brighter, more articulate cymbal tone that wood tip purists dislike. If durability is your priority and you are not picky about the cymbal sound, nylon is a real option. We make nylon tip versions of every Collision model.',
    category: 'products' as const,
    sort_order: 3,
  },
  {
    id: 'break-faq-4',
    question: 'Can I repair a cracked drumstick?',
    answer:
      'No. Wood under tension does not bond reliably with adhesive, and a repaired stick will fail in the same place at half the original force. This is a safety issue — a stick failing mid stroke can fly into the audience or your own face. Bin a cracked stick. Use the broken pair as a practice pad striker if you want to extract value.',
    category: 'products' as const,
    sort_order: 4,
  },
  {
    id: 'break-faq-5',
    question: 'Do drumsticks come with a warranty?',
    answer:
      'Drumsticks are a consumable product, like guitar strings. No drumstick brand warranties against breakage from play. We do replace pairs that fail manufacturing inspection — a stick with visible grain runout that broke on the first session, a pair with a splintered tip out of the box, a clearly mis matched pair on weight. Email us a photo and we will send a replacement.',
    category: 'products' as const,
    sort_order: 5,
  },
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Stick care"
        title="Why drumsticks break."
        subtitle="The four real reasons, what to do about each, and the four habits that double the life of a pair. Written by people who have made and broken their share."
      />

      <section className="container-page py-16 md:py-20">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <p className="eyebrow mb-3">The four reasons</p>
            <h2 className="font-display heading-md text-balance">
              Three of these are technique. One is wood quality. None of them are bad luck.
            </h2>
            <p className="mt-4 text-mute text-pretty">
              Drumstick failure has predictable causes. If your sticks die fast, the cause is on
              this list — usually number one.
            </p>
          </div>
          <div className="lg:col-span-8 space-y-6">
            {REASONS.map((r, i) => (
              <div key={r.title} className="border-t border-line pt-6">
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-3xl text-crimson">0{i + 1}</span>
                  <h3 className="font-display text-xl">{r.title}</h3>
                </div>
                <p className="mt-3 text-mute text-pretty leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grain bg-ink text-bone">
        <div className="container-page py-16 md:py-20">
          <p className="eyebrow !text-bone/60 mb-3">Make a pair last</p>
          <h2 className="font-display heading-md text-balance max-w-3xl">
            Four habits. Most drummers do none of them. Adopt two and your sticks last twice as
            long.
          </h2>
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {TIPS.map((t) => (
              <div key={t.n} className="bg-ink border border-bone/15 p-7">
                <span className="font-display text-3xl text-crimson">{t.n}</span>
                <p className="mt-3 font-display text-2xl">{t.title}</p>
                <p className="mt-4 text-sm text-bone/75 text-pretty leading-relaxed">{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16 md:py-20 border-t border-line">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <p className="eyebrow mb-3">Durability FAQ</p>
            <h2 className="font-display heading-md text-balance">
              Five questions about why drumsticks break, and how to make a pair last.
            </h2>
            <p className="mt-4 text-mute text-pretty">
              Want sticks that last longer? Read about{' '}
              <Link href="/compare/wood-tip-vs-nylon-tip" className="link-anim">
                nylon tip durability
              </Link>{' '}
              or how we{' '}
              <Link href="/how-we-make-our-sticks" className="link-anim">
                make our sticks
              </Link>
              .
            </p>
          </div>
          <div className="lg:col-span-8">
            <FAQAccordion items={FAQ} />
          </div>
        </div>
      </section>

      <CTABanner
        eyebrow="Replace early"
        title="Subscribe and Save: a fresh pair, every month."
        body="Most working drummers go through one to two pairs a month. Subscribe and save 15 percent versus one off pricing, with free UK delivery."
        primaryCta={{ label: 'See subscribe options', href: '/shop/bundles' }}
        secondaryCta={{ label: 'How we make our sticks', href: '/how-we-make-our-sticks' }}
      />
    </>
  );
}
