import { NextResponse } from 'next/server';
import { z } from 'zod';
import { supabaseAdmin } from '@/lib/supabase';

const schema = z.object({
  email: z.string().email(),
  first_name: z.string().max(120).optional(),
  source: z.string().max(50).optional(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = schema.parse(body);
    const supa = supabaseAdmin();
    if (supa) {
      await supa.from('collision_subscribers').upsert(parsed, { onConflict: 'email' });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: err instanceof Error ? err.message : 'Bad request' },
      { status: 400 }
    );
  }
}
