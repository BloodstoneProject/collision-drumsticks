'use server';

import { revalidatePath } from 'next/cache';
import { supabaseAdmin } from '@/lib/supabase';

const ALLOWED_TABLES = new Set([
  'collision_endorsement_applications',
  'collision_wholesale_enquiries',
  'collision_contact_submissions',
  'collision_subscribers',
]);

function check(table: string) {
  if (!ALLOWED_TABLES.has(table)) throw new Error('table not allowed');
  const supa = supabaseAdmin();
  if (!supa) throw new Error('Supabase service-role key missing');
  return supa;
}

export async function toggleHandled(table: string, id: string, next: boolean) {
  const supa = check(table);
  await supa.from(table).update({ is_handled: next }).eq('id', id);
  revalidatePath(`/admin/${table.replace('collision_', '').replace('_enquiries', '').replace('_submissions', '').replace('_applications', '')}`);
  revalidatePath('/admin');
}

export async function deleteSubmission(table: string, id: string, returnPath: string) {
  const supa = check(table);
  await supa.from(table).delete().eq('id', id);
  revalidatePath(returnPath);
  revalidatePath('/admin');
}

export async function toggleSubscriberActive(id: string, next: boolean) {
  const supa = check('collision_subscribers');
  await supa.from('collision_subscribers').update({ is_active: next }).eq('id', id);
  revalidatePath('/admin/subscribers');
}
