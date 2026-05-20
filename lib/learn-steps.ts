import type { LucideIcon } from "lucide-react";
import { BookOpen, Download, KeyRound, Rocket, Brain, FileText } from "lucide-react";

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
    slug: "concepts",
    title: "5 分钟概念扫盲",
    desc: "搞懂模型、Agent、Token 和 Skill，后面学起来不会懵。",
    duration: "约 5 分钟",
    icon: BookOpen,
    summary: [
      "模型 = 大脑（会思考）；Chatbot = 大脑 + 嘴（能聊不能做）；Agent = 大脑 + 手脚（Claude Code 就是这种）。",
      "Token 是 AI 的「字数单位」，学习阶段先把任务跑通，不必过度纠结省 Token。",
      "一个会话专注一件事；话题换了就用 /clear 或新开终端，避免上下文污染。",
      "Skill 像麦当劳的 SOP：把步骤、工具、验收标准写清楚，Claude 就能按流程反复执行。",
      "Harness（上下文工程）= 怎么喂信息、怎么设权限、怎么验收结果；Claude Code 把这套方法做成了产品。",
    ],
    tips: [
      "看不懂直播或教程，往往是名词没串起来——本章看完再往下走会轻松很多。",
      "更完整的术语解释见站内「术语表」。",
    ],
  },
  {
    slug: "install",
    title: "安装 Claude Code",
    desc: "完成安装并检查环境是否可运行（含 Windows 与原生安装方式）。",
    duration: "约 15 分钟",
    icon: Download,
    summary: [
      "方式 A（通用）：npm install -g @anthropic-ai/claude-code，不要用 sudo npm install -g。",
      "方式 B（官方推荐）：macOS/Linux 用 curl -fsSL https://claude.ai/install.sh | bash；Windows 用 PowerShell 执行官方 install.ps1。",
      "Windows 用户还需安装 Git（https://git-scm.com），否则很多项目命令无法运行。",
      "安装后运行 claude --version 确认 CLI 可用；Node.js 建议 18+（npm 安装方式需要）。",
      "从旧版 npm 迁到原生安装后，可执行 npm uninstall -g @anthropic-ai/claude-code 清理旧包。",
    ],
    tips: [
      "若命令找不到，检查 PATH；关闭所有终端窗口后重新打开再试。",
      "企业网络提前确认能否访问 Anthropic 或你选用的国产 API 域名。",
    ],
  },
  {
    slug: "authentication",
    title: "登录与配置模型",
    desc: "官方账号登录，或通过国产 API / CC Switch 配置后端模型。",
    duration: "约 10 分钟",
    icon: KeyRound,
    summary: [
      "官方路径：在项目目录运行 claude，按提示在浏览器完成 OAuth 登录。",
      "国产 API 路径：设置 ANTHROPIC_BASE_URL、ANTHROPIC_AUTH_TOKEN、ANTHROPIC_MODEL 后再启动 claude。",
      "推荐把环境变量写入 ~/.claude/settings.json 的 env 字段，避免每次开终端都要 export。",
      "用 /status 查看当前账号、模型与工作目录是否正常。",
    ],
    tips: [
      "API Key 不要写进 CLAUDE.md 或提交到 Git；用 settings.local.json 或系统环境变量。",
      "国内用户可先看「国产模型接入」与「CC Switch 配置」两篇场景教程。",
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
      "善用 /help 与官方文档核对命令是否随版本更新。",
    ],
  },
  {
    slug: "context",
    title: "编写 CLAUDE.md",
    desc: "把项目背景写进上下文，提升结果稳定性。",
    duration: "约 15 分钟",
    icon: FileText,
    summary: [
      "在项目根目录创建 CLAUDE.md，写明技术栈、目录约定与开发命令。",
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
