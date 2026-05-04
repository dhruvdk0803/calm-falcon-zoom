import { NextRequest, NextResponse } from 'next/server';

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest, props: any) {
  try {
    const { getAuth } = await import('@/lib/auth/server');
    const auth = await getAuth();
    return auth.handler().GET(req, props);
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: err.message || "Server error" }, { status: 500 });
  }
}

export async function POST(req: NextRequest, props: any) {
  try {
    const { getAuth } = await import('@/lib/auth/server');
    const auth = await getAuth();
    return auth.handler().POST(req, props);
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: err.message || "Server error" }, { status: 500 });
  }
}