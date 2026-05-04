import Link from 'next/link';
import { artists } from '@/lib/seed-data';

export const metadata = { title: 'Admin Artists', robots: 'noindex, nofollow' };

export default function AdminArtists() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-display heading-md">Artists</h1>
        <button type="button" className="btn-primary">+ New Artist</button>
      </div>
      <div className="border border-line">
        <table className="w-full text-sm">
          <thead className="bg-cream text-xs uppercase tracking-[0.1em]">
            <tr>
              <th className="text-left p-3">Name</th>
              <th className="text-left p-3">Tier</th>
              <th className="text-left p-3">Country</th>
              <th className="text-left p-3">Followers (IG)</th>
              <th className="text-left p-3">Stick</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {artists.map((a) => (
              <tr key={a.id} className="border-t border-line">
                <td className="p-3 font-medium">{a.name}</td>
                <td className="p-3 capitalize">{a.endorsement_tier}</td>
                <td className="p-3 text-mute">{a.country}</td>
                <td className="p-3">{a.instagram_followers?.toLocaleString() ?? '—'}</td>
                <td className="p-3">{a.favourite_stick}</td>
                <td className="p-3 text-right">
                  <Link href={`/artists/${a.slug}`} className="text-xs underline mr-3">View</Link>
                  <button type="button" className="text-xs underline">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
