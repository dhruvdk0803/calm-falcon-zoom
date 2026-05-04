import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  try {
    const { getAuth } = await import('@/lib/auth/server');
    const auth = await getAuth();
    const handler = auth.middleware({
      loginUrl: '/auth/sign-in',
    });
    return handler(req);
  } catch (err) {
    // If env vars are missing during build, allow the request to proceed
    return NextResponse.next();
  }
}

export const config = {
  matcher: ['/admin/:path*'],
};