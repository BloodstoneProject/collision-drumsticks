import { AdminPageHeader } from '../../../_components/AdminPageHeader';
import { ProductForm } from '../ProductForm';
import { createProduct } from '../_actions';

export const metadata = { title: 'New product', robots: { index: false, follow: false } };

export default function NewProductPage() {
  return (
    <div>
      <AdminPageHeader eyebrow="Catalog" title="New product." description="Create a new SKU. You can edit any field later." />
      <ProductForm action={createProduct} submitLabel="Create product" />
    </div>
  );
}
