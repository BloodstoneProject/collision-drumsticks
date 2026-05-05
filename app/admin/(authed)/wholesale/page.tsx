import Link from 'next/link';
import { supabaseAdmin } from '@/lib/supabase';
import { AdminPageHeader } from '../../_components/AdminPageHeader';
import { formatDateTime } from '../../_lib/utils';
import { toggleHandled, deleteSubmission } from '../_actions/inbox';

export const dynamic = 'force-dynamic';
export const metadata = { title: 'Wholesale enquiries', robots: { index: false, follow: false } };

type Row = {
  id: string;
  business_name: string | null;
  contact_name: string | null;
  email: string;
  phone: string | null;
  country: string | null;
  business_type: string | null;
  estimated_monthly_volume: number | null;
  message: string | null;
  is_handled: boolean;
  created_at: string;
};

async function fetchEnquiries(scope: string): Promise<Row[]> {
  const supa = supabaseAdmin();
  if (!supa) return [];
  let q = supa
    .from('collision_wholesale_enquiries')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(500);
  if (scope === 'open') q = q.eq('is_handled', false);
  if (scope === 'handled') q = q.eq('is_handled', true);
  const { data } = await q;
  return (data ?? []) as Row[];
}

export default async function WholesaleList({
  searchParams,
}: {
  searchParams: Promise<{ scope?: string }>;
}) {
  const { scope = 'open' } = await searchParams;
  const rows = await fetchEnquiries(scope);

  return (
    <div>
      <AdminPageHeader
        eyebrow="Inbox"
        title="Wholesale enquiries"
        description={`${rows.length} enquir${rows.length === 1 ? 'y' : 'ies'} in this view.`}
        actions={
          <a href="/api/admin/export?resource=wholesale" className="btn-ghost !py-3 !px-5 !text-[0.65rem]" download>
            Export CSV
          </a>
        }
      />

      <div className="flex gap-2 mb-5">
        {[
          { value: 'open', label: 'Open' },
          { value: 'handled', label: 'Handled' },
          { value: 'all', label: 'All' },
        ].map((s) => (
          <Link
            key={s.value}
            href={`/admin/wholesale?scope=${s.value}`}
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
          {rows.map((w) => {
            const handle = toggleHandled.bind(null, 'collision_wholesale_enquiries', w.id, !w.is_handled);
            const remove = deleteSubmission.bind(null, 'collision_wholesale_enquiries', w.id, '/admin/wholesale');
            return (
              <li key={w.id} className="border border-line p-5 bg-bone">
                <div className="flex items-start justify-between gap-4 mb-2 flex-wrap">
                  <div>
                    <p className="font-display text-xl">{w.business_name ?? w.email}</p>
                    <p className="text-xs text-mute">
                      {w.contact_name && <span className="font-semibold">{w.contact_name} - </span>}
                      <a href={`mailto:${w.email}`} className="underline hover:text-crimson">{w.email}</a>
                      {w.phone && <span className="ml-2">{w.phone}</span>}
                    </p>
                    <p className="text-xs text-mute mt-1">
                      {w.business_type ?? 'Stockist'} - {w.country ?? ''} - Est. {w.estimated_monthly_volume?.toLocaleString() ?? '?'} pairs / mo
                    </p>
                  </div>
                  <p className="text-xs text-mute">{formatDateTime(w.created_at)}</p>
                </div>
                {w.message && (
                  <p className="mt-3 text-sm text-ink-soft text-pretty leading-relaxed border-l-2 border-line pl-3">
                    {w.message}
                  </p>
                )}
                <div className="mt-4 flex flex-wrap gap-2 items-center">
                  <form action={handle}>
                    <button type="submit" className="btn-accent !py-2 !px-4 !text-[0.65rem]">
                      {w.is_handled ? 'Mark open' : 'Mark handled'}
                    </button>
                  </form>
                  <form action={remove}>
                    <button type="submit" className="text-xs text-crimson uppercase tracking-[0.15em] font-semibold">
                      Delete
                    </button>
                  </form>
                  <span className="text-xs ml-auto">
                    {w.is_handled ? (
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
