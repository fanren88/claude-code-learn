import { FeatureStrip } from "@/components/feature-strip";
import { Hero } from "@/components/hero";
import { PathCard } from "@/components/path-card";
import { homePaths, siteConfig } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeatureStrip />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="font-display text-2xl font-semibold text-[var(--text-primary)]">选择你的学习路径</h2>
        <p className="mt-2 max-w-2xl text-[var(--text-secondary)]">
          按目标拆分：先跑通环境，再建立路线，再进入场景和实战，最后用资源与速查补齐细节。
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {homePaths.map((item) => (
            <PathCard
              key={item.href}
              href={item.href}
              title={item.title}
              description={item.description}
              count={item.count}
              duration={item.duration}
              variant={item.variant}
            />
          ))}
        </div>
        <p className="mt-12 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-card)] px-4 py-3 text-sm text-[var(--text-muted)]">
          需要完整命令参考与环境变量？请查阅{" "}
          <a href={siteConfig.officialDocs} className="text-[var(--accent-gold)] hover:underline" target="_blank" rel="noopener noreferrer">
            Claude Code 官方英文文档
          </a>
          。
        </p>
      </section>
    </>
  );
}
