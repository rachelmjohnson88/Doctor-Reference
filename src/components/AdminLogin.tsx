"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [passphrase, setPassphrase] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ passphrase }),
    });

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      setError(data.error ?? "Incorrect passphrase.");
      setLoading(false);
      return;
    }

    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xs space-y-3">
      <label className="block text-sm font-medium text-slate-700">
        Admin passphrase
      </label>
      <input
        type="password"
        required
        value={passphrase}
        onChange={(e) => setPassphrase(e.target.value)}
        className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:border-(--color-accent) focus:outline-none focus:ring-1 focus:ring-(--color-accent)"
      />
      {error && <p className="text-sm text-red-600">{error}</p>}
      <button
        type="submit"
        disabled={loading}
        className="rounded-md bg-(--color-accent) px-4 py-2 text-sm font-medium text-white hover:brightness-90 disabled:opacity-50"
      >
        {loading ? "Checking…" : "Log in"}
      </button>
    </form>
  );
}
