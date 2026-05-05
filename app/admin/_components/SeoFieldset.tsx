import { Field, TextInput, TextArea, Checkbox } from './Field';

export function SeoFieldset({
  metaTitle,
  metaDescription,
  ogImage,
  canonical,
  noindex,
  showNoindex = false,
  pathHint,
}: {
  metaTitle?: string | null;
  metaDescription?: string | null;
  ogImage?: string | null;
  canonical?: string | null;
  noindex?: boolean;
  showNoindex?: boolean;
  pathHint?: string;
}) {
  return (
    <details open className="border border-line">
      <summary className="cursor-pointer px-5 py-3 bg-cream">
        <span className="font-display text-lg">SEO</span>
        {pathHint && (
          <span className="ml-3 text-xs text-mute">{pathHint}</span>
        )}
      </summary>
      <div className="p-5 space-y-4">
        <Field
          label="Meta title"
          hint="50-60 characters. Empty inherits the page title."
          htmlFor="meta_title"
        >
          <TextInput id="meta_title" name="meta_title" defaultValue={metaTitle ?? ''} placeholder="Best Drumsticks for Rock - Collision" />
        </Field>
        <Field
          label="Meta description"
          hint="120-160 characters. Empty inherits the page description."
          htmlFor="meta_description"
        >
          <TextArea
            id="meta_description"
            name="meta_description"
            rows={3}
            defaultValue={metaDescription ?? ''}
            placeholder="A short summary that shows in search results."
          />
        </Field>
        <Field
          label="Open Graph image URL"
          hint="1200x630 ideally. Leave blank to use the page or product image."
          htmlFor="og_image_url"
        >
          <TextInput id="og_image_url" name="og_image_url" defaultValue={ogImage ?? ''} placeholder="https://..." />
        </Field>
        <Field
          label="Canonical URL"
          hint="Leave blank for the default (this URL on production)."
          htmlFor="canonical_url"
        >
          <TextInput id="canonical_url" name="canonical_url" defaultValue={canonical ?? ''} placeholder="https://www.collisiondrumsticks.com/..." />
        </Field>
        {showNoindex && (
          <Checkbox name="noindex" defaultChecked={Boolean(noindex)} label="Noindex (hide from search engines)" />
        )}
      </div>
    </details>
  );
}
