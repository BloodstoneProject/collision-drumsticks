import { Field, TextInput, TextArea, Select, Checkbox } from '../../_components/Field';
import { SeoFieldset } from '../../_components/SeoFieldset';

type Post = {
  id?: string;
  title?: string;
  slug?: string;
  excerpt?: string | null;
  content?: string;
  featured_image?: string | null;
  author?: string;
  category?: string;
  tags?: string[];
  reading_time_minutes?: number;
  is_published?: boolean;
  published_at?: string | null;
  meta_title?: string | null;
  meta_description?: string | null;
  og_image_url?: string | null;
  canonical_url?: string | null;
};

export function PostForm({
  post = {},
  action,
  submitLabel = 'Save',
}: {
  post?: Post;
  action: (formData: FormData) => void | Promise<void>;
  submitLabel?: string;
}) {
  const dateValue = post.published_at
    ? new Date(post.published_at).toISOString().slice(0, 16)
    : '';

  return (
    <form action={action} className="space-y-6 max-w-4xl">
      <details open className="border border-line">
        <summary className="cursor-pointer px-5 py-3 bg-cream font-display text-lg">Article</summary>
        <div className="p-5 grid md:grid-cols-2 gap-5">
          <div className="md:col-span-2">
            <Field label="Title" required htmlFor="title">
              <TextInput name="title" defaultValue={post.title} required />
            </Field>
          </div>
          <Field label="Slug" hint="Auto-generated from title if blank." htmlFor="slug">
            <TextInput name="slug" defaultValue={post.slug} />
          </Field>
          <Field label="Author" htmlFor="author">
            <TextInput name="author" defaultValue={post.author ?? 'Collision Editorial'} />
          </Field>
          <Field label="Category" required htmlFor="category">
            <Select
              name="category"
              defaultValue={post.category ?? 'tips'}
              required
              options={[
                { value: 'tips', label: 'Tips' },
                { value: 'gear', label: 'Gear' },
                { value: 'community', label: 'Community' },
                { value: 'news', label: 'News' },
                { value: 'guides', label: 'Guides' },
                { value: 'artist-spotlight', label: 'Artist spotlight' },
              ]}
            />
          </Field>
          <Field label="Reading time (min)" hint="Auto-estimated if 0." htmlFor="reading_time_minutes">
            <TextInput name="reading_time_minutes" type="number" defaultValue={post.reading_time_minutes ?? ''} />
          </Field>
          <Field label="Featured image URL" htmlFor="featured_image">
            <TextInput name="featured_image" defaultValue={post.featured_image ?? ''} placeholder="https://..." />
          </Field>
          <Field label="Tags" hint="Comma-separated." htmlFor="tags">
            <TextInput name="tags" defaultValue={(post.tags ?? []).join(', ')} placeholder="practice, technique" />
          </Field>
          <div className="md:col-span-2">
            <Field label="Excerpt" hint="One paragraph used on cards and meta description fallback." htmlFor="excerpt">
              <TextArea name="excerpt" rows={3} defaultValue={post.excerpt ?? ''} />
            </Field>
          </div>
          <div className="md:col-span-2">
            <Field label="Body" hint="Markdown or HTML. Used as the article content." htmlFor="content">
              <TextArea name="content" rows={16} defaultValue={post.content ?? ''} />
            </Field>
          </div>
          <Field label="Published at" htmlFor="published_at">
            <TextInput name="published_at" type="datetime-local" defaultValue={dateValue} />
          </Field>
          <div className="flex items-center pt-7">
            <Checkbox name="is_published" defaultChecked={post.is_published ?? false} label="Published" />
          </div>
        </div>
      </details>

      <SeoFieldset
        metaTitle={post.meta_title}
        metaDescription={post.meta_description}
        ogImage={post.og_image_url}
        canonical={post.canonical_url}
        pathHint={post.slug ? `/resources/${post.slug}` : undefined}
      />

      <div className="flex flex-wrap gap-3 pt-4 border-t border-line sticky bottom-0 bg-bone py-4">
        <button type="submit" className="btn-accent !py-3 !px-6 !text-[0.65rem]">
          {submitLabel}
        </button>
      </div>
    </form>
  );
}
