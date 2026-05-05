import { notFound } from 'next/navigation';
import { supabaseAdmin } from '@/lib/supabase';
import { AdminPageHeader } from '../../../_components/AdminPageHeader';
import { FaqForm } from '../FaqForm';
import { updateFaq, deleteFaq } from '../_actions';

export const metadata = { title: 'Edit FAQ', robots: { index: false, follow: false } };

export default async function EditFaqPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const supa = supabaseAdmin();
  if (!supa) notFound();
  const { data } = await supa.from('collision_faqs').select('*').eq('id', id).maybeSingle();
  if (!data) notFound();

  const update = updateFaq.bind(null, id);
  const remove = deleteFaq.bind(null, id);

  return (
    <div>
      <AdminPageHeader
        eyebrow="Content"
        title="Edit FAQ"
        description={data.question}
        actions={
          <form action={remove}>
            <button type="submit" className="text-xs text-crimson uppercase tracking-[0.15em] font-semibold">Delete</button>
          </form>
        }
      />
      <FaqForm faq={data} action={update} submitLabel="Save changes" />
    </div>
  );
}
