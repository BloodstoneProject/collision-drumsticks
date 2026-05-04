export const metadata = { title: 'Admin Settings', robots: 'noindex, nofollow' };

export default function AdminSettings() {
  return (
    <div>
      <h1 className="font-display heading-md mb-6">Site Settings</h1>
      <div className="space-y-6 max-w-xl">
        <div>
          <label className="label-field">Announcement bar text</label>
          <input className="input-field" defaultValue="Free UK Shipping over £49 — Worldwide Shipping Available" />
        </div>
        <div>
          <label className="label-field">Free shipping threshold (GBP)</label>
          <input type="number" className="input-field" defaultValue={49} />
        </div>
        <div>
          <label className="label-field">Backstage doors</label>
          <select className="input-field">
            <option>Closed (waitlist)</option>
            <option>Open (enrolment)</option>
          </select>
        </div>
        <button type="button" className="btn-primary">Save Settings</button>
      </div>
    </div>
  );
}
