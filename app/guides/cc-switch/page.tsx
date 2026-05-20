import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ExternalLink } from "lucide-react";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "CC Switch 配置",
  description: "用 CC Switch 图形化管理 Claude Code 的多套 API 配置，一键切换官方与国产模型。",
};

const ccSwitchRepo = "https://github.com/farion1231/cc-switch";
const ccmRepo = "https://github.com/foreveryh/claude-code-switch";

export default function CcSwitchPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <Link href="/scenarios" className="inline-flex items-center gap-1.5 text-sm text-[var(--text-muted)] transition hover:text-[var(--accent-gold)]">
        <ArrowLeft className="size-4" aria-hidden />
        返回场景教程
      </Link>

      <header className="mt-6 border-b border-[var(--border-subtle)] pb-8">
        <p className="font-mono text-xs uppercase tracking-widest text-[var(--accent-gold)]">Guide</p>
        <h1 className="mt-3 font-display text-3xl font-semibold text-[var(--text-primary)] sm:text-4xl">CC Switch 图形化配置</h1>
        <p className="mt-3 text-lg text-[var(--text-secondary)]">
          不想每次手改环境变量？CC Switch 用界面管理多套 API（官方、DeepSeek、GLM、Kimi 等），点一下就能切换，适合国内初学者。
        </p>
      </header>

      <section className="mt-8 rounded-[var(--radius-md)] border border-[rgba(74,222,128,0.22)] bg-[rgba(74,222,128,0.06)] p-5">
        <h2 className="font-display text-lg font-medium text-[var(--accent-gold)]">它解决什么问题？</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[var(--text-secondary)]">
          <li>多套配置（工作用官方、练手用 DeepSeek）不用互相覆盖。</li>
          <li>Base URL、API Key、模型名在表单里填写，减少抄错。</li>
          <li>切换后重启 Claude Code 即可生效，不必记 export 命令。</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-lg font-medium">两种常见工具</h2>
        <div className="mt-4 space-y-4">
          <div className="rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-card)] p-5">
            <h3 className="font-medium text-[var(--text-primary)]">CC Switch（桌面应用）</h3>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">
              跨平台图形界面，管理 Claude Code、Codex 等配置；支持导入导出、端点测速、MCP 管理等。适合不喜欢命令行的用户。
            </p>
            <a href={ccSwitchRepo} className="mt-3 inline-flex items-center gap-1 text-sm text-[var(--accent-gold)] hover:underline" target="_blank" rel="noopener noreferrer">
              GitHub: farion1231/cc-switch
              <ExternalLink className="size-3" aria-hidden />
            </a>
            <p className="mt-3 text-xs text-[var(--text-muted)]">macOS 可通过 Homebrew 安装，具体见仓库 README。</p>
          </div>
          <div className="rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-card)] p-5">
            <h3 className="font-medium text-[var(--text-primary)]">claude-code-switch / CCM（命令行）</h3>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">
              终端一条命令切换 Provider，支持 GLM、DeepSeek、Kimi、Qwen、MiniMax 等。适合习惯 shell 的用户。
            </p>
            <a href={ccmRepo} className="mt-3 inline-flex items-center gap-1 text-sm text-[var(--accent-gold)] hover:underline" target="_blank" rel="noopener noreferrer">
              GitHub: foreveryh/claude-code-switch
              <ExternalLink className="size-3" aria-hidden />
            </a>
          </div>
        </div>
        <p className="mt-4 text-sm text-[var(--text-muted)]">二者选其一即可，不必同时安装。</p>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-lg font-medium">CC Switch 桌面版：推荐流程</h2>
        <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm text-[var(--text-secondary)]">
          <li>
            <strong className="text-[var(--text-primary)]">安装 Claude Code</strong>：先完成{" "}
            <Link href="/learn/install" className="text-[var(--accent-gold)] hover:underline">
              CLI 安装
            </Link>
            ，并确认 <code>claude --version</code> 有输出。
          </li>
          <li>
            <strong className="text-[var(--text-primary)]">安装 CC Switch</strong>：从 GitHub Releases 下载对应系统安装包，按说明安装。
          </li>
          <li>
            <strong className="text-[var(--text-primary)]">获取 API Key</strong>：在你选用的国产平台（如 DeepSeek、智谱）创建密钥。
          </li>
          <li>
            <strong className="text-[var(--text-primary)]">新增 Provider</strong>：在 CC Switch 里选择「Claude Code」，填写名称、Base URL（不要多写 /v1 除非文档要求）、API Key、模型名。
          </li>
          <li>
            <strong className="text-[var(--text-primary)]">切换并重启</strong>：选中该 Provider 为当前配置，完全退出 Claude Code 后重新运行 <code>claude</code>。
          </li>
          <li>
            <strong className="text-[var(--text-primary)]">验证</strong>：对话一句简单问题，并在平台控制台确认有调用记录。
          </li>
        </ol>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-lg font-medium">填写时注意</h2>
        <ul className="mt-4 space-y-3">
          {[
            "Base URL 以各平台「Anthropic 兼容」文档为准，常见错误是多写或少写路径后缀。",
            "API Key 只填密钥本身，不要带 Bearer 前缀（除非工具明确要求）。",
            "模型名区分大小写，与控制台显示完全一致。",
            "切换 Provider 后一定要重启 Claude Code 会话。",
          ].map((item) => (
            <li key={item} className="flex gap-3 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-card)] px-4 py-3 text-sm text-[var(--text-secondary)]">
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[var(--accent-success)]" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-lg font-medium">不想用图形工具？</h2>
        <p className="mt-2 text-sm text-[var(--text-secondary)]">
          可以改用手写环境变量或 settings.json，见{" "}
          <Link href="/guides/domestic-models" className="text-[var(--accent-gold)] hover:underline">
            国产模型接入总览
          </Link>
          （含{" "}
          <Link href="/guides/deepseek" className="text-[var(--accent-gold)] hover:underline">
            DeepSeek 详细教程
          </Link>
          ）。
        </p>
      </section>

      <p className="mt-10 text-xs text-[var(--text-muted)]">核对日期：{siteConfig.reviewedAt}。第三方工具版本更新较快，以各项目 GitHub 说明为准。</p>
    </article>
  );
}
