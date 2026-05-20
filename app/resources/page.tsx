import { BookOpen, ExternalLink, Youtube } from "lucide-react";
import { officialLinks, siteConfig } from "@/lib/site";

const sections = [
  {
    title: "官方资源",
    icon: BookOpen,
    links: [
      {
        label: "Claude Code 官方文档（英文）",
        href: siteConfig.officialDocs,
        sub: "docs.anthropic.com",
      },
      {
        label: "安装与环境设置",
        href: officialLinks.setup,
        sub: "官方 Setup 文档",
      },
      {
        label: "CLI 参考",
        href: officialLinks.cliReference,
        sub: "命令参数、非交互模式与会话选项",
      },
      {
        label: "斜杠命令",
        href: officialLinks.slashCommands,
        sub: "会话内命令与边界行为",
      },
      {
        label: "设置与权限",
        href: officialLinks.settings,
        sub: "settings.json、权限与项目配置",
      },
      {
        label: "GitHub 仓库",
        href: siteConfig.github,
        sub: "anthropics/claude-code",
      },
      {
        label: "DeepSeek × Claude Code 集成",
        href: "https://api-docs.deepseek.com/quick_start/agent_integrations/claude_code",
        sub: "Anthropic 兼容接口与环境变量说明",
      },
      {
        label: "Agent Skills 工程博客",
        href: "https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills",
        sub: "Skills 目录结构、渐进式披露与安全实践",
      },
    ],
  },
  {
    title: "站内教程",
    icon: BookOpen,
    links: [
      {
        label: "延伸阅读",
        href: "/reading",
        sub: "精选官方工程博客与社区长文",
      },
      {
        label: "零基础新手线",
        href: "/learn/beginner",
        sub: "概念 → 安装 → 国产模型 → 第一个小工具",
      },
      {
        label: "国产模型接入总览",
        href: "/guides/domestic-models",
        sub: "DeepSeek、GLM、Kimi 等选型与环境变量；各平台含配置文档链接",
      },
      {
        label: "DeepSeek 详细接入",
        href: "/guides/deepseek",
        sub: "国产模型子教程：模型映射、持久化配置与排错",
      },
      {
        label: "CC Switch 图形化配置",
        href: "/guides/cc-switch",
        sub: "一键切换多套 API，适合不想手改变量的用户",
      },
      {
        label: "第一个小工具（实战）",
        href: "/labs/first-product",
        sub: "30 分钟做出可在浏览器打开的待办页面",
      },
    ],
  },
  {
    title: "视频与讲解",
    icon: Youtube,
    links: [
      {
        label: "Claude Code 学习视频（YouTube）",
        href: "https://www.youtube.com/results?search_query=Claude+Code",
        sub: "社区教程与案例演示",
      },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="font-display text-3xl font-semibold">资源</h1>
      <p className="mt-3 text-[var(--text-secondary)]">官方文档与社区视频。本站未覆盖的细节请优先查看官方文档。</p>
      <p className="mt-2 text-sm text-[var(--text-muted)]">内容最后核对：{siteConfig.reviewedAt}</p>
      <div className="mt-10 space-y-10">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="mb-4 flex items-center gap-2 font-display text-lg text-[var(--accent-gold)]">
              <section.icon className="size-5" />
              {section.title}
            </h2>
            <ul className="space-y-3">
              {section.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex items-start justify-between gap-4 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-card)] p-4 transition hover:border-[rgba(74,222,128,0.4)]"
                  >
                    <div>
                      <p className="font-medium text-[var(--text-primary)] group-hover:text-[var(--accent-gold)]">{link.label}</p>
                      <p className="mt-0.5 text-sm text-[var(--text-muted)]">{link.sub}</p>
                    </div>
                    <ExternalLink className="size-4 shrink-0 text-[var(--text-muted)]" />
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
