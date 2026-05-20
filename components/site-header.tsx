"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useState } from "react";
import { topNav } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname() ?? "";
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border-subtle)] bg-[rgba(8,9,10,0.85)] backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="font-display text-lg font-semibold tracking-tight text-[var(--text-primary)]">
          Claude Code <span className="text-[var(--accent-gold)]">中文指南</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {topNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm transition hover:text-[var(--accent-gold)]",
                pathname.startsWith(item.href) ? "text-[var(--accent-gold)]" : "text-[var(--text-secondary)]",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="rounded-[var(--radius-sm)] p-2 text-[var(--text-secondary)] md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="打开菜单"
          >
            <Menu className="size-5" />
          </button>
        </div>
      </div>

      {open ? (
        <nav className="border-t border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-4 py-3 md:hidden">
          {topNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm text-[var(--text-secondary)] hover:text-[var(--accent-gold)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
