import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { FAQAccordion } from '@/components/FAQAccordion';
import { CustomConfigurator } from './CustomConfigurator';

export const metadata: Metadata = {
  title: 'Custom Engraved Drumsticks',
  description:
    'Design your own drumsticks. Upload your logo or text, pick your size, tip, and finish. Made in 7 to 10 working days. From £18 a pair.',
};

const GALLERY = [
  {
    label: 'Touring artist signature',
    body: 'Full name engraved on the shaft, simple wordmark on the butt. Lacquer finish.',
    image: 'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=900&auto=format&fit=crop&q=80',
  },
  {
    label: 'Function band logo',
    body: 'Three colour band logo reproduced on both sticks of every pair in the order.',
    image: 'https://images.unsplash.com/photo-1571974599782-87624638275a?w=900&auto=format&fit=crop&q=80',
  },
  {
    label: 'Wedding gift',
    body: 'Couple names and a date. Single pair, gift boxed, delivered to a UK address.',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=900&auto=format&fit=crop&q=80',
  },
  {
    label: 'Drum school batch',
    body: '40 pairs of 5A engraved with the school crest, one stick each side. For end of term presentation.',
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=900&auto=format&fit=crop&q=80',
  },
  {
    label: 'Charity merch run',
    body: '120 pairs custom branded for a music charity. Counter merch at events plus mailout to donors.',
    image: 'https://images.unsplash.com/photo-1598653222000-6b7b7a552625?w=900&auto=format&fit=crop&q=80',
  },
  {
    label: 'Corporate gift',
    body: 'Company logo plus the recipient name. Run of 25 pairs sent worldwide as a Christmas gift.',
    image: 'https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=900&auto=format&fit=crop&q=80',
  },
];

const LEAD_TIMES = [
  {
    label: 'Standard custom',
    range: '7 to 10 working days',
    note: 'Single pair up to 24 pairs. Production starts the next working day after artwork is approved. Excludes shipping (see the shipping page for transit time on top).',
    cta: 'From £18 a pair',
  },
  {
    label: 'Bulk custom (100 pairs)',
    range: '14 to 21 working days',
    note: 'Run on the dedicated bulk line. We hold a slot for you on the production calendar so the date is fixed when you order, not optimistic.',
    cta: 'From £3.20 a pair',
  },
  {
    label: 'Rush custom',
    range: '3 to 5 working days',
    note: 'Available on most weeks for orders up to 50 pairs. Adds a £45 priority charge per order, not per pair. Email before you check out so we can confirm the slot.',
    cta: 'Add £45',
  },
];

const PROCESS_STEPS = [
  {
    n: '01',
    title: 'Configure',
    body: 'Use the builder above to pick the blank, the tip, the engraving area, and the finish. Upload your logo or type your text.',
  },
  {
    n: '02',
    title: 'Proof',
    body: 'Within one working day we send back a full size proof in PDF showing exactly how the engraving will sit on the stick. Sign off, request changes, no limit.',
  },
  {
    n: '03',
    title: 'Make',
    body: 'Production starts the working day after your proof is approved. Each stick is heat branded one at a time. Lacquered or raw finish per your spec.',
  },
  {
    n: '04',
    title: 'QC and ship',
    body: 'Same weight match (1g tolerance) and visual check as every Collision pair. Packed in a kraft box with a custom certificate of authenticity. Tracked dispatch worldwide.',
  },
];

