import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';
import { supabaseAdmin } from '@/lib/supabase';

const schema = z.object({
  full_name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  country: z.string().optional(),
  city: z.string().optional(),
  tier_applying: z.enum(['cruise', 'approach', 'impact']).optional(),
  instagram_url: z.string().optional(),
  youtube_url: z.string().optional(),
  tiktok_url: z.string().optional(),
  combined_followers: z.string().optional(),
  genres: z.string().optional(),
  years_playing: z.string().optional(),
  current_stick_brand: z.string().optional(),
  current_stick_model: z.string().optional(),
  gigs_per_month: z.string().optional(),
  band_name: z.string().optional(),
  why_collision: z.string().optional(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = schema.parse(body);

    const dbRow = {
      ...parsed,
      genres: parsed.genres ? parsed.genres.split(',').map((g) => g.trim()) : [],
      combined_followers: parsed.combined_followers ? Number(parsed.combined_followers) : null,
      years_playing: parsed.years_playing ? Number(parsed.years_playing) : null,
      gigs_per_month: parsed.gigs_per_month ? Number(parsed.gigs_per_month) : null,
    };

    const supa = supabaseAdmin();
    if (supa) {
      await supa.from('collision_endorsement_applications').insert(dbRow);
    }

    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      const resend = new Resend(resendKey);
      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL ?? 'hello@collisiondrumsticks.com',
        to: process.env.RESEND_TO_EMAIL ?? 'sales@collisiondrumsticks.com',
        subject: `Endorsement application: ${parsed.full_name} (${parsed.tier_applying ?? 'tier unset'})`,
        text: Object.entries(parsed).map(([k, v]) => `${k}: ${v ?? ''}`).join('\n'),
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
