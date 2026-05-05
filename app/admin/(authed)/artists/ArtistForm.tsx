import { Field, TextInput, TextArea, Select, Checkbox } from '../../_components/Field';

type Artist = {
  id?: string;
  name?: string;
  slug?: string;
  short_bio?: string | null;
  bio?: string | null;
  photo_url?: string | null;
  endorsement_tier?: string;
  genres?: string[];
  country?: string | null;
  city?: string | null;
  instagram_handle?: string | null;
  instagram_followers?: number | null;
  youtube_handle?: string | null;
  tiktok_handle?: string | null;
  favourite_stick?: string | null;
  testimonial_quote?: string | null;
  is_featured?: boolean;
  joined_year?: number | null;
};

export function ArtistForm({
  artist = {},
  action,
  submitLabel = 'Save',
}: {
  artist?: Artist;
  action: (formData: FormData) => void | Promise<void>;
  submitLabel?: string;
}) {
  return (
    <form action={action} className="space-y-6 max-w-4xl">
      <details open className="border border-line">
        <summary className="cursor-pointer px-5 py-3 bg-cream font-display text-lg">Artist</summary>
        <div className="p-5 grid md:grid-cols-2 gap-5">
          <Field label="Name" required htmlFor="name">
            <TextInput name="name" defaultValue={artist.name} required />
          </Field>
          <Field label="Slug" hint="Auto-generated from name if blank." htmlFor="slug">
            <TextInput name="slug" defaultValue={artist.slug} />
          </Field>
          <Field label="Endorsement tier" required htmlFor="endorsement_tier">
            <Select
              name="endorsement_tier"
              defaultValue={artist.endorsement_tier ?? 'cruise'}
              required
              options={[
                { value: 'cruise', label: 'Cruise' },
                { value: 'approach', label: 'Approach' },
                { value: 'impact', label: 'Impact' },
              ]}
            />
          </Field>
          <Field label="Joined year" htmlFor="joined_year">
            <TextInput name="joined_year" type="number" defaultValue={artist.joined_year ?? ''} />
          </Field>
          <Field label="Country" htmlFor="country">
            <TextInput name="country" defaultValue={artist.country ?? ''} />
          </Field>
          <Field label="City" htmlFor="city">
            <TextInput name="city" defaultValue={artist.city ?? ''} />
          </Field>
          <Field label="Genres" hint="Comma-separated." htmlFor="genres">
            <TextInput name="genres" defaultValue={(artist.genres ?? []).join(', ')} placeholder="rock, indie" />
          </Field>
          <Field label="Favourite stick" htmlFor="favourite_stick">
            <TextInput name="favourite_stick" defaultValue={artist.favourite_stick ?? ''} placeholder="5A" />
          </Field>
          <div className="md:col-span-2">
            <Field label="Photo URL" htmlFor="photo_url">
              <TextInput name="photo_url" defaultValue={artist.photo_url ?? ''} placeholder="https://..." />
            </Field>
          </div>
          <div className="md:col-span-2">
            <Field label="Short bio" hint="One line for cards." htmlFor="short_bio">
              <TextInput name="short_bio" defaultValue={artist.short_bio ?? ''} />
            </Field>
          </div>
          <div className="md:col-span-2">
            <Field label="Long bio" htmlFor="bio">
              <TextArea name="bio" rows={6} defaultValue={artist.bio ?? ''} />
            </Field>
          </div>
          <div className="md:col-span-2">
            <Field label="Testimonial quote" htmlFor="testimonial_quote">
              <TextArea name="testimonial_quote" rows={3} defaultValue={artist.testimonial_quote ?? ''} />
            </Field>
          </div>
          <div className="flex items-center pt-7">
            <Checkbox name="is_featured" defaultChecked={artist.is_featured ?? false} label="Featured on homepage" />
          </div>
        </div>
      </details>

      <details open className="border border-line">
        <summary className="cursor-pointer px-5 py-3 bg-cream font-display text-lg">Socials</summary>
        <div className="p-5 grid md:grid-cols-2 gap-5">
          <Field label="Instagram handle" hint="Without the @" htmlFor="instagram_handle">
            <TextInput name="instagram_handle" defaultValue={artist.instagram_handle ?? ''} />
          </Field>
          <Field label="Instagram followers" htmlFor="instagram_followers">
            <TextInput name="instagram_followers" type="number" defaultValue={artist.instagram_followers ?? ''} />
          </Field>
          <Field label="YouTube handle" htmlFor="youtube_handle">
            <TextInput name="youtube_handle" defaultValue={artist.youtube_handle ?? ''} />
          </Field>
          <Field label="TikTok handle" htmlFor="tiktok_handle">
            <TextInput name="tiktok_handle" defaultValue={artist.tiktok_handle ?? ''} />
          </Field>
        </div>
      </details>

      <div className="flex flex-wrap gap-3 pt-4 border-t border-line sticky bottom-0 bg-bone py-4">
        <button type="submit" className="btn-accent !py-3 !px-6 !text-[0.65rem]">{submitLabel}</button>
      </div>
    </form>
  );
}
