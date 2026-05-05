import type { Metadata } from 'next';
import { SignInForm } from './SignInForm';

export const metadata: Metadata = {
  title: 'Admin sign in',
  robots: { index: false, follow: false },
};

export default async function SignInPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string }>;
}) {
  const { next } = await searchParams;
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-cream py-16 px-5">
      <div className="w-full max-w-sm bg-bone border border-line p-8">
        <p className="eyebrow mb-2">Collision admin</p>
        <h1 className="font-display text-3xl mb-6">Sign in.</h1>
        <SignInForm next={next} />
      </div>
    </div>
  );
}
