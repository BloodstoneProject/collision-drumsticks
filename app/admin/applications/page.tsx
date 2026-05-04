export const metadata = { title: 'Admin Endorsement Applications', robots: 'noindex, nofollow' };

export default function AdminApplications() {
  return (
    <div>
      <h1 className="font-display heading-md mb-3">Endorsement Applications</h1>
      <p className="text-mute text-sm mb-6">New, reviewing, approved, declined.</p>
      <div className="border border-line p-10 text-center bg-cream">
        <p className="text-mute">No applications loaded yet. Connect Supabase to populate.</p>
      </div>
    </div>
  );
}
