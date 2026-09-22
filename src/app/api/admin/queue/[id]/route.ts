import { NextResponse } from "next/server";
import { isAdminAuthed } from "@/lib/auth";
import { approveArticle, rejectArticle } from "@/lib/store";

export async function POST(
  request: Request,
  { params }: RouteContext<"/api/admin/queue/[id]">
) {
  if (!(await isAdminAuthed())) {
    return NextResponse.json({ error: "Not authorized." }, { status: 401 });
  }

  const { id } = await params;

  let body: { action?: "approve" | "reject" };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const ok =
    body.action === "approve"
      ? await approveArticle(id)
      : body.action === "reject"
        ? await rejectArticle(id)
        : false;

  if (!ok) {
    return NextResponse.json({ error: "Submission not found." }, { status: 404 });
  }

  return NextResponse.json({ ok: true });
}
