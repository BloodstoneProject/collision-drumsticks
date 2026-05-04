'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft } from 'lucide-react';
import { products } from '@/lib/seed-data';
import { formatPrice } from '@/lib/utils';

type Answers = {
  genres: string[];
  style: string;
  experience: string;
  reach: string;
  tip: string;
  finish: string;
};

const QUESTIONS: Array<{
  key: keyof Answers;
  prompt: string;
  multi?: boolean;
  options: { value: string; label: string; hint?: string }[];
}> = [
  {
    key: 'genres',
    prompt: 'What genres do you play most?',
    multi: true,
    options: [
      { value: 'rock', label: 'Rock' },
      { value: 'pop', label: 'Pop' },
      { value: 'jazz', label: 'Jazz' },
      { value: 'metal', label: 'Metal' },
      { value: 'funk', label: 'Funk' },
      { value: 'gospel', label: 'Gospel' },
      { value: 'country', label: 'Country' },
      { value: 'latin', label: 'Latin' },
      { value: 'indie', label: 'Indie' },
      { value: 'allround', label: 'A bit of everything' },
    ],
  },
  {
    key: 'style',
    prompt: 'How would you describe your playing?',
    options: [
      { value: 'light', label: 'Light & dynamic', hint: 'You play with nuance and articulation.' },
      { value: 'medium', label: 'Medium & versatile', hint: 'You sit in the middle of the dynamic range.' },
      { value: 'heavy', label: 'Heavy & powerful', hint: 'You hit hard and you want sticks that take it.' },
    ],
  },
  {
    key: 'experience',
    prompt: 'How long have you been playing?',
    options: [
      { value: 'beginner', label: 'Beginner (0–2 years)' },
      { value: 'intermediate', label: 'Intermediate (2–5 years)' },
      { value: 'advanced', label: 'Advanced (5+ years)' },
      { value: 'pro', label: 'Touring or session pro' },
    ],
  },
  {
    key: 'reach',
    prompt: 'Standard length or extended reach?',
    options: [
      { value: 'standard', label: 'Standard length', hint: '16" — works for most kits.' },
      { value: 'reach', label: 'Extended reach', hint: '+½" — for bigger kits, lower stools, longer arms.' },
      { value: 'either', label: 'Either is fine' },
    ],
  },
  {
    key: 'tip',
    prompt: 'Tip preference?',
    options: [
      { value: 'wood', label: 'Wood tip', hint: 'Warmer cymbal tone.' },
      { value: 'nylon', label: 'Nylon tip', hint: 'Brighter cymbal definition, longer tip life.' },
      { value: 'either', label: 'Recommend for me' },
    ],
  },
  {
    key: 'finish',
    prompt: 'Stage look matter to you?',
    options: [
      { value: 'natural', label: 'Natural — classic look' },
      { value: 'stealth', label: 'Stealth Black — matte black coating' },
      { value: 'custom', label: 'Custom engraved with my logo' },
    ],
  },
];

function recommend(a: Answers): { primary: string; alternatives: string[]; reason: string } {
  let recommended = '5a-drumstick';
  const reasons: string[] = [];

  // Heavy + metal/punk -> 2B
  if (a.style === 'heavy' || a.genres.includes('metal')) {
    recommended = a.reach === 'reach' ? '5br-reach-drumstick' : '2b-drumstick';
    reasons.push('your heavy style needs a stick with more body');
  } else if (a.style === 'light' && a.genres.includes('jazz')) {
    recommended = a.reach === 'reach' ? '7ar-reach-drumstick' : '7a-drumstick';
    reasons.push('the 7A is the lightest, most articulate stick we make');
  } else if (a.style === 'medium') {
    if (a.genres.includes('rock') || a.genres.includes('indie') || a.genres.includes('funk')) {
      recommended = a.reach === 'reach' ? '5ar-reach-drumstick' : '5a-drumstick';
      reasons.push('the 5A is the all-rounder for medium players');
    } else {
      recommended = a.reach === 'reach' ? '5ar-reach-drumstick' : '5a-drumstick';
    }
  }

  // Apply finish overrides
  if (a.finish === 'stealth') {
    if (recommended.includes('5a')) recommended = '5a-stealth-black';
    if (recommended.includes('5b')) recommended = '5b-stealth-black';
    reasons.push('finished in matte Stealth Black for stage presence');
  }
  if (a.finish === 'custom') {
    recommended = 'custom-engraved-drumsticks';
    reasons.push('custom engraving for your name or band logo');
  }
  if (a.tip === 'nylon' && recommended === '5a-drumstick') {
    recommended = '5a-nylon-tip';
    reasons.push('nylon tip for brighter cymbal articulation');
  }

  const alternatives = ['5a-drumstick', '5b-drumstick', '5ar-reach-drumstick'].filter((s) => s !== recommended).slice(0, 2);

  const reasonText = reasons.length
    ? `Because ${reasons.join('; ')}.`
    : 'Because the 5A is the most versatile stick for the way you play.';

  return { primary: recommended, alternatives, reason: reasonText };
}

