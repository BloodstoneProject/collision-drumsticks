'use client';

import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

const STORAGE_KEY = 'collision-theme';

export function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark' | null>(null);

  useEffect(() => {
    let next: 'light' | 'dark';
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY) as 'light' | 'dark' | null;
      const sys = window.matchMedia('(prefers-color-scheme: dark)').matches;
      next = stored || (sys ? 'dark' : 'light');
    } catch {
      next = 'light';
    }
    setTheme(next);
  }, []);

  function toggle() {
    const next: 'light' | 'dark' = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    if (next === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore quota / disabled storage
    }
  }

  if (!theme) {
    return (
      <span aria-hidden="true" className="p-2 opacity-0">
        <Sun size={18} />
      </span>
    );
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className="p-2 hover:text-crimson"
    >
      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
