import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { LearnTimeline } from "@/components/learn-timeline";
import { learnSteps } from "@/lib/learn-steps";

export default function LearnPage() {
  const totalDuration = "约 1 小时";

  return (
    <>
      <PageHero
        label="Learn Path"
        title="学习路径"
        description="面向初学者的推荐顺序。按这 5 步完成后，你就可以独立推进大多数 Claude Code 任务。"
        meta={`${learnSteps.length} 个章节 · ${totalDuration}`}
      />

      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-14">
        <LearnTimeline />

        <aside className="mt-12 flex flex-col gap-4 rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[rgba(74,222,128,0.06)] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div>
            <p className="font-display text-lg font-medium text-[var(--text-primary)]">走完 5 步之后</p>
            <p className="mt-1 text-sm text-[var(--text-secondary)]">继续查看分阶段学习路线，进入场景教程与实战工坊。</p>
          </div>
          <Link
            href="/roadmap"
            className="inline-flex shrink-0 items-center justify-center rounded-[var(--radius-md)] bg-[var(--accent-gold)] px-5 py-2.5 text-sm font-semibold text-[#0a0a0a] transition hover:bg-[#86efac]"
          >
            查看学习路线
          </Link>
        </aside>
      </div>
    </>
  );
}
