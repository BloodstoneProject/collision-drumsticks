import Link from 'next/link';
import { supabaseAdmin } from '@/lib/supabase';

async function getStats() {
  const supa = supabaseAdmin();
  if (!supa) return null;

  const [
    products,
    activeProducts,
    posts,
    publishedPosts,
    artists,
    subscribers,
    reviewsPending,
    reviewsApproved,
    applicationsOpen,
    applicationsTotal,
    wholesaleOpen,
    wholesaleTotal,
    contactOpen,
    contactTotal,
    finderResults,
  ] = await Promise.all([
    supa.from('collision_products').select('id', { count: 'exact', head: true }),
    supa.from('collision_products').select('id', { count: 'exact', head: true }).eq('is_active', true),
    supa.from('collision_posts').select('id', { count: 'exact', head: true }),
    supa.from('collision_posts').select('id', { count: 'exact', head: true }).eq('is_published', true),
    supa.from('collision_artists').select('id', { count: 'exact', head: true }),
    supa.from('collision_subscribers').select('id', { count: 'exact', head: true }).eq('is_active', true),
    supa.from('collision_reviews').select('id', { count: 'exact', head: true }).eq('is_approved', false),
    supa.from('collision_reviews').select('id', { count: 'exact', head: true }).eq('is_approved', true),
    supa.from('collision_endorsement_applications').select('id', { count: 'exact', head: true }).eq('is_handled', false),
    supa.from('collision_endorsement_applications').select('id', { count: 'exact', head: true }),
    supa.from('collision_wholesale_enquiries').select('id', { count: 'exact', head: true }).eq('is_handled', false),
    supa.from('collision_wholesale_enquiries').select('id', { count: 'exact', head: true }),
    supa.from('collision_contact_submissions').select('id', { count: 'exact', head: true }).eq('is_handled', false),
    supa.from('collision_contact_submissions').select('id', { count: 'exact', head: true }),
    supa.from('collision_stick_finder_results').select('id', { count: 'exact', head: true }),
  ]);

  return {
    products: { total: products.count ?? 0, active: activeProducts.count ?? 0 },
    posts: { total: posts.count ?? 0, published: publishedPosts.count ?? 0 },
    artists: artists.count ?? 0,
    subscribers: subscribers.count ?? 0,
    reviews: { pending: reviewsPending.count ?? 0, approved: reviewsApproved.count ?? 0 },
    applications: { open: applicationsOpen.count ?? 0, total: applicationsTotal.count ?? 0 },
    wholesale: { open: wholesaleOpen.count ?? 0, total: wholesaleTotal.count ?? 0 },
    contact: { open: contactOpen.count ?? 0, total: contactTotal.count ?? 0 },
    finder: finderResults.count ?? 0,
  };
}

async function getRecent() {
  const supa = supabaseAdmin();
  if (!supa) return null;
  const [reviews, applications, wholesale, contact, subscribers] = await Promise.all([
    supa
      .from('collision_reviews')
      .select('id, customer_name, rating, body, created_at')
      .eq('is_approved', false)
      .order('created_at', { ascending: false })
      .limit(5),
    supa
      .from('collision_endorsement_applications')
      .select('id, full_name, email, tier_applying, created_at')
      .order('created_at', { ascending: false })
      .limit(5),
    supa
      .from('collision_wholesale_enquiries')
      .select('id, business_name, email, country, created_at')
      .order('created_at', { ascending: false })
      .limit(5),
    supa
      .from('collision_contact_submissions')
      .select('id, name, email, subject, created_at')
      .order('created_at', { ascending: false })
      .limit(5),
    supa
      .from('collision_subscribers')
      .select('id, email, source, subscribed_at')
      .order('subscribed_at', { ascending: false })
      .limit(5),
  ]);
  return {
    reviews: (reviews.data ?? []) as Array<{ id: string; customer_name: string; rating: number; body: string | null; created_at: string }>,
    applications: (applications.data ?? []) as Array<{ id: string; full_name: string; email: string; tier_applying: string; created_at: string }>,
    wholesale: (wholesale.data ?? []) as Array<{ id: string; business_name: string | null; email: string; country: string | null; created_at: string }>,
    contact: (contact.data ?? []) as Array<{ id: string; name: string | null; email: string; subject: string | null; created_at: string }>,
    subscribers: (subscribers.data ?? []) as Array<{ id: string; email: string; source: string | null; subscribed_at: string }>,
  };
}

