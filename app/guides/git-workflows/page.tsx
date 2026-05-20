import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { officialLinks, siteConfig } from "@/lib/site";

const workflow = [
  {
    title: "开始前",
    items: ["运行 `git status`，确认工作区里哪些改动属于本次任务。", "把需求、范围和验证命令写进提示词，避免 Agent 顺手扩大改动。"],
  },
  {
    title: "执行中",
    items: ["让 Claude Code 先读相关文件，再改最小必要范围。", "涉及删除、迁移、依赖安装或外部命令时，先看清原因和影响。"],
  },
  {
    title: "提交前",
    items: ["运行测试或构建命令，至少确认核心路径可用。", "检查 `git diff`，让 Claude Code 以审查视角找风险，再整理提交说明。"],
  },
];

export default function GitWorkflowsPage() {
  return (
    <article className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14">
      <Link href="/scenarios" className="inline-flex items-center gap-1.5 text-sm text-[var(--text-muted)] transition hover:text-[var(--accent-gold)]">
        <ArrowLeft className="size-4" aria-hidden />
        返回场景教程
      </Link>

      <header className="mt-6 border-b border-[var(--border-subtle)] pb-8">
        <p className="font-mono text-xs uppercase tracking-widest text-[var(--accent-gold)]">Guide</p>
        <h1 className="mt-3 font-display text-3xl font-semibold text-[var(--text-primary)] sm:text-4xl">Git 协作</h1>
        <p className="mt-3 max-w-2xl text-lg text-[var(--text-secondary)]">把 Claude Code 放进现有 Git 流程里：先控范围，再验证，再让 diff 说话。</p>
      </header>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {workflow.map((group) => (
          <section key={group.title} className="rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-card)] p-5">
            <h2 className="font-display text-lg text-[var(--accent-gold)]">{group.title}</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[var(--text-secondary)]">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <section className="mt-10 rounded-[var(--radius-lg)] border border-[rgba(74,222,128,0.22)] bg-[rgba(74,222,128,0.06)] p-5">
        <h2 className="font-display text-lg font-medium text-[var(--accent-gold)]">推荐提示词</h2>
        <p className="mt-3 font-mono text-sm leading-relaxed text-[var(--text-secondary)]">
          请审查当前 git diff，优先指出 bug、行为回归、缺失测试和安全风险。不要改代码，先按严重程度列出发现；如果没有高风险问题，再给提交前检查清单。
        </p>
      </section>

      <p className="mt-10 text-xs text-[var(--text-muted)]">
        已按官方 Claude Code 文档核对：{siteConfig.reviewedAt}。命令行为以{" "}
        <a href={officialLinks.cliReference} className="text-[var(--accent-gold)] hover:underline" target="_blank" rel="noopener noreferrer">
          CLI 参考
        </a>
        为准。
      </p>
    </article>
  );
}
