export const metadata = { title: 'Admin Subscribers', robots: 'noindex, nofollow' };

export default function AdminSubscribers() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-display heading-md">Newsletter Subscribers</h1>
        <button type="button" className="btn-ghost">Export CSV</button>
      </div>
      <div className="border border-line p-10 text-center bg-cream">
        <p className="text-mute">No subscribers loaded. Connect Supabase to populate.</p>
      </div>
    </div>
  );
}
