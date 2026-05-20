import type { LucideIcon } from "lucide-react";
import { Download, KeyRound, Rocket, Brain, FileText } from "lucide-react";

export type LearnStep = {
  slug: string;
  title: string;
  desc: string;
  duration: string;
  icon: LucideIcon;
  summary: string[];
  tips: string[];
};

export const learnSteps: LearnStep[] = [
  {
    slug: "install",
    title: "安装 Claude Code",
    desc: "完成安装并检查环境是否可运行。",
    duration: "约 10 分钟",
    icon: Download,
    summary: [
      "优先按官方 Setup 文档选择当前推荐的安装方式，并确认系统与终端环境受支持。",
      "安装完成后运行 `claude --version`，确认 CLI 可用。",
      "Git 是多数代码项目的基础依赖；Node.js 版本要求应按你的项目技术栈单独确认。",
    ],
    tips: [
      "若命令找不到，先检查官方安装页列出的 PATH 与 shell 配置步骤。",
      "企业网络可提前配置代理或让管理员确认允许访问 Anthropic 相关域名。",
    ],
  },
  {
    slug: "authentication",
    title: "登录账号",
    desc: "使用 Claude Pro / Console / 企业账号完成授权。",
    duration: "约 5 分钟",
    icon: KeyRound,
    summary: [
      "在项目目录运行 `claude`，按提示在浏览器完成 OAuth 登录。",
      "团队场景可能使用 Console、企业账号或 SSO，具体取决于组织开通方式。",
      "登录成功后，可用 `/status` 或官方推荐命令核对账号、模型与工作目录状态。",
    ],
    tips: [
      "多账号切换、登出与重新授权命令可能随版本变化，优先查看 `/help`。",
      "勿将 API Key 提交到 Git 仓库，使用环境变量或密钥管理工具。",
    ],
  },
  {
    slug: "quickstart",
    title: "完成第一个任务",
    desc: "学会提问、审批改动、执行命令，跑通基础闭环。",
    duration: "约 15 分钟",
    icon: Rocket,
    summary: [
      "用自然语言描述目标，例如：「为 README 增加本地开发说明」。",
      "Claude 会提出计划并调用读写文件、运行命令等工具。",
      "每次敏感操作前会请求确认——先看清 diff，再选择允许或拒绝。",
    ],
    tips: [
      "任务尽量具体：说明文件范围、约束条件与期望输出格式。",
      "大改动可要求「先给方案，确认后再改代码」。",
    ],
  },
  {
    slug: "how-it-works",
    title: "理解工作原理",
    desc: "理解 Agent 循环、工具调用与权限确认机制。",
    duration: "约 20 分钟",
    icon: Brain,
    summary: [
      "Claude Code 以 Agent 循环工作：理解 → 计划 → 调用工具 → 观察结果 → 继续。",
      "工具包括读文件、写文件、搜索、终端命令、MCP 扩展等。",
      "权限模型用于限制工具、命令和文件访问；具体策略可在设置与权限文档中配置。",
    ],
    tips: [
      "遇到反复失败时，可要求缩小范围或分步骤执行。",
      "善用 `/help` 与官方文档核对命令是否随版本更新。",
    ],
  },
  {
    slug: "context",
    title: "编写 CLAUDE.md",
    desc: "把项目背景写进上下文，提升结果稳定性。",
    duration: "约 15 分钟",
    icon: FileText,
    summary: [
      "在项目根目录创建 `CLAUDE.md`，写明技术栈、目录约定与开发命令。",
      "补充测试方式、代码风格与禁止事项（如不要改哪些目录）。",
      "团队可提交到 Git，让所有成员共享同一套项目记忆。",
    ],
    tips: [
      "保持简短可维护，核心规则用列表即可，不必写成长篇设计文档。",
      "随项目演进及时更新，避免过时指令误导 Agent。",
    ],
  },
];

export function getLearnStep(slug: string): LearnStep | undefined {
  return learnSteps.find((s) => s.slug === slug);
}
