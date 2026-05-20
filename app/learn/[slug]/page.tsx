import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Lightbulb } from "lucide-react";
import { getLearnStep, learnSteps } from "@/lib/learn-steps";

export function generateStaticParams() {
  return learnSteps.map((step) => ({ slug: step.slug }));
}

export default async function LearnStepPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const step = getLearnStep(slug);
  if (!step) notFound();

  const index = learnSteps.findIndex((s) => s.slug === slug);
  const prev = index > 0 ? learnSteps[index - 1] : null;
  const next = index < learnSteps.length - 1 ? learnSteps[index + 1] : null;
  const Icon = step.icon;

  return (
    <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <Link
        href="/learn"
        className="inline-flex items-center gap-1.5 text-sm text-[var(--text-muted)] transition hover:text-[var(--accent-gold)]"
      >
        <ArrowLeft className="size-4" aria-hidden />
        返回学习路径
      </Link>

      <header className="mt-6 border-b border-[var(--border-subtle)] pb-8">
        <div className="flex items-center gap-3">
          <span className="flex size-12 items-center justify-center rounded-[var(--radius-md)] border border-[rgba(74,222,128,0.35)] bg-[var(--bg-card)]">
            <Icon className="size-6 text-[var(--accent-gold)]" aria-hidden />
          </span>
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent-gold)]">
            第 {index + 1} 步 · {step.duration}
          </span>
        </div>
        <h1 className="mt-4 font-display text-3xl font-semibold text-[var(--text-primary)] sm:text-4xl">{step.title}</h1>
        <p className="mt-3 text-lg text-[var(--text-secondary)]">{step.desc}</p>
      </header>

      <section className="mt-8">
        <h2 className="font-display text-lg font-medium text-[var(--text-primary)]">本章要点</h2>
        <ul className="mt-4 space-y-3">
          {step.summary.map((line) => (
            <li
              key={line}
              className="rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-card)] px-4 py-3 text-sm leading-relaxed text-[var(--text-secondary)]"
            >
              {line}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-8 rounded-[var(--radius-lg)] border border-[rgba(74,222,128,0.2)] bg-[rgba(74,222,128,0.06)] p-5">
        <h2 className="flex items-center gap-2 font-display text-lg font-medium text-[var(--accent-gold)]">
          <Lightbulb className="size-5" aria-hidden />
          实践建议
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[var(--text-secondary)]">
          {step.tips.map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ul>
      </section>

      <nav className="mt-12 flex flex-col gap-3 border-t border-[var(--border-subtle)] pt-8 sm:flex-row sm:justify-between">
        {prev ? (
          <Link
            href={`/learn/${prev.slug}`}
            className="group rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-card)] px-4 py-3 transition hover:border-[rgba(74,222,128,0.4)]"
          >
            <span className="text-xs text-[var(--text-muted)]">上一章</span>
            <span className="mt-0.5 flex items-center gap-1 font-medium text-[var(--text-primary)] group-hover:text-[var(--accent-gold)]">
              <ArrowLeft className="size-4" aria-hidden />
              {prev.title}
            </span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={`/learn/${next.slug}`}
            className="group rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-card)] px-4 py-3 text-right transition hover:border-[rgba(74,222,128,0.4)] sm:ml-auto"
          >
            <span className="text-xs text-[var(--text-muted)]">下一章</span>
            <span className="mt-0.5 flex items-center justify-end gap-1 font-medium text-[var(--text-primary)] group-hover:text-[var(--accent-gold)]">
              {next.title}
              <ArrowRight className="size-4" aria-hidden />
            </span>
          </Link>
        ) : (
          <Link
            href="/roadmap"
            className="group rounded-[var(--radius-md)] border border-[rgba(74,222,128,0.35)] bg-[rgba(74,222,128,0.08)] px-4 py-3 text-right transition hover:bg-[rgba(74,222,128,0.14)] sm:ml-auto"
          >
            <span className="text-xs text-[var(--text-muted)]">完成路径</span>
            <span className="mt-0.5 flex items-center justify-end gap-1 font-medium text-[var(--accent-gold)]">
              查看学习路线
              <ArrowRight className="size-4" aria-hidden />
            </span>
          </Link>
        )}
      </nav>
    </article>
  );
}
