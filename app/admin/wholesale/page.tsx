export const metadata = { title: 'Admin Wholesale', robots: 'noindex, nofollow' };

export default function AdminWholesale() {
  return (
    <div>
      <h1 className="font-display heading-md mb-3">Wholesale Enquiries</h1>
      <p className="text-mute text-sm mb-6">Connect Supabase to populate.</p>
      <div className="border border-line p-10 text-center bg-cream">
        <p className="text-mute">No enquiries yet.</p>
      </div>
    </div>
  );
}
