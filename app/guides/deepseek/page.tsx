import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle, ArrowLeft, CheckCircle2, ExternalLink } from "lucide-react";
import { officialLinks, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "接入 DeepSeek",
  description: "在 Claude Code 中通过 Anthropic 兼容接口使用 DeepSeek 模型，含环境变量、持久化配置与排错。",
};

const deepseekDocs = "https://api-docs.deepseek.com/quick_start/agent_integrations/claude_code";
const deepseekKeys = "https://platform.deepseek.com/api_keys";

const envVarsMac = `export ANTHROPIC_BASE_URL=https://api.deepseek.com/anthropic
export ANTHROPIC_AUTH_TOKEN=<你的 DeepSeek API Key>
export ANTHROPIC_MODEL=deepseek-v4-pro[1m]
export ANTHROPIC_DEFAULT_OPUS_MODEL=deepseek-v4-pro[1m]
export ANTHROPIC_DEFAULT_SONNET_MODEL=deepseek-v4-pro[1m]
export ANTHROPIC_DEFAULT_HAIKU_MODEL=deepseek-v4-flash
export CLAUDE_CODE_SUBAGENT_MODEL=deepseek-v4-flash
export CLAUDE_CODE_EFFORT_LEVEL=max`;

const envVarsWin = `$env:ANTHROPIC_BASE_URL="https://api.deepseek.com/anthropic"
$env:ANTHROPIC_AUTH_TOKEN="<你的 DeepSeek API Key>"
$env:ANTHROPIC_MODEL="deepseek-v4-pro[1m]"
$env:ANTHROPIC_DEFAULT_OPUS_MODEL="deepseek-v4-pro[1m]"
$env:ANTHROPIC_DEFAULT_SONNET_MODEL="deepseek-v4-pro[1m]"
$env:ANTHROPIC_DEFAULT_HAIKU_MODEL="deepseek-v4-flash"
$env:CLAUDE_CODE_SUBAGENT_MODEL="deepseek-v4-flash"
$env:CLAUDE_CODE_EFFORT_LEVEL="max"`;

const settingsExample = `{
  "env": {
    "ANTHROPIC_BASE_URL": "https://api.deepseek.com/anthropic",
    "ANTHROPIC_AUTH_TOKEN": "<你的 DeepSeek API Key>",
    "ANTHROPIC_MODEL": "deepseek-v4-pro[1m]",
    "ANTHROPIC_DEFAULT_OPUS_MODEL": "deepseek-v4-pro[1m]",
    "ANTHROPIC_DEFAULT_SONNET_MODEL": "deepseek-v4-pro[1m]",
    "ANTHROPIC_DEFAULT_HAIKU_MODEL": "deepseek-v4-flash",
    "CLAUDE_CODE_SUBAGENT_MODEL": "deepseek-v4-flash",
    "CLAUDE_CODE_EFFORT_LEVEL": "max"
  }
}`;

const modelMap = [
  { claude: "Opus / 主模型", deepseek: "deepseek-v4-pro[1m]", note: "复杂编码、架构讨论" },
  { claude: "Sonnet / 默认", deepseek: "deepseek-v4-pro[1m]", note: "日常对话与改代码" },
  { claude: "Haiku / 轻量", deepseek: "deepseek-v4-flash", note: "快速子任务、低成本" },
  { claude: "子代理 Subagent", deepseek: "deepseek-v4-flash", note: "由 CLAUDE_CODE_SUBAGENT_MODEL 指定" },
];

const troubleshoot = [
  {
    symptom: "401 / authentication_error",
    fix: "检查 API Key 是否有效、是否写进了 ANTHROPIC_AUTH_TOKEN（或 ANTHROPIC_API_KEY），且未有多余空格或引号。",
  },
  {
    symptom: "仍然走 Anthropic 官方计费",
    fix: "确认在运行 claude 的同一终端里已 export 变量；或检查 ~/.claude/settings.json 的 env 块是否生效。",
  },
  {
    symptom: "model not found",
    fix: "对照 DeepSeek 文档核对模型名拼写；平台更新模型列表后需同步修改环境变量。",
  },
  {
    symptom: "Windows 重启终端后失效",
    fix: "临时 $env: 仅当前会话有效；长期配置请写入 PowerShell Profile，或用 setx / 用户环境变量。",
  },
];

function CodeBlock({ children, title }: { children: string; title?: string }) {
  return (
    <div className="overflow-hidden rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[#0d1117]">
      {title ? (
        <div className="border-b border-[var(--border-subtle)] px-4 py-2 font-mono text-xs text-[var(--text-muted)]">{title}</div>
      ) : null}
      <pre className="overflow-x-auto p-4 font-mono text-[13px] leading-relaxed text-[var(--text-secondary)]">
        <code>{children}</code>
      </pre>
    </div>
  );
}