const CUSTOM_FAQ = [
  {
    id: 'cust-faq-1',
    question: 'What file format do you need for my logo?',
    answer:
      'Vector preferred (SVG, AI, EPS, PDF). High res PNG works as long as it is at least 1500px wide on a transparent background. JPG is fine for simple wordmarks but loses crispness on fine detail. If you only have a low res file, send it anyway, we redraw most logos in house at no charge.',
    category: 'custom' as const,
    sort_order: 1,
  },
  {
    id: 'cust-faq-2',
    question: 'How big can the engraving be?',
    answer:
      'Up to 4cm long by 1.5cm wide on the shaft. We can engrave on both sticks of a pair (same artwork or two different designs) and on the butt as well as the shaft. The butt area is smaller, around 1cm by 1cm. The configurator above shows the live area as you place the artwork.',
    category: 'custom' as const,
    sort_order: 2,
  },
  {
    id: 'cust-faq-3',
    question: 'Can I match my logo colour?',
    answer:
      'Engraving is monochrome by burning the wood, the colour is the natural char tone (a dark brown, almost black). For full colour reproduction we offer a separate UV print finish on bulk orders of 100+ pairs. Email us with the spec for a quote.',
    category: 'custom' as const,
    sort_order: 3,
  },
  {
    id: 'cust-faq-4',
    question: 'How accurate is the proof?',
    answer:
      'The proof is generated from the same vector file we send to the laser. What you see is what you get, to within the natural variation of wood grain on each stick. We keep the proof on file for two years so reorders match the original exactly.',
    category: 'custom' as const,
    sort_order: 4,
  },
  {
    id: 'cust-faq-5',
    question: 'Can I order one pair?',
    answer:
      'Yes. The minimum is one pair. The per pair price is the same on a single pair as on a 24 pair order, only bulk runs (100+) get a meaningfully different rate.',
    category: 'custom' as const,
    sort_order: 5,
  },
  {
    id: 'cust-faq-6',
    question: 'Can I reorder a previous custom design?',
    answer:
      'Yes. Email us with your original order number or the recipient name. We pull the saved proof, confirm nothing has changed, and put it straight into production. Reorders skip the design and proof stages so they typically ship in 5 to 7 working days.',
    category: 'custom' as const,
    sort_order: 6,
  },
  {
    id: 'cust-faq-7',
    question: 'Do custom sticks count for returns?',
    answer:
      'No. Custom is made to order so the standard 14 day returns policy does not apply. Faulty engraving (mis spelling, mis positioning, anything that does not match the proof you signed off) we replace free of charge. See the returns page for the full policy.',
    category: 'custom' as const,
    sort_order: 7,
  },
  {
    id: 'cust-faq-8',
    question: 'Do you do private label or white label runs?',
    answer:
      'Yes, on bulk orders of 250 pairs and above. We can engrave your brand and ship in your own packaging if you supply the boxes. Email wholesale@collisiondrumsticks.com with the spec and we will quote.',
    category: 'custom' as const,
    sort_order: 8,
  },
];

export default function CustomPage() {
  return (
    <>
      <PageHero
        eyebrow="Custom engraving"
        title="Your name. Your logo. Your sticks."
        subtitle="Six steps to a fully bespoke pair. American Hickory. Engraved up to 4cm by 1.5cm. 7 to 10 working day production."
        align="center"
        variant="cream"
      />

      <section className="container-page py-12 md:py-16">
        <CustomConfigurator />
      </section>

      <section className="bg-cream">
        <div className="container-page py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="eyebrow mb-3">Recent runs</p>
            <h2 className="font-display heading-md text-balance">
              Six examples from the last twelve months.
            </h2>
            <p className="mt-4 text-mute text-pretty max-w-2xl">
              We make a lot of custom sticks, for a lot of different reasons. Here is a snapshot
              of what comes through the workshop most often.
            </p>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GALLERY.map((g) => (
              <article key={g.label} className="bg-bone border border-line overflow-hidden">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={g.image}
                    alt={g.label}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="font-display text-xl">{g.label}</p>
                  <p className="mt-2 text-sm text-mute text-pretty">{g.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16 md:py-24">
        <div className="max-w-3xl">
          <p className="eyebrow mb-3">Lead times</p>
          <h2 className="font-display heading-md text-balance">
            Three production lanes. Real working day ranges.
          </h2>
          <p className="mt-4 text-mute text-pretty max-w-2xl">
            All ranges below are production time only, from artwork approval. Add the shipping
            transit time from the {' '}
            <Link href="/shipping-delivery" className="underline hover:text-crimson">
              shipping page
            </Link>{' '}
            for total time to your door.
          </p>
        </div>
        <div className="mt-12 grid lg:grid-cols-3 gap-6">
          {LEAD_TIMES.map((l) => (
            <article key={l.label} className="border border-line p-7">
              <p className="eyebrow">{l.label}</p>
              <p className="mt-3 font-display text-3xl text-crimson">{l.range}</p>
              <p className="mt-4 text-sm text-mute text-pretty leading-relaxed">{l.note}</p>
              <p className="mt-6 pt-4 border-t border-line font-display text-xl">{l.cta}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-ink text-bone">
        <div className="container-page py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="eyebrow !text-bone/60 mb-3">Process</p>
            <h2 className="font-display heading-md text-balance">
              Configure, proof, make, ship.
            </h2>
            <p className="mt-4 text-bone/70 text-pretty max-w-2xl">
              Same workshop, same lathe, same QC bench as every Collision pair. The custom is in
              the engraving, not the stick underneath it.
            </p>
          </div>
          <ol className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-bone/15">
            {PROCESS_STEPS.map((s) => (
              <li key={s.n} className="bg-ink p-6">
                <p className="font-display text-3xl text-crimson">{s.n}</p>
                <p className="mt-3 font-display text-xl">{s.title}</p>
                <p className="mt-3 text-sm text-bone/70 text-pretty leading-relaxed">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="container-page py-16 md:py-20 border-t border-line">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <p className="eyebrow mb-3">Custom FAQ</p>
            <h2 className="font-display heading-md text-balance">
              The eight questions every customer asks.
            </h2>
          </div>
          <div className="lg:col-span-8">
            <FAQAccordion items={CUSTOM_FAQ} />
          </div>
        </div>
      </section>
    </>
  );
}
