import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { RoadmapOverview } from "@/components/roadmap-overview";
import { RoadmapStepper } from "@/components/roadmap-stepper";
import { RoadmapTimeline } from "@/components/roadmap-timeline";
import { roadmapMeta } from "@/lib/roadmap-phases";

export default function RoadmapPage() {
  return (
    <>
      <PageHero
        label="Roadmap"
        title="学习路线"
        description="按阶段推进，每一阶段都有明确目标、成果与推荐内容。不再只靠「随便看文档」，而是带着问题系统进阶。"
        meta={`${roadmapMeta.phaseCount} 个阶段 · ${roadmapMeta.totalDuration}`}
      />

      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-12">
        <RoadmapOverview />

        <div className="mt-10 rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-6 py-6">
          <p className="mb-5 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--text-muted)]">
            阶段总览
          </p>
          <RoadmapStepper />
        </div>

        <div className="mt-12">
          <RoadmapTimeline />
        </div>

        <aside className="mt-14 flex flex-col gap-4 rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[rgba(74,222,128,0.06)] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div>
            <p className="font-display text-lg font-medium text-[var(--text-primary)]">还没开始？</p>
            <p className="mt-1 text-sm text-[var(--text-secondary)]">
              从第 1 阶段的学习路径入手，约 1 小时即可跑通基础闭环。
            </p>
          </div>
          <Link
            href="/learn"
            className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-[var(--radius-md)] bg-[var(--accent-gold)] px-5 py-2.5 text-sm font-semibold text-[#0a0a0a] transition hover:bg-[#86efac]"
          >
            开始学习路径
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </aside>
      </div>
    </>
  );
}
