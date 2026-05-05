import Link from 'next/link';
import { supabaseAdmin } from '@/lib/supabase';
import { AdminPageHeader, NewLink } from '../../_components/AdminPageHeader';
import { toggleRedirectActive } from './_actions';

export const dynamic = 'force-dynamic';
export const metadata = { title: 'Redirects', robots: { index: false, follow: false } };

type Row = {
  id: string;
  source: string;
  destination: string;
  permanent: boolean;
  is_active: boolean;
  created_at: string;
};

async function fetchRedirects(): Promise<Row[]> {
  const supa = supabaseAdmin();
  if (!supa) return [];
  const { data } = await supa
    .from('collision_redirects')
    .select('id, source, destination, permanent, is_active, created_at')
    .order('source');
  return (data ?? []) as Row[];
}

export default async function RedirectsList() {
  const rows = await fetchRedirects();

  return (
    <div>
      <AdminPageHeader
        eyebrow="SEO & site"
        title="Redirects"
        description="301/308 redirects for old or moved URLs. Resolved on every request via middleware."
        actions={<NewLink href="/admin/redirects/new" label="New redirect" />}
      />

      <div className="border border-line overflow-x-auto">
        <table className="w-full text-sm min-w-[760px]">
          <thead className="bg-cream text-xs uppercase tracking-[0.1em] text-mute">
            <tr>
              <th className="text-left p-3">Source</th>
              <th className="text-left p-3">Destination</th>
              <th className="text-left p-3">Type</th>
              <th className="text-left p-3">Active</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 ? (
              <tr>
                <td colSpan={5} className="p-6 text-center text-mute">
                  No redirects yet. Click <em>New redirect</em> to add one.
                </td>
              </tr>
            ) : (
              rows.map((r) => {
                const toggle = toggleRedirectActive.bind(null, r.id, !r.is_active);
                return (
                  <tr key={r.id} className="border-t border-line">
                    <td className="p-3 font-mono text-xs">
                      <Link href={`/admin/redirects/${r.id}`} className="font-semibold hover:text-crimson">
                        {r.source}
                      </Link>
                    </td>
                    <td className="p-3 font-mono text-xs text-mute">{r.destination}</td>
                    <td className="p-3 text-xs uppercase tracking-[0.15em]">
                      {r.permanent ? '308 permanent' : '307 temporary'}
                    </td>
                    <td className="p-3">
                      {r.is_active ? (
                        <span className="text-amber font-semibold text-xs uppercase tracking-[0.15em]">On</span>
                      ) : (
                        <span className="text-mute font-semibold text-xs uppercase tracking-[0.15em]">Off</span>
                      )}
                    </td>
                    <td className="p-3 text-right whitespace-nowrap">
                      <form action={toggle} className="inline mr-3">
                        <button type="submit" className="text-xs underline">
                          {r.is_active ? 'Disable' : 'Enable'}
                        </button>
                      </form>
                      <Link href={`/admin/redirects/${r.id}`} className="text-xs underline">Edit</Link>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
