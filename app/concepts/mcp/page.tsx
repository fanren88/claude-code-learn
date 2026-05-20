import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { officialLinks, siteConfig } from "@/lib/site";

const steps = [
  "先明确外部系统是否真的需要接入：数据库、文档、工单、浏览器、内部 API 都可能适合 MCP。",
  "优先选择可信来源的 MCP server，并阅读其权限、输入输出和凭据要求。",
  "把 token、连接串和账号凭据放进安全位置，不要写入公开仓库。",
  "接入后用 `/mcp` 或官方推荐方式检查连接状态，再用小任务验证能力边界。",
];

export default function McpConceptPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <Link href="/scenarios" className="inline-flex items-center gap-1.5 text-sm text-[var(--text-muted)] transition hover:text-[var(--accent-gold)]">
        <ArrowLeft className="size-4" aria-hidden />
        返回场景教程
      </Link>

      <header className="mt-6 border-b border-[var(--border-subtle)] pb-8">
        <p className="font-mono text-xs uppercase tracking-widest text-[var(--accent-gold)]">Concept</p>
        <h1 className="mt-3 font-display text-3xl font-semibold text-[var(--text-primary)] sm:text-4xl">MCP 扩展</h1>
        <p className="mt-3 text-lg text-[var(--text-secondary)]">MCP 是把外部工具和数据源接入 Claude Code 的协议。它适合用来补足项目之外的上下文和操作能力。</p>
      </header>

      <section className="mt-8 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-card)] p-5">
        <h2 className="font-display text-xl text-[var(--accent-gold)]">什么时候用 MCP</h2>
        <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
          当任务需要访问本地文件以外的系统，且这些访问需要结构化、可复用、可控的工具接口时，可以考虑 MCP。不要为了简单复制几段文本而接入复杂服务。
        </p>
      </section>

      <section className="mt-8">
        <h2 className="font-display text-lg font-medium">接入前检查</h2>
        <ol className="mt-4 space-y-3">
          {steps.map((item, index) => (
            <li key={item} className="flex gap-3 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-card)] px-4 py-3 text-sm leading-relaxed text-[var(--text-secondary)]">
              <span className="font-mono text-xs text-[var(--accent-gold)]">{index + 1}</span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      </section>

      <p className="mt-10 text-xs text-[var(--text-muted)]">
        已按官方 Claude Code 文档核对：{siteConfig.reviewedAt}。详见{" "}
        <a href={officialLinks.mcp} className="text-[var(--accent-gold)] hover:underline" target="_blank" rel="noopener noreferrer">
          MCP 官方文档
        </a>
        。
      </p>
    </article>
  );
}
