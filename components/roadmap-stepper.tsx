import { roadmapPhases } from "@/lib/roadmap-phases";

export function RoadmapStepper() {
  return (
    <nav aria-label="学习阶段概览" className="hidden lg:block">
      <ol className="flex items-center gap-0">
        {roadmapPhases.map((phase, index) => {
          const isLast = index === roadmapPhases.length - 1;
          return (
            <li key={phase.id} className="flex min-w-0 flex-1 items-center">
              <div className="flex min-w-0 flex-col items-center text-center">
                <span className="flex size-9 items-center justify-center rounded-full border border-[rgba(74,222,128,0.35)] bg-[var(--bg-elevated)] font-mono text-xs font-semibold text-[var(--accent-gold)]">
                  {phase.id}
                </span>
                <span className="mt-2 max-w-[8rem] truncate font-display text-sm text-[var(--text-primary)]">
                  {phase.title}
                </span>
                <span className="mt-0.5 text-[10px] text-[var(--text-muted)]">{phase.duration}</span>
              </div>
              {!isLast ? (
                <div
                  aria-hidden
                  className="mx-2 h-px flex-1 bg-gradient-to-r from-[rgba(74,222,128,0.5)] to-[var(--border-subtle)]"
                />
              ) : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
