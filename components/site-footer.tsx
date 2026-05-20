import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-[var(--border-subtle)] bg-[var(--bg-elevated)]">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <p className="text-sm text-[var(--text-muted)]">
          本站为社区中文学习指南，<strong>非</strong> Anthropic 官方站点。命令与配置请以{" "}
          <a href={siteConfig.officialDocs} className="text-[var(--accent-gold)] hover:underline" target="_blank" rel="noopener noreferrer">
            官方英文文档
          </a>{" "}
          为准。
        </p>
        <div className="mt-4 flex flex-wrap gap-4 text-sm">
          <Link href="/roadmap" className="text-[var(--text-secondary)] hover:text-[var(--accent-gold)]">
            学习路线
          </Link>
          <Link href="/cheatsheet" className="text-[var(--text-secondary)] hover:text-[var(--accent-gold)]">
            命令速查
          </Link>
          <Link href="/faq" className="text-[var(--text-secondary)] hover:text-[var(--accent-gold)]">
            常见问题
          </Link>
          <Link href="/glossary" className="text-[var(--text-secondary)] hover:text-[var(--accent-gold)]">
            术语表
          </Link>
        </div>
        <p className="mt-6 text-xs text-[var(--text-muted)]">© {new Date().getFullYear()} Claude Code 中文学习指南</p>
        <p className="mt-2 text-xs text-[var(--text-muted)]">内容最后核对：{siteConfig.reviewedAt}</p>
      </div>
    </footer>
  );
}
