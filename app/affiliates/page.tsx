import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { CTABanner } from '@/components/CTABanner';
import { FAQAccordion } from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Affiliate Programme',
  description:
    'Earn 10 to 15% commission promoting Collision drumsticks. 60 day cookie. Monthly Stripe payouts. Marketing asset library included.',
};

const STEPS = [
  { n: '01', title: 'Sign up', body: 'Apply through our affiliate dashboard. We approve in 48 hours.' },
  { n: '02', title: 'Share', body: 'Use your unique link in YouTube descriptions, Instagram bios, blog posts.' },
  { n: '03', title: 'Earn', body: '10% commission on every order. 60 day cookie. Monthly payout.' },
];

const COMMISSION_TIERS = [
  { tier: 'Standard', threshold: 'No minimum', rate: '10%' },
  { tier: 'Active', threshold: '£500+ earned per month', rate: '12%' },
  { tier: 'Top tier', threshold: '£2,500+ earned per month', rate: '15%' },
];

const EARNINGS_CASES = [
  {
    label: 'The drum teacher',
    audience: '4,200 Instagram, 1,800 YouTube',
    activity: 'One reel a week, link in bio, sticks in three tutorial videos a month.',
    monthly: '£180 to £240',
    annual: 'Around £2,500 a year',
    note: 'Steady. Most of it from the bio link, not from any single viral post. The sticks pay for themselves twice over and the rest is real money.',
  },
  {
    label: 'The YouTube reviewer',
    audience: '38K YouTube, 12K Instagram',
    activity: 'One full review video a quarter, sticks pinned in description on every drum video, monthly community post.',
    monthly: '£640 to £1,100',
    annual: 'Around £10,500 a year',
    note: 'Sits in the Active tier most months. The 60 day cookie does a lot of work here. Viewers watch the review, follow up four weeks later from a different video.',
  },
  {
    label: 'The touring pro',
    audience: '180K Instagram, 45K TikTok',
    activity: 'Tour content with sticks visible, two dedicated reels a month, link in bio, story shares of fan posts.',
    monthly: '£2,800 to £5,200',
    annual: 'Around £45,000 a year',
    note: 'Top tier all year. Tour months spike hard, off cycle months hold steady from the back catalogue of evergreen reels still ranking.',
  },
];

const ASSETS = [
  {
    label: 'Lifestyle photography',
    body: 'High res shots of every SKU on the kit, on a stand, in a hand. 4:5, 16:9, square crops ready to post.',
    image: 'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=900&auto=format&fit=crop&q=80',
  },
  {
    label: 'Stock video',
    body: '4K close ups, slow motion of strikes, behind the kit angles. Drop into a Reel or a YouTube Short.',
    image: 'https://images.unsplash.com/photo-1571974599782-87624638275a?w=900&auto=format&fit=crop&q=80',
  },
  {
    label: 'Static banners',
    body: 'Pre sized banners for every common ad and embed slot. PNG and SVG, light and dark.',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=900&auto=format&fit=crop&q=80',
  },
  {
    label: 'Discount codes',
    body: 'Personal codes for your audience that stack on top of the cookie. Track which channel is converting.',
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=900&auto=format&fit=crop&q=80',
  },
  {
    label: 'Copy library',
    body: 'Pre written captions, video scripts, email blurbs you can drop in or rewrite in your own voice.',
    image: 'https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=900&auto=format&fit=crop&q=80',
  },
  {
    label: 'New launch packs',
    body: 'Every new SKU drops with a launch kit a week before public release. Get the post up the day it goes live.',
    image: 'https://images.unsplash.com/photo-1598653222000-6b7b7a552625?w=900&auto=format&fit=crop&q=80',
  },
];

const AFFILIATE_FAQ = [
  {
    id: 'aff-faq-1',
    question: 'When do I get paid and how?',
    answer:
      'Stripe payout on the 5th of every month for the previous calendar month. Minimum payout threshold is £25, anything below that rolls over to the next month. We pay in GBP, USD, EUR, AUD, CAD.',
    category: 'general' as const,
    sort_order: 1,
  },
  {
    id: 'aff-faq-2',
    question: 'How long is the cookie window?',
    answer:
      '60 days. If somebody clicks your link today and orders eight weeks from now, the commission is yours. We use first click attribution, so the first affiliate to send a customer to the site keeps the credit even if a second affiliate referred the actual order.',
    category: 'general' as const,
    sort_order: 2,
  },
  {
    id: 'aff-faq-3',
    question: 'Can I be on the affiliate programme and the endorsement programme at the same time?',
    answer:
      'Yes. Most of our high earning affiliates are also on the artist roster. The artist discount and the affiliate commission stack, you do not lose one because of the other.',
    category: 'general' as const,
    sort_order: 3,
  },
  {
    id: 'aff-faq-4',
    question: 'What is excluded from commission?',
    answer:
      'Wholesale orders (handled separately on the trade side), gift card top ups, and orders that are later refunded. Custom and bulk custom orders pay commission at the standard rate.',
    category: 'general' as const,
    sort_order: 4,
  },
  {
    id: 'aff-faq-5',
    question: 'Do you allow paid ad spend?',
    answer:
      'On owned channels (your YouTube, your Instagram, your blog), absolutely. On paid search bidding on the Collision brand name or close variants, no, that competes with our own ads. We have a one pager on this in the affiliate dashboard.',
    category: 'general' as const,
    sort_order: 5,
  },
  {
    id: 'aff-faq-6',
    question: 'How do I see what is converting?',
    answer:
      'Real time dashboard with click counts, orders, AOV, and commission per asset. Filter by channel, by SKU, by date. Export to CSV if you want to dig in further.',
    category: 'general' as const,
    sort_order: 6,
  },
  {
    id: 'aff-faq-7',
    question: 'My audience is small. Is this worth my time?',
    answer:
      'If you are posting drum content already, yes. The drum teacher case study above is a 4K follower account. The work is pasting a link in bio, not a campaign. The sticks pay for themselves on three orders.',
    category: 'general' as const,
    sort_order: 7,
  },
];

