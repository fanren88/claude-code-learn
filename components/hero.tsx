import Link from "next/link";
import { TerminalMock } from "@/components/terminal-mock";

export function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-24">
      <div>
        <p className="mb-3 font-mono text-xs uppercase tracking-widest text-[var(--accent-gold)]">Observatory Terminal</p>
        <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight text-[var(--text-primary)] sm:text-5xl lg:text-[3.25rem]">
          学会部署和使用
          <br />
          <span className="text-[var(--accent-gold)]">Claude Code</span>
        </h1>
        <p className="mt-4 max-w-lg text-lg text-[var(--text-secondary)]">
          中文实战教程：从安装到工具调用、权限确认与项目交付。不是完整参考手册，而是带你走通的学习路径。
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/learn"
            className="inline-flex items-center rounded-[var(--radius-md)] bg-[var(--accent-gold)] px-5 py-2.5 text-sm font-semibold text-[#0a0a0a] transition hover:bg-[#86efac]"
          >
            从安装开始
          </Link>
          <Link
            href="/roadmap"
            className="inline-flex items-center rounded-[var(--radius-md)] border border-[var(--border-subtle)] px-5 py-2.5 text-sm font-medium text-[var(--text-primary)] transition hover:border-[rgba(74,222,128,0.4)]"
          >
            查看学习路线
          </Link>
        </div>
      </div>
      <TerminalMock />
    </section>
  );
}
