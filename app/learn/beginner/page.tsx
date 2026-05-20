import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "零基础新手线",
  description: "面向国内初学者的推荐路线：概念扫盲 → 安装配置 → 第一个小工具 → 接入真实项目。",
};

const track = [
  { step: 1, title: "概念扫盲", href: "/learn/concepts", time: "5 分钟", desc: "搞懂模型、Agent、Token、Skill" },
  { step: 2, title: "安装 CLI", href: "/learn/install", time: "15 分钟", desc: "npm 或原生安装，Windows 装 Git" },
  { step: 3, title: "配置模型", href: "/guides/domestic-models", time: "10 分钟", desc: "国产 API 或 CC Switch 图形化配置" },
  { step: 4, title: "第一个小工具", href: "/labs/first-product", time: "30 分钟", desc: "从零做出能在浏览器打开的小页面" },
  { step: 5, title: "接入真实项目", href: "/articles/first-use", time: "30 分钟", desc: "体检仓库、写 CLAUDE.md、完成低风险任务" },
  { step: 6, title: "继续进阶", href: "/roadmap", time: "持续", desc: "场景教程、工坊、命令速查" },
];

export default function BeginnerTrackPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <p className="font-mono text-xs uppercase tracking-widest text-[var(--accent-gold)]">Beginner Track</p>
      <h1 className="mt-2 font-display text-3xl font-semibold text-[var(--text-primary)] sm:text-4xl">零基础新手线</h1>
      <p className="mt-3 text-lg text-[var(--text-secondary)]">
        完全没用过命令行也没关系。按下面 6 步走完，你能独立配置 Claude Code，并做出第一个能在浏览器里打开的小成果。
      </p>

      <section className="mt-8 rounded-[var(--radius-lg)] border border-[rgba(74,222,128,0.22)] bg-[rgba(74,222,128,0.06)] p-5">
        <h2 className="font-display text-lg font-medium text-[var(--accent-gold)]">卡住怎么办？</h2>
        <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
          截图当前终端报错，在 Claude Code 里描述：「我在做新手线第 X 步，执行了某命令，看到了这段报错」。比自己搜半天快得多。也可以把同样信息发给其他 AI 助手辅助排查。
        </p>
      </section>

      <ol className="mt-10 space-y-4">
        {track.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="group flex gap-4 rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[var(--bg-card)] p-5 transition hover:border-[rgba(74,222,128,0.4)]"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[rgba(74,222,128,0.12)] font-mono text-sm font-semibold text-[var(--accent-gold)]">
                {item.step}
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="font-display text-lg font-medium text-[var(--text-primary)] group-hover:text-[var(--accent-gold)]">
                    {item.title}
                  </h2>
                  <span className="text-xs text-[var(--text-muted)]">{item.time}</span>
                </div>
                <p className="mt-1 text-sm text-[var(--text-secondary)]">{item.desc}</p>
              </div>
              <ArrowRight className="size-5 shrink-0 self-center text-[var(--text-muted)] group-hover:text-[var(--accent-gold)]" aria-hidden />
            </Link>
          </li>
        ))}
      </ol>

      <section className="mt-10">
        <h2 className="font-display text-lg font-medium">你也可以跳过</h2>
        <ul className="mt-4 space-y-2 text-sm text-[var(--text-secondary)]">
          <li className="flex gap-2">
            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[var(--accent-success)]" aria-hidden />
            已有官方 Claude 账号 → 从 <Link href="/learn/authentication" className="text-[var(--accent-gold)] hover:underline">登录章节</Link> 开始
          </li>
          <li className="flex gap-2">
            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[var(--accent-success)]" aria-hidden />
            已在用 DeepSeek → 见{" "}
            <Link href="/guides/domestic-models#deepseek" className="text-[var(--accent-gold)] hover:underline">
              国产模型接入 · DeepSeek
            </Link>
          </li>
          <li className="flex gap-2">
            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[var(--accent-success)]" aria-hidden />
            想系统进阶 → 打开 <Link href="/learn" className="text-[var(--accent-gold)] hover:underline">完整学习路径</Link>（6 章）
          </li>
        </ul>
      </section>

      <p className="mt-10 text-xs text-[var(--text-muted)]">内容核对日期：{siteConfig.reviewedAt}</p>
    </div>
  );
}
