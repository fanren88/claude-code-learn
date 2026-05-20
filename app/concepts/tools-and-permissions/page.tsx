import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { officialLinks, siteConfig } from "@/lib/site";

const concepts = [
  {
    title: "工具",
    text: "Claude Code 可以读取文件、搜索代码、编辑文件、运行命令，并通过 MCP 连接外部工具。你看到的每次工具调用，都是 Agent 循环的一部分。",
  },
  {
    title: "权限",
    text: "权限用于限制工具和命令的可执行范围。高风险操作应保持人工确认，尤其是删除文件、修改配置、安装依赖、访问网络或触碰凭据时。",
  },
  {
    title: "设置",
    text: "项目与用户级设置会影响权限、工具行为和默认偏好。团队项目应把共享规则写清楚，并把私密信息放在环境变量或密钥管理工具中。",
  },
];

const guardrails = ["先看计划，再允许高风险命令。", "先看 diff，再接受文件修改。", "不要把 API Key、token、cookie 或私钥写进仓库。", "生产环境配置、数据库迁移和批量删除要单独确认。"];

export default function ToolsAndPermissionsPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <Link href="/scenarios" className="inline-flex items-center gap-1.5 text-sm text-[var(--text-muted)] transition hover:text-[var(--accent-gold)]">
        <ArrowLeft className="size-4" aria-hidden />
        返回场景教程
      </Link>

      <header className="mt-6 border-b border-[var(--border-subtle)] pb-8">
        <p className="font-mono text-xs uppercase tracking-widest text-[var(--accent-gold)]">Concept</p>
        <h1 className="mt-3 font-display text-3xl font-semibold text-[var(--text-primary)] sm:text-4xl">工具与权限</h1>
        <p className="mt-3 text-lg text-[var(--text-secondary)]">理解 Claude Code 能做什么、什么时候该确认、哪些边界要交给设置文件长期维护。</p>
      </header>

      <div className="mt-8 space-y-4">
        {concepts.map((item) => (
          <section key={item.title} className="rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-card)] p-5">
            <h2 className="font-display text-xl text-[var(--accent-gold)]">{item.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">{item.text}</p>
          </section>
        ))}
      </div>

      <section className="mt-10 rounded-[var(--radius-lg)] border border-[rgba(74,222,128,0.22)] bg-[rgba(74,222,128,0.06)] p-5">
        <h2 className="flex items-center gap-2 font-display text-lg font-medium text-[var(--accent-gold)]">
          <ShieldCheck className="size-5" aria-hidden />
          安全确认清单
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[var(--text-secondary)]">
          {guardrails.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <p className="mt-10 text-xs text-[var(--text-muted)]">
        已按官方 Claude Code 文档核对：{siteConfig.reviewedAt}。详见{" "}
        <a href={officialLinks.settings} className="text-[var(--accent-gold)] hover:underline" target="_blank" rel="noopener noreferrer">
          设置
        </a>
        与{" "}
        <a href={officialLinks.security} className="text-[var(--accent-gold)] hover:underline" target="_blank" rel="noopener noreferrer">
          安全
        </a>
        文档。
      </p>
    </article>
  );
}
