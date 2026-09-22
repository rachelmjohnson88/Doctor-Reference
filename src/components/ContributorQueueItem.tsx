"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { ContributorRequest } from "@/lib/store";

export default function ContributorQueueItem({
  entry,
}: {
  entry: ContributorRequest;
}) {
  const [busy, setBusy] = useState<"approve" | "reject" | null>(null);
  const router = useRouter();

  async function act(action: "approve" | "reject") {
    setBusy(action);
    await fetch(`/api/admin/contributors/${entry.id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action }),
    });
    router.refresh();
  }

  return (
    <div className="flex items-start justify-between gap-4 rounded-lg border border-slate-200 bg-white p-5">
      <div>
        <h3 className="font-serif text-lg font-semibold text-slate-900">
          {entry.name}
        </h3>
        <p className="text-sm text-slate-600">{entry.email}</p>
        {entry.note && (
          <p className="mt-1 text-sm text-slate-500">{entry.note}</p>
        )}
        <p className="mt-1 text-xs text-slate-400">
          Requested {new Date(entry.submittedAt).toLocaleString()}
        </p>
      </div>
      <div className="flex shrink-0 gap-2">
        <button
          onClick={() => act("approve")}
          disabled={busy !== null}
          className="rounded-md bg-emerald-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-emerald-700 disabled:opacity-50"
        >
          {busy === "approve" ? "…" : "Approve"}
        </button>
        <button
          onClick={() => act("reject")}
          disabled={busy !== null}
          className="rounded-md border border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-50 disabled:opacity-50"
        >
          {busy === "reject" ? "…" : "Reject"}
        </button>
      </div>
    </div>
  );
}
