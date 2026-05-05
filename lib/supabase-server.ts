import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

const URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? '';
const KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '';

export async function createSupabaseServerClient() {
  const cookieStore = await cookies();
  return createServerClient(URL, KEY, {
    cookies: {
      getAll: () => cookieStore.getAll(),
      setAll: (toSet) => {
        try {
          toSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options));
        } catch {
          // Server Component context cannot set cookies; middleware refreshes them.
        }
      },
    },
  });
}

export async function getSession() {
  const supa = await createSupabaseServerClient();
  const { data } = await supa.auth.getSession();
  return data.session;
}

export async function getSessionUser() {
  const supa = await createSupabaseServerClient();
  const { data } = await supa.auth.getUser();
  return data.user;
}
