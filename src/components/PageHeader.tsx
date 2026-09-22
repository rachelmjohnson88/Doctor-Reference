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
    <section className="border-b border-(--color-rule) bg-(--color-page-deep)">
      <div className="mx-auto max-w-5xl px-4 py-10">
        {eyebrow && (
          <p className="small-caps text-sm font-bold tracking-wide text-(--color-brand)">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-2 font-serif text-3xl font-semibold tracking-tight text-(--color-ink)">
          {title}
        </h1>
        {description && (
          <p className="mt-2 text-(--color-ink-soft)">{description}</p>
        )}
        {children}
      </div>
    </section>
  );
}
