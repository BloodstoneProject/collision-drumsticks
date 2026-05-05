const KEYS = {
  subscribed: 'collision_popup_subscribed',
  welcomeDismissed: 'collision_popup_welcome_dismissed',
  exitDismissed: 'collision_popup_exit_dismissed',
  finderDismissed: 'collision_popup_finder_dismissed',
  blockedUntil: 'collision_popup_blocked_until',
};

const TTL_30_DAYS = 30 * 24 * 60 * 60 * 1000;
const COOLDOWN_MS = 5 * 60 * 1000;

function safeLocal(): Storage | null {
  if (typeof window === 'undefined') return null;
  try {
    return window.localStorage;
  } catch {
    return null;
  }
}

function safeSession(): Storage | null {
  if (typeof window === 'undefined') return null;
  try {
    return window.sessionStorage;
  } catch {
    return null;
  }
}

export function isSubscribed(): boolean {
  return safeLocal()?.getItem(KEYS.subscribed) === '1';
}

export function markSubscribed() {
  safeLocal()?.setItem(KEYS.subscribed, '1');
}

export function isWelcomeDismissed(): boolean {
  const ts = Number(safeLocal()?.getItem(KEYS.welcomeDismissed) || 0);
  return ts > 0 && Date.now() - ts < TTL_30_DAYS;
}

export function dismissWelcome() {
  safeLocal()?.setItem(KEYS.welcomeDismissed, String(Date.now()));
  setCooldown();
}

export function isExitDismissed(): boolean {
  return safeSession()?.getItem(KEYS.exitDismissed) === '1';
}

export function dismissExit() {
  safeSession()?.setItem(KEYS.exitDismissed, '1');
  setCooldown();
}

export function isFinderDismissed(): boolean {
  return safeSession()?.getItem(KEYS.finderDismissed) === '1';
}

export function dismissFinder() {
  safeSession()?.setItem(KEYS.finderDismissed, '1');
}

export function isCoolingDown(): boolean {
  const until = Number(safeSession()?.getItem(KEYS.blockedUntil) || 0);
  return until > Date.now();
}

function setCooldown() {
  safeSession()?.setItem(KEYS.blockedUntil, String(Date.now() + COOLDOWN_MS));
}
