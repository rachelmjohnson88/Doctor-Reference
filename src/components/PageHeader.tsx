export default function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-5xl px-4 py-10">
        {eyebrow && (
          <p className="text-sm font-medium tracking-wide text-[#0f4c5c] uppercase">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-slate-900">
          {title}
        </h1>
        {description && <p className="mt-2 text-slate-600">{description}</p>}
        {children}
      </div>
    </section>
  );
}
