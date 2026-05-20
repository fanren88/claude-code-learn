import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle, ArrowLeft, CheckCircle2, ExternalLink } from "lucide-react";
import { CodeBlock } from "@/components/code-block";
import { domesticProviders, paymentOptions } from "@/lib/domestic-providers";
import { officialLinks, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "国产模型接入",
  description: "在国内用 Claude Code 接入 DeepSeek、GLM、Kimi 等国产大模型：选型、环境变量与持久化配置。",
};

const settingsExample = `{
  "env": {
    "ANTHROPIC_BASE_URL": "https://api.deepseek.com/anthropic",
    "ANTHROPIC_AUTH_TOKEN": "<你的 API Key，不要提交到 Git>",
    "ANTHROPIC_MODEL": "deepseek-chat"
  }
}`;

export default function DomesticModelsPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <Link href="/scenarios" className="inline-flex items-center gap-1.5 text-sm text-[var(--text-muted)] transition hover:text-[var(--accent-gold)]">
        <ArrowLeft className="size-4" aria-hidden />
        返回场景教程
      </Link>

      <header className="mt-6 border-b border-[var(--border-subtle)] pb-8">
        <p className="font-mono text-xs uppercase tracking-widest text-[var(--accent-gold)]">Guide</p>
        <h1 className="mt-3 font-display text-3xl font-semibold text-[var(--text-primary)] sm:text-4xl">国产模型接入总览</h1>
        <p className="mt-3 text-lg text-[var(--text-secondary)]">
          保留 Claude Code 的终端体验与工具能力，把「大脑」换成国内平台的模型。你仍用 claude 命令，请求会发到配置的 API 地址。
        </p>
      </header>

      <section className="mt-8 rounded-[var(--radius-md)] border border-[rgba(74,222,128,0.22)] bg-[rgba(74,222,128,0.06)] p-5">
        <h2 className="font-display text-lg font-medium text-[var(--accent-gold)]">原理一句话</h2>
        <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
          Claude Code 读取 <code className="text-[var(--text-primary)]">ANTHROPIC_BASE_URL</code> 和鉴权变量，把请求发到兼容 Anthropic 的接口。界面、斜杠命令、文件工具不变，变的是后端模型与账单归属。
        </p>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-lg font-medium">三种常见付费方式</h2>
        <div className="mt-4 space-y-3">
          {paymentOptions.map((item) => (
            <div key={item.title} className="rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-card)] p-4">
              <h3 className="font-medium text-[var(--text-primary)]">{item.title}</h3>
              <p className="mt-1 text-sm text-[var(--text-secondary)]">{item.desc}</p>
              <p className="mt-2 text-xs text-[var(--accent-gold)]">适合：{item.fit}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-[var(--text-muted)]">
          国内初学者多数选第三种。不想手改环境变量？可看{" "}
          <Link href="/guides/cc-switch" className="text-[var(--accent-gold)] hover:underline">
            CC Switch 图形化配置
          </Link>
          。
        </p>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-lg font-medium">通用配置步骤</h2>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-[var(--text-secondary)]">
          <li>在对应平台注册并创建 API Key（相当于密码，勿泄露）。</li>
          <li>查清该平台文档里的 Anthropic 兼容 Base URL 和模型名称。</li>
          <li>在启动 claude 之前设置环境变量，或写入 ~/.claude/settings.json。</li>
          <li>运行 claude，用 /status 或简单对话验证是否走通。</li>
          <li>到平台控制台查看调用记录，确认费用从正确账户扣除。</li>
        </ol>
        <div className="mt-4">
          <CodeBlock title="~/.claude/settings.json 示例（全局）">{settingsExample}</CodeBlock>
        </div>
        <p className="mt-3 text-sm text-[var(--text-muted)]">
          项目级可写 <code>.claude/settings.local.json</code>（加入 .gitignore）。详见{" "}
          <a href={officialLinks.settings} className="text-[var(--accent-gold)] hover:underline" target="_blank" rel="noopener noreferrer">
            官方 Settings 文档
          </a>
          。
        </p>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-lg font-medium">主流国产平台速览</h2>
        <p className="mt-2 text-sm text-[var(--text-secondary)]">
          下表为入门参考。Base URL 与模型名可能更新，配置前务必打开对应平台最新文档核对。
        </p>
        <div className="mt-4 space-y-4">
          {domesticProviders.map((p) => (
            <div key={p.id} className="rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-card)] p-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-display text-lg text-[var(--accent-gold)]">{p.name}</h3>
                {p.id === "deepseek" ? (
                  <Link href="/guides/deepseek" className="text-sm text-[var(--accent-gold)] hover:underline">
                    完整教程 →
                  </Link>
                ) : (
                  <a href={p.signupUrl} className="inline-flex items-center gap-1 text-sm text-[var(--accent-gold)] hover:underline" target="_blank" rel="noopener noreferrer">
                    去注册
                    <ExternalLink className="size-3" aria-hidden />
                  </a>
                )}
              </div>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">{p.note}</p>
              <dl className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
                <div>
                  <dt className="text-[var(--text-muted)]">兼容地址</dt>
                  <dd className="font-mono text-xs text-[var(--text-primary)]">{p.baseUrl}</dd>
                </div>
                <div>
                  <dt className="text-[var(--text-muted)]">常用模型</dt>
                  <dd className="text-[var(--text-secondary)]">{p.models}</dd>
                </div>
              </dl>
              <div className="mt-3">
                <CodeBlock title="环境变量示例">{p.envExample}</CodeBlock>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-lg font-medium">Windows 用户注意</h2>
        <ul className="mt-4 space-y-3">
          {[
            "先安装 Git for Windows，否则 claude 在很多项目里无法正常使用 git 相关能力。",
            "PowerShell 临时变量：$env:ANTHROPIC_BASE_URL=\"...\"，仅当前窗口有效。",
            "长期生效：用 setx 写入用户环境变量，或写入 settings.json；改完后关闭并重新打开终端。",
          ].map((item) => (
            <li key={item} className="flex gap-3 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-card)] px-4 py-3 text-sm text-[var(--text-secondary)]">
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[var(--accent-success)]" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10 rounded-[var(--radius-md)] border border-[rgba(251,191,36,0.25)] bg-[rgba(251,191,36,0.06)] p-5">
        <h2 className="flex items-center gap-2 font-display text-lg font-medium text-[var(--accent-gold)]">
          <AlertTriangle className="size-5" aria-hidden />
          使用注意
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[var(--text-secondary)]">
          <li>第三方模型可能不支持 Claude 的 extended thinking、部分缓存特性，表现会与官方有差异。</li>
          <li>复杂架构设计仍建议用 Claude 官方模型；国产 API 更适合日常改 bug、写脚本、练手。</li>
          <li>学习阶段不必过度省 Token，先把闭环跑通；熟悉后再按任务选模型控成本。</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-lg font-medium">下一步</h2>
        <ul className="mt-4 space-y-2 text-sm">
          <li>
            <Link href="/guides/deepseek" className="text-[var(--accent-gold)] hover:underline">
              DeepSeek 详细接入（含模型映射与排错）
            </Link>
          </li>
          <li>
            <Link href="/guides/cc-switch" className="text-[var(--accent-gold)] hover:underline">
              用 CC Switch 一键切换多套配置
            </Link>
          </li>
          <li>
            <Link href="/labs/first-product" className="text-[var(--accent-gold)] hover:underline">
              动手做第一个小工具
            </Link>
          </li>
        </ul>
      </section>

      <p className="mt-10 text-xs text-[var(--text-muted)]">核对日期：{siteConfig.reviewedAt}</p>
    </article>
  );
}
