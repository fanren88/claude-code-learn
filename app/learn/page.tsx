import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { LearnTimeline } from "@/components/learn-timeline";
import { learnSteps } from "@/lib/learn-steps";

export default function LearnPage() {
  const totalDuration = "约 1.5 小时";

  return (
    <>
      <PageHero
        label="Learn Path"
        title="学习路径"
        description="面向初学者的推荐顺序。按这 6 步完成后，你就可以独立推进大多数 Claude Code 任务。"
        meta={`${learnSteps.length} 个章节 · ${totalDuration}`}
      />

      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-14">
        <aside className="mb-10 rounded-[var(--radius-lg)] border border-[rgba(251,191,36,0.2)] bg-[rgba(251,191,36,0.06)] p-5 sm:p-6">
          <p className="font-display text-lg font-medium text-[var(--text-primary)]">完全零基础？</p>
          <p className="mt-1 text-sm text-[var(--text-secondary)]">
            走「新手线」：概念 → 安装 → 国产模型 → 第一个小工具 → 接入项目，步步有验收。
          </p>
          <Link
            href="/learn/beginner"
            className="mt-4 inline-flex items-center justify-center rounded-[var(--radius-md)] border border-[rgba(74,222,128,0.4)] px-4 py-2 text-sm font-medium text-[var(--accent-gold)] transition hover:bg-[rgba(74,222,128,0.1)]"
          >
            打开零基础新手线
          </Link>
        </aside>

        <LearnTimeline />

        <aside className="mt-12 flex flex-col gap-4 rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[rgba(74,222,128,0.06)] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div>
            <p className="font-display text-lg font-medium text-[var(--text-primary)]">走完 6 步之后</p>
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
