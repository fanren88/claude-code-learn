import Link from "next/link";
import { ArrowRight, BookOpen, Compass, FlaskConical, Layers, Library, Newspaper, TerminalSquare } from "lucide-react";
import { cn } from "@/lib/utils";

const icons = {
  learn: BookOpen,
  roadmap: Compass,
  scenarios: Layers,
  labs: FlaskConical,
  resources: Library,
  reading: Newspaper,
  cheatsheet: TerminalSquare,
} as const;

export function PathCard({
  href,
  title,
  description,
  count,
  duration,
  variant,
}: {
  href: string;
  title: string;
  description: string;
  count: string;
  duration: string;
  variant: keyof typeof icons;
}) {
  const Icon = icons[variant];

  return (
    <Link
      href={href}
      className={cn(
        "group flex h-full flex-col rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[var(--bg-card)] p-6 shadow-card transition duration-300",
        "hover:border-[rgba(74,222,128,0.45)] hover:bg-[rgba(74,222,128,0.04)]",
      )}
    >
      <div className="mb-4 flex size-10 items-center justify-center rounded-[var(--radius-md)] bg-[rgba(74,222,128,0.12)] text-[var(--accent-gold)]">
        <Icon className="size-5" />
      </div>
      <h3 className="font-display text-xl font-medium text-[var(--text-primary)] group-hover:text-[var(--accent-gold)]">{title}</h3>
      <p className="mt-2 flex-1 text-sm text-[var(--text-secondary)]">{description}</p>
      <p className="mt-4 text-xs text-[var(--text-muted)]">
        {count} · {duration}
      </p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[var(--accent-gold)]">
        开始学习 <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
