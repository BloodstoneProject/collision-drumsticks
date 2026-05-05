import Link from 'next/link';
import { supabaseAdmin } from '@/lib/supabase';
import { AdminPageHeader, NewLink } from '../../_components/AdminPageHeader';

export const dynamic = 'force-dynamic';
export const metadata = { title: 'FAQs', robots: { index: false, follow: false } };

type Row = {
  id: string;
  question: string;
  answer: string;
  category: string;
  sort_order: number;
  is_active: boolean;
};

async function fetchFaqs(category: string): Promise<Row[]> {
  const supa = supabaseAdmin();
  if (!supa) return [];
  let q = supa
    .from('collision_faqs')
    .select('id, question, answer, category, sort_order, is_active')
    .order('category')
    .order('sort_order');
  if (category && category !== 'all') q = q.eq('category', category);
  const { data } = await q;
  return (data ?? []) as Row[];
}

export default async function FaqsList({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category = 'all' } = await searchParams;
  const rows = await fetchFaqs(category);

  const cats = [
    { value: 'all', label: 'All categories' },
    { value: 'general', label: 'General' },
    { value: 'products', label: 'Products' },
    { value: 'shipping', label: 'Shipping' },
    { value: 'endorsements', label: 'Endorsements' },
    { value: 'custom', label: 'Custom' },
    { value: 'wholesale', label: 'Wholesale' },
    { value: 'backstage', label: 'Backstage' },
  ];

  return (
    <div>
      <AdminPageHeader
        eyebrow="Content"
        title="FAQs"
        description={`${rows.length} entr${rows.length === 1 ? 'y' : 'ies'}. These render on /faq and on category pages.`}
        actions={<NewLink href="/admin/faqs/new" label="New FAQ" />}
      />

      <form className="flex flex-wrap gap-3 mb-5">
        <select name="category" defaultValue={category} className="input-field max-w-[220px]">
          {cats.map((c) => (
            <option key={c.value} value={c.value}>{c.label}</option>
          ))}
        </select>
        <button type="submit" className="btn-ghost !py-3 !px-5 !text-[0.65rem]">Filter</button>
      </form>

      <div className="border border-line overflow-x-auto">
        <table className="w-full text-sm min-w-[760px]">
          <thead className="bg-cream text-xs uppercase tracking-[0.1em] text-mute">
            <tr>
              <th className="text-left p-3">Question</th>
              <th className="text-left p-3">Category</th>
              <th className="text-left p-3">Order</th>
              <th className="text-left p-3">Active</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 ? (
              <tr><td colSpan={5} className="p-6 text-center text-mute">No FAQs match.</td></tr>
            ) : (
              rows.map((f) => (
                <tr key={f.id} className="border-t border-line">
                  <td className="p-3">
                    <Link href={`/admin/faqs/${f.id}`} className="font-medium hover:text-crimson">{f.question}</Link>
                    <p className="text-xs text-mute line-clamp-1">{f.answer}</p>
                  </td>
                  <td className="p-3 capitalize text-mute">{f.category}</td>
                  <td className="p-3">{f.sort_order}</td>
                  <td className="p-3">
                    {f.is_active ? (
                      <span className="text-amber font-semibold text-xs uppercase tracking-[0.15em]">On</span>
                    ) : (
                      <span className="text-mute font-semibold text-xs uppercase tracking-[0.15em]">Off</span>
                    )}
                  </td>
                  <td className="p-3 text-right">
                    <Link href={`/admin/faqs/${f.id}`} className="text-xs underline">Edit</Link>
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
