import { glossaryTerms } from "@/lib/glossary-terms";
import { siteConfig } from "@/lib/site";

const categories = ["基础", "Claude Code", "国产模型"] as const;

export default function GlossaryPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="font-display text-3xl font-semibold">术语表</h1>
      <p className="mt-3 text-[var(--text-secondary)]">
        快速对齐 Claude Code 与 AI 协作中的常用词。更系统的入门可看{" "}
        <a href="/learn/concepts" className="text-[var(--accent-gold)] hover:underline">
          概念扫盲
        </a>
        。
      </p>
      <p className="mt-2 text-sm text-[var(--text-muted)]">核对日期：{siteConfig.reviewedAt}</p>

      <div className="mt-10 space-y-10">
        {categories.map((cat) => {
          const items = glossaryTerms.filter((t) => t.category === cat);
          if (items.length === 0) return null;
          return (
            <section key={cat}>
              <h2 className="mb-4 font-display text-lg text-[var(--accent-gold)]">{cat}</h2>
              <div className="space-y-4">
                {items.map((item) => (
                  <section key={item.term} className="rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-card)] p-5">
                    <h3 className="font-display text-xl text-[var(--text-primary)]">{item.term}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">{item.meaning}</p>
                  </section>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