export default function AffiliatesPage() {
  return (
    <>
      <PageHero
        eyebrow="Affiliates"
        title="Earn with Collision."
        subtitle="If you talk drumsticks online, you should be earning commission when your audience buys them."
        align="center"
        backgroundImage="https://images.unsplash.com/photo-1571974599782-87624638275a?w=1920&auto=format&fit=crop&q=80"
      />

      <section className="container-page py-16">
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {STEPS.map((s) => (
            <div key={s.n} className="border border-line p-8 bg-bone">
              <p className="font-display text-5xl text-stone">{s.n}</p>
              <p className="font-display text-2xl mt-2">{s.title}</p>
              <p className="text-mute mt-2 text-sm text-pretty">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <p className="eyebrow mb-3">Commission structure</p>
            <table className="w-full text-sm">
              <tbody>
                {COMMISSION_TIERS.map((c) => (
                  <tr key={c.tier} className="border-b border-line">
                    <td className="py-3 pr-4">
                      <p className="font-display text-lg leading-tight">{c.tier}</p>
                      <p className="text-xs text-mute mt-1">{c.threshold}</p>
                    </td>
                    <td className="py-3 text-right">
                      <span className="font-display text-3xl text-crimson">{c.rate}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-4 text-xs text-mute">
              Tier reviewed monthly. Move up or down based on the trailing 30 days of earnings.
              Tier never resets to zero, you stay where you finish each month.
            </p>
          </div>
          <div>
            <p className="eyebrow mb-3">What you get</p>
            <ul className="space-y-2 text-sm">
              {[
                'Marketing asset library (banners, lifestyle imagery, video)',
                'Personal discount codes for your audience',
                '60 day cookie window with first click attribution',
                'Monthly payout via Stripe in your local currency',
                'Real time dashboard with per asset breakdown',
                'Early access to new SKU launches one week ahead',
              ].map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="text-crimson">✓</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://affiliate.collisiondrumsticks.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent"
          >
            Apply to the programme
          </a>
        </div>
      </section>

      <section className="bg-ink text-bone">
        <div className="container-page py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="eyebrow !text-bone/60 mb-3">Earnings examples</p>
            <h2 className="font-display heading-md text-balance">
              What three real shaped accounts pull a year.
            </h2>
            <p className="mt-4 text-bone/70 text-pretty max-w-2xl">
              Numbers below are anonymised composites built from accounts in our top 50 affiliates.
              Your mileage will vary, the activity column is the bit you can copy.
            </p>
          </div>
          <div className="mt-12 grid lg:grid-cols-3 gap-px bg-bone/10">
            {EARNINGS_CASES.map((c) => (
              <article key={c.label} className="bg-ink p-7 flex flex-col">
                <p className="eyebrow !text-bone/60">{c.label}</p>
                <p className="mt-3 font-display text-2xl">{c.annual}</p>
                <p className="mt-1 text-sm text-bone/60">{c.monthly} a month</p>
                <dl className="mt-6 space-y-3 text-sm border-t border-bone/15 pt-4">
                  <div>
                    <dt className="eyebrow !text-bone/40">Audience</dt>
                    <dd className="mt-1 text-bone/85">{c.audience}</dd>
                  </div>
                  <div>
                    <dt className="eyebrow !text-bone/40">Activity</dt>
                    <dd className="mt-1 text-bone/85 text-pretty">{c.activity}</dd>
                  </div>
                </dl>
                <p className="mt-5 text-sm text-bone/60 text-pretty leading-relaxed border-t border-bone/15 pt-4 flex-1">
                  {c.note}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16 md:py-24">
        <div className="max-w-3xl">
          <p className="eyebrow mb-3">Asset library</p>
          <h2 className="font-display heading-md text-balance">
            Six categories of ready to post content.
          </h2>
          <p className="mt-4 text-mute text-pretty max-w-2xl">
            You should not be making affiliate marketing materials from scratch. The library is
            updated every fortnight and refreshed in full each quarter.
          </p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ASSETS.map((a) => (
            <article key={a.label} className="border border-line bg-bone overflow-hidden">
              <div className="relative aspect-[4/3] bg-cream">
                <Image
                  src={a.image}
                  alt={a.label}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="font-display text-xl">{a.label}</p>
                <p className="mt-2 text-sm text-mute text-pretty">{a.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container-page py-16 md:py-20 border-t border-line">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <p className="eyebrow mb-3">Affiliate FAQ</p>
            <h2 className="font-display heading-md text-balance">
              The questions affiliates ask before they sign up.
            </h2>
            <p className="mt-4 text-mute text-pretty">
              Other ways to work with us:{' '}
              <Link href="/endorsements" className="underline hover:text-crimson">endorsements</Link>{' '}
              for active drummers,{' '}
              <Link href="/wholesale" className="underline hover:text-crimson">wholesale</Link>{' '}
              for retailers, or join the paid community on{' '}
              <Link href="/backstage" className="underline hover:text-crimson">Backstage</Link>
              .
            </p>
          </div>
          <div className="lg:col-span-8">
            <FAQAccordion items={AFFILIATE_FAQ} />
          </div>
        </div>
      </section>

      <CTABanner
        title="Not posting online but still want to play?"
        body="Apply for an artist endorsement instead."
        primaryCta={{ label: 'Endorsement application', href: '/endorsements' }}
      />
    </>
  );
}
