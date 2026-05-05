'use client';

import { useState } from 'react';
import { markSubscribed } from './state';

export function EmailCaptureForm({
  source,
  code,
  cta = 'Get my discount',
  onDone,
}: {
  source: string;
  code: string;
  cta?: string;
  onDone?: () => void;
}) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source }),
      });
      if (!res.ok) throw new Error('Failed');
      setStatus('success');
      markSubscribed();
      setTimeout(() => onDone?.(), 4000);
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center">
        <p className="font-display text-2xl">You are in.</p>
        <p className="mt-3 text-sm text-mute">
          Use this code at checkout. We have also emailed it to you.
        </p>
        <p className="mt-5 inline-block bg-ink text-bone font-display text-3xl tracking-[0.2em] px-6 py-3">
          {code}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        autoComplete="email"
        className="input-field text-base"
      />
      <button type="submit" disabled={status === 'loading'} className="btn-accent w-full">
        {status === 'loading' ? 'Sending' : cta}
      </button>
      {status === 'error' && (
        <p className="text-xs text-crimson text-center">
          Something went wrong. Try again, or email sales@collisiondrumsticks.com.
        </p>
      )}
      <p className="text-[0.65rem] text-mute text-center uppercase tracking-[0.15em]">
        One email a month. Unsubscribe anytime.
      </p>
    </form>
  );
}