export const dynamic = 'force-dynamic';

export const metadata = { title: 'Dashboard', robots: { index: false, follow: false } };

export default async function AdminDashboard() {
  const stats = await getStats();
  const recent = await getRecent();

  if (!stats) {
    return (
      <div className="max-w-3xl">
        <h1 className="font-display text-3xl mb-3">Dashboard</h1>
        <p className="text-mute">
          Supabase service-role key is not configured for this environment. Set{' '}
          <code className="bg-cream px-1.5 py-0.5">SUPABASE_SERVICE_ROLE_KEY</code> in Vercel
          and redeploy.
        </p>
      </div>
    );
  }

  const totalUnhandled =
    stats.applications.open + stats.wholesale.open + stats.contact.open + stats.reviews.pending;

  return (
    <div className="space-y-10">
      <header>
        <p className="eyebrow mb-1">Overview</p>
        <h1 className="font-display text-3xl md:text-4xl">Dashboard.</h1>
        {totalUnhandled > 0 ? (
          <p className="mt-2 text-sm text-crimson">
            {totalUnhandled} item{totalUnhandled === 1 ? '' : 's'} need attention.
          </p>
        ) : (
          <p className="mt-2 text-sm text-mute">All inboxes clear.</p>
        )}
      </header>

      <section>
        <p className="eyebrow mb-3">Catalog</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-line">
          <Stat label="Active products" value={stats.products.active} sub={`${stats.products.total} total`} href="/admin/products" />
          <Stat label="Published posts" value={stats.posts.published} sub={`${stats.posts.total} total`} href="/admin/posts" />
          <Stat label="Artists" value={stats.artists} href="/admin/artists" />
          <Stat label="Stick finder runs" value={stats.finder} />
        </div>
      </section>

      <section>
        <p className="eyebrow mb-3">Inbox</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-line">
          <Stat
            label="Pending reviews"
            value={stats.reviews.pending}
            sub={`${stats.reviews.approved} approved`}
            accent={stats.reviews.pending > 0}
            href="/admin/reviews"
          />
          <Stat
            label="Endorsement apps"
            value={stats.applications.open}
            sub={`${stats.applications.total} all-time`}
            accent={stats.applications.open > 0}
            href="/admin/applications"
          />
          <Stat
            label="Wholesale enquiries"
            value={stats.wholesale.open}
            sub={`${stats.wholesale.total} all-time`}
            accent={stats.wholesale.open > 0}
            href="/admin/wholesale"
          />
          <Stat
            label="Contact submissions"
            value={stats.contact.open}
            sub={`${stats.contact.total} all-time`}
            accent={stats.contact.open > 0}
            href="/admin/contact"
          />
        </div>
      </section>

      <section>
        <p className="eyebrow mb-3">Audience</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-line">
          <Stat label="Newsletter subscribers" value={stats.subscribers} href="/admin/subscribers" />
        </div>
      </section>

      {recent && (
        <section className="grid lg:grid-cols-2 gap-6">
          <RecentList
            title="Latest reviews"
            href="/admin/reviews"
            empty="No pending reviews."
            items={recent.reviews.map((r) => ({
              id: r.id,
              primary: r.customer_name,
              secondary: `${r.rating} stars - ${(r.body ?? '').slice(0, 80)}`,
              date: r.created_at,
            }))}
          />
          <RecentList
            title="Latest endorsement applications"
            href="/admin/applications"
            empty="No applications yet."
            items={recent.applications.map((a) => ({
              id: a.id,
              primary: a.full_name,
              secondary: `${a.tier_applying} - ${a.email}`,
              date: a.created_at,
            }))}
          />
          <RecentList
            title="Latest wholesale enquiries"
            href="/admin/wholesale"
            empty="No enquiries yet."
            items={recent.wholesale.map((w) => ({
              id: w.id,
              primary: w.business_name ?? w.email,
              secondary: `${w.country ?? ''} - ${w.email}`,
              date: w.created_at,
            }))}
          />
          <RecentList
            title="Latest contact submissions"
            href="/admin/contact"
            empty="No submissions yet."
            items={recent.contact.map((c) => ({
              id: c.id,
              primary: c.name ?? c.email,
              secondary: c.subject ?? c.email,
              date: c.created_at,
            }))}
          />
          <RecentList
            title="Latest subscribers"
            href="/admin/subscribers"
            empty="No subscribers yet."
            items={recent.subscribers.map((s) => ({
              id: s.id,
              primary: s.email,
              secondary: `via ${s.source ?? 'website'}`,
              date: s.subscribed_at,
            }))}
          />
        </section>
      )}

      <section className="border-t border-line pt-6">
        <p className="eyebrow mb-3">Quick links</p>
        <div className="flex flex-wrap gap-2">
          <Link href="/admin/products/new" className="btn-ghost !py-2 !px-4 !text-[0.65rem]">New product</Link>
          <Link href="/admin/posts/new" className="btn-ghost !py-2 !px-4 !text-[0.65rem]">New post</Link>
          <Link href="/admin/artists/new" className="btn-ghost !py-2 !px-4 !text-[0.65rem]">New artist</Link>
          <Link href="/admin/faqs/new" className="btn-ghost !py-2 !px-4 !text-[0.65rem]">New FAQ</Link>
          <Link href="/admin/redirects/new" className="btn-ghost !py-2 !px-4 !text-[0.65rem]">New redirect</Link>
          <Link href="/admin/page-seo" className="btn-ghost !py-2 !px-4 !text-[0.65rem]">Page SEO</Link>
        </div>
      </section>
    </div>
  );
}

