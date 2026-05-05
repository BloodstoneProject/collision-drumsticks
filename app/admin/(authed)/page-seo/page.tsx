import Link from 'next/link';
import { supabaseAdmin } from '@/lib/supabase';
import { AdminPageHeader, NewLink } from '../../_components/AdminPageHeader';
import { formatDateTime } from '../../_lib/utils';

export const dynamic = 'force-dynamic';
export const metadata = { title: 'Page SEO', robots: { index: false, follow: false } };

type Row = {
  id: string;
  path: string;
  title: string | null;
  description: string | null;
  noindex: boolean;
  updated_at: string;
};

async function fetchPageSeo(): Promise<Row[]> {
  const supa = supabaseAdmin();
  if (!supa) return [];
  const { data } = await supa
    .from('collision_page_seo')
    .select('id, path, title, description, noindex, updated_at')
    .order('path');
  return (data ?? []) as Row[];
}

export default async function PageSeoList() {
  const rows = await fetchPageSeo();

  return (
    <div>
      <AdminPageHeader
        eyebrow="SEO & site"
        title="Page SEO"
        description="Per-path overrides for static page metadata. Empty fields fall back to the page's built-in defaults."
        actions={<NewLink href="/admin/page-seo/new" label="Add path" />}
      />

      <div className="border border-line overflow-x-auto">
        <table className="w-full text-sm min-w-[760px]">
          <thead className="bg-cream text-xs uppercase tracking-[0.1em] text-mute">
            <tr>
              <th className="text-left p-3">Path</th>
              <th className="text-left p-3">Title override</th>
              <th className="text-left p-3">Noindex</th>
              <th className="text-left p-3">Updated</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 ? (
              <tr>
                <td colSpan={5} className="p-6 text-center text-mute">
                  No overrides set. Click <em>Add path</em> to override metadata for a specific URL.
                </td>
              </tr>
            ) : (
              rows.map((p) => (
                <tr key={p.id} className="border-t border-line">
                  <td className="p-3 font-mono text-xs">
                    <Link href={`/admin/page-seo/${p.id}`} className="font-semibold hover:text-crimson">{p.path}</Link>
                  </td>
                  <td className="p-3 text-mute">{p.title ?? '-'}</td>
                  <td className="p-3">
                    {p.noindex ? (
                      <span className="text-crimson font-semibold text-xs uppercase tracking-[0.15em]">Noindex</span>
                    ) : (
                      <span className="text-mute text-xs uppercase tracking-[0.15em]">-</span>
                    )}
                  </td>
                  <td className="p-3 text-mute text-xs">{formatDateTime(p.updated_at)}</td>
                  <td className="p-3 text-right whitespace-nowrap">
                    <Link href={p.path} className="text-xs underline mr-3">View</Link>
                    <Link href={`/admin/page-seo/${p.id}`} className="text-xs underline">Edit</Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
