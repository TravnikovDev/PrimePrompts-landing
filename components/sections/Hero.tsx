"use client";

import { motion, useReducedMotion } from "motion/react";
import { StoreBadges } from "../StoreBadges";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="hero-gradient px-4 pt-32 pb-6">
      {/* Slide-only entrance: the headline is the LCP element, an opacity
          fade would delay its first paint. */}
      <motion.div
        initial={reduce ? false : { y: 20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto flex max-w-[1200px] flex-col items-center gap-7 text-center"
      >
        <a
          href="#trending"
          className="inline-flex items-center gap-2 rounded-full bg-obsidian py-2 pl-4 pr-4 text-sm font-semibold text-paper transition-transform duration-200 active:scale-[0.98]"
        >
          <span className="text-xs font-bold uppercase tracking-[0.05em] text-volt">
            New
          </span>
          Fresh prompts added daily
        </a>

        <h1 className="font-display text-5xl uppercase leading-[0.95] tracking-[-0.01em] md:text-7xl">
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
