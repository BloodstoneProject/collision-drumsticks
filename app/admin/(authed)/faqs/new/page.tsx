import { AdminPageHeader } from '../../../_components/AdminPageHeader';
import { FaqForm } from '../FaqForm';
import { createFaq } from '../_actions';

export const metadata = { title: 'New FAQ', robots: { index: false, follow: false } };

export default function NewFaqPage() {
  return (
    <div>
      <AdminPageHeader eyebrow="Content" title="New FAQ." description="Live on /faq and on the relevant category section as soon as you save." />
      <FaqForm action={createFaq} submitLabel="Create FAQ" />
    </div>
  );
}
