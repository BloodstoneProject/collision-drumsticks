import { Field, TextInput, TextArea, Select, Checkbox } from '../../_components/Field';
import { SeoFieldset } from '../../_components/SeoFieldset';

type Product = {
  id?: string;
  name?: string;
  slug?: string;
  category?: string;
  subcategory?: string | null;
  short_description?: string;
  description?: string;
  base_price_gbp?: number;
  primary_image?: string | null;
  images?: string[];
  stick_size?: string | null;
  tip_type?: string | null;
  finish?: string | null;
  length_inches?: number | null;
  diameter_inches?: number | null;
  weight_grams?: number | null;
  best_for?: string[];
  badge?: string | null;
  stock_count?: number;
  is_featured?: boolean;
  is_active?: boolean;
  meta_title?: string | null;
  meta_description?: string | null;
  og_image_url?: string | null;
  canonical_url?: string | null;
};

export function ProductForm({
  product = {},
  action,
  submitLabel = 'Save',
}: {
  product?: Product;
  action: (formData: FormData) => void | Promise<void>;
  submitLabel?: string;
}) {
  return (
    <form action={action} className="space-y-6 max-w-4xl">
      <details open className="border border-line">
        <summary className="cursor-pointer px-5 py-3 bg-cream font-display text-lg">Basics</summary>
        <div className="p-5 grid md:grid-cols-2 gap-5">
          <Field label="Name" required htmlFor="name">
            <TextInput name="name" defaultValue={product.name} required />
          </Field>
          <Field label="Slug" hint="Auto-generated from name if blank." htmlFor="slug">
            <TextInput name="slug" defaultValue={product.slug} placeholder="5a-drumstick" />
          </Field>
          <Field label="Category" required htmlFor="category">
            <Select
              name="category"
              defaultValue={product.category ?? 'drumsticks'}
              options={[
                { value: 'drumsticks', label: 'Drumsticks' },
                { value: 'accessories', label: 'Accessories' },
                { value: 'apparel', label: 'Apparel' },
              ]}
              required
            />
          </Field>
          <Field label="Subcategory" hint="e.g. wood-tip, nylon-tip, reach-series, stealth, custom" htmlFor="subcategory">
            <TextInput name="subcategory" defaultValue={product.subcategory ?? ''} />
          </Field>
          <Field label="Base price (GBP)" required htmlFor="base_price_gbp">
            <TextInput name="base_price_gbp" type="number" defaultValue={product.base_price_gbp} required />
          </Field>
          <Field label="Stock count" htmlFor="stock_count">
            <TextInput name="stock_count" type="number" defaultValue={product.stock_count ?? 0} />
          </Field>
          <Field label="Badge" htmlFor="badge">
            <Select
              name="badge"
              defaultValue={product.badge ?? ''}
              options={[
                { value: 'most-popular', label: 'Most popular' },
                { value: 'best-seller', label: 'Best seller' },
                { value: 'staff-pick', label: 'Staff pick' },
                { value: 'new-release', label: 'New release' },
              ]}
            />
          </Field>
          <div className="flex items-center gap-6 pt-7">
            <Checkbox name="is_active" defaultChecked={product.is_active ?? true} label="Active" />
            <Checkbox name="is_featured" defaultChecked={product.is_featured ?? false} label="Featured" />
          </div>
          <Field label="Short description" hint="One line summary used on cards." htmlFor="short_description">
            <TextInput name="short_description" defaultValue={product.short_description ?? ''} />
          </Field>
          <div />
          <div className="md:col-span-2">
            <Field label="Long description" htmlFor="description">
              <TextArea name="description" rows={6} defaultValue={product.description ?? ''} />
            </Field>
          </div>
        </div>
      </details>

      <details open className="border border-line">
        <summary className="cursor-pointer px-5 py-3 bg-cream font-display text-lg">Specs</summary>
        <div className="p-5 grid md:grid-cols-3 gap-5">
          <Field label="Stick size" htmlFor="stick_size">
            <Select
              name="stick_size"
              defaultValue={product.stick_size ?? ''}
              options={[
                { value: '5A', label: '5A' },
                { value: '5AR', label: '5AR' },
                { value: '5B', label: '5B' },
                { value: '5BR', label: '5BR' },
                { value: '7A', label: '7A' },
                { value: '7AR', label: '7AR' },
                { value: '2B', label: '2B' },
              ]}
            />
          </Field>
          <Field label="Tip type" htmlFor="tip_type">
            <Select
              name="tip_type"
              defaultValue={product.tip_type ?? ''}
              options={[
                { value: 'wood', label: 'Wood' },
                { value: 'nylon', label: 'Nylon' },
              ]}
            />
          </Field>
          <Field label="Finish" htmlFor="finish">
            <Select
              name="finish"
              defaultValue={product.finish ?? ''}
              options={[
                { value: 'natural', label: 'Natural' },
                { value: 'stealth-black', label: 'Stealth Black' },
              ]}
            />
          </Field>
          <Field label="Length (in)" htmlFor="length_inches">
            <TextInput name="length_inches" type="number" defaultValue={product.length_inches ?? ''} />
          </Field>
          <Field label="Diameter (in)" htmlFor="diameter_inches">
            <TextInput name="diameter_inches" type="number" defaultValue={product.diameter_inches ?? ''} />
          </Field>
          <Field label="Weight (g)" htmlFor="weight_grams">
            <TextInput name="weight_grams" type="number" defaultValue={product.weight_grams ?? ''} />
          </Field>
          <div className="md:col-span-3">
            <Field label="Best for" hint="Comma-separated tags. Used on the product page chips." htmlFor="best_for">
              <TextInput name="best_for" defaultValue={(product.best_for ?? []).join(', ')} placeholder="rock, indie, alt rock" />
            </Field>
          </div>
        </div>
      </details>

      <details open className="border border-line">
        <summary className="cursor-pointer px-5 py-3 bg-cream font-display text-lg">Images</summary>
        <div className="p-5 grid md:grid-cols-2 gap-5">
          <Field label="Primary image URL" htmlFor="primary_image">
            <TextInput name="primary_image" defaultValue={product.primary_image ?? ''} placeholder="https://..." />
          </Field>
          <Field label="Additional image URLs" hint="Comma-separated. First one becomes the hover-crossfade image." htmlFor="images">
            <TextArea name="images" rows={3} defaultValue={(product.images ?? []).join(', ')} placeholder="https://..., https://..." />
          </Field>
        </div>
      </details>

      <SeoFieldset
        metaTitle={product.meta_title}
        metaDescription={product.meta_description}
        ogImage={product.og_image_url}
        canonical={product.canonical_url}
      />

      <div className="flex flex-wrap gap-3 pt-4 border-t border-line sticky bottom-0 bg-bone py-4">
        <button type="submit" className="btn-accent !py-3 !px-6 !text-[0.65rem]">
          {submitLabel}
        </button>
      </div>
    </form>
  );
}
