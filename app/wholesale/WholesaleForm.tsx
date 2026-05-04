'use client';

import { useState } from 'react';

const BUSINESS_TYPES = [
  { value: 'music-store', label: 'Music store' },
  { value: 'online-retailer', label: 'Online retailer' },
  { value: 'distributor', label: 'Distributor' },
  { value: 'school', label: 'Music or drum school' },
  { value: 'brand', label: 'Brand / merch programme' },
  { value: 'events', label: 'Events / festivals' },
  { value: 'other', label: 'Other' },
];

export function WholesaleForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    business_name: '',
    contact_name: '',
    email: '',
    phone: '',
    country: '',
    business_type: '',
    estimated_monthly_volume: '',
    message: '',
  });

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch('/api/wholesale', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Failed');
      setSubmitted(true);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Submission failed');
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="border border-line bg-cream p-8 text-center">
        <p className="font-display heading-sm">Enquiry received.</p>
        <p className="text-mute mt-2 text-sm">We will reply within 3 business days.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <div>
        <label className="label-field">Business name *</label>
        <input required className="input-field" value={form.business_name} onChange={(e) => setForm({ ...form, business_name: e.target.value })} />
      </div>
      <div>
        <label className="label-field">Contact name *</label>
        <input required className="input-field" value={form.contact_name} onChange={(e) => setForm({ ...form, contact_name: e.target.value })} />
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="label-field">Email *</label>
          <input type="email" required className="input-field" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        </div>
        <div>
          <label className="label-field">Phone</label>
          <input className="input-field" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="label-field">Country</label>
          <input className="input-field" value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })} />
        </div>
        <div>
          <label className="label-field">Business type</label>
          <select className="input-field" value={form.business_type} onChange={(e) => setForm({ ...form, business_type: e.target.value })}>
            <option value="">Select…</option>
            {BUSINESS_TYPES.map((b) => <option key={b.value} value={b.value}>{b.label}</option>)}
          </select>
        </div>
      </div>
      <div>
        <label className="label-field">Estimated monthly volume (pairs)</label>
        <input type="number" className="input-field" value={form.estimated_monthly_volume} onChange={(e) => setForm({ ...form, estimated_monthly_volume: e.target.value })} />
      </div>
      <div>
        <label className="label-field">Message</label>
        <textarea rows={4} className="input-field" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us about your business and what you are looking to stock." />
      </div>
      {error && <p className="text-crimson text-sm">{error}</p>}
      <button type="submit" disabled={submitting} className="btn-accent w-full">
        {submitting ? 'Sending…' : 'Submit Enquiry'}
      </button>
    </form>
  );
}
