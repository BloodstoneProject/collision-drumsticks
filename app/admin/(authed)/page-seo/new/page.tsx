import { AdminPageHeader } from '../../../_components/AdminPageHeader';
import { PageSeoForm } from '../PageSeoForm';
import { createPageSeo } from '../_actions';

export const metadata = { title: 'New page SEO override', robots: { index: false, follow: false } };

export default function NewPageSeo() {
  return (
    <div>
      <AdminPageHeader
        eyebrow="SEO & site"
        title="Add path."
        description="Pick the URL you want to override and fill the fields you want to change."
      />
      <PageSeoForm action={createPageSeo} submitLabel="Save override" />
    </div>
  );
}
