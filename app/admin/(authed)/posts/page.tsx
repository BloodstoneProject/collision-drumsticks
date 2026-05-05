import Link from 'next/link';
import { supabaseAdmin } from '@/lib/supabase';
import { AdminPageHeader, NewLink } from '../../_components/AdminPageHeader';
import { formatDateTime } from '../../_lib/utils';

export const dynamic = 'force-dynamic';
export const metadata = { title: 'Blog posts', robots: { index: false, follow: false } };

type Row = {
  id: string;
  title: string;
  slug: string;
  category: string;
  author: string;
  is_published: boolean;
  published_at: string | null;
  reading_time_minutes: number | null;
};

async function fetchPosts(query: string, scope: string): Promise<Row[]> {
  const supa = supabaseAdmin();
  if (!supa) return [];
  let q = supa
    .from('collision_posts')
    .select('id, title, slug, category, author, is_published, published_at, reading_time_minutes')
    .order('published_at', { ascending: false });
  if (query.trim()) q = q.ilike('title', `%${query.trim()}%`);
  if (scope === 'published') q = q.eq('is_published', true);
  if (scope === 'drafts') q = q.eq('is_published', false);
  if (
    scope === 'tips' ||
    scope === 'gear' ||
    scope === 'community' ||
    scope === 'news' ||
    scope === 'guides' ||
    scope === 'artist-spotlight'
  ) {
    q = q.eq('category', scope);
  }
  const { data } = await q.limit(500);
  return (data ?? []) as Row[];
}

export default async function PostsList({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; scope?: string }>;
}) {
  const { q = '', scope = 'all' } = await searchParams;
  const rows = await fetchPosts(q, scope);

  const scopes = [
    { value: 'all', label: 'All' },
    { value: 'published', label: 'Published' },
    { value: 'drafts', label: 'Drafts' },
    { value: 'tips', label: 'Tips' },
    { value: 'gear', label: 'Gear' },
    { value: 'guides', label: 'Guides' },
    { value: 'artist-spotlight', label: 'Artist spotlights' },
    { value: 'community', label: 'Community' },
    { value: 'news', label: 'News' },
  ];

  return (
    <div>
      <AdminPageHeader
        eyebrow="Content"
        title="Blog posts"
        description={`${rows.length} post${rows.length === 1 ? '' : 's'} matching.`}
        actions={<NewLink href="/admin/posts/new" label="New post" />}
      />

      <form className="flex flex-wrap gap-3 mb-5">
        <input type="search" name="q" defaultValue={q} placeholder="Search by title" className="input-field max-w-xs" />
        <select name="scope" defaultValue={scope} className="input-field max-w-[200px]">
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
              <th className="text-left p-3">Title</th>
              <th className="text-left p-3">Category</th>
              <th className="text-left p-3">Author</th>
              <th className="text-left p-3">Published</th>
              <th className="text-left p-3">Status</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 ? (
              <tr><td colSpan={6} className="p-6 text-center text-mute">No posts match.</td></tr>
            ) : (
              rows.map((p) => (
                <tr key={p.id} className="border-t border-line">
                  <td className="p-3">
                    <Link href={`/admin/posts/${p.id}`} className="font-medium hover:text-crimson">{p.title}</Link>
                    <p className="text-xs text-mute">{p.slug}</p>
                  </td>
                  <td className="p-3 capitalize text-mute">{p.category.replace('-', ' ')}</td>
                  <td className="p-3 text-mute">{p.author}</td>
                  <td className="p-3 text-mute">{p.published_at ? formatDateTime(p.published_at) : '-'}</td>
                  <td className="p-3">
                    {p.is_published ? (
                      <span className="text-amber font-semibold text-xs uppercase tracking-[0.15em]">Live</span>
                    ) : (
                      <span className="text-mute font-semibold text-xs uppercase tracking-[0.15em]">Draft</span>
                    )}
                  </td>
                  <td className="p-3 text-right whitespace-nowrap">
                    <Link href={`/resources/${p.slug}`} className="text-xs underline mr-3">View</Link>
                    <Link href={`/admin/posts/${p.id}`} className="text-xs underline">Edit</Link>
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
