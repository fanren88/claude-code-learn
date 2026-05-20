export function PageHero({
  label,
  title,
  description,
  meta,
}: {
  label: string;
  title: string;
  description: string;
  meta?: string;
}) {
  return (
    <header className="border-b border-[var(--border-subtle)] bg-[var(--bg-elevated)]">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-14">
        <p className="font-mono text-xs uppercase tracking-widest text-[var(--accent-gold)]">{label}</p>
        <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-4xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-[var(--text-secondary)]">{description}</p>
        {meta ? <p className="mt-3 text-sm text-[var(--text-muted)]">{meta}</p> : null}
      </div>
    </header>
  );
}
