import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';
import { supabaseAdmin } from '@/lib/supabase';

const schema = z.object({
  name: z.string().min(1).max(120),
  email: z.string().email(),
  subject: z.string().max(200).optional(),
  message: z.string().min(1).max(5000),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = schema.parse(body);

    const supa = supabaseAdmin();
    if (supa) {
      await supa.from('collision_contact_submissions').insert(parsed);
    }

    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      const resend = new Resend(resendKey);
      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL ?? 'hello@collisiondrumsticks.com',
        to: process.env.RESEND_TO_EMAIL ?? 'sales@collisiondrumsticks.com',
        subject: `Contact form: ${parsed.subject ?? parsed.name}`,
        text: `From: ${parsed.name} <${parsed.email}>\n\n${parsed.message}`,
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
