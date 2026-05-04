import { reviews } from '@/lib/seed-data';

export const metadata = { title: 'Admin Reviews', robots: 'noindex, nofollow' };

export default function AdminReviews() {
  return (
    <div>
      <h1 className="font-display heading-md mb-6">Reviews - Pending Approval</h1>
      <div className="space-y-3">
        {reviews.map((r) => (
          <div key={r.id} className="border border-line p-5">
            <div className="flex items-center justify-between mb-2">
              <p className="font-semibold">{r.customer_name} - {r.rating}★</p>
              <p className="text-xs text-mute">{r.created_at}</p>
            </div>
            <p className="font-display text-lg">{r.title}</p>
            <p className="text-sm text-mute mt-1">{r.body}</p>
            <p className="text-xs text-mute mt-2">Product: {r.product_slug}</p>
            <div className="mt-4 flex gap-3">
              <button type="button" className="btn-primary !py-2 !px-4">Approve</button>
              <button type="button" className="btn-ghost !py-2 !px-4">Reject</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
