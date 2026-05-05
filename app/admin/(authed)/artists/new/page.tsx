import { AdminPageHeader } from '../../../_components/AdminPageHeader';
import { ArtistForm } from '../ArtistForm';
import { createArtist } from '../_actions';

export const metadata = { title: 'New artist', robots: { index: false, follow: false } };

export default function NewArtistPage() {
  return (
    <div>
      <AdminPageHeader eyebrow="Content" title="New artist." description="Add to the endorsed roster." />
      <ArtistForm action={createArtist} submitLabel="Create artist" />
    </div>
  );
}
