import { officialLinks, siteConfig } from "@/lib/site";

const faqs = [
  {
    question: "为什么有时会要求确认权限？",
    answer: "Claude Code 在执行潜在风险动作前会请求确认。涉及删除文件、运行命令、安装依赖、访问网络或修改配置时，建议先看清计划和影响范围。",
  },
  {
    question: "命令和文档不一致怎么办？",
    answer: "以官方文档和 `/help` 输出为准。本站主要提供中文学习路径和实践整理，会在页面底部标注最近核对日期。",
  },
  {
    question: "应该把 API Key 写进 CLAUDE.md 吗？",
    answer: "不要。CLAUDE.md 适合写项目约定、运行命令、测试方式和协作边界；凭据应放在环境变量或密钥管理工具中。",
  },
  {
    question: "Claude Code 改错了怎么办？",
    answer: "先停下来检查 `git diff`，把错误现象和期望行为重新讲清楚。必要时要求它只分析原因，等你确认方案后再改代码。",
  },
  {
    question: "什么时候需要 MCP？",
    answer: "当任务需要稳定访问外部工具或数据源时再考虑 MCP。简单的一次性资料补充，通常直接贴上下文更轻量。",
  },
];

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="font-display text-3xl font-semibold">常见问题</h1>
      <p className="mt-3 text-[var(--text-secondary)]">围绕权限、安全、上下文和排错整理的入门问答。</p>
      <div className="mt-8 space-y-5 text-sm text-[var(--text-secondary)]">
        {faqs.map((item) => (
          <section key={item.question} className="rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-card)] p-5">
            <h2 className="font-medium text-[var(--text-primary)]">{item.question}</h2>
            <p className="mt-2 leading-relaxed">{item.answer}</p>
          </section>
        ))}
      </div>
      <p className="mt-10 text-xs text-[var(--text-muted)]">
        已按官方 Claude Code 文档核对：{siteConfig.reviewedAt}。遇到版本差异时请查看{" "}
        <a href={officialLinks.troubleshooting} className="text-[var(--accent-gold)] hover:underline" target="_blank" rel="noopener noreferrer">
          官方排错文档
        </a>
        。
      </p>
    </div>
  );
}