function Stat({
  label,
  value,
  sub,
  href,
  accent = false,
}: {
  label: string;
  value: number;
  sub?: string;
  href?: string;
  accent?: boolean;
}) {
  const inner = (
    <div className="bg-bone p-5 h-full">
      <p className="eyebrow">{label}</p>
      <p className={`mt-2 font-display text-4xl ${accent ? 'text-crimson' : ''}`}>
        {value.toLocaleString()}
      </p>
      {sub && <p className="mt-1 text-xs text-mute">{sub}</p>}
    </div>
  );
  if (!href) return inner;
  return (
    <Link href={href} className="hover:bg-cream transition-colors block">
      {inner}
    </Link>
  );
}

function RecentList({
  title,
  href,
  items,
  empty,
}: {
  title: string;
  href: string;
  items: { id: string; primary: string; secondary: string; date: string }[];
  empty: string;
}) {
  return (
    <div className="border border-line">
      <div className="flex items-center justify-between px-5 py-3 border-b border-line bg-cream">
        <p className="font-display text-lg leading-tight">{title}</p>
        <Link href={href} className="text-xs uppercase tracking-[0.15em] text-mute hover:text-ink">
          View all &rarr;
        </Link>
      </div>
      {items.length === 0 ? (
        <p className="px-5 py-6 text-sm text-mute">{empty}</p>
      ) : (
        <ul className="divide-y divide-line">
          {items.map((item) => (
            <li key={item.id} className="px-5 py-3">
              <p className="text-sm font-semibold truncate">{item.primary}</p>
              <p className="text-xs text-mute truncate">{item.secondary}</p>
              <p className="text-[0.65rem] text-stone uppercase tracking-[0.15em] mt-1">
                {new Date(item.date).toLocaleString()}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
