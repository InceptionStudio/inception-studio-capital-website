import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;
const LOCALES = ['en', 'ja'];

export function middleware(req: NextRequest) {
  const { nextUrl, headers, cookies } = req;
  const { pathname } = nextUrl;

  // Skip static files, Next.js internals, and API routes
  if (
    PUBLIC_FILE.test(pathname) ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api')
  ) {
    return NextResponse.next();
  }

  // Check if pathname already has a locale
  const pathnameHasLocale = LOCALES.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // Get preferred locale
  const saved = cookies.get('preferred-locale')?.value;
  let locale: string;

  if (saved === 'en' || saved === 'ja') {
    locale = saved;
  } else {
    const lang = (headers.get('accept-language') || '').toLowerCase();
    locale = lang.startsWith('ja') ? 'ja' : 'en';
  }

  // Redirect to localized path
  const newUrl = new URL(`/${locale}${pathname}`, req.url);
  const res = NextResponse.redirect(newUrl);
  res.cookies.set('preferred-locale', locale, { path: '/', maxAge: 60 * 60 * 24 * 365 });
  return res;
}