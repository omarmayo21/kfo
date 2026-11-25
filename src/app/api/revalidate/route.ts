import { revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

/**
 * Optional Sanity webhook target for instant updates (otherwise pages refresh every 60s).
 * POST /api/revalidate?secret=<SANITY_REVALIDATE_SECRET>
 */
export async function POST(req: NextRequest) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;
  if (!secret || req.nextUrl.searchParams.get('secret') !== secret) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }
  revalidateTag('sanity');
  return NextResponse.json({ ok: true, revalidated: true });
}
