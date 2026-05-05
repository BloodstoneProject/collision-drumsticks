'use client';

import { useEffect, useState } from 'react';
import { PopupShell } from './PopupShell';
import { EmailCaptureForm } from './EmailCaptureForm';
import { dismissWelcome, isCoolingDown, isSubscribed, isWelcomeDismissed } from './state';

const DELAY_MS = 5000;

export function WelcomePopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (isSubscribed() || isWelcomeDismissed() || isCoolingDown()) return;
    const t = window.setTimeout(() => {
      if (isSubscribed() || isWelcomeDismissed() || isCoolingDown()) return;
      setOpen(true);
    }, DELAY_MS);
    return () => window.clearTimeout(t);
  }, []);

  function close() {
    dismissWelcome();
    setOpen(false);
  }

  return (
    <PopupShell open={open} onClose={close} ariaLabel="Welcome offer">
      <div className="grid sm:grid-cols-5">
        <div className="hidden sm:block sm:col-span-2 bg-ink text-bone p-8 flex-col justify-between">
          <p className="eyebrow !text-bone/60">Welcome</p>
          <p className="font-display text-6xl text-crimson mt-6 leading-none">10%</p>
          <p className="font-display text-2xl mt-2 leading-tight">off your first order.</p>
          <p className="text-xs text-bone/60 mt-6">Plus the monthly newsletter, one email a month.</p>
        </div>
        <div className="sm:col-span-3 p-8">
          <p className="eyebrow sm:hidden mb-2">Welcome</p>
          <p className="font-display heading-sm text-balance leading-tight">
            New here? Save 10% on your first pair.
          </p>
          <p className="mt-3 text-sm text-mute text-pretty">
            Drop your email for a one off code, plus the monthly newsletter from the workshop.
          </p>
          <div className="mt-6">
            <EmailCaptureForm
              source="popup-welcome"
              code="WELCOME10"
              cta="Send me the code"
              onDone={close}
            />
          </div>
        </div>
      </div>
    </PopupShell>
  );
}
