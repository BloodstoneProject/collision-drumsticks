import Link from 'next/link';
import { supabaseAdmin } from '@/lib/supabase';
import { AdminPageHeader } from '../../_components/AdminPageHeader';
import { formatDateTime } from '../../_lib/utils';
import { toggleHandled, deleteSubmission } from '../_actions/inbox';

export const dynamic = 'force-dynamic';
export const metadata = { title: 'Endorsement applications', robots: { index: false, follow: false } };

type Row = {
  id: string;
  full_name: string;
  email: string;
  phone: string | null;
  country: string | null;
  city: string | null;
  tier_applying: string;
  instagram_url: string | null;
  youtube_url: string | null;
  tiktok_url: string | null;
  website_url: string | null;
  combined_followers: number | null;
  genres: string[] | null;
  years_playing: number | null;
  current_stick_brand: string | null;
  gigs_per_month: number | null;
  band_name: string | null;
  why_collision: string | null;
  is_handled: boolean;
  status: string | null;
  created_at: string;
};

async function fetchApplications(scope: string): Promise<Row[]> {
  const supa = supabaseAdmin();
  if (!supa) return [];
  let q = supa
    .from('collision_endorsement_applications')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(500);
  if (scope === 'open') q = q.eq('is_handled', false);
  if (scope === 'handled') q = q.eq('is_handled', true);
  if (scope === 'cruise' || scope === 'approach' || scope === 'impact') {
    q = q.eq('tier_applying', scope);
  }
  const { data } = await q;
  return (data ?? []) as Row[];
}

export default async function ApplicationsList({
  searchParams,
}: {
  searchParams: Promise<{ scope?: string }>;
}) {
  const { scope = 'open' } = await searchParams;
  const rows = await fetchApplications(scope);

  return (
    <div>
      <AdminPageHeader
        eyebrow="Inbox"
        title="Endorsement applications"
        description={`${rows.length} application${rows.length === 1 ? '' : 's'} in this view.`}
        actions={
          <a href="/api/admin/export?resource=applications" className="btn-ghost !py-3 !px-5 !text-[0.65rem]" download>
            Export CSV
          </a>
        }
      />

      <div className="flex gap-2 mb-5 flex-wrap">
        {[
          { value: 'open', label: 'Open' },
          { value: 'handled', label: 'Handled' },
          { value: 'all', label: 'All' },
          { value: 'cruise', label: 'Cruise' },
          { value: 'approach', label: 'Approach' },
          { value: 'impact', label: 'Impact' },
        ].map((s) => (
          <Link
            key={s.value}
            href={`/admin/applications?scope=${s.value}`}
            className={`px-3 py-2 text-xs uppercase tracking-[0.15em] font-semibold border ${
              scope === s.value ? 'bg-ink text-bone border-ink' : 'border-line hover:border-ink'
            }`}
          >
            {s.label}
          </Link>
        ))}
      </div>

      {rows.length === 0 ? (
        <p className="text-mute">Nothing in this view.</p>
      ) : (
        <ul className="space-y-3">
          {rows.map((a) => {
            const handle = toggleHandled.bind(null, 'collision_endorsement_applications', a.id, !a.is_handled);
            const remove = deleteSubmission.bind(null, 'collision_endorsement_applications', a.id, '/admin/applications');
            return (
              <li key={a.id} className="border border-line p-5 bg-bone">
                <div className="flex items-start justify-between gap-4 mb-2 flex-wrap">
                  <div>
                    <p className="font-display text-xl">{a.full_name}</p>
                    <p className="text-xs text-mute">
                      <a href={`mailto:${a.email}`} className="underline hover:text-crimson">{a.email}</a>
                      {a.phone && <span className="ml-2">{a.phone}</span>}
                    </p>
                    <p className="text-xs text-mute mt-1">
                      {a.tier_applying.toUpperCase()} - {a.country ?? ''} {a.city ?? ''} - {a.combined_followers?.toLocaleString() ?? '?'} followers
                    </p>
                  </div>
                  <p className="text-xs text-mute">{formatDateTime(a.created_at)}</p>
                </div>

                <dl className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mt-3 text-xs">
                  <div>
                    <dt className="text-mute uppercase tracking-[0.12em]">Band</dt>
                    <dd>{a.band_name ?? '-'}</dd>
                  </div>
                  <div>
                    <dt className="text-mute uppercase tracking-[0.12em]">Years playing</dt>
                    <dd>{a.years_playing ?? '-'}</dd>
                  </div>
                  <div>
                    <dt className="text-mute uppercase tracking-[0.12em]">Gigs / month</dt>
                    <dd>{a.gigs_per_month ?? '-'}</dd>
                  </div>
                  <div>
                    <dt className="text-mute uppercase tracking-[0.12em]">Current stick</dt>
                    <dd>{a.current_stick_brand ?? '-'}</dd>
                  </div>
                  <div>
                    <dt className="text-mute uppercase tracking-[0.12em]">Genres</dt>
                    <dd>{(a.genres ?? []).join(', ') || '-'}</dd>
                  </div>
                  <div className="flex flex-wrap gap-x-3">
                    {a.instagram_url && <a href={a.instagram_url} target="_blank" rel="noreferrer" className="underline">IG</a>}
                    {a.youtube_url && <a href={a.youtube_url} target="_blank" rel="noreferrer" className="underline">YT</a>}
                    {a.tiktok_url && <a href={a.tiktok_url} target="_blank" rel="noreferrer" className="underline">TT</a>}
                    {a.website_url && <a href={a.website_url} target="_blank" rel="noreferrer" className="underline">Web</a>}
                  </div>
                </dl>

                {a.why_collision && (
                  <p className="mt-3 text-sm text-ink-soft text-pretty leading-relaxed border-l-2 border-line pl-3">
                    {a.why_collision}
                  </p>
                )}

                <div className="mt-4 flex flex-wrap gap-2 items-center">
                  <form action={handle}>
                    <button type="submit" className="btn-accent !py-2 !px-4 !text-[0.65rem]">
                      {a.is_handled ? 'Mark open' : 'Mark handled'}
                    </button>
                  </form>
                  <form action={remove}>
                    <button type="submit" className="text-xs text-crimson uppercase tracking-[0.15em] font-semibold">
                      Delete
                    </button>
                  </form>
                  <span className="text-xs ml-auto">
                    {a.is_handled ? (
                      <span className="text-amber font-semibold uppercase tracking-[0.15em]">Handled</span>
                    ) : (
                      <span className="font-semibold uppercase tracking-[0.15em]">Open</span>
                    )}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
