"use client";

import { useEffect, useState } from "react";

const lines = [
  "$ claude",
  '$ claude "review this diff and run tests"',
  "$ /init",
  "✓ 已生成改动，等待你的确认",
];

export function TerminalMock() {
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    if (visible >= lines.length) return;
    const t = setTimeout(() => setVisible((v) => v + 1), 650);
    return () => clearTimeout(t);
  }, [visible]);

  return (
    <div className="shadow-card overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[var(--bg-card)]">
      <div className="flex items-center gap-2 border-b border-[var(--border-subtle)] px-4 py-3">
        <span className="size-2.5 rounded-full bg-[#ff5f57]" />
        <span className="size-2.5 rounded-full bg-[#febc2e]" />
        <span className="size-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 font-mono text-xs text-[var(--text-muted)]">claude — zsh</span>
      </div>
      <div className="min-h-[220px] space-y-2 p-4 font-mono text-[13px] leading-relaxed">
        {lines.slice(0, visible).map((line, i) => (
          <p key={line} className={i === lines.length - 1 ? "text-[var(--accent-success)]" : "text-[var(--text-secondary)]"}>
            {line}
          </p>
        ))}
        <span className="inline-block h-4 w-2 animate-pulse bg-[var(--accent-gold)]" />
      </div>
    </div>
  );
}
