import { BookOpen, Clock, Target } from "lucide-react";
import { roadmapMeta } from "@/lib/roadmap-phases";

const stats = [
  {
    icon: Target,
    label: "学习阶段",
    value: `${roadmapMeta.phaseCount} 个阶段`,
    hint: "从入门到真实交付",
  },
  {
    icon: Clock,
    label: "入门时长",
    value: roadmapMeta.totalDuration,
    hint: "按推荐节奏推进",
  },
  {
    icon: BookOpen,
    label: "内容形态",
    value: "路径 + 场景 + 工坊",
    hint: "理论与实践结合",
  },
];

export function RoadmapOverview() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.label}
            className="rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[var(--bg-card)] p-4 shadow-card sm:p-5"
          >
            <div className="flex items-center gap-2 text-[var(--accent-gold)]">
              <Icon className="size-4" aria-hidden />
              <span className="font-mono text-[10px] uppercase tracking-wider">{stat.label}</span>
            </div>
            <p className="mt-3 font-display text-lg font-medium text-[var(--text-primary)]">{stat.value}</p>
            <p className="mt-1 text-xs text-[var(--text-muted)]">{stat.hint}</p>
          </div>
        );
      })}
    </div>
  );
}
