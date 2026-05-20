import Link from "next/link";

const labs = [
  {
    href: "/guides/prompting",
    title: "需求拆解实战",
    desc: "把一个模糊需求拆成可执行子任务，并形成可审查输出。",
    outcome: "产出结构化任务说明 + 执行提示模板",
  },
  {
    href: "/guides/git-workflows",
    title: "PR 审查实战",
    desc: "让 Claude Code 参与代码审查、测试验证和提交信息生成。",
    outcome: "产出完整 PR 前检查流程",
  },
  {
    href: "/articles/first-use",
    title: "首次项目接入",
    desc: "从新仓库开始完成首次提问、改动审批、测试和提交。",
    outcome: "产出可复用的项目接入模板",
  },
];

export default function LabsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="font-display text-3xl font-semibold sm:text-4xl">实战工坊</h1>
      <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">每个工坊都以“可运行成果”为目标，不只讲概念。</p>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {labs.map((lab) => (
          <Link
            key={lab.href}
            href={lab.href}
            className="flex flex-col rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[var(--bg-card)] p-6 transition hover:border-[rgba(74,222,128,0.4)]"
          >
            <h2 className="font-display text-lg font-medium">{lab.title}</h2>
            <p className="mt-2 flex-1 text-sm text-[var(--text-secondary)]">{lab.desc}</p>
            <p className="mt-4 text-xs font-medium text-[var(--accent-success)]">成果：{lab.outcome}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
