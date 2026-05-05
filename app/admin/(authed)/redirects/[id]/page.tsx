import Link from 'next/link';
import { notFound } from 'next/navigation';
import { supabaseAdmin } from '@/lib/supabase';
import { AdminPageHeader } from '../../../_components/AdminPageHeader';
import { RedirectForm } from '../RedirectForm';
import { updateRedirect, deleteRedirect } from '../_actions';

export const metadata = { title: 'Edit redirect', robots: { index: false, follow: false } };

export default async function EditRedirect({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const supa = supabaseAdmin();
  if (!supa) notFound();
  const { data } = await supa.from('collision_redirects').select('*').eq('id', id).maybeSingle();
  if (!data) notFound();

  const update = updateRedirect.bind(null, id);
  const remove = deleteRedirect.bind(null, id);

  return (
    <div>
      <AdminPageHeader
        eyebrow="SEO & site"
        title={data.source}
        description={`Redirects to ${data.destination}`}
        actions={
          <>
            <Link href={data.source} className="btn-ghost !py-3 !px-5 !text-[0.65rem]">Test</Link>
            <form action={remove}>
              <button type="submit" className="text-xs text-crimson uppercase tracking-[0.15em] font-semibold ml-2">Delete</button>
            </form>
          </>
        }
      />
      <RedirectForm redirectRow={data} action={update} submitLabel="Save changes" />
    </div>
  );
}
