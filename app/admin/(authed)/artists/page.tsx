import Link from 'next/link';
import { supabaseAdmin } from '@/lib/supabase';
import { AdminPageHeader, NewLink } from '../../_components/AdminPageHeader';

export const dynamic = 'force-dynamic';
export const metadata = { title: 'Artists', robots: { index: false, follow: false } };

type Row = {
  id: string;
  name: string;
  slug: string;
  endorsement_tier: string;
  country: string | null;
  instagram_followers: number | null;
  favourite_stick: string | null;
  is_featured: boolean;
};

async function fetchArtists(query: string, scope: string): Promise<Row[]> {
  const supa = supabaseAdmin();
  if (!supa) return [];
  let q = supa
    .from('collision_artists')
    .select('id, name, slug, endorsement_tier, country, instagram_followers, favourite_stick, is_featured')
    .order('is_featured', { ascending: false })
    .order('name', { ascending: true });
  if (query.trim()) q = q.ilike('name', `%${query.trim()}%`);
  if (scope === 'featured') q = q.eq('is_featured', true);
  if (scope === 'cruise' || scope === 'approach' || scope === 'impact') {
    q = q.eq('endorsement_tier', scope);
  }
  const { data } = await q.limit(1000);
  return (data ?? []) as Row[];
}

export default async function ArtistsList({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; scope?: string }>;
}) {
  const { q = '', scope = 'all' } = await searchParams;
  const rows = await fetchArtists(q, scope);

  const scopes = [
    { value: 'all', label: 'All tiers' },
    { value: 'cruise', label: 'Cruise' },
    { value: 'approach', label: 'Approach' },
    { value: 'impact', label: 'Impact' },
    { value: 'featured', label: 'Featured' },
  ];

  return (
    <div>
      <AdminPageHeader
        eyebrow="Content"
        title="Artists"
        description={`${rows.length} artist${rows.length === 1 ? '' : 's'} matching.`}
        actions={<NewLink href="/admin/artists/new" label="New artist" />}
      />

      <form className="flex flex-wrap gap-3 mb-5">
        <input type="search" name="q" defaultValue={q} placeholder="Search by name" className="input-field max-w-xs" />
        <select name="scope" defaultValue={scope} className="input-field max-w-[180px]">
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
              <th className="text-left p-3">Name</th>
              <th className="text-left p-3">Tier</th>
              <th className="text-left p-3">Country</th>
              <th className="text-left p-3">IG followers</th>
              <th className="text-left p-3">Stick</th>
              <th className="text-left p-3">Featured</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 ? (
              <tr><td colSpan={7} className="p-6 text-center text-mute">No artists match.</td></tr>
            ) : (
              rows.map((a) => (
                <tr key={a.id} className="border-t border-line">
                  <td className="p-3">
                    <Link href={`/admin/artists/${a.id}`} className="font-medium hover:text-crimson">{a.name}</Link>
                    <p className="text-xs text-mute">{a.slug}</p>
                  </td>
                  <td className="p-3 capitalize text-mute">{a.endorsement_tier}</td>
                  <td className="p-3 text-mute">{a.country ?? '-'}</td>
                  <td className="p-3">{a.instagram_followers?.toLocaleString() ?? '-'}</td>
                  <td className="p-3">{a.favourite_stick ?? '-'}</td>
                  <td className="p-3">
                    {a.is_featured && <span className="text-crimson text-xs uppercase tracking-[0.15em] font-semibold">Featured</span>}
                  </td>
                  <td className="p-3 text-right whitespace-nowrap">
                    <Link href={`/artists/${a.slug}`} className="text-xs underline mr-3">View</Link>
                    <Link href={`/admin/artists/${a.id}`} className="text-xs underline">Edit</Link>
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
