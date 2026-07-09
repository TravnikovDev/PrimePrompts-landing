"use client";

import { motion, useReducedMotion } from "motion/react";
import { StoreBadges } from "../StoreBadges";
import type { Prompt } from "@/lib/types";

function MiniCard({ prompt }: { prompt: Prompt }) {
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-raised">
      <img
        src={prompt.image}
        alt={prompt.title}
        width={320}
        height={200}
        className="aspect-8/5 w-full object-cover"
      />
      <div className="flex items-center justify-between gap-2 p-3">
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold">{prompt.title}</p>
          <p className="truncate text-xs text-ink-muted">{prompt.category}</p>
        </div>
        <span className="shrink-0 rounded-full bg-accent px-3 py-1 text-xs font-medium text-white">
          Copy
        </span>
      </div>
    </div>
  );
}

export function Hero({ feed }: { feed: Prompt[] }) {
  const reduce = useReducedMotion();

  return (
    <section className="mx-auto grid min-h-[calc(100dvh-4rem)] max-w-6xl items-center gap-12 px-4 py-16 md:grid-cols-[1.1fr_1fr] md:px-6 lg:gap-16">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-start gap-6"
      >
        <h1 className="text-5xl font-bold tracking-tight leading-[1.05] md:text-6xl">
          Fun AI ideas, ready to copy.
        </h1>
        <p className="max-w-[36ch] text-lg text-ink-muted md:text-xl">
          A daily feed of trending AI prompts. Copy one, paste it into
          ChatGPT, and see what happens.
        </p>
        <StoreBadges />
      </motion.div>

      <motion.div
        initial={reduce ? false : { opacity: 0, x: 48 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          delay: reduce ? 0 : 0.15,
        }}
        className="justify-self-center md:justify-self-end"
      >
        {/* Phone frame with a live mini-feed of real prompt cards */}
        <div
          aria-hidden="true"
          className="w-72 rotate-2 rounded-[2.5rem] border-8 border-ink bg-surface p-4 shadow-2xl shadow-stone-900/20 md:w-80"
        >
          <div className="flex flex-col gap-3 overflow-hidden">
            <p className="pt-2 text-base font-bold">Trending Today</p>
            {feed.map((p) => (
              <MiniCard key={p.id} prompt={p} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
