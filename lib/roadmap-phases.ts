import type { LucideIcon } from "lucide-react";
import { Flag, Layers, Rocket } from "lucide-react";

export type RoadmapChapter = {
  href: string;
  title: string;
  desc: string;
};

export type RoadmapPhase = {
  id: number;
  phase: string;
  title: string;
  duration: string;
  goal: string;
  outcome: string;
  icon: LucideIcon;
  chapters: RoadmapChapter[];
};

export const roadmapPhases: RoadmapPhase[] = [
  {
    id: 1,
    phase: "第 1 阶段",
    title: "跑通基础闭环",
    duration: "约 1 小时",
    goal: "完成安装、登录与第一个可交付任务，建立对 Claude Code 的基本手感。",
    outcome: "能独立启动会话、描述任务并审阅改动",
    icon: Rocket,
    chapters: [
      { href: "/learn", title: "学习路径（5 步）", desc: "按推荐顺序走完安装到上下文配置" },
      { href: "/learn/quickstart", title: "完成第一个任务", desc: "提问、审批、执行命令的完整闭环" },
    ],
  },
  {
    id: 2,
    phase: "第 2 阶段",
    title: "建立系统认知",
    duration: "约 2–3 小时",
    goal: "理解 Agent 如何工作、如何管理上下文，并知道去哪里查配置与概念。",
    outcome: "能解释工具调用流程，并为项目写好 CLAUDE.md",
    icon: Layers,
    chapters: [
      { href: "/learn/how-it-works", title: "理解工作原理", desc: "Agent 循环、工具调用与权限确认" },
      { href: "/learn/context", title: "编写 CLAUDE.md", desc: "把项目背景写进持久上下文" },
      { href: "/glossary", title: "术语表", desc: "快速对齐 Claude Code 核心概念" },
    ],
  },
  {
    id: 3,
    phase: "第 3 阶段",
    title: "进入真实交付",
    duration: "持续迭代",
    goal: "按场景练手、在工坊里沉淀流程，并把常用命令变成肌肉记忆。",
    outcome: "能在真实项目中稳定推进需求与协作",
    icon: Flag,
    chapters: [
      { href: "/scenarios", title: "场景教程", desc: "提示词、Git、权限等任务导向内容" },
      { href: "/labs", title: "实战工坊", desc: "动手实验与可复用的工作流模板" },
      { href: "/cheatsheet", title: "命令速查", desc: "高频 CLI 与斜杠命令一览" },
    ],
  },
];

export const roadmapMeta = {
  phaseCount: roadmapPhases.length,
  totalDuration: "约 3–4 小时入门",
};
