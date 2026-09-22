import { NextResponse } from "next/server";
import { isAdminAuthed } from "@/lib/auth";
import { decideContributorRequest } from "@/lib/store";

export async function POST(
  request: Request,
  { params }: RouteContext<"/api/admin/contributors/[id]">
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

  if (body.action !== "approve" && body.action !== "reject") {
    return NextResponse.json({ error: "Invalid action." }, { status: 400 });
  }

  const status = body.action === "approve" ? "approved" : "rejected";
  const ok = await decideContributorRequest(id, status);

  if (!ok) {
    return NextResponse.json({ error: "Request not found." }, { status: 404 });
  }

  return NextResponse.json({ ok: true });
}
