"use client";

import { useState } from "react";
import type { Category } from "@/lib/content";

type SectionDraft = { heading: string; bodyText: string };

const emptySection = (): SectionDraft => ({ heading: "", bodyText: "" });

export default function SubmitForm({ categories }: { categories: Category[] }) {
  const [passphrase, setPassphrase] = useState("");
  const [contributorName, setContributorName] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState(categories[0]?.slug ?? "");
  const [summary, setSummary] = useState("");
  const [tags, setTags] = useState("");
  const [sections, setSections] = useState<SectionDraft[]>([emptySection()]);
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">(
    "idle"
  );
  const [error, setError] = useState("");

  function updateSection(index: number, patch: Partial<SectionDraft>) {
    setSections((prev) =>
      prev.map((s, i) => (i === index ? { ...s, ...patch } : s))
    );
  }

  function addSection() {
    setSections((prev) => [...prev, emptySection()]);
  }

  function removeSection(index: number) {
    setSections((prev) => prev.filter((_, i) => i !== index));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    try {
      const res = await fetch("/api/submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          passphrase,
          contributorName,
          title,
          category,
          summary,
          tags,
          sections: sections.map((s) => ({
            heading: s.heading,
            body: s.bodyText.split("\n"),
          })),
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error ?? "Something went wrong.");
        setStatus("error");
        return;
      }

      setStatus("done");
      setTitle("");
      setSummary("");
      setTags("");
      setSections([emptySection()]);
    } catch {
      setError("Network error — please try again.");
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-6 text-emerald-800">
        <p className="font-medium">Submitted for review.</p>
        <p className="mt-1 text-sm">
          It will appear on the site once approved.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm font-medium underline underline-offset-4"
        >
          Submit another article
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-slate-700">
          Access code
        </label>
        <input
          type="password"
          required
          value={passphrase}
          onChange={(e) => setPassphrase(e.target.value)}
          className="mt-1 w-full max-w-xs rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-[#0f4c5c] focus:outline-none focus:ring-1 focus:ring-[#0f4c5c]"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700">
          Your name
        </label>
        <input
          type="text"
          required
          value={contributorName}
          onChange={(e) => setContributorName(e.target.value)}
          placeholder="e.g. Dr. Jane Smith"
          className="mt-1 w-full max-w-xs rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-[#0f4c5c] focus:outline-none focus:ring-1 focus:ring-[#0f4c5c]"
        />
        <p className="mt-1 text-xs text-slate-400">
          Shown as the contributor on the published article.
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700">Title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="e.g. Ranson's Criteria for Acute Pancreatitis"
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-[#0f4c5c] focus:outline-none focus:ring-1 focus:ring-[#0f4c5c]"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700">
          Specialty area
        </label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="mt-1 w-full max-w-xs rounded-md border border-slate-300 bg-white px-3 py-2 text-sm focus:border-[#0f4c5c] focus:outline-none focus:ring-1 focus:ring-[#0f4c5c]"
        >
          {categories.map((c) => (
            <option key={c.slug} value={c.slug}>
              {c.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700">
          Summary
        </label>
        <textarea
          required
          rows={2}
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          placeholder="One or two sentences describing what this article covers."
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-[#0f4c5c] focus:outline-none focus:ring-1 focus:ring-[#0f4c5c]"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700">
          Tags <span className="font-normal text-slate-400">(comma-separated)</span>
        </label>
        <input
          type="text"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          placeholder="e.g. pancreatitis, scoring, gi"
          className="mt-1 w-full max-w-md rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-[#0f4c5c] focus:outline-none focus:ring-1 focus:ring-[#0f4c5c]"
        />
      </div>

      <div className="space-y-4">
        <label className="block text-sm font-medium text-slate-700">
          Sections
        </label>
        {sections.map((section, i) => (
          <div
            key={i}
            className="space-y-2 rounded-lg border border-slate-200 bg-slate-50 p-4"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-slate-500">
                Section {i + 1}
              </span>
              {sections.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeSection(i)}
                  className="text-xs text-slate-400 hover:text-red-600"
                >
                  Remove
                </button>
              )}
            </div>
            <input
              type="text"
              required
              value={section.heading}
              onChange={(e) => updateSection(i, { heading: e.target.value })}
              placeholder="Section heading, e.g. Criteria"
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-[#0f4c5c] focus:outline-none focus:ring-1 focus:ring-[#0f4c5c]"
            />
            <textarea
              required
              rows={4}
              value={section.bodyText}
              onChange={(e) => updateSection(i, { bodyText: e.target.value })}
              placeholder={"One point per line, e.g.\nAge > 55 years\nWBC > 16,000/mm³"}
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-[#0f4c5c] focus:outline-none focus:ring-1 focus:ring-[#0f4c5c]"
            />
          </div>
        ))}
        <button
          type="button"
          onClick={addSection}
          className="text-sm font-medium text-[#0f4c5c] hover:text-[#0b3a46]"
        >
          + Add another section
        </button>
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">{error}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-md bg-[#0f4c5c] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#0b3a46] disabled:opacity-50"
      >
        {status === "submitting" ? "Submitting…" : "Submit for review"}
      </button>
    </form>
  );
}
