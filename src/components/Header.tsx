import Link from "next/link";
import SearchBox from "./SearchBox";

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="text-lg font-semibold tracking-tight text-slate-900">
            RefDoc
          </span>
          <span className="text-sm text-slate-500">clinical reference</span>
        </Link>
        <div className="flex items-center gap-4">
          <SearchBox />
          <nav className="hidden text-sm font-medium text-slate-600 sm:flex sm:gap-4">
            <Link href="/browse" className="hover:text-slate-900">
              Browse
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
