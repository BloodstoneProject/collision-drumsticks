import { products, artists, blogPosts, faqs } from '@/lib/seed-data';

export const metadata = { title: 'Admin Overview', robots: 'noindex, nofollow' };

export default function AdminOverview() {
  const stats = [
    { label: 'Products', value: products.length },
    { label: 'Artists', value: artists.length },
    { label: 'Blog Posts', value: blogPosts.length },
    { label: 'FAQs', value: faqs.length },
    { label: 'Orders (this month)', value: '—' },
    { label: 'Revenue (this month)', value: '£—' },
    { label: 'New endorsement apps', value: '—' },
    { label: 'Pending reviews', value: '—' },
  ];
  return (
    <div>
      <h1 className="font-display heading-md mb-2">Overview</h1>
      <p className="text-mute text-sm mb-8">Site dashboard. Pull in real metrics once Supabase is connected.</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="border border-line p-5">
            <p className="eyebrow">{s.label}</p>
            <p className="font-display text-3xl mt-2">{s.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
