export function CodeBlock({ children, title }: { children: string; title?: string }) {
  return (
    <div className="overflow-hidden rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[#0d1117]">
      {title ? (
        <div className="border-b border-[var(--border-subtle)] px-4 py-2 font-mono text-xs text-[var(--text-muted)]">{title}</div>
      ) : null}
      <pre className="overflow-x-auto p-4 font-mono text-[13px] leading-relaxed text-[var(--text-secondary)]">
        <code>{children}</code>
      </pre>
    </div>
  );
}
