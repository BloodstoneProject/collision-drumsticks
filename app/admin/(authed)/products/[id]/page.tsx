import Link from 'next/link';
import { notFound } from 'next/navigation';
import { supabaseAdmin } from '@/lib/supabase';
import { AdminPageHeader } from '../../../_components/AdminPageHeader';
import { ProductForm } from '../ProductForm';
import { updateProduct, deleteProduct, toggleProductActive } from '../_actions';

export const metadata = { title: 'Edit product', robots: { index: false, follow: false } };

export default async function EditProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supa = supabaseAdmin();
  if (!supa) notFound();
  const { data } = await supa.from('collision_products').select('*').eq('id', id).maybeSingle();
  if (!data) notFound();

  const update = updateProduct.bind(null, id);
  const remove = deleteProduct.bind(null, id);
  const toggle = toggleProductActive.bind(null, id, !data.is_active);

  return (
    <div>
      <AdminPageHeader
        eyebrow="Catalog"
        title={data.name}
        description={`Editing /product/${data.slug}`}
        actions={
          <>
            <Link href={`/product/${data.slug}`} className="btn-ghost !py-3 !px-5 !text-[0.65rem]">View live</Link>
            <form action={toggle}>
              <button type="submit" className="btn-ghost !py-3 !px-5 !text-[0.65rem]">
                {data.is_active ? 'Archive' : 'Restore'}
              </button>
            </form>
            <form action={remove}>
              <button type="submit" className="text-xs text-crimson uppercase tracking-[0.15em] font-semibold ml-2">
                Delete
              </button>
            </form>
          </>
        }
      />
      <ProductForm product={data} action={update} submitLabel="Save changes" />
    </div>
  );
}
