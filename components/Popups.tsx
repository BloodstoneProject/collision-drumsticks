'use client';

import { usePathname } from 'next/navigation';
import { WelcomePopup } from './popups/WelcomePopup';
import { ExitIntentPopup } from './popups/ExitIntentPopup';
import { StickFinderNudge } from './popups/StickFinderNudge';

const EXCLUDED_PREFIXES = ['/admin', '/cart', '/checkout', '/my-account'];

export function Popups() {
  const pathname = usePathname() || '/';
  if (EXCLUDED_PREFIXES.some((p) => pathname.startsWith(p))) return null;
  return (
    <>
      <WelcomePopup />
      <ExitIntentPopup />
      <StickFinderNudge pathname={pathname} />
    </>
  );
}
