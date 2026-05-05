import Link from 'next/link';
import { supabaseAdmin } from '@/lib/supabase';
import { AdminPageHeader } from '../../_components/AdminPageHeader';
import { formatDateTime } from '../../_lib/utils';
import { approveReview, rejectReview, deleteReview } from './_actions';

export const dynamic = 'force-dynamic';
export const metadata = { title: 'Reviews', robots: { index: false, follow: false } };

type Row = {
  id: string;
  customer_name: string;
  customer_email: string | null;
  rating: number;
  title: string | null;
  body: string | null;
  is_verified_purchase: boolean;
  is_approved: boolean;
  created_at: string;
  product_id: string;
  collision_products: { name: string; slug: string } | null;
};

async function fetchReviews(scope: string): Promise<Row[]> {
  const supa = supabaseAdmin();
  if (!supa) return [];
  let q = supa
    .from('collision_reviews')
    .select(
      'id, customer_name, customer_email, rating, title, body, is_verified_purchase, is_approved, created_at, product_id, collision_products!inner(name, slug)',
    )
    .order('created_at', { ascending: false })
    .limit(200);
  if (scope === 'pending') q = q.eq('is_approved', false);
  if (scope === 'approved') q = q.eq('is_approved', true);
  const { data } = await q;
  return ((data ?? []) as unknown) as Row[];
}

export default async function ReviewsModeration({
  searchParams,
}: {
  searchParams: Promise<{ scope?: string }>;
}) {
  const { scope = 'pending' } = await searchParams;
  const rows = await fetchReviews(scope);

  return (
    <div>
      <AdminPageHeader
        eyebrow="Content"
        title="Reviews"
        description={`${rows.length} review${rows.length === 1 ? '' : 's'} in this view.`}
      />

      <div className="flex gap-2 mb-5">
        {[
          { value: 'pending', label: 'Pending' },
          { value: 'approved', label: 'Approved' },
          { value: 'all', label: 'All' },
        ].map((s) => (
          <Link
            key={s.value}
            href={`/admin/reviews?scope=${s.value}`}
            className={`px-3 py-2 text-xs uppercase tracking-[0.15em] font-semibold border ${
              scope === s.value ? 'bg-ink text-bone border-ink' : 'border-line hover:border-ink'
            }`}
          >
            {s.label}
          </Link>
        ))}
      </div>

      {rows.length === 0 ? (
        <p className="text-mute">Nothing to moderate.</p>
      ) : (
        <ul className="space-y-3">
          {rows.map((r) => {
            const approve = approveReview.bind(null, r.id);
            const reject = rejectReview.bind(null, r.id);
            const remove = deleteReview.bind(null, r.id);
            return (
              <li key={r.id} className="border border-line p-5 bg-bone">
                <div className="flex items-start justify-between gap-4 mb-2 flex-wrap">
                  <div>
                    <p className="font-semibold text-sm">
                      {r.customer_name}
                      <span className="ml-2 text-mute">{r.rating} stars</span>
                      {r.is_verified_purchase && (
                        <span className="ml-2 text-[0.65rem] uppercase tracking-[0.15em] text-amber font-bold">
                          Verified
                        </span>
                      )}
                    </p>
                    <p className="text-xs text-mute">{r.customer_email ?? ''}</p>
                  </div>
                  <p className="text-xs text-mute">{formatDateTime(r.created_at)}</p>
                </div>
                {r.title && <p className="font-display text-lg leading-tight mt-2">{r.title}</p>}
                {r.body && <p className="text-sm text-ink-soft mt-1 text-pretty">{r.body}</p>}
                <p className="mt-3 text-xs text-mute">
                  Product:{' '}
                  {r.collision_products ? (
                    <Link href={`/product/${r.collision_products.slug}`} className="underline hover:text-crimson">
                      {r.collision_products.name}
                    </Link>
                  ) : (
                    'Unknown'
                  )}
                </p>
                <div className="mt-4 flex flex-wrap gap-2 items-center">
                  {!r.is_approved ? (
                    <form action={approve}>
                      <button type="submit" className="btn-accent !py-2 !px-4 !text-[0.65rem]">Approve</button>
                    </form>
                  ) : (
                    <form action={reject}>
                      <button type="submit" className="btn-ghost !py-2 !px-4 !text-[0.65rem]">Unapprove</button>
                    </form>
                  )}
                  <form action={remove}>
                    <button type="submit" className="text-xs text-crimson uppercase tracking-[0.15em] font-semibold">
                      Delete
                    </button>
                  </form>
                  <span className="text-xs text-mute ml-auto">
                    {r.is_approved ? (
                      <span className="text-amber font-semibold uppercase tracking-[0.15em]">Approved</span>
                    ) : (
                      <span className="font-semibold uppercase tracking-[0.15em]">Pending</span>
                    )}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