export function StickFinder() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({
    genres: [],
    style: '',
    experience: '',
    reach: '',
    tip: '',
    finish: '',
  });
  const [done, setDone] = useState(false);

  const q = QUESTIONS[step];
  const total = QUESTIONS.length;

  function handleSelect(value: string) {
    setAnswers((prev) => {
      if (q.multi) {
        const current = prev[q.key] as string[];
        const next = current.includes(value)
          ? current.filter((v) => v !== value)
          : [...current, value];
        return { ...prev, [q.key]: next };
      }
      return { ...prev, [q.key]: value };
    });
    if (!q.multi) {
      setTimeout(() => advance(), 200);
    }
  }

  function advance() {
    if (step < total - 1) setStep(step + 1);
    else {
      setDone(true);
      // Log to API for analytics
      fetch('/api/stick-finder', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(answers),
      }).catch(() => {});
    }
  }

  function back() {
    if (step > 0) setStep(step - 1);
  }

  function reset() {
    setStep(0);
    setDone(false);
    setAnswers({ genres: [], style: '', experience: '', reach: '', tip: '', finish: '' });
  }

  if (done) {
    const result = recommend(answers);
    const product = products.find((p) => p.slug === result.primary);
    if (!product) return null;

    const altProducts = result.alternatives
      .map((slug) => products.find((p) => p.slug === slug))
      .filter(Boolean);

    return (
      <div className="max-w-3xl mx-auto">
        <p className="eyebrow text-center mb-3">Your Recommendation</p>
        <h2 className="font-display heading-lg text-center mb-3 text-balance">
          Your perfect stick: {product.name}
        </h2>
        <p className="text-center text-mute max-w-xl mx-auto text-pretty">{result.reason}</p>

        <div className="mt-10 border border-line bg-bone">
          <div className="grid md:grid-cols-2">
            <div className="relative aspect-square bg-cream">
              <Image
                src={product.primary_image}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="font-display text-3xl">{product.name}</h3>
              <p className="text-mute mt-3 text-pretty">{product.short_description}</p>
              <p className="font-display text-3xl mt-6">{formatPrice(product.base_price_gbp)}</p>
              <div className="mt-6 flex gap-3">
                <Link href={`/product/${product.slug}`} className="btn-accent">
                  Add to Cart
                </Link>
                <Link href={`/product/${product.slug}`} className="btn-ghost">
                  View Product
                </Link>
              </div>
            </div>
          </div>
        </div>

        {altProducts.length > 0 && (
          <div className="mt-10">
            <p className="eyebrow text-center mb-3">Also Worth Considering</p>
            <div className="grid md:grid-cols-2 gap-4">
              {altProducts.map((p) =>
                p ? (
                  <Link
                    key={p.slug}
                    href={`/product/${p.slug}`}
                    className="flex items-center gap-4 border border-line hover:border-ink p-4 transition-colors"
                  >
                    <div className="relative w-16 h-16 bg-cream flex-shrink-0">
                      <Image src={p.primary_image} alt={p.name} fill sizes="64px" className="object-cover" />
                    </div>
                    <div>
                      <p className="font-display text-lg">{p.name}</p>
                      <p className="text-xs text-mute">{p.short_description}</p>
                    </div>
                  </Link>
                ) : null
              )}
            </div>
          </div>
        )}

        <div className="mt-10 text-center">
          <button type="button" onClick={reset} className="text-xs font-semibold uppercase tracking-[0.18em] underline underline-offset-4">
            Retake the Quiz
          </button>
        </div>
      </div>
    );
  }

  const value = answers[q.key];
  const isComplete = q.multi ? (value as string[]).length > 0 : (value as string).length > 0;

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <button
          type="button"
          onClick={back}
          disabled={step === 0}
          className="text-xs font-semibold uppercase tracking-[0.18em] flex items-center gap-1 disabled:opacity-30"
        >
          <ChevronLeft size={14} /> Back
        </button>
        <span className="text-xs text-mute uppercase tracking-[0.15em]">
          Question {step + 1} of {total}
        </span>
      </div>

      <div className="h-1 bg-line mb-10">
        <div className="h-full bg-ink transition-all duration-500" style={{ width: `${((step + 1) / total) * 100}%` }} />
      </div>

      <h2 className="font-display heading-md text-balance mb-8">{q.prompt}</h2>

      <div className="grid sm:grid-cols-2 gap-3">
        {q.options.map((opt) => {
          const selected = q.multi
            ? (value as string[]).includes(opt.value)
            : value === opt.value;
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => handleSelect(opt.value)}
              className={`text-left p-5 border transition-colors ${
                selected ? 'border-ink bg-ink text-bone' : 'border-line hover:border-ink bg-bone'
              }`}
            >
              <p className="font-display text-xl">{opt.label}</p>
              {opt.hint && <p className={`text-xs mt-1 ${selected ? 'text-bone/70' : 'text-mute'}`}>{opt.hint}</p>}
            </button>
          );
        })}
      </div>

      {q.multi && (
        <div className="mt-8">
          <button
            type="button"
            onClick={advance}
            disabled={!isComplete}
            className="btn-primary"
          >
            Continue
          </button>
        </div>
      )}
    </div>
  );
}
