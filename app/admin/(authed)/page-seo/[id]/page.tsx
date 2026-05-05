import Link from 'next/link';
import { notFound } from 'next/navigation';
import { supabaseAdmin } from '@/lib/supabase';
import { AdminPageHeader } from '../../../_components/AdminPageHeader';
import { PageSeoForm } from '../PageSeoForm';
import { updatePageSeo, deletePageSeo } from '../_actions';

export const metadata = { title: 'Edit page SEO', robots: { index: false, follow: false } };

export default async function EditPageSeo({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const supa = supabaseAdmin();
  if (!supa) notFound();
  const { data } = await supa.from('collision_page_seo').select('*').eq('id', id).maybeSingle();
  if (!data) notFound();

  const update = updatePageSeo.bind(null, id);
  const remove = deletePageSeo.bind(null, id, data.path);

  return (
    <div>
      <AdminPageHeader
        eyebrow="SEO & site"
        title={data.path}
        description="Edit metadata override for this URL."
        actions={
          <>
            <Link href={data.path} className="btn-ghost !py-3 !px-5 !text-[0.65rem]">View live</Link>
            <form action={remove}>
              <button type="submit" className="text-xs text-crimson uppercase tracking-[0.15em] font-semibold ml-2">Delete</button>
            </form>
          </>
        }
      />
      <PageSeoForm page={data} action={update} submitLabel="Save changes" lockPath />
    </div>
  );
}
