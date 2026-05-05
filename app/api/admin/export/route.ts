import { NextResponse } from 'next/server';
import { createSupabaseServerClient } from '@/lib/supabase-server';
import { supabaseAdmin } from '@/lib/supabase';
import { csvEscape } from '@/app/admin/_lib/utils';

const RESOURCES: Record<string, { table: string; columns: string[]; orderBy: string }> = {
  subscribers: {
    table: 'collision_subscribers',
    columns: ['email', 'first_name', 'source', 'is_active', 'subscribed_at'],
    orderBy: 'subscribed_at',
  },
  applications: {
    table: 'collision_endorsement_applications',
    columns: [
      'full_name',
      'email',
      'phone',
      'country',
      'city',
      'tier_applying',
      'instagram_url',
      'youtube_url',
      'tiktok_url',
      'website_url',
      'combined_followers',
      'genres',
      'years_playing',
      'current_stick_brand',
      'current_stick_model',
      'gigs_per_month',
      'band_name',
      'why_collision',
      'is_handled',
      'created_at',
    ],
    orderBy: 'created_at',
  },
  wholesale: {
    table: 'collision_wholesale_enquiries',
    columns: [
      'business_name',
      'contact_name',
      'email',
      'phone',
      'country',
      'business_type',
      'estimated_monthly_volume',
      'message',
      'is_handled',
      'created_at',
    ],
    orderBy: 'created_at',
  },
  contact: {
    table: 'collision_contact_submissions',
    columns: ['name', 'email', 'subject', 'message', 'is_handled', 'created_at'],
    orderBy: 'created_at',
  },
};

export async function GET(request: Request) {
  const url = new URL(request.url);
  const resource = url.searchParams.get('resource') ?? '';
  const config = RESOURCES[resource];
  if (!config) {
    return NextResponse.json({ error: 'unknown resource' }, { status: 400 });
  }

  const sessionClient = await createSupabaseServerClient();
  const { data: userData } = await sessionClient.auth.getUser();
  if (!userData.user) {
    return NextResponse.json({ error: 'unauthorised' }, { status: 401 });
  }

  const supa = supabaseAdmin();
  if (!supa) {
    return NextResponse.json({ error: 'service-role key not configured' }, { status: 500 });
  }

  const { data, error } = await supa
    .from(config.table)
    .select(config.columns.join(', '))
    .order(config.orderBy, { ascending: false })
    .limit(10000);

  if (error || !data) {
    return NextResponse.json({ error: error?.message ?? 'fetch failed' }, { status: 500 });
  }

  const head = config.columns.map(csvEscape).join(',');
  const rows = (data as unknown as Record<string, unknown>[]) ?? [];
  const body = rows
    .map((r) =>
      config.columns
        .map((col) => {
          const v = r[col];
          if (Array.isArray(v)) return csvEscape(v.join('|'));
          return csvEscape(v);
        })
        .join(','),
    )
    .join('\n');

  const csv = `${head}\n${body}\n`;
  const date = new Date().toISOString().slice(0, 10);
  return new NextResponse(csv, {
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': `attachment; filename="collision-${resource}-${date}.csv"`,
      'Cache-Control': 'no-store',
    },
  });
}
