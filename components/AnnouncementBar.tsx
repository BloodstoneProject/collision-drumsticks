import { getSiteSettings } from '@/lib/page-seo';

export async function AnnouncementBar() {
  const settings = await getSiteSettings();
  const active = settings.announcement_bar_active;
  if (active === false || active === 'false') return null;
  const text =
    (settings.announcement_bar_text as string) ||
    'Free UK Shipping over £49 - Worldwide Shipping Available';
  return (
    <div className="bg-ink text-bone text-center text-[0.7rem] uppercase tracking-[0.18em] py-2.5 px-4 font-semibold">
      {text}
    </div>
  );
}
