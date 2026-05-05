import Link from 'next/link';
import { notFound } from 'next/navigation';
import { supabaseAdmin } from '@/lib/supabase';
import { AdminPageHeader } from '../../../_components/AdminPageHeader';
import { PostForm } from '../PostForm';
import { updatePost, deletePost, togglePostPublished } from '../_actions';

export const metadata = { title: 'Edit post', robots: { index: false, follow: false } };

export default async function EditPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supa = supabaseAdmin();
  if (!supa) notFound();
  const { data } = await supa.from('collision_posts').select('*').eq('id', id).maybeSingle();
  if (!data) notFound();

  const update = updatePost.bind(null, id);
  const remove = deletePost.bind(null, id);
  const togglePub = togglePostPublished.bind(null, id, !data.is_published);

  return (
    <div>
      <AdminPageHeader
        eyebrow="Content"
        title={data.title}
        description={`Editing /resources/${data.slug}`}
        actions={
          <>
            <Link href={`/resources/${data.slug}`} className="btn-ghost !py-3 !px-5 !text-[0.65rem]">View live</Link>
            <form action={togglePub}>
              <button type="submit" className="btn-ghost !py-3 !px-5 !text-[0.65rem]">
                {data.is_published ? 'Unpublish' : 'Publish'}
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
      <PostForm post={data} action={update} submitLabel="Save changes" />
    </div>
  );
}
