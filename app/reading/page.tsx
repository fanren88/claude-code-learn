import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, Sparkles } from "lucide-react";
import { readingArticles, readingSelectionCriteria } from "@/lib/reading-articles";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "延伸阅读",
  description: "精选与 Claude Code、Agent 与 Skills 相关的第三方长文与官方工程博客，补充本站教程。",
};

export default function ReadingPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <p className="font-mono text-xs uppercase tracking-widest text-[var(--accent-gold)]">Reading</p>
      <h1 className="mt-2 font-display text-3xl font-semibold text-[var(--text-primary)] sm:text-4xl">延伸阅读</h1>
      <p className="mt-3 text-[var(--text-secondary)]">
        精选第三方长文与官方工程博客，帮助你从「会用」走向「理解原理」。技术细节仍以{" "}
        <a
          href={siteConfig.officialDocs}
          className="text-[var(--accent-gold)] hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Claude Code 官方文档
        </a>{" "}
        为准。
      </p>

      <div className="mt-8 rounded-[var(--radius-md)] border border-[rgba(251,191,36,0.28)] bg-[rgba(251,191,36,0.06)] p-5">
        <h2 className="flex items-center gap-2 font-display text-base font-medium text-[var(--accent-gold)]">
          <Sparkles className="size-4" aria-hidden />
          收录标准
        </h2>
        <p className="mt-2 text-sm text-[var(--text-secondary)]">{readingSelectionCriteria}</p>
      </div>

      <div className="mt-10 space-y-6">
        {readingArticles.map((article) => (
          <article
            key={article.id}
            className="rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[var(--bg-card)] p-6"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h2 className="font-display text-xl text-[var(--text-primary)]">{article.title}</h2>
                <p className="mt-1 text-xs text-[var(--text-muted)]">
                  {article.source} · {article.lang} · {article.format}
                </p>
              </div>
              <a
                href={article.url}
                className="inline-flex shrink-0 items-center gap-1.5 rounded-[var(--radius-sm)] border border-[rgba(74,222,128,0.35)] px-3 py-1.5 text-sm text-[var(--accent-gold)] transition hover:bg-[rgba(74,222,128,0.08)]"
                target="_blank"
                rel="noopener noreferrer"
              >
                阅读原文
                <ExternalLink className="size-3.5" aria-hidden />
              </a>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)]">{article.summary}</p>
            <p className="mt-3 text-sm text-[var(--text-secondary)]">
              <span className="text-[var(--text-muted)]">适合：</span>
              {article.audience}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-2.5 py-0.5 text-xs text-[var(--text-muted)]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {article.relatedLinks.length > 0 ? (
              <div className="mt-5 border-t border-[var(--border-subtle)] pt-4">
                <p className="text-xs text-[var(--text-muted)]">建议对照本站章节</p>
                <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm">
                  {article.relatedLinks.map((link) => (
                    <li key={link.href}>
                      {link.external ? (
                        <a
                          href={link.href}
                          className="text-[var(--accent-gold)] hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link href={link.href} className="text-[var(--accent-gold)] hover:underline">
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </article>
        ))}
      </div>

      <p className="mt-10 text-sm text-[var(--text-muted)]">
        想推荐文章？可在{" "}
        <a
          href={`${siteConfig.github}/issues`}
          className="text-[var(--accent-gold)] hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Issues
        </a>{" "}
        留言，说明链接与推荐理由。
      </p>
    </div>
  );
}
