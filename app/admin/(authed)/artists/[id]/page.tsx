import Link from 'next/link';
import { notFound } from 'next/navigation';
import { supabaseAdmin } from '@/lib/supabase';
import { AdminPageHeader } from '../../../_components/AdminPageHeader';
import { ArtistForm } from '../ArtistForm';
import { updateArtist, deleteArtist } from '../_actions';

export const metadata = { title: 'Edit artist', robots: { index: false, follow: false } };

export default async function EditArtistPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supa = supabaseAdmin();
  if (!supa) notFound();
  const { data } = await supa.from('collision_artists').select('*').eq('id', id).maybeSingle();
  if (!data) notFound();

  const update = updateArtist.bind(null, id);
  const remove = deleteArtist.bind(null, id);

  return (
    <div>
      <AdminPageHeader
        eyebrow="Content"
        title={data.name}
        description={`Editing /artists/${data.slug}`}
        actions={
          <>
            <Link href={`/artists/${data.slug}`} className="btn-ghost !py-3 !px-5 !text-[0.65rem]">View live</Link>
            <form action={remove}>
              <button type="submit" className="text-xs text-crimson uppercase tracking-[0.15em] font-semibold ml-2">Delete</button>
            </form>
          </>
        }
      />
      <ArtistForm artist={data} action={update} submitLabel="Save changes" />
    </div>
  );
}
