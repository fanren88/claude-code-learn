import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { officialLinks, siteConfig } from "@/lib/site";

const checkpoints = [
  "目标：一句话说明要交付什么，而不是只描述问题。",
  "范围：列出允许改动与不要触碰的目录、文件或接口。",
  "约束：写清技术栈、代码风格、兼容性、性能或安全要求。",
  "验收：给出可运行命令、预期输出、截图或人工检查标准。",
  "节奏：大改动先要求方案，小改动可直接实现并验证。",
];

const templates = [
  {
    title: "改代码",
    body: "请在这个项目里实现 [目标]。优先遵循现有代码风格，只改 [范围]。完成后运行 [验证命令]，并告诉我改了哪些文件。",
  },
  {
    title: "查问题",
    body: "请定位 [现象] 的原因。先阅读相关文件并列出判断依据，暂时不要改代码。重点检查 [模块/命令/日志]。",
  },
  {
    title: "审查改动",
    body: "请以代码审查视角检查当前 diff，优先找 bug、回归风险和缺失测试。按严重程度列出文件与行号。",
  },
];

export default function PromptingGuidePage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <Link href="/scenarios" className="inline-flex items-center gap-1.5 text-sm text-[var(--text-muted)] transition hover:text-[var(--accent-gold)]">
        <ArrowLeft className="size-4" aria-hidden />
        返回场景教程
      </Link>

      <header className="mt-6 border-b border-[var(--border-subtle)] pb-8">
        <p className="font-mono text-xs uppercase tracking-widest text-[var(--accent-gold)]">Guide</p>
        <h1 className="mt-3 font-display text-3xl font-semibold text-[var(--text-primary)] sm:text-4xl">提示词拆解</h1>
        <p className="mt-3 text-lg text-[var(--text-secondary)]">把“帮我看看”变成 Claude Code 可以执行、可以验证、可以收尾的任务说明。</p>
      </header>

      <section className="mt-8">
        <h2 className="font-display text-lg font-medium">任务说明清单</h2>
        <ul className="mt-4 space-y-3">
          {checkpoints.map((item) => (
            <li key={item} className="flex gap-3 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-card)] px-4 py-3 text-sm text-[var(--text-secondary)]">
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[var(--accent-success)]" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-lg font-medium">可直接复用的模板</h2>
        <div className="mt-4 space-y-4">
          {templates.map((item) => (
            <section key={item.title} className="rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-card)] p-5">
              <h3 className="font-medium text-[var(--accent-gold)]">{item.title}</h3>
              <p className="mt-2 font-mono text-sm leading-relaxed text-[var(--text-secondary)]">{item.body}</p>
            </section>
          ))}
        </div>
      </section>

      <p className="mt-10 text-xs text-[var(--text-muted)]">
        已按官方 Claude Code 文档核对：{siteConfig.reviewedAt}。继续阅读{" "}
        <a href={officialLinks.overview} className="text-[var(--accent-gold)] hover:underline" target="_blank" rel="noopener noreferrer">
          官方概览
        </a>
        。
      </p>
    </article>
  );
}
