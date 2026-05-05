import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { CTABanner } from '@/components/CTABanner';
import { FAQAccordion } from '@/components/FAQAccordion';
import { getFAQs } from '@/lib/data';

export const revalidate = 600;

export const metadata: Metadata = {
  title: 'Collision Backstage - Membership for Modern Drummers',
  description:
    'A paid community for serious drummers. Content library, networking, growth strategies. £34 a month. Hosted on Kajabi.',
};

const KAJABI_URL = 'https://collision.mykajabi.com/offers/rGyr2hFS/checkout';

const WEEK_ONE = [
  {
    day: 'Day 0',
    title: 'You sign up',
    body: 'Welcome email lands within 60 seconds with your Kajabi login, the Discord invite, and a one click access to the Quick Start playlist (5 videos, 38 minutes total).',
  },
  {
    day: 'Day 1',
    title: 'Onboarding call slot',
    body: 'Pick a 20 minute video call slot from the calendar. We talk through your goals, your kit, your audience, and which bits of the library to start with. Run by a Backstage host, not a chatbot.',
  },
  {
    day: 'Day 2',
    title: 'First Discord intro',
    body: 'Post a 30 second intro in #new-this-week. Existing members reply, follow back on socials, and slot you into the right sub channels (creators, gigging, students, educators).',
  },
  {
    day: 'Day 3',
    title: 'Practice plan delivered',
    body: 'Based on your call, the host sends a 30 day practice plan straight into the library, tagged to videos and worksheets. Trackable in the dashboard so you can see progress.',
  },
  {
    day: 'Day 5',
    title: 'Live Q&A invitation',
    body: 'Every Thursday at 7pm UK time we run an open Q&A with a touring pro. You get the calendar invite and the back catalogue of the last 12 sessions to watch on demand.',
  },
  {
    day: 'Day 7',
    title: 'Week 1 check in',
    body: 'A short DM from the host asking what is working, what is not, and where to dig in next. We pivot the recommendation list based on what you say.',
  },
];

const LIBRARY = [
  {
    label: 'Practice routines',
    count: '78 modules',
    body: 'Structured practice across rudiments, time, feel, independence, and reading. Beginner through advanced. Every module has a video, a written breakdown, and a downloadable PDF.',
    image: 'https://images.unsplash.com/photo-1571974599782-87624638275a?w=900&auto=format&fit=crop&q=80',
  },
  {
    label: 'Business of drums',
    count: '34 modules',
    body: 'Booking, rate negotiation, contracts, taxes, equipment write offs, social growth, building a roster of regular gigs. Real numbers, real templates.',
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=900&auto=format&fit=crop&q=80',
  },
  {
    label: 'Gigging templates',
    count: '22 packs',
    body: 'Set lists, pad spreadsheets, rider templates, tech specs, dep handover docs, festival paperwork, contract examples for function and original work.',
    image: 'https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=900&auto=format&fit=crop&q=80',
  },
  {
    label: 'Live Q&A archive',
    count: '50+ sessions',
    body: 'Every weekly Q&A recorded and transcribed. Search by topic, by guest, by question. Catch up on anything you missed in the week, in your own time.',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=900&auto=format&fit=crop&q=80',
  },
  {
    label: 'Content creator playbooks',
    count: '18 playbooks',
    body: 'Reels frameworks, YouTube structure, hook templates, audio mixing for drum content, the lighting setup the top creators use. Built from the channels that actually work.',
    image: 'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=900&auto=format&fit=crop&q=80',
  },
  {
    label: 'Workshop window',
    count: 'Monthly',
    body: 'Behind the scenes from the Newcastle workshop, first look at new SKUs before they hit the public site, members only colourways, Q&A with Carlton.',
    image: 'https://images.unsplash.com/photo-1598653222000-6b7b7a552625?w=900&auto=format&fit=crop&q=80',
  },
];

const TESTIMONIALS = [
  {
    name: 'Liam M.',
    role: 'Function band, Liverpool',
    quote:
      'I joined Backstage to learn the social side of drums. Six months in I have doubled my gig fee, my Instagram is at 18K, and I have actually made friends with three drummers I now dep for. The £34 covers itself in one extra dep gig a year.',
  },
  {
    name: 'Priya S.',
    role: 'Drum educator, Bristol',
    quote:
      'The lesson plans alone justify the membership. I run them straight with my students, source the practice tracks from the library, and use the contract templates for my own studio. The community is the unexpected upside, I have met three other UK educators I now collaborate with.',
  },
  {
    name: 'Cole D.',
    role: 'Touring drummer, Toronto',
    quote:
      'Most paid communities die after three months. This one has been the opposite, the discussions get sharper. Carlton actually shows up in the Discord. The Q&A guests are people I have followed for years and would never get on a private call with otherwise.',
  },
];

