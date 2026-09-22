import { NextResponse } from "next/server";
import { submitContributorRequest } from "@/lib/store";

type RequestBody = {
  name?: string;
  email?: string;
  note?: string;
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let body: RequestBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const note = body.note?.trim() ?? "";

  if (!name || !email || !isValidEmail(email)) {
    return NextResponse.json(
      { error: "A name and a valid email are required." },
      { status: 400 }
    );
  }

  const entry = await submitContributorRequest({ name, email, note });
  return NextResponse.json({ ok: true, id: entry.id });
}
