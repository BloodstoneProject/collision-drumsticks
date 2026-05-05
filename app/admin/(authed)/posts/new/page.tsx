import { AdminPageHeader } from '../../../_components/AdminPageHeader';
import { PostForm } from '../PostForm';
import { createPost } from '../_actions';

export const metadata = { title: 'New post', robots: { index: false, follow: false } };

export default function NewPostPage() {
  return (
    <div>
      <AdminPageHeader eyebrow="Content" title="New post." description="Drafts are saved off-public until you tick Published." />
      <PostForm action={createPost} submitLabel="Create post" />
    </div>
  );
}
