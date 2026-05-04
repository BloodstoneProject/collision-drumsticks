'use client';

import { useEffect, useRef, useState } from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';

const ROWS = ['KICK', 'SNARE', 'HI-HAT', 'OPEN'] as const;
type Row = (typeof ROWS)[number];

const STEPS = 16;

// Carlton's go-to groove: 4/4 rock, kick on 1 + 3.5, snare on 2 + 4,
// straight 8th hats with an open hi-hat on the "and" of 4.
const DEFAULT: Record<Row, number[]> = {
  KICK:    [1,0,0,0, 0,0,1,0, 1,0,0,0, 0,0,0,0],
  SNARE:   [0,0,0,0, 1,0,0,0, 0,0,0,0, 1,0,0,0],
  'HI-HAT':[1,0,1,0, 1,0,1,0, 1,0,1,0, 1,0,0,0],
  OPEN:    [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,1,0],
};

const ROW_COLOR: Record<Row, string> = {
  KICK: 'bg-crimson',
  SNARE: 'bg-bone',
  'HI-HAT': 'bg-amber',
  OPEN: 'bg-amber',
};

export function BeatSequencer() {
  const [pattern, setPattern] = useState<Record<Row, number[]>>(DEFAULT);
  const [step, setStep] = useState(0);
  const [bpm] = useState(112); // Subtle mid-tempo
  const [playing, setPlaying] = useState(true);
  const [reduced, setReduced] = useState(false);
  const stepRef = useRef(0);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    if (mq.matches) setPlaying(false);
  }, []);

  useEffect(() => {
    if (!playing || reduced) return;
    // 16th-note interval
    const ms = 60_000 / bpm / 4;
    const id = window.setInterval(() => {
      stepRef.current = (stepRef.current + 1) % STEPS;
      setStep(stepRef.current);
    }, ms);
    return () => window.clearInterval(id);
  }, [bpm, playing, reduced]);

  function toggle(row: Row, col: number) {
    setPattern((p) => ({
      ...p,
      [row]: p[row].map((v, i) => (i === col ? (v ? 0 : 1) : v)),
    }));
  }

  function reset() {
    setPattern(DEFAULT);
    stepRef.current = 0;
    setStep(0);
  }

  const beat = Math.floor(step / 4) + 1;

  return (
    <div className="relative bg-ink-soft border border-bone/10 p-5 md:p-6 backdrop-blur-sm">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <span className="font-display text-2xl text-bone tabular-nums leading-none">
            {bpm}
            <span className="text-xs text-bone/50 ml-1.5 tracking-[0.18em]">BPM</span>
          </span>
          <span className="text-xs text-bone/40 uppercase tracking-[0.18em] hidden sm:inline">
            · Beat {beat}/4
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setPlaying((p) => !p)}
            aria-label={playing ? 'Pause' : 'Play'}
            className="w-8 h-8 rounded-full border border-bone/20 flex items-center justify-center hover:border-bone/60 hover:bg-bone/5 transition-colors text-bone"
          >
            {playing ? <Pause size={12} fill="currentColor" /> : <Play size={12} fill="currentColor" className="ml-0.5" />}
          </button>
          <button
            type="button"
            onClick={reset}
            aria-label="Reset"
            className="w-8 h-8 rounded-full border border-bone/20 flex items-center justify-center hover:border-bone/60 hover:bg-bone/5 transition-colors text-bone/70"
          >
            <RotateCcw size={11} />
          </button>
        </div>
      </div>

      <div className="space-y-2">
        {ROWS.map((row) => (
          <div key={row} className="grid grid-cols-[64px_1fr] items-center gap-2 md:gap-3">
            <span className="text-[0.62rem] uppercase tracking-[0.16em] text-bone/50 font-semibold">
              {row}
            </span>
            <div className="grid grid-cols-[repeat(16,minmax(0,1fr))] gap-[3px] md:gap-1">
              {pattern[row].map((on, i) => {
                const here = step === i && playing;
                const beatStart = i % 4 === 0;
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => toggle(row, i)}
                    aria-label={`${row} step ${i + 1} ${on ? 'on' : 'off'}`}
                    aria-pressed={Boolean(on)}
                    className={cellClass(on, here, beatStart, ROW_COLOR[row])}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-5 text-[0.62rem] uppercase tracking-[0.16em] text-bone/40">
        Click any cell — make it your own.
      </p>
    </div>
  );
}

function cellClass(on: number, here: boolean, beatStart: boolean, color: string) {
  const base =
    'aspect-square rounded-[2px] transition-all duration-100 cursor-pointer hover:scale-110';
  if (on && here) {
    return `${base} ${color} scale-110 shadow-[0_0_12px_rgba(196,30,30,0.6)]`;
  }
  if (on) {
    return `${base} ${color} opacity-90`;
  }
  if (here) {
    return `${base} bg-bone/15 ring-1 ring-bone/30`;
  }
  return `${base} ${beatStart ? 'bg-bone/10 ring-1 ring-bone/10' : 'bg-bone/5'}`;
}
