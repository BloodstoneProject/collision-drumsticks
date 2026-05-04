'use client';

import { useState } from 'react';

export function NewsletterForm({
  variant = 'default',
}: {
  variant?: 'default' | 'footer' | 'inline';
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
        body: JSON.stringify({ email, source: variant }),
      });
      if (!res.ok) throw new Error('Failed');
      setStatus('success');
      setEmail('');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <p className="text-sm text-stone">
        Thanks. Check your inbox for the welcome.
      </p>
    );
  }

  const dark = variant === 'footer';

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        className={`flex-1 px-3 py-2.5 text-sm border focus:outline-none transition-colors ${
          dark
            ? 'bg-ink-soft border-bone/20 text-bone placeholder:text-stone focus:border-bone'
            : 'bg-bone border-line text-ink placeholder:text-stone focus:border-ink'
        }`}
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] transition-colors disabled:opacity-50 ${
          dark ? 'bg-bone text-ink hover:bg-stone' : 'bg-ink text-bone hover:bg-ink-soft'
        }`}
      >
        {status === 'loading' ? '…' : 'Join'}
      </button>
    </form>
  );
}
