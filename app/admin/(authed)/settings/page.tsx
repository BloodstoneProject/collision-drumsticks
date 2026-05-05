import { supabaseAdmin } from '@/lib/supabase';
import { AdminPageHeader } from '../../_components/AdminPageHeader';
import { Field, TextInput, TextArea, Checkbox } from '../../_components/Field';
import { saveSettings } from './_actions';

export const dynamic = 'force-dynamic';
export const metadata = { title: 'Settings', robots: { index: false, follow: false } };

async function fetchSettings(): Promise<Record<string, unknown>> {
  const supa = supabaseAdmin();
  if (!supa) return {};
  const { data } = await supa.from('collision_settings').select('key, value');
  const out: Record<string, unknown> = {};
  (data ?? []).forEach((r: { key: string; value: unknown }) => {
    out[r.key] = r.value;
  });
  return out;
}

function asString(v: unknown): string {
  if (v === null || v === undefined) return '';
  return String(v);
}

function asBool(v: unknown): boolean {
  return v === true || v === 'true' || v === 1;
}

export default async function SettingsPage() {
  const s = await fetchSettings();

  return (
    <div>
      <AdminPageHeader
        eyebrow="SEO & site"
        title="Site settings."
        description="Site-wide values used across the homepage, announcement bar, default SEO, and contact info."
      />

      <form action={saveSettings} className="max-w-3xl space-y-8">
        <details open className="border border-line">
          <summary className="cursor-pointer px-5 py-3 bg-cream font-display text-lg">Branding & defaults</summary>
          <div className="p-5 grid md:grid-cols-2 gap-5">
            <Field label="Site title" hint="Default <title> for the homepage." htmlFor="site_title">
              <TextInput name="site_title" defaultValue={asString(s.site_title) || 'Collision Drumsticks'} />
            </Field>
            <Field label="Default OG image URL" hint="Used when a page does not specify its own." htmlFor="default_og_image_url">
              <TextInput name="default_og_image_url" defaultValue={asString(s.default_og_image_url)} placeholder="https://..." />
            </Field>
            <div className="md:col-span-2">
              <Field label="Site description" hint="Default meta description for pages without an override." htmlFor="site_description">
                <TextArea
                  name="site_description"
                  rows={3}
                  defaultValue={asString(s.site_description) || 'Premium American Hickory drumsticks made in Newcastle, UK.'}
                />
              </Field>
            </div>
          </div>
        </details>

        <details open className="border border-line">
          <summary className="cursor-pointer px-5 py-3 bg-cream font-display text-lg">Announcement bar</summary>
          <div className="p-5 grid md:grid-cols-2 gap-5">
            <div className="md:col-span-2">
              <Field label="Bar text" htmlFor="announcement_bar_text">
                <TextInput
                  name="announcement_bar_text"
                  defaultValue={asString(s.announcement_bar_text) || 'Free UK Shipping over £49 - Worldwide Shipping Available'}
                />
              </Field>
            </div>
            <Checkbox
              name="announcement_bar_active"
              defaultChecked={s.announcement_bar_active === undefined ? true : asBool(s.announcement_bar_active)}
              label="Show announcement bar"
            />
          </div>
        </details>

        <details open className="border border-line">
          <summary className="cursor-pointer px-5 py-3 bg-cream font-display text-lg">Commerce</summary>
          <div className="p-5 grid md:grid-cols-2 gap-5">
            <Field label="Free shipping threshold (GBP)" htmlFor="free_shipping_threshold_gbp">
              <TextInput
                name="free_shipping_threshold_gbp"
                type="number"
                defaultValue={asString(s.free_shipping_threshold_gbp) || '49'}
              />
            </Field>
            <Checkbox
              name="backstage_doors_open"
              defaultChecked={asBool(s.backstage_doors_open)}
              label="Backstage doors open (otherwise show waitlist)"
            />
          </div>
        </details>

        <details open className="border border-line">
          <summary className="cursor-pointer px-5 py-3 bg-cream font-display text-lg">Contact & social</summary>
          <div className="p-5 grid md:grid-cols-2 gap-5">
            <Field label="Sales email" htmlFor="sales_email">
              <TextInput name="sales_email" type="email" defaultValue={asString(s.sales_email) || 'sales@collisiondrumsticks.com'} />
            </Field>
            <Field label="Support phone" htmlFor="support_phone">
              <TextInput name="support_phone" defaultValue={asString(s.support_phone) || '07399 319852'} />
            </Field>
            <Field label="Instagram handle" hint="Without the @" htmlFor="instagram_handle">
              <TextInput name="instagram_handle" defaultValue={asString(s.instagram_handle) || 'collisiondrumsticks'} />
            </Field>
            <Field label="Twitter / X handle" hint="Without the @" htmlFor="twitter_handle">
              <TextInput name="twitter_handle" defaultValue={asString(s.twitter_handle)} />
            </Field>
          </div>
        </details>

        <div className="flex flex-wrap gap-3 pt-4 border-t border-line">
          <button type="submit" className="btn-accent !py-3 !px-6 !text-[0.65rem]">Save settings</button>
        </div>
      </form>
    </div>
  );
}
