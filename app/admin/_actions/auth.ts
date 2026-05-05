'use server';

import { redirect } from 'next/navigation';
import { createSupabaseServerClient } from '@/lib/supabase-server';

export async function signOut() {
  const supa = await createSupabaseServerClient();
  await supa.auth.signOut();
  redirect('/admin/sign-in');
}
