import Link from 'next/link';
import { supabaseAdmin } from '@/lib/supabase';
import { AdminPageHeader } from '../../_components/AdminPageHeader';
import { formatDateTime } from '../../_lib/utils';
import { toggleSubscriberActive, deleteSubmission } from '../_actions/inbox';

export const dynamic = 'force-dynamic';
export const metadata = { title: 'Subscribers', robots: { index: false, follow: false } };

type Row = {
  id: string;
  email: string;
  first_name: string | null;
  source: string | null;
  is_active: boolean;
  subscribed_at: string;
};

async function fetchSubscribers(query: string, scope: string): Promise<Row[]> {
  const supa = supabaseAdmin();
  if (!supa) return [];
  let q = supa
    .from('collision_subscribers')
    .select('id, email, first_name, source, is_active, subscribed_at')
    .order('subscribed_at', { ascending: false })
    .limit(1000);
  if (query.trim()) q = q.ilike('email', `%${query.trim()}%`);
  if (scope === 'active') q = q.eq('is_active', true);
  if (scope === 'unsubscribed') q = q.eq('is_active', false);
  if (scope.startsWith('source-')) q = q.eq('source', scope.replace('source-', ''));
  const { data } = await q;
  return (data ?? []) as Row[];
}

export default async function SubscribersList({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; scope?: string }>;
}) {
  const { q = '', scope = 'all' } = await searchParams;
  const rows = await fetchSubscribers(q, scope);

  const scopes = [
    { value: 'all', label: 'All' },
    { value: 'active', label: 'Active' },
    { value: 'unsubscribed', label: 'Unsubscribed' },
    { value: 'source-popup-welcome', label: 'Source: welcome popup' },
    { value: 'source-popup-exit', label: 'Source: exit popup' },
    { value: 'source-footer', label: 'Source: footer' },
    { value: 'source-default', label: 'Source: default' },
  ];

  return (
    <div>
      <AdminPageHeader
        eyebrow="Inbox"
        title="Subscribers"
        description={`${rows.length} subscriber${rows.length === 1 ? '' : 's'} matching.`}
        actions={
          <a
            href="/api/admin/export?resource=subscribers"
            className="btn-ghost !py-3 !px-5 !text-[0.65rem]"
            download
          >
            Export CSV
          </a>
        }
      />

      <form className="flex flex-wrap gap-3 mb-5">
        <input type="search" name="q" defaultValue={q} placeholder="Search by email" className="input-field max-w-xs" />
        <select name="scope" defaultValue={scope} className="input-field max-w-[260px]">
          {scopes.map((s) => (
            <option key={s.value} value={s.value}>{s.label}</option>
          ))}
        </select>
        <button type="submit" className="btn-ghost !py-3 !px-5 !text-[0.65rem]">Filter</button>
      </form>

      <div className="border border-line overflow-x-auto">
        <table className="w-full text-sm min-w-[760px]">
          <thead className="bg-cream text-xs uppercase tracking-[0.1em] text-mute">
            <tr>
              <th className="text-left p-3">Email</th>
              <th className="text-left p-3">First name</th>
              <th className="text-left p-3">Source</th>
              <th className="text-left p-3">Joined</th>
              <th className="text-left p-3">Status</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 ? (
              <tr><td colSpan={6} className="p-6 text-center text-mute">No subscribers match.</td></tr>
            ) : (
              rows.map((s) => {
                const toggle = toggleSubscriberActive.bind(null, s.id, !s.is_active);
                const remove = deleteSubmission.bind(null, 'collision_subscribers', s.id, '/admin/subscribers');
                return (
                  <tr key={s.id} className="border-t border-line">
                    <td className="p-3 font-medium">
                      <a href={`mailto:${s.email}`} className="hover:text-crimson">{s.email}</a>
                    </td>
                    <td className="p-3 text-mute">{s.first_name ?? '-'}</td>
                    <td className="p-3 text-mute">{s.source ?? '-'}</td>
                    <td className="p-3 text-mute">{formatDateTime(s.subscribed_at)}</td>
                    <td className="p-3">
                      {s.is_active ? (
                        <span className="text-amber font-semibold text-xs uppercase tracking-[0.15em]">Active</span>
                      ) : (
                        <span className="text-mute font-semibold text-xs uppercase tracking-[0.15em]">Off</span>
                      )}
                    </td>
                    <td className="p-3 text-right whitespace-nowrap">
                      <form action={toggle} className="inline mr-3">
                        <button type="submit" className="text-xs underline">
                          {s.is_active ? 'Mark unsubscribed' : 'Reactivate'}
                        </button>
                      </form>
                      <form action={remove} className="inline">
                        <button type="submit" className="text-xs text-crimson uppercase tracking-[0.15em] font-semibold">
                          Delete
                        </button>
                      </form>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      <p className="mt-6 text-xs text-mute">
        <Link href="/admin" className="underline hover:text-crimson">Back to dashboard</Link>
      </p>
    </div>
  );
}
