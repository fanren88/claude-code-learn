import Link from "next/link";
import { CheckCircle2, ChevronRight, Clock } from "lucide-react";
import { roadmapPhases } from "@/lib/roadmap-phases";

export function RoadmapTimeline() {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="pointer-events-none absolute left-6 top-10 hidden h-[calc(100%-4rem)] w-px sm:left-7 sm:block"
      >
        <div className="h-full w-full bg-gradient-to-b from-[var(--accent-gold)] via-[rgba(74,222,128,0.25)] to-transparent" />
      </div>

      <ol className="space-y-0">
        {roadmapPhases.map((phase, index) => {
          const Icon = phase.icon;
          const isLast = index === roadmapPhases.length - 1;

          return (
            <li key={phase.id} className="relative grid gap-6 pb-14 last:pb-0 sm:grid-cols-[3.5rem_1fr] sm:gap-8">
              <div aria-hidden className="absolute left-6 top-14 bottom-0 w-px bg-[var(--border-subtle)] sm:hidden" />

              <div className="relative z-10 flex flex-col items-center sm:items-start">
                <span className="relative flex size-12 items-center justify-center rounded-full border border-[rgba(74,222,128,0.4)] bg-[var(--bg-card)] shadow-[0_0_0_1px_rgba(74,222,128,0.08),0_0_24px_rgba(74,222,128,0.12)] sm:size-14">
                  <Icon className="size-5 text-[var(--accent-gold)] sm:size-6" aria-hidden />
                  <span className="absolute -right-1 -top-1 flex size-5 items-center justify-center rounded-full bg-[var(--accent-gold)] font-mono text-[10px] font-bold text-[#0a0a0a]">
                    {phase.id}
                  </span>
                </span>
                {!isLast ? (
                  <span className="mt-2 hidden font-mono text-[10px] uppercase tracking-wider text-[var(--text-muted)] sm:block">
                    {String(index + 1).padStart(2, "0")} / {String(roadmapPhases.length).padStart(2, "0")}
                  </span>
                ) : null}
              </div>

              <article className="min-w-0">
                <div className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[var(--bg-card)] shadow-card transition duration-300 hover:border-[rgba(74,222,128,0.35)] hover:shadow-[0_0_0_1px_rgba(74,222,128,0.12),0_12px_40px_rgba(0,0,0,0.35)]">
                  <div className="border-b border-[var(--border-subtle)] bg-[linear-gradient(135deg,rgba(74,222,128,0.08)_0%,transparent_55%)] px-5 py-5 sm:px-6 sm:py-6">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-[rgba(74,222,128,0.12)] px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-[var(--accent-gold)]">
                        {phase.phase}
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full border border-[var(--border-subtle)] px-2.5 py-0.5 text-xs text-[var(--text-muted)]">
                        <Clock className="size-3" aria-hidden />
                        {phase.duration}
                      </span>
                    </div>

                    <h2 className="mt-4 font-display text-2xl font-medium tracking-tight text-[var(--text-primary)] sm:text-[1.65rem]">
                      {phase.title}
                    </h2>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--text-secondary)]">{phase.goal}</p>

                    <p className="mt-4 inline-flex items-start gap-2 text-sm text-[var(--text-muted)]">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[var(--accent-success)]" aria-hidden />
                      <span>
                        <span className="text-[var(--text-secondary)]">阶段成果 · </span>
                        {phase.outcome}
                      </span>
                    </p>
                  </div>

                  <ul className="divide-y divide-[var(--border-subtle)]">
                    {phase.chapters.map((chapter) => (
                      <li key={chapter.href}>
                        <Link
                          href={chapter.href}
                          className="group flex items-center justify-between gap-4 px-5 py-4 transition hover:bg-[rgba(74,222,128,0.04)] sm:px-6"
                        >
                          <div className="min-w-0">
                            <p className="font-medium text-[var(--text-primary)] transition group-hover:text-[var(--accent-gold)]">
                              {chapter.title}
                            </p>
                            <p className="mt-0.5 text-sm text-[var(--text-muted)]">{chapter.desc}</p>
                          </div>
                          <ChevronRight
                            className="size-4 shrink-0 text-[var(--text-muted)] transition group-hover:translate-x-0.5 group-hover:text-[var(--accent-gold)]"
                            aria-hidden
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
