import { NextResponse, type NextRequest } from 'next/server';
import { createServerClient } from '@supabase/ssr';

const URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? '';
const KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '';

type RedirectRow = { source: string; destination: string; permanent: boolean };

let redirectCache: { rows: RedirectRow[]; expires: number } | null = null;
const REDIRECT_TTL_MS = 60_000;

async function loadRedirects(): Promise<RedirectRow[]> {
  if (!URL || !KEY) return [];
  const now = Date.now();
  if (redirectCache && redirectCache.expires > now) return redirectCache.rows;
  try {
    const res = await fetch(
      `${URL}/rest/v1/collision_redirects?select=source,destination,permanent&is_active=eq.true`,
      {
        headers: {
          apikey: KEY,
          Authorization: `Bearer ${KEY}`,
        },
        cache: 'no-store',
      },
    );
    if (!res.ok) return [];
    const rows = (await res.json()) as RedirectRow[];
    redirectCache = { rows, expires: now + REDIRECT_TTL_MS };
    return rows;
  } catch {
    return [];
  }
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isAdminRoute = pathname.startsWith('/admin');
  const isSignInRoute = pathname === '/admin/sign-in';

  if (!isAdminRoute) {
    const rows = await loadRedirects();
    const hit = rows.find((r) => r.source === pathname);
    if (hit) {
      const target = request.nextUrl.clone();
      if (hit.destination.startsWith('http')) {
        return NextResponse.redirect(hit.destination, hit.permanent ? 308 : 307);
      }
      target.pathname = hit.destination;
      target.search = '';
      return NextResponse.redirect(target, hit.permanent ? 308 : 307);
    }
    return NextResponse.next();
  }

  let response = NextResponse.next({ request });

  if (URL && KEY) {
    const supabase = createServerClient(URL, KEY, {
      cookies: {
        getAll: () => request.cookies.getAll(),
        setAll: (toSet) => {
          toSet.forEach(({ name, value }) => request.cookies.set(name, value));
          response = NextResponse.next({ request });
          toSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options),
          );
        },
      },
    });

    const { data } = await supabase.auth.getUser();
    const isAuthed = Boolean(data.user);

    if (!isAuthed && !isSignInRoute) {
      const signInUrl = request.nextUrl.clone();
      signInUrl.pathname = '/admin/sign-in';
      signInUrl.searchParams.set('next', pathname);
      return NextResponse.redirect(signInUrl);
    }
    if (isAuthed && isSignInRoute) {
      const dashUrl = request.nextUrl.clone();
      dashUrl.pathname = '/admin';
      dashUrl.search = '';
      return NextResponse.redirect(dashUrl);
    }
  }

  return response;
}

export const config = {
  matcher: ['/((?!_next/|api/|.*\\..*).*)'],
};
