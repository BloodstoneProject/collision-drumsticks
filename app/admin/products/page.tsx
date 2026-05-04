import Link from 'next/link';
import { getProducts } from '@/lib/data';
import { formatPrice } from '@/lib/utils';

export const metadata = { title: 'Admin Products', robots: 'noindex, nofollow' };

export default async function AdminProducts() {
  const products = await getProducts();
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-display heading-md">Products</h1>
        <button type="button" className="btn-primary">+ New Product</button>
      </div>
      <div className="border border-line">
        <table className="w-full text-sm">
          <thead className="bg-cream text-xs uppercase tracking-[0.1em]">
            <tr>
              <th className="text-left p-3">Name</th>
              <th className="text-left p-3">Category</th>
              <th className="text-left p-3">Price (from)</th>
              <th className="text-left p-3">Rating</th>
              <th className="text-left p-3">Active</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id} className="border-t border-line">
                <td className="p-3 font-medium">{p.name}</td>
                <td className="p-3 capitalize text-mute">{p.category}</td>
                <td className="p-3">{formatPrice(p.base_price_gbp)}</td>
                <td className="p-3">{p.average_rating.toFixed(2)} ({p.review_count})</td>
                <td className="p-3"><span className="text-amber font-semibold">●</span> Active</td>
                <td className="p-3 text-right">
                  <Link href={`/product/${p.slug}`} className="text-xs underline mr-3">View</Link>
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
