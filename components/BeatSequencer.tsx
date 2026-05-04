'use client';

import { useEffect, useRef, useState } from 'react';
import { Play, Pause, RotateCcw, Volume2, VolumeX } from 'lucide-react';

const ROWS = ['KICK', 'SNARE', 'HI-HAT', 'OPEN'] as const;
type Row = (typeof ROWS)[number];

const STEPS = 16;

// Carlton's go-to groove: kick on 1 + the "and" of 2 + 3,
// snare on 2 + 4, straight 8th hats with an open hat on the "and" of 4.
const DEFAULT: Record<Row, number[]> = {
  KICK:    [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
  SNARE:   [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
  'HI-HAT':[1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0],
  OPEN:    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
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
  const [bpm] = useState(112);
  const [playing, setPlaying] = useState(true);
  const [audioOn, setAudioOn] = useState(false);
  const [reduced, setReduced] = useState(false);

  const stepRef = useRef(0);
  const patternRef = useRef(pattern);
  const audioOnRef = useRef(audioOn);
  const audioCtxRef = useRef<AudioContext | null>(null);

  useEffect(() => { patternRef.current = pattern; }, [pattern]);
  useEffect(() => { audioOnRef.current = audioOn; }, [audioOn]);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    if (mq.matches) setPlaying(false);
  }, []);

  // Step driver
  useEffect(() => {
    if (!playing || reduced) return;
    const ms = 60_000 / bpm / 4;
    const id = window.setInterval(() => {
      const next = (stepRef.current + 1) % STEPS;
      stepRef.current = next;
      setStep(next);

      if (audioOnRef.current && audioCtxRef.current) {
        const p = patternRef.current;
        if (p.KICK[next]) playKick(audioCtxRef.current);
        if (p.SNARE[next]) playSnare(audioCtxRef.current);
        if (p['HI-HAT'][next]) playHihat(audioCtxRef.current, false);
        if (p.OPEN[next]) playHihat(audioCtxRef.current, true);
      }
    }, ms);
    return () => window.clearInterval(id);
  }, [bpm, playing, reduced]);

  function toggle(row: Row, col: number) {
    setPattern((p) => ({
      ...p,
      [row]: p[row].map((v, i) => (i === col ? (v ? 0 : 1) : v)),
    }));
    // Audition the cell when turning on with audio enabled
    if (audioOnRef.current && audioCtxRef.current && pattern[row][col] === 0) {
      const ctx = audioCtxRef.current;
      if (row === 'KICK') playKick(ctx);
      else if (row === 'SNARE') playSnare(ctx);
      else if (row === 'HI-HAT') playHihat(ctx, false);
      else playHihat(ctx, true);
    }
  }

  function reset() {
    setPattern(DEFAULT);
    stepRef.current = 0;
    setStep(0);
  }

  function toggleAudio() {
    if (audioOn) {
      setAudioOn(false);
      return;
    }
    if (!audioCtxRef.current) {
      const Ctor = window.AudioContext ?? (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioCtxRef.current = new Ctor();
    }
    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
    setAudioOn(true);
  }

  const beat = Math.floor(step / 4) + 1;

  return (
    <div className="relative bg-ink-soft/80 backdrop-blur-sm border border-bone/15 p-5 md:p-6 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)]">
      <div className="flex items-center justify-between mb-5 gap-3">
        <div className="flex items-center gap-3 min-w-0">
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
            onClick={toggleAudio}
            aria-label={audioOn ? 'Mute' : 'Unmute'}
            aria-pressed={audioOn}
            className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${
              audioOn
                ? 'border-crimson bg-crimson/20 text-bone'
                : 'border-bone/20 hover:border-bone/60 hover:bg-bone/5 text-bone/70'
            }`}
          >
            {audioOn ? <Volume2 size={12} /> : <VolumeX size={12} />}
          </button>
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
        {audioOn ? 'Sound on — click any cell.' : 'Tap the speaker to hear it.'}
      </p>
    </div>
  );
}

function cellClass(on: number, here: boolean, beatStart: boolean, color: string) {
  const base =
    'aspect-square rounded-[2px] transition-all duration-100 cursor-pointer hover:scale-110';
  if (on && here) {
    return `${base} ${color} scale-110 shadow-[0_0_14px_rgba(196,30,30,0.7)]`;
  }
  if (on) {
    return `${base} ${color} opacity-90`;
  }
  if (here) {
    return `${base} bg-bone/15 ring-1 ring-bone/30`;
  }
  return `${base} ${beatStart ? 'bg-bone/10 ring-1 ring-bone/10' : 'bg-bone/5'}`;
}

/* === Web Audio synthesis === */

function playKick(ctx: AudioContext) {
  const t = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(150, t);
  osc.frequency.exponentialRampToValueAtTime(0.01, t + 0.45);
  gain.gain.setValueAtTime(0.9, t);
  gain.gain.exponentialRampToValueAtTime(0.001, t + 0.45);
  osc.connect(gain).connect(ctx.destination);
  osc.start(t);
  osc.stop(t + 0.5);
}

function playSnare(ctx: AudioContext) {
  const t = ctx.currentTime;
  // Tonal body
  const osc = ctx.createOscillator();
  const oscGain = ctx.createGain();
  osc.type = 'triangle';
  osc.frequency.setValueAtTime(180, t);
  oscGain.gain.setValueAtTime(0.4, t);
  oscGain.gain.exponentialRampToValueAtTime(0.001, t + 0.12);
  osc.connect(oscGain).connect(ctx.destination);
  osc.start(t);
  osc.stop(t + 0.13);

  // Noise burst
  const buf = noiseBuffer(ctx, 0.18);
  const noise = ctx.createBufferSource();
  noise.buffer = buf;
  const filter = ctx.createBiquadFilter();
  filter.type = 'highpass';
  filter.frequency.value = 1200;
  const noiseGain = ctx.createGain();
  noiseGain.gain.setValueAtTime(0.55, t);
  noiseGain.gain.exponentialRampToValueAtTime(0.001, t + 0.15);
  noise.connect(filter).connect(noiseGain).connect(ctx.destination);
  noise.start(t);
}

function playHihat(ctx: AudioContext, open: boolean) {
  const t = ctx.currentTime;
  const dur = open ? 0.32 : 0.06;
  const buf = noiseBuffer(ctx, dur);
  const noise = ctx.createBufferSource();
  noise.buffer = buf;
  const hp = ctx.createBiquadFilter();
  hp.type = 'highpass';
  hp.frequency.value = 7000;
  const bp = ctx.createBiquadFilter();
  bp.type = 'bandpass';
  bp.frequency.value = 10000;
  const gain = ctx.createGain();
  gain.gain.setValueAtTime(open ? 0.25 : 0.32, t);
  gain.gain.exponentialRampToValueAtTime(0.001, t + dur);
  noise.connect(hp).connect(bp).connect(gain).connect(ctx.destination);
  noise.start(t);
}

function noiseBuffer(ctx: AudioContext, seconds: number) {
  const buf = ctx.createBuffer(1, Math.max(1, Math.floor(ctx.sampleRate * seconds)), ctx.sampleRate);
  const data = buf.getChannelData(0);
  for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
  return buf;
}
