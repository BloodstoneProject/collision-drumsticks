import Link from 'next/link';
import { supabaseAdmin } from '@/lib/supabase';
import { AdminPageHeader } from '../../_components/AdminPageHeader';
import { formatDateTime } from '../../_lib/utils';
import { toggleHandled, deleteSubmission } from '../_actions/inbox';

export const dynamic = 'force-dynamic';
export const metadata = { title: 'Contact submissions', robots: { index: false, follow: false } };

type Row = {
  id: string;
  name: string | null;
  email: string;
  subject: string | null;
  message: string | null;
  is_handled: boolean;
  created_at: string;
};

async function fetchSubmissions(scope: string): Promise<Row[]> {
  const supa = supabaseAdmin();
  if (!supa) return [];
  let q = supa
    .from('collision_contact_submissions')
    .select('id, name, email, subject, message, is_handled, created_at')
    .order('created_at', { ascending: false })
    .limit(500);
  if (scope === 'open') q = q.eq('is_handled', false);
  if (scope === 'handled') q = q.eq('is_handled', true);
  const { data } = await q;
  return (data ?? []) as Row[];
}

export default async function ContactList({
  searchParams,
}: {
  searchParams: Promise<{ scope?: string }>;
}) {
  const { scope = 'open' } = await searchParams;
  const rows = await fetchSubmissions(scope);

  return (
    <div>
      <AdminPageHeader
        eyebrow="Inbox"
        title="Contact submissions"
        description={`${rows.length} submission${rows.length === 1 ? '' : 's'} in this view.`}
        actions={
          <a href="/api/admin/export?resource=contact" className="btn-ghost !py-3 !px-5 !text-[0.65rem]" download>
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
            href={`/admin/contact?scope=${s.value}`}
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
          {rows.map((c) => {
            const handle = toggleHandled.bind(null, 'collision_contact_submissions', c.id, !c.is_handled);
            const remove = deleteSubmission.bind(null, 'collision_contact_submissions', c.id, '/admin/contact');
            return (
              <li key={c.id} className="border border-line p-5 bg-bone">
                <div className="flex items-start justify-between gap-4 mb-2 flex-wrap">
                  <div>
                    <p className="font-display text-xl">{c.name ?? c.email}</p>
                    <p className="text-xs text-mute">
                      <a href={`mailto:${c.email}`} className="underline hover:text-crimson">{c.email}</a>
                    </p>
                    {c.subject && <p className="text-sm font-semibold mt-2">{c.subject}</p>}
                  </div>
                  <p className="text-xs text-mute">{formatDateTime(c.created_at)}</p>
                </div>
                {c.message && (
                  <p className="mt-3 text-sm text-ink-soft text-pretty leading-relaxed border-l-2 border-line pl-3">
                    {c.message}
                  </p>
                )}
                <div className="mt-4 flex flex-wrap gap-2 items-center">
                  <form action={handle}>
                    <button type="submit" className="btn-accent !py-2 !px-4 !text-[0.65rem]">
                      {c.is_handled ? 'Mark open' : 'Mark handled'}
                    </button>
                  </form>
                  <a href={`mailto:${c.email}?subject=Re: ${encodeURIComponent(c.subject ?? '')}`} className="btn-ghost !py-2 !px-4 !text-[0.65rem]">
                    Reply
                  </a>
                  <form action={remove}>
                    <button type="submit" className="text-xs text-crimson uppercase tracking-[0.15em] font-semibold">
                      Delete
                    </button>
                  </form>
                  <span className="text-xs ml-auto">
                    {c.is_handled ? (
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
