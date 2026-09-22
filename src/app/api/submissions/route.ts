import { NextResponse } from "next/server";
import { getAllCategories, getAllContentTypes } from "@/lib/content";
import { submitArticle } from "@/lib/store";

type SectionInput = { heading: string; body: string[] };

type RequestBody = {
  passphrase?: string;
  contributorName?: string;
  contributorCredentials?: string;
  title?: string;
  category?: string;
  type?: string;
  summary?: string;
  tags?: string;
  sections?: SectionInput[];
};

export async function POST(request: Request) {
  const submitPassphrase = process.env.SUBMIT_PASSPHRASE;
  if (!submitPassphrase) {
    return NextResponse.json(
      { error: "Submissions are not configured yet. Set SUBMIT_PASSPHRASE." },
      { status: 503 }
    );
  }

  let body: RequestBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (body.passphrase !== submitPassphrase) {
    return NextResponse.json({ error: "Incorrect passphrase." }, { status: 401 });
  }

  const contributorName = body.contributorName?.trim();
  const contributorCredentials = body.contributorCredentials?.trim();
  const title = body.title?.trim();
  const category = body.category?.trim();
  const type = body.type?.trim();
  const summary = body.summary?.trim();
  const sections = (body.sections ?? [])
    .map((s) => ({
      heading: s.heading?.trim() ?? "",
      body: (s.body ?? []).map((line) => line.trim()).filter(Boolean),
    }))
    .filter((s) => s.heading && s.body.length > 0);

  if (
    !contributorName ||
    !contributorCredentials ||
    !title ||
    !category ||
    !type ||
    !summary ||
    sections.length === 0
  ) {
    return NextResponse.json(
      {
        error:
          "Your name, qualifications, title, category, content type, summary, and at least one section are required.",
      },
      { status: 400 }
    );
  }

  if (!getAllCategories().some((c) => c.slug === category)) {
    return NextResponse.json({ error: "Unknown category." }, { status: 400 });
  }

  if (!getAllContentTypes().some((t) => t.slug === type)) {
    return NextResponse.json({ error: "Unknown content type." }, { status: 400 });
  }

  const tags = (body.tags ?? "")
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);

  const entry = await submitArticle({
    contributorName,
    contributorCredentials,
    title,
    category,
    type,
    summary,
    tags,
    sections,
  });

  return NextResponse.json({ ok: true, id: entry.id });
}
