import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { learnSteps } from "@/lib/learn-steps";

export function LearnTimeline() {
  return (
    <ol className="relative space-y-0">
      <div
        aria-hidden
        className="absolute left-[1.65rem] top-8 bottom-8 w-px bg-gradient-to-b from-[var(--accent-gold)] via-[var(--border-subtle)] to-transparent"
      />
      {learnSteps.map((step, index) => {
        const Icon = step.icon;
        const isLast = index === learnSteps.length - 1;
        return (
          <li key={step.slug} className="relative flex gap-5 pb-10 last:pb-0">
            <div className="relative z-10 flex size-14 shrink-0 flex-col items-center">
              <span className="flex size-14 items-center justify-center rounded-full border border-[rgba(74,222,128,0.35)] bg-[var(--bg-card)] shadow-card">
                <Icon className="size-6 text-[var(--accent-gold)]" aria-hidden />
              </span>
              {!isLast ? (
                <span className="mt-1 font-mono text-[10px] text-[var(--text-muted)]">{index + 1}/5</span>
              ) : null}
            </div>

            <article className="min-w-0 flex-1 rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[var(--bg-card)] p-5 shadow-card transition hover:border-[rgba(74,222,128,0.35)] sm:p-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-[rgba(74,222,128,0.12)] px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-[var(--accent-gold)]">
                  第 {index + 1} 步
                </span>
                <span className="text-xs text-[var(--text-muted)]">{step.duration}</span>
              </div>

              <h2 className="mt-3 font-display text-xl font-medium text-[var(--text-primary)] sm:text-2xl">
                <Link href={`/learn/${step.slug}`} className="hover:text-[var(--accent-gold)]">
                  {step.title}
                </Link>
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">{step.desc}</p>

              <ul className="mt-4 space-y-2">
                {step.summary.slice(0, 2).map((line) => (
                  <li key={line} className="flex gap-2 text-sm text-[var(--text-muted)]">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[var(--accent-success)]" aria-hidden />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={`/learn/${step.slug}`}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--accent-gold)] transition hover:gap-2"
              >
                阅读本章 <ArrowRight className="size-4" aria-hidden />
              </Link>
            </article>
          </li>
        );
      })}
    </ol>
  );
}
