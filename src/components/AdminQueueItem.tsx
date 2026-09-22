"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { PendingArticle } from "@/lib/store";
import type { Category } from "@/lib/content";

export default function AdminQueueItem({
  entry,
  category,
}: {
  entry: PendingArticle;
  category?: Category;
}) {
  const [busy, setBusy] = useState<"approve" | "reject" | null>(null);
  const router = useRouter();

  async function act(action: "approve" | "reject") {
    setBusy(action);
    await fetch(`/api/admin/queue/${entry.id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action }),
    });
    router.refresh();
  }

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          {category && (
            <span className="text-xs font-medium text-slate-500">
              {category.name}
            </span>
          )}
          <h3 className="font-serif text-lg font-semibold text-slate-900">
            {entry.title}
          </h3>
          <p className="mt-1 text-sm text-slate-600">{entry.summary}</p>
          <p className="mt-1 text-xs text-slate-400">
            Submitted {new Date(entry.submittedAt).toLocaleString()}
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

      <div className="mt-4 space-y-3 border-t border-slate-100 pt-4">
        {entry.sections.map((section) => (
          <div key={section.heading}>
            <p className="text-sm font-semibold text-slate-800">
              {section.heading}
            </p>
            <ul className="mt-1 list-disc space-y-0.5 pl-5 text-sm text-slate-600">
              {section.body.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
