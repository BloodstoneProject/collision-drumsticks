import Link from 'next/link';
import { AdminPageHeader } from '../../_components/AdminPageHeader';

export const metadata = { title: 'Orders', robots: { index: false, follow: false } };

export default function AdminOrders() {
  return (
    <div>
      <AdminPageHeader
        eyebrow="Catalog"
        title="Orders"
        description="Live order data lands here once Snipcart is wired."
      />
      <div className="border border-line p-10 text-center bg-cream">
        <p className="font-display text-2xl mb-3">Snipcart not connected.</p>
        <p className="text-sm text-mute max-w-md mx-auto">
          Set <code className="bg-bone px-1.5 py-0.5">NEXT_PUBLIC_SNIPCART_API_KEY</code> in
          Vercel env, mount the Snipcart overlay in <code className="bg-bone px-1.5 py-0.5">app/layout.tsx</code>,
          then orders will pull from the Snipcart API and appear here.
        </p>
        <p className="mt-5">
          <Link href="/admin" className="text-xs uppercase tracking-[0.15em] underline">Back to dashboard</Link>
        </p>
      </div>
    </div>
  );
}
