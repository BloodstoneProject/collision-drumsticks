import { AdminPageHeader } from '../../../_components/AdminPageHeader';
import { RedirectForm } from '../RedirectForm';
import { createRedirect } from '../_actions';

export const metadata = { title: 'New redirect', robots: { index: false, follow: false } };

export default function NewRedirect() {
  return (
    <div>
      <AdminPageHeader
        eyebrow="SEO & site"
        title="New redirect."
        description="Old URL on the left, where it should land on the right."
      />
      <RedirectForm action={createRedirect} submitLabel="Create redirect" />
    </div>
  );
}