export default async function BackstagePage() {
  const faqs = await getFAQs();
  const backstageFaqs = faqs.filter((f) => f.category === 'backstage');
  const doorsOpen = false;

  return (
    <>
      <PageHero
        eyebrow="Backstage"
        title="Collision Backstage."
        subtitle="The membership for the modern drummer. Content, community, and growth strategies built by working pros."
        align="center"
        backgroundImage="https://images.unsplash.com/photo-1517824806704-9040b037703b?w=1920&auto=format&fit=crop&q=80"
      />

      <section className="container-page py-16">
        <div className="max-w-3xl mx-auto">
          <p className="eyebrow mb-3">Why Backstage</p>
          <h2 className="font-display heading-md text-balance">
            Most drummer communities are noise. Backstage is signal.
          </h2>
          <p className="mt-6 text-mute text-pretty leading-relaxed">
            Backstage exists for drummers who treat the kit seriously: gigging musicians,
            educators, content creators, and the players who plan to be. We give you a content
            library that actually moves the needle, a community of pros who pick up the phone, and
            a structured monthly programme on building a career around drums.
          </p>
        </div>
      </section>

      <section className="bg-cream">
        <div className="container-page py-16">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <p className="eyebrow mb-3">What you get</p>
              <ul className="space-y-3 text-sm">
                {[
                  'Content library: practice routines, gigging templates, business of drums',
                  'Live monthly Q&As with touring pros',
                  'Private community (Discord) with 50+ Backstage crew members',
                  'Social media growth playbooks for drummers',
                  'Booking and rate negotiation guides',
                  'Partner discounts across UK gear suppliers',
                ].map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="text-crimson">✓</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-line bg-bone p-8">
              <p className="eyebrow mb-3">Membership</p>
              <p className="font-display text-5xl">£34<span className="text-2xl text-mute">/mo</span></p>
              <p className="text-sm text-mute mt-2">Cancel anytime. Hosted on Kajabi.</p>
              <div className="mt-6 border-t border-line pt-4">
                <p className="text-xs uppercase tracking-[0.15em] mb-2">Doors</p>
                <p className={doorsOpen ? 'text-amber font-semibold' : 'text-mute font-semibold'}>
                  {doorsOpen ? 'OPEN, join now' : 'CLOSED, join the waitlist'}
                </p>
              </div>
              {doorsOpen ? (
                <a href={KAJABI_URL} target="_blank" rel="noopener noreferrer" className="btn-accent w-full mt-6">
                  Get your Backstage pass
                </a>
              ) : (
                <form className="mt-6 flex gap-2">
                  <input type="email" placeholder="your@email.com" className="input-field flex-1" />
                  <button type="submit" className="btn-primary !px-5 !py-3">Notify me</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink text-bone">
        <div className="container-page py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="eyebrow !text-bone/60 mb-3">Week one</p>
            <h2 className="font-display heading-md text-balance">
              The first seven days, hour by hour.
            </h2>
            <p className="mt-4 text-bone/70 text-pretty max-w-2xl">
              We over invest in the first week. If we land the onboarding, the rest of the
              membership runs itself. Here is what your first seven days look like.
            </p>
          </div>
          <ol className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-bone/15">
            {WEEK_ONE.map((w) => (
              <li key={w.day} className="bg-ink p-6">
                <p className="font-display text-3xl text-crimson">{w.day}</p>
                <p className="mt-3 font-display text-xl leading-tight">{w.title}</p>
                <p className="mt-3 text-sm text-bone/70 text-pretty leading-relaxed">{w.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="container-page py-16 md:py-24">
        <div className="max-w-3xl">
          <p className="eyebrow mb-3">Inside the library</p>
          <h2 className="font-display heading-md text-balance">
            Six categories. 200+ modules. Updated every week.
          </h2>
          <p className="mt-4 text-mute text-pretty max-w-2xl">
            The library is the spine of the membership. Everything is searchable, downloadable,
            and tagged so you can filter by skill level, by goal, by time available.
          </p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {LIBRARY.map((l) => (
            <article key={l.label} className="border border-line bg-bone overflow-hidden">
              <div className="relative aspect-[4/3]">
                <Image
                  src={l.image}
                  alt={l.label}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="eyebrow text-crimson">{l.count}</p>
                <p className="mt-2 font-display text-xl">{l.label}</p>
                <p className="mt-2 text-sm text-mute text-pretty">{l.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-cream">
        <div className="container-page py-16 md:py-20">
          <div className="max-w-3xl">
            <p className="eyebrow mb-3">From members</p>
            <h2 className="font-display heading-md text-balance">
              What people actually say after six months in.
            </h2>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <article key={t.name} className="bg-bone border border-line p-7 flex flex-col">
                <p className="font-display text-2xl">{t.name}</p>
                <p className="text-sm text-mute">{t.role}</p>
                <blockquote className="mt-5 text-sm text-ink-soft text-pretty leading-relaxed border-l-2 border-crimson pl-4 flex-1">
                  {t.quote}
                </blockquote>
              </article>
            ))}
          </div>
        </div>
      </section>

      {backstageFaqs.length > 0 && (
        <section className="container-page py-16">
          <div className="max-w-3xl mx-auto">
            <p className="eyebrow mb-3">FAQ</p>
            <h2 className="font-display heading-md mb-8 text-balance">Backstage questions, answered.</h2>
            <FAQAccordion items={backstageFaqs} />
            <p className="mt-8 text-sm text-mute text-pretty">
              Backstage members get a discount stack with the{' '}
              <Link href="/endorsements" className="underline hover:text-crimson">artist programme</Link>
              . Browse the public{' '}
              <Link href="/resources" className="underline hover:text-crimson">free resources hub</Link>{' '}
              to see the kind of content the paid library scales up. Or meet the{' '}
              <Link href="/artists" className="underline hover:text-crimson">family of endorsed players</Link>{' '}
              who hang out in the member Discord.
            </p>
          </div>
        </section>
      )}

      <CTABanner
        title="Open or closed, the brand is built around our artists."
        body="Apply for an endorsement, become a Backstage member, or join the family on Instagram."
        primaryCta={{ label: 'Apply for endorsement', href: '/endorsements' }}
      />
    </>
  );
}
