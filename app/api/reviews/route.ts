import { NextResponse } from 'next/server';
import { z } from 'zod';
import { supabaseAdmin } from '@/lib/supabase';

const schema = z.object({
  product_id: z.string().uuid(),
  customer_name: z.string().min(1),
  customer_email: z.string().email().optional(),
  rating: z.number().min(1).max(5),
  title: z.string().max(140).optional(),
  body: z.string().max(2000),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = schema.parse(body);

    const supa = supabaseAdmin();
    if (supa) {
      await supa.from('collision_reviews').insert({
        ...parsed,
        is_approved: false,
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
