'use client';

import { useState } from 'react';
import { Check, ChevronLeft, ChevronRight, Upload } from 'lucide-react';
import { formatPrice } from '@/lib/utils';

type Config = {
  size: string;
  tip: string;
  finish: string;
  designType: 'upload' | 'text';
  textValue: string;
  fileName: string;
  quantity: string;
};

const SIZES = [
  { value: '5A', label: '5A', detail: '16" · 0.565" · 47g · the all-rounder' },
  { value: '5B', label: '5B', detail: '16" · 0.595" · 53g · heavier hitter' },
  { value: '5AR', label: '5AR Reach', detail: '16.5" · 0.565" · 49g · extended length' },
  { value: '5BR', label: '5BR Reach', detail: '16.5" · 0.595" · 55g · heavy + long' },
  { value: '7A', label: '7A', detail: '15.5" · 0.540" · 41g · light, fast, jazz' },
  { value: '7AR', label: '7AR Reach', detail: '16" · 0.540" · 43g · light + reach' },
  { value: '2B', label: '2B', detail: '16.25" · 0.630" · 64g · the heavy hitter' },
];

const TIPS = [
  { value: 'wood', label: 'Wood Tip', detail: 'Warmer cymbal tone, traditional choice.' },
  { value: 'nylon', label: 'Nylon Tip', detail: 'Brighter cymbal definition, longer tip life. +£2.' },
];

const FINISHES = [
  { value: 'natural', label: 'Natural', detail: 'Classic oil finish on raw hickory.' },
  { value: 'stealth', label: 'Stealth Black', detail: 'Matte black coating. +£3.' },
];

const QUANTITIES = [
  { value: '1', label: '1 Pair', price: 24.99 },
  { value: '3', label: '3 Pack', price: 64.99, save: 9.98 },
  { value: '6', label: '6 Pack', price: 119.99, save: 29.95 },
  { value: '12', label: '12 Pack', price: 219.99, save: 79.89 },
  { value: '100', label: '100+ Pairs (Bulk)', price: 0 },
];

const STEPS = ['Size', 'Tip', 'Finish', 'Design', 'Quantity', 'Review'];

