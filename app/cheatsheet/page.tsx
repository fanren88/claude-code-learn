import { officialLinks } from "@/lib/site";

const commands = [
  {
    group: "入门",
    items: [
      { cmd: "claude", desc: "启动交互会话" },
      { cmd: 'claude "fix the build"', desc: "执行一次性任务" },
      { cmd: 'claude -p "explain file"', desc: "输出后退出" },
      { cmd: "claude -c", desc: "继续最近会话" },
      { cmd: "claude --version", desc: "检查当前 CLI 版本" },
    ],
  },
  {
    group: "斜杠指令（会话内）",
    items: [
      { cmd: "/help", desc: "查看可用命令" },
      { cmd: "/init", desc: "初始化项目指令文件" },
      { cmd: "/clear", desc: "清空当前会话上下文" },
      { cmd: "/status", desc: "查看账号、模型与项目状态" },
      { cmd: "/model", desc: "切换或查看当前模型" },
      { cmd: "/permissions", desc: "查看或管理工具权限" },
      { cmd: "/memory", desc: "编辑或查看记忆与上下文" },
      { cmd: "/mcp", desc: "查看 MCP 服务器连接状态" },
    ],
  },
  {
    group: "排错三连",
    items: [
      { cmd: "npm run build", desc: "先确认项目是否能构建" },
      { cmd: "git status", desc: "检查改动范围" },
      { cmd: "git diff", desc: "确认具体修改内容" },
    ],
  },
];

export default function CheatsheetPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="font-display text-3xl font-semibold">命令速查</h1>
      <p className="mt-3 text-[var(--text-secondary)]">常用命令速查。完整参数和边界行为请以官方文档为准。</p>
      <div className="mt-10 space-y-10">
        {commands.map((section) => (
          <section key={section.group}>
            <h2 className="mb-4 font-display text-lg text-[var(--accent-gold)]">{section.group}</h2>
            <ul className="space-y-3">
              {section.items.map((item) => (
                <li
                  key={item.cmd}
                  className="flex flex-col gap-1 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-card)] p-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <code className="font-mono text-sm text-[var(--text-primary)]">{item.cmd}</code>
                  <span className="text-sm text-[var(--text-muted)]">{item.desc}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <p className="mt-12 text-sm text-[var(--text-muted)]">
        <a href={officialLinks.cliReference} className="text-[var(--accent-gold)] hover:underline" target="_blank" rel="noopener noreferrer">
          查看 CLI 官方参考 →
        </a>
        <span className="mx-2">/</span>
        <a href={officialLinks.slashCommands} className="text-[var(--accent-gold)] hover:underline" target="_blank" rel="noopener noreferrer">
          查看斜杠命令 →
        </a>
      </p>
    </div>
  );
}
