"use client";

import { useState } from "react";
import Link from "next/link";
import { List, X } from "@phosphor-icons/react";

const links = [
  { label: "Try it", href: "/#try" },
  { label: "Trending", href: "/#trending" },
  { label: "Categories", href: "/#categories" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-4 z-40 px-4">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between rounded-full bg-obsidian py-2.5 pl-6 pr-2.5">
        <Link href="/" className="text-base font-bold tracking-tight text-paper">
          Prime<span className="text-volt">Prompts</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-paper transition-colors hover:text-volt"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="/#get"
            className="rounded-xl bg-volt px-5 py-2.5 text-sm font-semibold text-paper transition-all duration-200 hover:bg-volt-pressed active:scale-[0.98]"
          >
            Get the app
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex size-10 items-center justify-center rounded-full text-paper md:hidden"
          >
            {open ? <X className="size-5" /> : <List className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="mx-auto mt-2 flex max-w-[1200px] flex-col gap-1 rounded-3xl bg-obsidian p-4 md:hidden">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-base font-semibold text-paper transition-colors hover:text-volt"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
