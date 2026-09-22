export default function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-5xl px-4 py-6 text-sm text-slate-500">
        <p>
          For reference only. Always verify against your institution&apos;s current
          protocols and primary literature before applying to patient care — this is
          not a substitute for clinical judgment.
        </p>
        <p className="mt-2">&copy; {new Date().getFullYear()} RefDoc.</p>
      </div>
    </footer>
  );
}
