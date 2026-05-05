'use client';

import { useEffect, useState } from 'react';
import { PopupShell } from './PopupShell';
import { EmailCaptureForm } from './EmailCaptureForm';
import { dismissExit, isCoolingDown, isExitDismissed, isSubscribed } from './state';

const MIN_DWELL_MS = 12000;
const MOBILE_DWELL_MS = 20000;

export function ExitIntentPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (isSubscribed() || isExitDismissed()) return;
    const mountedAt = Date.now();
    const isCoarsePointer = window.matchMedia?.('(pointer: coarse)').matches;

    function trigger() {
      if (isSubscribed() || isExitDismissed() || isCoolingDown()) return;
      setOpen(true);
      cleanup();
    }

    function onMouseLeave(e: MouseEvent) {
      if (Date.now() - mountedAt < MIN_DWELL_MS) return;
      if (e.clientY <= 0 && e.relatedTarget === null) trigger();
    }

    function onVisibilityChange() {
      if (Date.now() - mountedAt < MOBILE_DWELL_MS) return;
      if (document.visibilityState === 'hidden') trigger();
    }

    function cleanup() {
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('visibilitychange', onVisibilityChange);
    }

    if (isCoarsePointer) {
      document.addEventListener('visibilitychange', onVisibilityChange);
    } else {
      document.addEventListener('mouseleave', onMouseLeave);
      document.addEventListener('visibilitychange', onVisibilityChange);
    }

    return cleanup;
  }, []);

  function close() {
    dismissExit();
    setOpen(false);
  }

  return (
    <PopupShell open={open} onClose={close} ariaLabel="Before you go offer">
      <div className="p-8 text-center">
        <p className="eyebrow text-crimson mb-3">Wait</p>
        <p className="font-display heading-md text-balance">
          15% off if you stay long enough to grab a pair.
        </p>
        <p className="mt-4 text-sm text-mute text-pretty max-w-sm mx-auto">
          One time code, sent straight to your inbox. Stacks on top of free UK shipping over £49.
        </p>
        <div className="mt-6 max-w-xs mx-auto">
          <EmailCaptureForm
            source="popup-exit"
            code="STAY15"
            cta="Send me 15% off"
            onDone={close}
          />
        </div>
        <button
          type="button"
          onClick={close}
          className="mt-5 text-xs text-mute uppercase tracking-[0.18em] hover:text-ink"
        >
          No thanks, take me to checkout
        </button>
      </div>
    </PopupShell>
  );
}
