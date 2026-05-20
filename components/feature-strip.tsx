import { Brain, MessageSquare, Plug, Repeat } from "lucide-react";

const features = [
  {
    icon: Repeat,
    title: "学习闭环",
    desc: "路径、路线与实战持续迭代",
  },
  {
    icon: MessageSquare,
    title: "真实协作",
    desc: "提示词、审查与提交工作流",
  },
  {
    icon: Plug,
    title: "MCP 扩展",
    desc: "安全接入外部工具服务器",
  },
  {
    icon: Brain,
    title: "自主代理",
    desc: "工具调用、委派与任务执行",
  },
];

export function FeatureStrip() {
  return (
    <section className="border-y border-[var(--border-subtle)] bg-[var(--bg-elevated)]">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {features.map((f) => (
          <div key={f.title} className="flex gap-3">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-[rgba(74,222,128,0.1)] text-[var(--accent-gold)]">
              <f.icon className="size-4" />
            </div>
            <div>
              <h3 className="text-sm font-medium text-[var(--text-primary)]">{f.title}</h3>
              <p className="mt-0.5 text-sm text-[var(--text-muted)]">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