export function CustomConfigurator() {
  const [step, setStep] = useState(0);
  const [config, setConfig] = useState<Config>({
    size: '',
    tip: '',
    finish: '',
    designType: 'text',
    textValue: '',
    fileName: '',
    quantity: '',
  });

  const canAdvance = (() => {
    switch (step) {
      case 0: return Boolean(config.size);
      case 1: return Boolean(config.tip);
      case 2: return Boolean(config.finish);
      case 3:
        return config.designType === 'text' ? config.textValue.length > 0 : config.fileName.length > 0;
      case 4: return Boolean(config.quantity);
      default: return true;
    }
  })();

  function next() { if (canAdvance && step < STEPS.length - 1) setStep(step + 1); }
  function back() { if (step > 0) setStep(step - 1); }

  const selectedQty = QUANTITIES.find((q) => q.value === config.quantity);
  const isBulk = config.quantity === '100';
  let price = selectedQty?.price ?? 0;
  if (config.tip === 'nylon' && !isBulk) price += 2 * Number(config.quantity || 0);
  if (config.finish === 'stealth' && !isBulk) price += 3 * Number(config.quantity || 0);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-3 text-xs uppercase tracking-[0.15em] text-mute">
        <button type="button" onClick={back} disabled={step === 0} className="flex items-center gap-1 disabled:opacity-30 font-semibold">
          <ChevronLeft size={14} /> Back
        </button>
        <span>Step {step + 1} of {STEPS.length} · {STEPS[step]}</span>
        <span className="opacity-0 select-none flex items-center gap-1">
          <ChevronLeft size={14} /> Back
        </span>
      </div>

      <div className="flex h-1 bg-line mb-10">
        {STEPS.map((_, i) => (
          <div
            key={i}
            className={`flex-1 transition-colors ${i <= step ? 'bg-ink' : 'bg-line'} ${i > 0 ? 'ml-px' : ''}`}
          />
        ))}
      </div>

      {/* Step 0: Size */}
      {step === 0 && (
        <Step title="Choose your size">
          <div className="grid sm:grid-cols-2 gap-3">
            {SIZES.map((s) => (
              <Tile
                key={s.value}
                selected={config.size === s.value}
                onClick={() => setConfig({ ...config, size: s.value })}
                title={s.label}
                detail={s.detail}
              />
            ))}
          </div>
        </Step>
      )}

      {/* Step 1: Tip */}
      {step === 1 && (
        <Step title="Choose your tip">
          <div className="grid sm:grid-cols-2 gap-3">
            {TIPS.map((t) => (
              <Tile
                key={t.value}
                selected={config.tip === t.value}
                onClick={() => setConfig({ ...config, tip: t.value })}
                title={t.label}
                detail={t.detail}
              />
            ))}
          </div>
        </Step>
      )}

      {/* Step 2: Finish */}
      {step === 2 && (
        <Step title="Choose your finish">
          <div className="grid sm:grid-cols-2 gap-3">
            {FINISHES.map((f) => (
              <Tile
                key={f.value}
                selected={config.finish === f.value}
                onClick={() => setConfig({ ...config, finish: f.value })}
                title={f.label}
                detail={f.detail}
              />
            ))}
          </div>
        </Step>
      )}

      {/* Step 3: Design */}
      {step === 3 && (
        <Step title="Your design">
          <div className="flex gap-2 mb-6">
            {(['text', 'upload'] as const).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setConfig({ ...config, designType: t })}
                className={`px-5 py-2 text-xs font-semibold uppercase tracking-[0.15em] border ${
                  config.designType === t ? 'border-ink bg-ink text-bone' : 'border-line'
                }`}
              >
                {t === 'text' ? 'Text Engraving' : 'Upload Logo'}
              </button>
            ))}
          </div>

          {config.designType === 'text' ? (
            <div>
              <label className="label-field">Text to engrave (max 24 characters)</label>
              <input
                type="text"
                maxLength={24}
                value={config.textValue}
                onChange={(e) => setConfig({ ...config, textValue: e.target.value })}
                placeholder="e.g. THE BANKS BAND"
                className="input-field"
              />
              <p className="text-xs text-mute mt-2">
                We will set your text in our default font on the shaft. Up to 4cm × 1.5cm print area.
              </p>
            </div>
          ) : (
            <div>
              <label className="label-field">Upload your design (SVG, PDF, PNG, JPG)</label>
              <label className="border-2 border-dashed border-line bg-cream p-8 text-center cursor-pointer block hover:border-ink transition-colors">
                <Upload size={20} className="mx-auto mb-2 text-mute" />
                <p className="text-sm font-semibold">{config.fileName || 'Click to upload or drag & drop'}</p>
                <p className="text-xs text-mute mt-1">SVG works best. Max 10MB.</p>
                <input
                  type="file"
                  accept=".svg,.pdf,.png,.jpg,.jpeg"
                  className="hidden"
                  onChange={(e) => setConfig({ ...config, fileName: e.target.files?.[0]?.name ?? '' })}
                />
              </label>
              <p className="text-xs text-mute mt-2">
                Print area: 4cm × 1.5cm. Single-colour designs reproduce best at this scale.
              </p>
            </div>
          )}
        </Step>
      )}

      {/* Step 4: Quantity */}
      {step === 4 && (
        <Step title="Choose your quantity">
          <div className="grid sm:grid-cols-2 gap-3">
            {QUANTITIES.map((q) => (
              <button
                key={q.value}
                type="button"
                onClick={() => setConfig({ ...config, quantity: q.value })}
                className={`text-left p-5 border transition-colors ${
                  config.quantity === q.value ? 'border-ink bg-ink text-bone' : 'border-line hover:border-ink'
                }`}
              >
                <div className="flex items-center justify-between">
                  <p className="font-display text-xl">{q.label}</p>
                  {q.value === '100' ? (
                    <span className="text-xs uppercase tracking-[0.1em]">Quote</span>
                  ) : (
                    <p className="font-display text-xl">{formatPrice(q.price)}</p>
                  )}
                </div>
                {q.save && <p className={`text-xs mt-1 ${config.quantity === q.value ? 'text-bone/70' : 'text-crimson'}`}>Save {formatPrice(q.save)}</p>}
              </button>
            ))}
          </div>
        </Step>
      )}

      {/* Step 5: Review */}
      {step === 5 && (
        <Step title="Review your design">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-cream aspect-square flex items-center justify-center">
              <p className="font-display text-3xl text-mute opacity-50 text-center px-4">
                {config.designType === 'text' ? config.textValue || 'Your Text Here' : config.fileName || 'Your Logo'}
              </p>
            </div>
            <div>
              <dl className="border-t border-line">
                {[
                  ['Size', config.size],
                  ['Tip', config.tip === 'wood' ? 'Wood' : 'Nylon'],
                  ['Finish', config.finish === 'natural' ? 'Natural' : 'Stealth Black'],
                  ['Design', config.designType === 'text' ? `Text: ${config.textValue}` : `File: ${config.fileName}`],
                  ['Quantity', QUANTITIES.find((q) => q.value === config.quantity)?.label ?? ''],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between py-3 border-b border-line text-sm">
                    <dt className="text-mute">{k}</dt>
                    <dd className="font-medium">{v}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-6 bg-cream p-5">
                {isBulk ? (
                  <>
                    <p className="font-display text-2xl">Bulk quote required</p>
                    <p className="text-xs text-mute mt-1">100+ pairs need a custom quote. We will email you within 1 business day.</p>
                    <a href="/wholesale" className="btn-accent mt-4 w-full">Request Bulk Quote</a>
                  </>
                ) : (
                  <>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-mute">Total</p>
                      <p className="font-display text-3xl">{formatPrice(price)}</p>
                    </div>
                    <p className="text-xs text-mute mt-2">Production: 7–10 business days. Then standard shipping.</p>
                    <button type="button" className="btn-accent w-full mt-4">
                      Add to Cart
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </Step>
      )}

      {step < 5 && (
        <div className="mt-10 flex justify-end">
          <button type="button" onClick={next} disabled={!canAdvance} className="btn-primary">
            Continue <ChevronRight size={14} className="ml-2" />
          </button>
        </div>
      )}
    </div>
  );
}

function Step({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display heading-md mb-8">{title}</h2>
      {children}
    </div>
  );
}

function Tile({
  title,
  detail,
  selected,
  onClick,
}: {
  title: string;
  detail: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`text-left p-5 border transition-colors flex items-start gap-3 ${
        selected ? 'border-ink bg-ink text-bone' : 'border-line hover:border-ink'
      }`}
    >
      <div className={`w-5 h-5 rounded-full border flex items-center justify-center mt-0.5 ${
        selected ? 'border-bone bg-bone text-ink' : 'border-line'
      }`}>
        {selected && <Check size={12} />}
      </div>
      <div>
        <p className="font-display text-xl leading-tight">{title}</p>
        <p className={`text-xs mt-1 ${selected ? 'text-bone/70' : 'text-mute'}`}>{detail}</p>
      </div>
    </button>
  );
}
