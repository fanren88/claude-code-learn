import Link from "next/link";
import { officialLinks, siteConfig } from "@/lib/site";

const faqs = [
  {
    question: "我完全不会命令行，能学吗？",
    answer: (
      <>
        可以。从{" "}
        <Link href="/learn/beginner" className="text-[var(--accent-gold)] hover:underline">
          零基础新手线
        </Link>{" "}
        开始，只需会复制粘贴 cd、claude 等少量命令。卡住时把终端截图发给 Claude Code 即可。
      </>
    ),
  },
  {
    question: "国内没有 Claude 官方账号怎么办？",
    answer: (
      <>
        可用国产大模型的 Anthropic 兼容 API，保留 Claude Code 界面。见{" "}
        <Link href="/guides/domestic-models" className="text-[var(--accent-gold)] hover:underline">
          国产模型接入
        </Link>
        ；不想手改变量可用{" "}
        <Link href="/guides/cc-switch" className="text-[var(--accent-gold)] hover:underline">
          CC Switch
        </Link>
        。
      </>
    ),
  },
  {
    question: "为什么有时会要求确认权限？",
    answer:
      "Claude Code 在执行潜在风险动作前会请求确认。涉及删除文件、运行命令、安装依赖、访问网络或修改配置时，建议先看清计划和影响范围。",
  },
  {
    question: "什么是「危险模式」？能用吗？",
    answer:
      "指跳过权限确认、全自动执行的模式（如 --dangerously-skip-permissions）。仅在你完全信任当前目录与任务时使用；初学者不建议开启，以免误删文件或执行恶意命令。",
  },
  {
    question: "命令和文档不一致怎么办？",
    answer: "以官方文档和 /help 输出为准。本站提供中文学习路径，页面底部标注最近核对日期。",
  },
  {
    question: "应该把 API Key 写进 CLAUDE.md 吗？",
    answer: "不要。CLAUDE.md 适合写项目约定、运行命令、测试方式；凭据放在环境变量或 ~/.claude/settings.json，且不要提交到 Git。",
  },
  {
    question: "Claude Code 改错了怎么办？",
    answer: "先停下来检查 git diff（若有 Git），把错误现象和期望说清楚。可要求它「只分析原因，等我确认再改」。没有 Git 时让 Claude 列出改了哪些文件。",
  },
  {
    question: "一个会话里可以聊多个话题吗？",
    answer: "不建议。混聊容易导致回答跑偏（上下文污染）。换话题请用 /clear 或新开终端。",
  },
  {
    question: "学习阶段要不要省 Token？",
    answer: "先把任务跑通、建立手感更重要。熟悉流程后再按任务类型选择更便宜的模型或更短的上下文。",
  },
  {
    question: "什么时候需要 MCP？",
    answer: "当任务需要稳定访问外部工具或数据源时再考虑 MCP。简单的一次性资料补充，通常直接贴上下文更轻量。",
  },
  {
    question: "终端里能贴截图吗？",
    answer: "多数终端支持用 Ctrl+V（macOS 也可能是 Cmd+V）粘贴图片，便于让 Claude 看 UI 或报错界面。具体取决于终端应用。",
  },
  {
    question: "有没有 VS Code 插件？",
    answer: (
      <>
        有。可在 VS Code 扩展市场搜索 Claude Code 安装，获得比纯终端更友好的界面。CLI 与插件可配合使用，详见{" "}
        <a href={officialLinks.setup} className="text-[var(--accent-gold)] hover:underline" target="_blank" rel="noopener noreferrer">
          官方 Setup 文档
        </a>
        。
      </>
    ),
  },
];

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="font-display text-3xl font-semibold">常见问题</h1>
      <p className="mt-3 text-[var(--text-secondary)]">面向初学者的权限、国产模型、上下文与排错问答。</p>
      <div className="mt-8 space-y-5 text-sm text-[var(--text-secondary)]">
        {faqs.map((item) => (
          <section key={item.question} className="rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-card)] p-5">
            <h2 className="font-medium text-[var(--text-primary)]">{item.question}</h2>
            <p className="mt-2 leading-relaxed">{item.answer}</p>
          </section>
        ))}
      </div>
      <p className="mt-10 text-xs text-[var(--text-muted)]">
        已按官方 Claude Code 文档核对：{siteConfig.reviewedAt}。更多排错见{" "}
        <a href={officialLinks.troubleshooting} className="text-[var(--accent-gold)] hover:underline" target="_blank" rel="noopener noreferrer">
          官方排错文档
        </a>
        。
      </p>
    </div>
  );
}
