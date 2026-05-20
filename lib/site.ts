export const siteConfig = {
  name: "Claude Code 中文学习指南",
  description:
    "面向中文用户的 Claude Code 学习站：学习路径、学习路线、场景教程、实战工坊、资源与命令速查。",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  github: "https://github.com/anthropics/claude-code",
  officialDocs: "https://docs.anthropic.com/en/docs/claude-code",
  reviewedAt: "2026-05-20",
} as const;

export const officialLinks = {
  overview: "https://docs.anthropic.com/en/docs/claude-code",
  setup: "https://docs.anthropic.com/en/docs/claude-code/setup",
  cliReference: "https://docs.anthropic.com/en/docs/claude-code/cli-reference",
  slashCommands: "https://docs.anthropic.com/en/docs/claude-code/slash-commands",
  settings: "https://docs.anthropic.com/en/docs/claude-code/settings",
  memory: "https://docs.anthropic.com/en/docs/claude-code/memory",
  mcp: "https://docs.anthropic.com/en/docs/claude-code/mcp",
  security: "https://docs.anthropic.com/en/docs/claude-code/security",
  troubleshooting: "https://docs.anthropic.com/en/docs/claude-code/troubleshooting",
} as const;

export const topNav = [
  { href: "/learn", label: "学习路径" },
  { href: "/roadmap", label: "学习路线" },
  { href: "/scenarios", label: "场景教程" },
  { href: "/labs", label: "实战工坊" },
  { href: "/resources", label: "资源" },
  { href: "/cheatsheet", label: "命令速查" },
] as const;

export const homePaths = [
  {
    href: "/learn",
    title: "学习路径",
    description: "安装、登录、第一次对话、审批改动，先跑通 Claude Code 基础闭环。",
    count: "5 篇教程",
    duration: "约 1 小时",
    variant: "learn" as const,
  },
  {
    href: "/roadmap",
    title: "学习路线",
    description: "按阶段推进原理、配置与协作能力，建立稳定的任务执行方法。",
    count: "3 个阶段",
    duration: "约 2-3 周",
    variant: "roadmap" as const,
  },
  {
    href: "/scenarios",
    title: "场景教程",
    description: "按常见场景学习提示词、工具权限、MCP 与团队协作方式。",
    count: "场景化教程",
    duration: "约 4 小时",
    variant: "scenarios" as const,
  },
  {
    href: "/labs",
    title: "实战工坊",
    description: "围绕真实项目任务完成从需求拆解到提交交付的完整案例。",
    count: "案例项目",
    duration: "持续更新",
    variant: "labs" as const,
  },
  {
    href: "/resources",
    title: "资源",
    description: "集中整理官方文档、站内文章和外部高质量教程，便于按需查阅。",
    count: "官方 + 社区",
    duration: "按需阅读",
    variant: "resources" as const,
  },
  {
    href: "/cheatsheet",
    title: "命令速查",
    description: "高频 CLI、会话内斜杠命令与排错命令，减少中断提升执行效率。",
    count: "高频命令",
    duration: "随查随用",
    variant: "cheatsheet" as const,
  },
] as const;
