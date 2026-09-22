"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBox({
  initialQuery = "",
  size = "compact",
  placeholder = "Search conditions, scores, protocols…",
}: {
  initialQuery?: string;
  size?: "compact" | "large";
  placeholder?: string;
}) {
  const [query, setQuery] = useState(initialQuery);
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = query.trim();
    if (trimmed) {
      router.push(`/search?q=${encodeURIComponent(trimmed)}`);
    }
  }

  const large = size === "large";

  return (
    <form onSubmit={handleSubmit} className={`relative w-full ${large ? "" : "max-w-xs"}`}>
      <label htmlFor="site-search" className="sr-only">
        Search the library
      </label>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`pointer-events-none absolute top-1/2 -translate-y-1/2 text-(--color-ink-soft) ${
          large ? "left-4 h-5 w-5" : "left-2.5 h-4 w-4"
        }`}
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
        placeholder={placeholder}
        className={
          large
            ? "w-full rounded-lg border border-(--color-rule) bg-white py-4 pr-4 pl-12 text-base text-(--color-ink) shadow-sm placeholder:text-(--color-ink-soft)/60 focus:border-(--color-accent) focus:outline-none focus:ring-1 focus:ring-(--color-accent)"
            : "w-full rounded-md border border-(--color-rule) bg-white py-1.5 pr-3 pl-8 text-sm text-(--color-ink) placeholder:text-(--color-ink-soft)/60 focus:border-(--color-accent) focus:outline-none focus:ring-1 focus:ring-(--color-accent)"
        }
      />
    </form>
  );
}
