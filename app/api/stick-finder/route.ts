import { NextResponse } from 'next/server';
import { z } from 'zod';
import { supabaseAdmin } from '@/lib/supabase';

const schema = z.object({
  genres: z.array(z.string()).optional(),
  style: z.string().optional(),
  experience: z.string().optional(),
  reach: z.string().optional(),
  tip: z.string().optional(),
  finish: z.string().optional(),
  recommended: z.string().optional(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = schema.parse(body);

    const supa = supabaseAdmin();
    if (supa) {
      await supa.from('collision_stick_finder_results').insert({
        genre: parsed.genres?.join(',') ?? null,
        playing_style: parsed.style ?? null,
        experience_level: parsed.experience ?? null,
        preferred_weight: parsed.reach ?? null,
        recommended_stick: parsed.recommended ?? null,
      });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: err instanceof Error ? err.message : 'Bad request' },
      { status: 400 }
    );
  }
}
