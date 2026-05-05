'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { getSupabaseBrowser } from '@/lib/supabase-browser';

export function SignInForm({ next }: { next?: string }) {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handle(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const supa = getSupabaseBrowser();
    const { error: err } = await supa.auth.signInWithPassword({ email, password });
    if (err) {
      setError(err.message);
      setLoading(false);
      return;
    }
    router.push(next && next.startsWith('/admin') ? next : '/admin');
    router.refresh();
  }

  return (
    <form onSubmit={handle} className="space-y-4">
      <div>
        <label htmlFor="email" className="label-field">Email</label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-field"
        />
      </div>
      <div>
        <label htmlFor="password" className="label-field">Password</label>
        <input
          id="password"
          type="password"
          autoComplete="current-password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
        />
      </div>
      {error && (
        <p className="text-xs text-crimson border border-crimson/30 bg-crimson/5 px-3 py-2">
          {error}
        </p>
      )}
      <button type="submit" disabled={loading} className="btn-accent w-full">
        {loading ? 'Signing in' : 'Sign in'}
      </button>
      <p className="text-xs text-mute text-center pt-2">
        Need access? Email lewis@bloodstone.co.uk to be added.
      </p>
    </form>
  );
}
