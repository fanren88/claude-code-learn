const terms = [
  { term: "Agent 循环", meaning: "模型读取上下文、决定动作、执行工具并根据结果继续迭代的过程。" },
  { term: "MCP", meaning: "Model Context Protocol，用于连接外部工具和数据源的协议。" },
  { term: "CLAUDE.md", meaning: "项目级上下文文件，用于告诉 Claude 项目约定、目标和边界。" },
  { term: "Slash command", meaning: "Claude Code 会话内以 `/` 开头的命令，用于查看状态、清空上下文、管理权限或触发内置流程。" },
  { term: "Permission", meaning: "限制工具、命令和文件访问的安全边界。高风险操作应保持人工确认。" },
  { term: "Context", meaning: "模型当前可见的信息，包括对话、文件内容、项目说明、工具结果和长期记忆。" },
  { term: "Diff", meaning: "Git 展示的代码变更。接受 Agent 改动前，应优先审查 diff 和验证结果。" },
];

export default function GlossaryPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="font-display text-3xl font-semibold">术语表</h1>
      <div className="mt-8 space-y-4">
        {terms.map((item) => (
          <section key={item.term} className="rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-card)] p-5">
            <h2 className="font-display text-xl text-[var(--accent-gold)]">{item.term}</h2>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">{item.meaning}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
