import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { officialLinks, siteConfig } from "@/lib/site";

const stages = [
  {
    title: "1. 项目体检",
    text: "先让 Claude Code 阅读 README、package 配置和关键目录，产出项目结构摘要。不要一上来就要求它改代码。",
  },
  {
    title: "2. 写入上下文",
    text: "用 `/init` 或手动维护 CLAUDE.md，把技术栈、运行命令、测试方式、禁止事项和交付口径写清楚。",
  },
  {
    title: "3. 做一个小任务",
    text: "选择低风险任务，例如补 README、修一个小样式、增加一个窄范围测试。让它实现、验证并解释 diff。",
  },
  {
    title: "4. 收尾复盘",
    text: "检查 git diff、运行构建或测试，把可复用提示词和项目规则补进 CLAUDE.md。",
  },
];

export default function FirstUseArticlePage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <Link href="/labs" className="inline-flex items-center gap-1.5 text-sm text-[var(--text-muted)] transition hover:text-[var(--accent-gold)]">
        <ArrowLeft className="size-4" aria-hidden />
        返回实战工坊
      </Link>

      <header className="mt-6 border-b border-[var(--border-subtle)] pb-8">
        <p className="font-mono text-xs uppercase tracking-widest text-[var(--accent-gold)]">Lab</p>
        <h1 className="mt-3 font-display text-3xl font-semibold text-[var(--text-primary)] sm:text-4xl">首次项目接入</h1>
        <p className="mt-3 text-lg text-[var(--text-secondary)]">从一个新仓库开始，建立 Claude Code 可理解、可执行、可审查的工作环境。</p>
      </header>

      <div className="mt-8 space-y-4">
        {stages.map((stage) => (
          <section key={stage.title} className="rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-card)] p-5">
            <h2 className="font-display text-xl text-[var(--accent-gold)]">{stage.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">{stage.text}</p>
          </section>
        ))}
      </div>

      <section className="mt-10 rounded-[var(--radius-lg)] border border-[rgba(74,222,128,0.22)] bg-[rgba(74,222,128,0.06)] p-5">
        <h2 className="font-display text-lg font-medium text-[var(--accent-gold)]">首个任务提示词</h2>
        <p className="mt-3 font-mono text-sm leading-relaxed text-[var(--text-secondary)]">
          请先阅读这个项目的 README、package 配置和主要目录，概括项目用途、技术栈、运行命令和潜在风险。暂时不要改代码；最后建议一个 30 分钟内可完成的低风险入门任务。
        </p>
      </section>

      <p className="mt-10 text-xs text-[var(--text-muted)]">
        已按官方 Claude Code 文档核对：{siteConfig.reviewedAt}。上下文写法可继续参考{" "}
        <a href={officialLinks.memory} className="text-[var(--accent-gold)] hover:underline" target="_blank" rel="noopener noreferrer">
          memory / CLAUDE.md 文档
        </a>
        。
      </p>
    </article>
  );
}
