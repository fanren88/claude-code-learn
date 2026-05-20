import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Lightbulb } from "lucide-react";
import { CodeBlock } from "@/components/code-block";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "第一个小工具",
  description: "30 分钟从零用 Claude Code 做出能在浏览器打开的小页面，适合完全新手。",
};

const steps = [
  {
    title: "准备文件夹",
    body: "在桌面或任意位置新建文件夹，例如 my-first-tool。用终端进入该目录：cd 路径/my-first-tool。这里将成为 Claude Code 的工作区。",
    prompt: null,
  },
  {
    title: "启动 Claude Code",
    body: "确认已安装 CLI 并完成模型配置（官方登录或国产 API）。在同一目录运行：claude",
    prompt: null,
  },
  {
    title: "描述你要做什么",
    body: "用一句话说清楚目标、技术约束和验收方式。下面是一条可直接复制的提示词。",
    prompt: `请在这个空文件夹里做一个「今日待办」单页小工具：
- 只用 HTML + CSS + 原生 JavaScript，不要框架，不要 npm
- 页面标题：我的今日待办
- 功能：输入框添加待办、点击条目切换完成状态、有一个「清空已完成」按钮
- 样式简洁好看，手机浏览器也能用
- 写完后告诉我如何在浏览器打开 index.html 做验收
先列出你的计划，我确认后再创建文件。`,
  },
  {
    title: "审阅计划并批准",
    body: "Claude 会先给出文件列表和步骤。看清它会创建哪些文件、是否会运行命令。没问题就回复「按方案执行」。有顾虑就要求缩小范围。",
    prompt: "按方案执行。完成后只保留必要文件。",
  },
  {
    title: "逐项确认权限",
    body: "创建文件、运行命令时终端可能弹出确认。新手建议一律先看清楚再允许，不要开启「全自动跳过权限」除非你很清楚风险。",
    prompt: null,
  },
  {
    title: "在浏览器验收",
    body: "完成后用 Finder / 资源管理器双击 index.html，或在终端用 open index.html（macOS）/ start index.html（Windows）打开。自己试：添加、完成、清空是否正常。",
    prompt: null,
  },
  {
    title: "收尾与复盘",
    body: "让 Claude 用三句话总结改了什么；若有 CLAUDE.md 可要求写入「本项目是纯静态 HTML 小工具」。下次加功能时上下文更清晰。",
    prompt: "请用三句话总结你创建了哪些文件、各自作用，以及我下次想加「删除单条待办」该怎么描述需求。",
  },
];

const stuckTips = [
  "命令找不到：回到安装章节检查 PATH，重开终端。",
  "401 / 鉴权失败：检查 API Key 与 Base URL，参考国产模型接入页。",
  "页面空白：让 Claude 打开浏览器控制台报错并修复。",
  "改乱了想重来：删除文件夹内文件（保留空目录），重新描述需求再做一遍。",
];

export default function FirstProductLabPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <Link href="/labs" className="inline-flex items-center gap-1.5 text-sm text-[var(--text-muted)] transition hover:text-[var(--accent-gold)]">
        <ArrowLeft className="size-4" aria-hidden />
        返回实战工坊
      </Link>

      <header className="mt-6 border-b border-[var(--border-subtle)] pb-8">
        <p className="font-mono text-xs uppercase tracking-widest text-[var(--accent-gold)]">Lab · 约 30 分钟</p>
        <h1 className="mt-3 font-display text-3xl font-semibold text-[var(--text-primary)] sm:text-4xl">第一个小工具</h1>
        <p className="mt-3 text-lg text-[var(--text-secondary)]">
          不依赖现有代码仓库。你将得到一个能在浏览器打开的「今日待办」页面——证明 Claude Code 真的能替你动手，而不只是聊天。
        </p>
      </header>

      <section className="mt-8 rounded-[var(--radius-lg)] border border-[rgba(74,222,128,0.2)] bg-[rgba(74,222,128,0.06)] p-5">
        <h2 className="flex items-center gap-2 font-display text-lg font-medium text-[var(--accent-gold)]">
          <Lightbulb className="size-5" aria-hidden />
          开始前确认
        </h2>
        <ul className="mt-3 space-y-2 text-sm text-[var(--text-secondary)]">
          <li className="flex gap-2">
            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[var(--accent-success)]" aria-hidden />
            已完成 <Link href="/learn/install" className="text-[var(--accent-gold)] hover:underline">安装</Link>
          </li>
          <li className="flex gap-2">
            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[var(--accent-success)]" aria-hidden />
            已配置模型（<Link href="/learn/authentication" className="text-[var(--accent-gold)] hover:underline">登录</Link> 或{" "}
            <Link href="/guides/domestic-models" className="text-[var(--accent-gold)] hover:underline">国产 API</Link>）
          </li>
        </ul>
        <p className="mt-3 text-sm text-[var(--text-muted)]">
          完全零基础？建议先走{" "}
          <Link href="/learn/beginner" className="text-[var(--accent-gold)] hover:underline">
            零基础新手线
          </Link>
          。
        </p>
      </section>

      <section className="mt-10 space-y-6">
        <h2 className="font-display text-lg font-medium">分步操作</h2>
        {steps.map((step, i) => (
          <section key={step.title} className="rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-card)] p-5">
            <h3 className="font-display text-lg text-[var(--accent-gold)]">
              步骤 {i + 1}：{step.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">{step.body}</p>
            {step.prompt ? (
              <div className="mt-4">
                <p className="mb-2 text-xs font-medium text-[var(--text-muted)]">可复制提示词</p>
                <CodeBlock>{step.prompt}</CodeBlock>
              </div>
            ) : null}
          </section>
        ))}
      </section>

      <section className="mt-10">
        <h2 className="font-display text-lg font-medium">常见卡点</h2>
        <ul className="mt-4 space-y-3">
          {stuckTips.map((tip) => (
            <li key={tip} className="rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-card)] px-4 py-3 text-sm text-[var(--text-secondary)]">
              {tip}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-[var(--text-secondary)]">
          仍解决不了？截图终端全文，并说明「新手线第几步」，发给 Claude Code 继续排查。
        </p>
      </section>

      <section className="mt-10 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-card)] p-5">
        <h2 className="font-display text-lg font-medium text-[var(--text-primary)]">完成后</h2>
        <p className="mt-2 text-sm text-[var(--text-secondary)]">
          你已经完成「能跑起来」的闭环。下一步建议做{" "}
          <Link href="/articles/first-use" className="text-[var(--accent-gold)] hover:underline">
            首次项目接入
          </Link>
          ，把同样方法用到真实 Git 仓库上。
        </p>
      </section>

      <p className="mt-10 text-xs text-[var(--text-muted)]">核对日期：{siteConfig.reviewedAt}</p>
    </article>
  );
}
