"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBox({ initialQuery = "" }: { initialQuery?: string }) {
  const [query, setQuery] = useState(initialQuery);
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = query.trim();
    if (trimmed) {
      router.push(`/search?q=${encodeURIComponent(trimmed)}`);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="relative w-full max-w-xs">
      <label htmlFor="site-search" className="sr-only">
        Search reference articles
      </label>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="pointer-events-none absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
        aria-hidden="true"
      >
        <circle cx="11" cy="11" r="7" />
        <path d="m21 21-4.3-4.3" />
      </svg>
      <input
        id="site-search"
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search conditions, scores, protocols…"
        className="w-full rounded-md border border-slate-300 bg-slate-50 py-1.5 pr-3 pl-8 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#0f4c5c] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0f4c5c]"
      />
    </form>
  );
}
