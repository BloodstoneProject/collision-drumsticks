import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';
import { supabaseAdmin } from '@/lib/supabase';

const schema = z.object({
  business_name: z.string().min(1),
  contact_name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  country: z.string().optional(),
  business_type: z.string().optional(),
  estimated_monthly_volume: z.string().optional(),
  message: z.string().optional(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = schema.parse(body);

    const supa = supabaseAdmin();
    if (supa) {
      await supa.from('collision_wholesale_enquiries').insert({
        ...parsed,
        estimated_monthly_volume: parsed.estimated_monthly_volume
          ? Number(parsed.estimated_monthly_volume)
          : null,
      });
    }

    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      const resend = new Resend(resendKey);
      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL ?? 'hello@collisiondrumsticks.com',
        to: process.env.RESEND_TO_EMAIL ?? 'sales@collisiondrumsticks.com',
        subject: `Wholesale enquiry: ${parsed.business_name}`,
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
