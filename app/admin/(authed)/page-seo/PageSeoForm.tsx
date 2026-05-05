import { Field, TextInput, TextArea, Checkbox } from '../../_components/Field';

type PageSeo = {
  id?: string;
  path?: string;
  title?: string | null;
  description?: string | null;
  og_image_url?: string | null;
  canonical_url?: string | null;
  noindex?: boolean;
};

const COMMON_PATHS = [
  '/',
  '/shop',
  '/shop/drumsticks',
  '/shop/accessories',
  '/shop/apparel',
  '/shop/bundles',
  '/about',
  '/how-we-make-our-sticks',
  '/stick-finder',
  '/artists',
  '/resources',
  '/endorsements',
  '/wholesale',
  '/affiliates',
  '/backstage',
  '/contact',
  '/faq',
  '/custom',
  '/shipping-delivery',
  '/returns-exchanges',
  '/drumsticks-for-jazz',
  '/drumsticks-for-rock',
  '/drumsticks-for-metal',
  '/drumsticks-for-beginners',
  '/best-drumsticks-uk',
  '/compare/5a-vs-5b',
  '/compare/wood-tip-vs-nylon-tip',
  '/compare/natural-vs-stealth-black',
];

export function PageSeoForm({
  page = {},
  action,
  submitLabel = 'Save',
  lockPath = false,
}: {
  page?: PageSeo;
  action: (formData: FormData) => void | Promise<void>;
  submitLabel?: string;
  lockPath?: boolean;
}) {
  return (
    <form action={action} className="space-y-5 max-w-3xl">
      <Field label="Path" required hint="The URL path on the site, e.g. /about. Used as the unique key." htmlFor="path">
        {lockPath ? (
          <>
            <input type="hidden" name="path" value={page.path ?? ''} />
            <p className="font-mono text-sm bg-cream px-4 py-3 border border-line">{page.path}</p>
          </>
        ) : (
          <>
            <input
              list="page-paths"
              name="path"
              defaultValue={page.path ?? ''}
              required
              className="input-field"
              placeholder="/about"
            />
            <datalist id="page-paths">
              {COMMON_PATHS.map((p) => (
                <option key={p} value={p} />
              ))}
            </datalist>
          </>
        )}
      </Field>
      <Field label="Title override" hint="Replaces the default <title>. Leave blank to inherit." htmlFor="title">
        <TextInput name="title" defaultValue={page.title ?? ''} />
      </Field>
      <Field label="Meta description override" hint="Used in Google snippets and as og:description." htmlFor="description">
        <TextArea name="description" rows={3} defaultValue={page.description ?? ''} />
      </Field>
      <Field label="Open Graph image URL" htmlFor="og_image_url">
        <TextInput name="og_image_url" defaultValue={page.og_image_url ?? ''} placeholder="https://..." />
      </Field>
      <Field label="Canonical URL" hint="Override only if the page is reachable on multiple URLs." htmlFor="canonical_url">
        <TextInput name="canonical_url" defaultValue={page.canonical_url ?? ''} placeholder="https://www.collisiondrumsticks.com/..." />
      </Field>
      <Checkbox name="noindex" defaultChecked={Boolean(page.noindex)} label="Noindex (hide from search engines)" />

      <div className="flex flex-wrap gap-3 pt-4 border-t border-line">
        <button type="submit" className="btn-accent !py-3 !px-6 !text-[0.65rem]">{submitLabel}</button>
      </div>
    </form>
  );
}
