import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'My Account',
  description: 'Sign in or create a Collision account to manage orders, subscriptions, and saved addresses.',
};

export default function MyAccountPage() {
  return (
    <>
      <PageHero eyebrow="Account" title="My account." subtitle="Sign in or create an account to manage orders and subscriptions." />
      <section className="container-page py-12 md:py-16 grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="border border-line p-8">
          <p className="eyebrow mb-3">Returning</p>
          <h2 className="font-display text-2xl mb-6">Sign in</h2>
          <form className="space-y-4">
            <div>
              <label className="label-field">Email</label>
              <input type="email" required className="input-field" />
            </div>
            <div>
              <label className="label-field">Password</label>
              <input type="password" required className="input-field" />
            </div>
            <button type="submit" className="btn-primary w-full">Sign In</button>
            <p className="text-xs text-center text-mute">Forgot password? <Link href="#" className="underline">Reset</Link></p>
          </form>
        </div>
        <div className="border border-line p-8">
          <p className="eyebrow mb-3">New here</p>
          <h2 className="font-display text-2xl mb-3">Create an account</h2>
          <p className="text-mute text-sm mb-6">Track orders, manage subscriptions, save addresses, and apply for endorsements with one login.</p>
          <ul className="text-sm space-y-2 mb-6">
            <li className="flex gap-2"><span className="text-crimson">✓</span> Order history</li>
            <li className="flex gap-2"><span className="text-crimson">✓</span> Subscription management</li>
            <li className="flex gap-2"><span className="text-crimson">✓</span> Saved addresses</li>
            <li className="flex gap-2"><span className="text-crimson">✓</span> Endorsement application status</li>
          </ul>
          <Link href="#" className="btn-accent w-full">Create Account</Link>
        </div>
      </section>
    </>
  );
}
