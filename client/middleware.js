import { NextResponse } from 'next/server';

export function middleware(req) {
  const url = req.url;
  const cookies = req.cookies.get('jwt');
  const { origin } = req.nextUrl;

  if (cookies && url.includes('/login')) {
    return NextResponse.redirect(`${origin}/`);
  }

  return NextResponse.next();
}
