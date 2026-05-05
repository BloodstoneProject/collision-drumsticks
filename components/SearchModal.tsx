'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, X, ArrowUp, ArrowDown, CornerDownLeft } from 'lucide-react';

type Entry = {
  title: string;
  subtitle?: string;
  type: 'product' | 'artist' | 'post' | 'page';
  href: string;
  keywords?: string;
};

type Index = { entries: Entry[] } | null;

const TYPE_LABEL: Record<Entry['type'], string> = {
  product: 'Product',
  artist: 'Artist',
  post: 'Article',
  page: 'Page',
};

function score(entry: Entry, q: string): number {
  if (!q) return 0;
  const haystack = `${entry.title} ${entry.subtitle ?? ''} ${entry.keywords ?? ''}`.toLowerCase();
  const needle = q.toLowerCase();
  if (entry.title.toLowerCase().startsWith(needle)) return 10;
  if (entry.title.toLowerCase().includes(needle)) return 7;
  if (haystack.includes(needle)) return 4;
  const words = needle.split(/\s+/).filter(Boolean);
  if (words.every((w) => haystack.includes(w))) return 2;
  return 0;
}

export function SearchModal() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [index, setIndex] = useState<Index>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    function onOpen() {
      setOpen(true);
    }
    document.addEventListener('collision:open-search', onOpen as EventListener);
    return () => document.removeEventListener('collision:open-search', onOpen as EventListener);
  }, []);

  useEffect(() => {
    if (!open) return;
    if (!index) {
      fetch('/api/search-index')
        .then((r) => (r.ok ? r.json() : null))
        .then((data) => setIndex(data))
        .catch(() => setIndex({ entries: [] }));
    }
    inputRef.current?.focus();
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open, index]);

  const results = useMemo(() => {
    if (!index) return [] as Entry[];
    if (!query.trim()) {
      return index.entries.filter((e) => e.type === 'page').slice(0, 12);
    }
    return index.entries
      .map((e) => ({ e, s: score(e, query) }))
      .filter((r) => r.s > 0)
      .sort((a, b) => b.s - a.s)
      .slice(0, 24)
      .map((r) => r.e);
  }, [index, query]);

  useEffect(() => {
    setActiveIdx(0);
  }, [query, open]);

  function close() {
    setOpen(false);
    setQuery('');
  }

  function go(href: string) {
    close();
    router.push(href);
  }

  function onKey(e: React.KeyboardEvent<HTMLDivElement>) {
    if (e.key === 'Escape') {
      e.preventDefault();
      close();
      return;
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIdx((i) => Math.min(results.length - 1, i + 1));
      return;
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIdx((i) => Math.max(0, i - 1));
      return;
    }
    if (e.key === 'Enter') {
      e.preventDefault();
      const target = results[activeIdx];
      if (target) go(target.href);
    }
  }

  useEffect(() => {
    if (!listRef.current) return;
    const item = listRef.current.querySelector<HTMLLIElement>(`[data-idx="${activeIdx}"]`);
    item?.scrollIntoView({ block: 'nearest' });
  }, [activeIdx]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Search"
      className="fixed inset-0 z-[110] flex items-start justify-center pt-[10vh] px-4"
      onKeyDown={onKey}
    >
      <button
        type="button"
        aria-label="Close search"
        onClick={close}
        className="absolute inset-0 bg-ink/70 backdrop-blur-sm"
      />
      <div className="relative w-full max-w-2xl bg-bone border border-line shadow-2xl flex flex-col max-h-[80vh]">
        <div className="flex items-center gap-3 border-b border-line px-4 py-3">
          <Search size={18} className="text-mute shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products, artists, articles, pages"
            className="flex-1 bg-transparent text-base focus:outline-none placeholder:text-stone"
          />
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="p-1 text-mute hover:text-ink"
          >
            <X size={16} />
          </button>
        </div>

        <ul ref={listRef} className="overflow-y-auto flex-1">
          {!index ? (
            <li className="p-6 text-sm text-mute text-center">Loading.</li>
          ) : results.length === 0 ? (
            <li className="p-6 text-sm text-mute text-center">
              {query.trim() ? 'No matches. Try a model name, artist, or genre.' : ''}
            </li>
          ) : (
            results.map((r, i) => (
              <li key={`${r.type}-${r.href}`} data-idx={i}>
                <button
                  type="button"
                  onClick={() => go(r.href)}
                  onMouseEnter={() => setActiveIdx(i)}
                  className={`w-full text-left flex items-start gap-4 px-4 py-3 border-b border-line transition-colors ${
                    i === activeIdx ? 'bg-cream' : 'hover:bg-cream'
                  }`}
                >
                  <span
                    className={`mt-0.5 shrink-0 text-[0.6rem] font-bold uppercase tracking-[0.15em] px-1.5 py-0.5 ${
                      i === activeIdx ? 'bg-ink text-bone' : 'border border-line text-mute'
                    }`}
                  >
                    {TYPE_LABEL[r.type]}
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block font-display text-base leading-tight truncate">
                      {r.title}
                    </span>
                    {r.subtitle && (
                      <span className="block text-xs text-mute mt-0.5 truncate">{r.subtitle}</span>
                    )}
                  </span>
                </button>
              </li>
            ))
          )}
        </ul>

        <div className="hidden sm:flex items-center justify-between border-t border-line px-4 py-2 text-[0.65rem] uppercase tracking-[0.15em] text-mute">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <ArrowUp size={11} /> <ArrowDown size={11} /> Navigate
            </span>
            <span className="flex items-center gap-1">
              <CornerDownLeft size={11} /> Open
            </span>
          </div>
          <span>Esc to close</span>
        </div>
      </div>
    </div>
  );
}
