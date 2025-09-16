import { NextResponse } from "next/server";

// Lightweight connectivity probe endpoint.
// Public (allowed via middleware), tiny, and fast. Used by the offline page to
// detect when the user is back online. We return 204 No Content to minimize bytes.

export async function GET() {
  return new NextResponse(null, { status: 204 });
}

export async function HEAD() {
  return new NextResponse(null, { status: 204 });
}