import Link from 'next/link';
import { supabaseAdmin } from '@/lib/supabase';
import { formatPrice } from '@/lib/utils';
import { AdminPageHeader, NewLink } from '../../_components/AdminPageHeader';

export const dynamic = 'force-dynamic';

export const metadata = { title: 'Products', robots: { index: false, follow: false } };

type Row = {
  id: string;
  name: string;
  slug: string;
  category: string;
  base_price_gbp: number | null;
  is_active: boolean;
  is_featured: boolean;
  stock_count: number | null;
  badge: string | null;
  average_rating: number | null;
  review_count: number | null;
  primary_image: string | null;
};

async function fetchProducts(query: string, scope: string): Promise<Row[]> {
  const supa = supabaseAdmin();
  if (!supa) return [];
  let q = supa
    .from('collision_products')
    .select('id, name, slug, category, base_price_gbp, is_active, is_featured, stock_count, badge, average_rating, review_count, primary_image')
    .order('is_active', { ascending: false })
    .order('name', { ascending: true });
  if (query.trim()) q = q.ilike('name', `%${query.trim()}%`);
  if (scope === 'active') q = q.eq('is_active', true);
  if (scope === 'archived') q = q.eq('is_active', false);
  if (scope === 'featured') q = q.eq('is_featured', true);
  if (scope === 'drumsticks' || scope === 'accessories' || scope === 'apparel') {
    q = q.eq('category', scope);
  }
  const { data } = await q;
  return (data ?? []) as Row[];
}

export default async function ProductsList({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; scope?: string }>;
}) {
  const { q = '', scope = 'all' } = await searchParams;
  const rows = await fetchProducts(q, scope);

  const scopes: { value: string; label: string }[] = [
    { value: 'all', label: 'All' },
    { value: 'active', label: 'Active' },
    { value: 'archived', label: 'Archived' },
    { value: 'featured', label: 'Featured' },
    { value: 'drumsticks', label: 'Drumsticks' },
    { value: 'accessories', label: 'Accessories' },
    { value: 'apparel', label: 'Apparel' },
  ];

  return (
    <div>
      <AdminPageHeader
        eyebrow="Catalog"
        title="Products"
        description={`${rows.length} matching ${q || scope !== 'all' ? '(filtered)' : 'in the catalog'}.`}
        actions={<NewLink href="/admin/products/new" label="New product" />}
      />

      <form className="flex flex-wrap gap-3 mb-5">
        <input
          type="search"
          name="q"
          defaultValue={q}
          placeholder="Search by name"
          className="input-field max-w-xs"
        />
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
              <th className="text-left p-3">Category</th>
              <th className="text-left p-3">Price</th>
              <th className="text-left p-3">Stock</th>
              <th className="text-left p-3">Reviews</th>
              <th className="text-left p-3">Status</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 ? (
              <tr>
                <td colSpan={7} className="p-6 text-center text-mute">No products match.</td>
              </tr>
            ) : (
              rows.map((p) => (
                <tr key={p.id} className="border-t border-line align-middle">
                  <td className="p-3">
                    <Link href={`/admin/products/${p.id}`} className="font-medium hover:text-crimson">{p.name}</Link>
                    <p className="text-xs text-mute">{p.slug}</p>
                  </td>
                  <td className="p-3 capitalize text-mute">{p.category}</td>
                  <td className="p-3">{p.base_price_gbp ? formatPrice(p.base_price_gbp) : '-'}</td>
                  <td className="p-3">{p.stock_count ?? 0}</td>
                  <td className="p-3">
                    {p.average_rating ? p.average_rating.toFixed(2) : '-'}{' '}
                    <span className="text-mute">({p.review_count ?? 0})</span>
                  </td>
                  <td className="p-3">
                    {p.is_active ? (
                      <span className="text-amber font-semibold text-xs uppercase tracking-[0.15em]">Active</span>
                    ) : (
                      <span className="text-mute font-semibold text-xs uppercase tracking-[0.15em]">Archived</span>
                    )}
                    {p.is_featured && <span className="ml-2 text-crimson text-xs uppercase tracking-[0.15em]">Featured</span>}
                  </td>
                  <td className="p-3 text-right whitespace-nowrap">
                    <Link href={`/product/${p.slug}`} className="text-xs underline mr-3">View</Link>
                    <Link href={`/admin/products/${p.id}`} className="text-xs underline">Edit</Link>
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
