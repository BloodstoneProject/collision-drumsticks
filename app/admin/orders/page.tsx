export const metadata = { title: 'Admin Orders', robots: 'noindex, nofollow' };

export default function AdminOrders() {
  return (
    <div>
      <h1 className="font-display heading-md mb-3">Orders</h1>
      <p className="text-mute text-sm mb-6">Pulled from Snipcart API. Connect once ecommerce is live.</p>
      <div className="border border-line p-10 text-center bg-cream">
        <p className="text-mute">No orders yet. Connect Snipcart to populate.</p>
      </div>
    </div>
  );
}
