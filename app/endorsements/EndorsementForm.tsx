'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type FormState = {
  full_name: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  tier_applying: 'cruise' | 'approach' | 'impact' | '';
  instagram_url: string;
  youtube_url: string;
  tiktok_url: string;
  combined_followers: string;
  genres: string;
  years_playing: string;
  current_stick_brand: string;
  current_stick_model: string;
  gigs_per_month: string;
  band_name: string;
  why_collision: string;
};

const STEPS = ['Personal', 'Music', 'Social', 'Gear', 'Review'];

export function EndorsementForm() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState<FormState>({
    full_name: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    tier_applying: '',
    instagram_url: '',
    youtube_url: '',
    tiktok_url: '',
    combined_followers: '',
    genres: '',
    years_playing: '',
    current_stick_brand: '',
    current_stick_model: '',
    gigs_per_month: '',
    band_name: '',
    why_collision: '',
  });

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function submit() {
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch('/api/endorsement', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Submission failed');
      setSubmitted(true);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Submission failed');
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="border border-line p-10 text-center bg-cream">
        <p className="font-display heading-md">Application received.</p>
        <p className="text-mute mt-3">We review every application within 7 days. You will hear back either way at <strong>{form.email}</strong>.</p>
      </div>
    );
  }

  return (
    <div className="bg-cream p-8 md:p-10">
      <div className="flex items-center justify-between mb-3 text-xs uppercase tracking-[0.15em] text-mute">
        <button type="button" onClick={() => setStep(Math.max(0, step - 1))} disabled={step === 0} className="flex items-center gap-1 disabled:opacity-30 font-semibold">
          <ChevronLeft size={14} /> Back
        </button>
        <span>Step {step + 1} of {STEPS.length} · {STEPS[step]}</span>
        <span className="opacity-0 select-none flex items-center gap-1">
          <ChevronLeft size={14} /> Back
        </span>
      </div>
      <div className="flex h-1 bg-line mb-8">
        {STEPS.map((_, i) => (
          <div key={i} className={`flex-1 transition-colors ${i <= step ? 'bg-ink' : 'bg-line'} ${i > 0 ? 'ml-px' : ''}`} />
        ))}
      </div>

      {step === 0 && (
        <div className="space-y-4">
          <Field label="Full name" value={form.full_name} onChange={(v) => update('full_name', v)} required />
          <Field label="Email" type="email" value={form.email} onChange={(v) => update('email', v)} required />
          <Field label="Phone (optional)" value={form.phone} onChange={(v) => update('phone', v)} />
          <div className="grid md:grid-cols-2 gap-4">
            <Field label="Country" value={form.country} onChange={(v) => update('country', v)} required />
            <Field label="City" value={form.city} onChange={(v) => update('city', v)} />
          </div>
          <SelectField
            label="Applying for"
            value={form.tier_applying}
            onChange={(v) => update('tier_applying', v as FormState['tier_applying'])}
            options={[
              { value: 'cruise', label: 'Cruise (1K+ followers)' },
              { value: 'approach', label: 'Approach (10K+ followers)' },
              { value: 'impact', label: 'Impact (100K+ followers / touring)' },
            ]}
          />
        </div>
      )}

      {step === 1 && (
        <div className="space-y-4">
          <Field label="Genres you play (comma separated)" value={form.genres} onChange={(v) => update('genres', v)} placeholder="Rock, Funk, Pop" required />
          <div className="grid md:grid-cols-2 gap-4">
            <Field label="Years playing" type="number" value={form.years_playing} onChange={(v) => update('years_playing', v)} required />
            <Field label="Gigs per month" type="number" value={form.gigs_per_month} onChange={(v) => update('gigs_per_month', v)} />
          </div>
          <Field label="Band or artist name" value={form.band_name} onChange={(v) => update('band_name', v)} />
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <Field label="Instagram URL" value={form.instagram_url} onChange={(v) => update('instagram_url', v)} placeholder="https://www.instagram.com/yourhandle" />
          <Field label="YouTube URL" value={form.youtube_url} onChange={(v) => update('youtube_url', v)} />
          <Field label="TikTok URL" value={form.tiktok_url} onChange={(v) => update('tiktok_url', v)} />
          <Field label="Combined followers (rough)" type="number" value={form.combined_followers} onChange={(v) => update('combined_followers', v)} />
        </div>
      )}

      {step === 3 && (
        <div className="space-y-4">
          <Field label="Current stick brand" value={form.current_stick_brand} onChange={(v) => update('current_stick_brand', v)} />
          <Field label="Current stick model" value={form.current_stick_model} onChange={(v) => update('current_stick_model', v)} />
          <div>
            <label className="label-field">Why Collision?</label>
            <textarea
              rows={4}
              value={form.why_collision}
              onChange={(e) => update('why_collision', e.target.value)}
              placeholder="What about Collision speaks to you?"
              className="input-field"
            />
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="space-y-3 text-sm">
          <p className="font-display heading-sm mb-3">Review your application</p>
          {(Object.keys(form) as Array<keyof FormState>).map((k) => (
            form[k] ? (
              <div key={k} className="grid grid-cols-3 gap-4 border-b border-line pb-2">
                <dt className="text-mute capitalize">{k.replace(/_/g, ' ')}</dt>
                <dd className="col-span-2 break-words">{form[k]}</dd>
              </div>
            ) : null
          ))}
          {error && <p className="text-crimson text-sm mt-4">{error}</p>}
        </div>
      )}

      <div className="mt-8 flex justify-end">
        {step < STEPS.length - 1 ? (
          <button type="button" onClick={() => setStep(step + 1)} className="btn-primary">
            Continue <ChevronRight size={14} className="ml-2" />
          </button>
        ) : (
          <button type="button" onClick={submit} disabled={submitting} className="btn-accent">
            {submitting ? 'Submitting…' : 'Submit Application'}
          </button>
        )}
      </div>
    </div>
  );
}

function Field({
  label, value, onChange, type = 'text', required, placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="label-field">{label}{required && ' *'}</label>
      <input type={type} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} className="input-field" required={required} />
    </div>
  );
}

function SelectField({
  label, value, onChange, options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <div>
      <label className="label-field">{label}</label>
      <select value={value} onChange={(e) => onChange(e.target.value)} className="input-field">
        <option value="">Select…</option>
        {options.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
    </div>
  );
}
