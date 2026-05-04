import Link from 'next/link';
import { getPosts } from '@/lib/data';

export const metadata = { title: 'Admin Blog', robots: 'noindex, nofollow' };

export default async function AdminPosts() {
  const blogPosts = await getPosts();
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-display heading-md">Blog Posts</h1>
        <button type="button" className="btn-primary">+ New Post</button>
      </div>
      <div className="border border-line">
        <table className="w-full text-sm">
          <thead className="bg-cream text-xs uppercase tracking-[0.1em]">
            <tr>
              <th className="text-left p-3">Title</th>
              <th className="text-left p-3">Category</th>
              <th className="text-left p-3">Author</th>
              <th className="text-left p-3">Published</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {blogPosts.map((p) => (
              <tr key={p.id} className="border-t border-line">
                <td className="p-3 font-medium">{p.title}</td>
                <td className="p-3 capitalize text-mute">{p.category.replace('-', ' ')}</td>
                <td className="p-3 text-mute">{p.author}</td>
                <td className="p-3">{p.published_at}</td>
                <td className="p-3 text-right">
                  <Link href={`/resources/${p.slug}`} className="text-xs underline mr-3">View</Link>
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
