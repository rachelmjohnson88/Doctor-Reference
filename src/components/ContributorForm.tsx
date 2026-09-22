"use client";

import { useState } from "react";

export default function ContributorForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">(
    "idle"
  );
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    try {
      const res = await fetch("/api/contributors", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, note }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error ?? "Something went wrong.");
        setStatus("error");
        return;
      }

      setStatus("done");
    } catch {
      setError("Network error — please try again.");
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-6 text-emerald-800">
        <p className="font-medium">Request sent.</p>
        <p className="mt-1 text-sm">
          Once approved, you&apos;ll be sent the access code separately.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-slate-700">Name</label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-[#0f4c5c] focus:outline-none focus:ring-1 focus:ring-[#0f4c5c]"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700">Email</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-[#0f4c5c] focus:outline-none focus:ring-1 focus:ring-[#0f4c5c]"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700">
          A little about you{" "}
          <span className="font-normal text-slate-400">(specialty, role, etc.)</span>
        </label>
        <textarea
          rows={3}
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-[#0f4c5c] focus:outline-none focus:ring-1 focus:ring-[#0f4c5c]"
        />
      </div>

      {status === "error" && <p className="text-sm text-red-600">{error}</p>}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-md bg-[#0f4c5c] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#0b3a46] disabled:opacity-50"
      >
        {status === "submitting" ? "Sending…" : "Request access"}
      </button>
    </form>
  );
}
