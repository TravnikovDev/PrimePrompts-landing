"use client";

import { motion, useReducedMotion } from "motion/react";
import { StoreBadges } from "../StoreBadges";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="hero-gradient flex min-h-[100dvh] items-center justify-center px-4 pt-24 pb-16">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="flex max-w-[1200px] flex-col items-center gap-8 text-center"
      >
        <a
          href="#trending"
          className="inline-flex items-center gap-2 rounded-full bg-obsidian py-2 pl-3 pr-4 text-sm font-semibold text-paper transition-transform duration-200 active:scale-[0.98]"
        >
          <span className="rounded-full bg-volt px-2 py-0.5 text-xs font-bold uppercase tracking-[0.05em]">
            New
          </span>
          Fresh prompts added daily
        </a>

        <h1 className="font-display text-5xl uppercase leading-[0.95] tracking-[-0.01em] md:text-7xl lg:text-[86px] lg:leading-[0.9]">
          Fun AI ideas,{" "}
          <br className="hidden md:block" />
          ready to copy
        </h1>

        <p className="max-w-[42ch] text-lg leading-[1.5] text-onyx">
          A daily feed of trending AI prompts. Copy one, paste it into
          ChatGPT, and see what happens.
        </p>

        <StoreBadges />
      </motion.div>
    </section>
  );
}
