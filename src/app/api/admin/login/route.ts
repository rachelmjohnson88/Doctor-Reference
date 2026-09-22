import { NextResponse } from "next/server";
import { hashAdminPassphrase, adminCookieName } from "@/lib/auth";

export async function POST(request: Request) {
  const adminPassphrase = process.env.ADMIN_PASSPHRASE;
  if (!adminPassphrase) {
    return NextResponse.json(
      { error: "Admin login is not configured yet. Set ADMIN_PASSPHRASE." },
      { status: 503 }
    );
  }

  let body: { passphrase?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (body.passphrase !== adminPassphrase) {
    return NextResponse.json({ error: "Incorrect passphrase." }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(adminCookieName, hashAdminPassphrase(adminPassphrase), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });
  return response;
}
