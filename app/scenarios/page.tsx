import Link from "next/link";

const scenarios = [
  {
    href: "/guides/domestic-models",
    title: "国产模型接入",
    desc: "DeepSeek、GLM、Kimi 等选型与环境变量总览；含各平台配置文档与 DeepSeek 详细教程。",
  },
  { href: "/guides/cc-switch", title: "CC Switch 配置", desc: "图形化管理多套 API，一键切换官方与国产模型。" },
  { href: "/guides/prompting", title: "提示词拆解", desc: "把任务目标、边界和验收标准讲清楚。" },
  { href: "/guides/git-workflows", title: "Git 协作", desc: "围绕 diff、提交和审查形成稳定流程。" },
  { href: "/concepts/tools-and-permissions", title: "工具与权限", desc: "控制风险操作，理解确认弹窗与权限边界。" },
  { href: "/concepts/mcp", title: "MCP 扩展", desc: "把外部工具能力安全接入 Claude Code。" },
];

export default function ScenariosPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <p className="font-mono text-xs uppercase tracking-widest text-[var(--accent-gold)]">Scenarios</p>
      <h1 className="mt-2 font-display text-3xl font-semibold text-[var(--text-primary)] sm:text-4xl">场景教程</h1>
      <p className="mt-3 text-[var(--text-secondary)]">这里按“真实任务场景”组织内容。你可以直接挑当前项目最贴近的场景开始。</p>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {scenarios.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[var(--bg-card)] p-5 transition hover:border-[rgba(74,222,128,0.4)]"
          >
            <h2 className="font-display text-xl text-[var(--accent-gold)]">{item.title}</h2>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">{item.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