export default function DeepSeekGuidePage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <Link
        href="/guides/domestic-models#deepseek"
        className="inline-flex items-center gap-1.5 text-sm text-[var(--text-muted)] transition hover:text-[var(--accent-gold)]"
      >
        <ArrowLeft className="size-4" aria-hidden />
        返回国产模型接入
      </Link>

      <header className="mt-6 border-b border-[var(--border-subtle)] pb-8">
        <p className="font-mono text-xs uppercase tracking-widest text-[var(--accent-gold)]">国产模型 · DeepSeek</p>
        <h1 className="mt-3 font-display text-3xl font-semibold text-[var(--text-primary)] sm:text-4xl">Claude Code 接入 DeepSeek</h1>
        <p className="mt-3 text-lg text-[var(--text-secondary)]">
          保留 Claude Code 的终端体验与工具链，把模型请求转发到 DeepSeek 的 Anthropic 兼容接口，适合想用更低成本做日常编码的场景。
        </p>
      </header>

      <section className="mt-8 rounded-[var(--radius-md)] border border-[rgba(74,222,128,0.22)] bg-[rgba(74,222,128,0.06)] p-5">
        <h2 className="font-display text-lg font-medium text-[var(--accent-gold)]">原理一句话</h2>
        <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
          Claude Code 启动时读取 <code className="text-[var(--text-primary)]">ANTHROPIC_BASE_URL</code> 与鉴权变量，把原本发往 Anthropic 的请求改发到{" "}
          <code className="text-[var(--text-primary)]">https://api.deepseek.com/anthropic</code>。界面和斜杠命令不变，变的是后端模型与计费方。
        </p>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-lg font-medium">前置条件</h2>
        <ul className="mt-4 space-y-3">
          {[
            "已安装 Node.js 18+ 与 Claude Code（npm install -g @anthropic-ai/claude-code）",
            "在 DeepSeek 开放平台创建 API Key",
            "终端能正常执行 claude --version",
          ].map((item) => (
            <li key={item} className="flex gap-3 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-card)] px-4 py-3 text-sm text-[var(--text-secondary)]">
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[var(--accent-success)]" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-[var(--text-muted)]">
          API Key 获取：
          <a href={deepseekKeys} className="ml-1 text-[var(--accent-gold)] hover:underline" target="_blank" rel="noopener noreferrer">
            platform.deepseek.com/api_keys
            <ExternalLink className="ml-0.5 inline size-3" aria-hidden />
          </a>
        </p>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-lg font-medium">步骤一：配置环境变量</h2>
        <p className="mt-2 text-sm text-[var(--text-secondary)]">
          在<strong className="text-[var(--text-primary)]">启动 claude 之前</strong>设置下列变量。把占位符换成你的 Key。
        </p>
        <div className="mt-4 space-y-4">
          <CodeBlock title="macOS / Linux / WSL">{envVarsMac}</CodeBlock>
          <CodeBlock title="Windows PowerShell">{envVarsWin}</CodeBlock>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-lg font-medium">步骤二：进入项目并启动</h2>
        <CodeBlock title="终端">{`cd /path/to/my-project
claude`}</CodeBlock>
        <p className="mt-3 text-sm text-[var(--text-secondary)]">
          若已安装 Claude Code，只需完成环境变量配置即可；无需重装 CLI。
        </p>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-lg font-medium">持久化配置（推荐）</h2>
        <p className="mt-2 text-sm text-[var(--text-secondary)]">
          临时 export 只对当前终端有效。想每次打开终端都能用 DeepSeek，可以任选一种方式：
        </p>
        <ul className="mt-4 space-y-3 text-sm text-[var(--text-secondary)]">
          <li className="rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-card)] px-4 py-3">
            <strong className="text-[var(--text-primary)]">Shell 配置</strong>：把 export 行写入 ~/.zshrc 或 ~/.bashrc，保存后执行 <code>source ~/.zshrc</code>。
          </li>
          <li className="rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-card)] px-4 py-3">
            <strong className="text-[var(--text-primary)]">Claude Code 设置文件</strong>：写入 ~/.claude/settings.json（全局）或项目内 .claude/settings.local.json（仅当前项目、勿提交密钥）：
          </li>
        </ul>
        <div className="mt-4">
          <CodeBlock title="~/.claude/settings.json 示例">{settingsExample}</CodeBlock>
        </div>
        <p className="mt-3 text-sm text-[var(--text-muted)]">
          设置文件说明见{" "}
          <a href={officialLinks.settings} className="text-[var(--accent-gold)] hover:underline" target="_blank" rel="noopener noreferrer">
            Claude Code Settings 文档
          </a>
          。不要把含 API Key 的 settings 提交到 Git。
        </p>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-lg font-medium">模型对应关系</h2>
        <p className="mt-2 text-sm text-[var(--text-secondary)]">
          Claude Code 内部仍按 Opus / Sonnet / Haiku 分档，通过环境变量映射到 DeepSeek 模型名：
        </p>
        <div className="mt-4 overflow-x-auto rounded-[var(--radius-md)] border border-[var(--border-subtle)]">
          <table className="w-full min-w-[480px] text-left text-sm">
            <thead>
              <tr className="border-b border-[var(--border-subtle)] bg-[var(--bg-card)]">
                <th className="px-4 py-3 font-medium text-[var(--accent-gold)]">Claude Code 档位</th>
                <th className="px-4 py-3 font-medium text-[var(--accent-gold)]">DeepSeek 模型</th>
                <th className="px-4 py-3 font-medium text-[var(--accent-gold)]">说明</th>
              </tr>
            </thead>
            <tbody>
              {modelMap.map((row) => (
                <tr key={row.claude} className="border-b border-[var(--border-subtle)] last:border-0">
                  <td className="px-4 py-3 text-[var(--text-primary)]">{row.claude}</td>
                  <td className="px-4 py-3 font-mono text-xs text-[var(--text-secondary)]">{row.deepseek}</td>
                  <td className="px-4 py-3 text-[var(--text-secondary)]">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-lg font-medium">验证是否生效</h2>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-[var(--text-secondary)]">
          <li>新开终端，确认 echo $ANTHROPIC_BASE_URL 输出 DeepSeek 地址（Windows 用 echo $env:ANTHROPIC_BASE_URL）。</li>
          <li>运行 claude，发起一次简单对话（例如「用一句话介绍当前目录」）。</li>
          <li>在 DeepSeek 控制台查看调用记录与余额变动，确认请求走 DeepSeek 而非 Anthropic。</li>
        </ol>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-lg font-medium">切回 Anthropic 官方</h2>
        <p className="mt-2 text-sm text-[var(--text-secondary)]">
          取消或注释环境变量中的 ANTHROPIC_BASE_URL 与 DeepSeek 相关项，删除 settings.json 里 env 中的对应字段，重新打开终端后执行 claude。未设置 BASE_URL 时，CLI 会按默认方式连接 Anthropic（需已登录或配置官方 API Key）。
        </p>
      </section>

      <section className="mt-10 rounded-[var(--radius-md)] border border-[rgba(251,191,36,0.25)] bg-[rgba(251,191,36,0.06)] p-5">
        <h2 className="flex items-center gap-2 font-display text-lg font-medium text-[var(--accent-gold)]">
          <AlertTriangle className="size-5" aria-hidden />
          使用注意
        </h2>
        <ul className="mt-3 space-y-2 text-sm text-[var(--text-secondary)]">
          <li>DeepSeek 侧不支持 Claude 的 extended thinking、cache_control 等特性，相关能力会不可用或表现不同。</li>
          <li>复杂架构设计、长链路推理仍建议用 Claude 官方模型；DeepSeek 更适合日常改 bug、写脚本、补测试等高频任务。</li>
          <li>API Key 等同于密码，不要写进仓库、截图或群聊；项目协作可用每人本地的 settings.local.json。</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-lg font-medium">常见问题</h2>
        <div className="mt-4 space-y-3">
          {troubleshoot.map((item) => (
            <section key={item.symptom} className="rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-card)] p-4">
              <h3 className="font-medium text-[var(--text-primary)]">{item.symptom}</h3>
              <p className="mt-1 text-sm text-[var(--text-secondary)]">{item.fix}</p>
            </section>
          ))}
        </div>
      </section>

      <p className="mt-10 text-xs text-[var(--text-muted)]">
        内容依据 DeepSeek 与 Claude Code 官方文档整理，核对日期：{siteConfig.reviewedAt}。详细英文步骤见{" "}
        <a href={deepseekDocs} className="text-[var(--accent-gold)] hover:underline" target="_blank" rel="noopener noreferrer">
          DeepSeek × Claude Code 集成文档
        </a>
        ；环境变量全集见{" "}
        <a
          href="https://code.claude.com/docs/en/env-vars"
          className="text-[var(--accent-gold)] hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Claude Code 环境变量参考
        </a>
        。
      </p>
    </article>
  );
}
