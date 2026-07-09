import type { Prompt } from "@/lib/types";
import { CopyButton } from "../CopyButton";
import { Reveal } from "../Reveal";

export function TryOne({ prompt }: { prompt: Prompt }) {
  return (
    <section id="try" className="mx-auto max-w-[1200px] px-4 py-20">
      <Reveal className="flex flex-col items-center gap-3 text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.05em] text-volt">
          No app needed for this one
        </span>
        <h2 className="font-display text-4xl uppercase leading-none md:text-5xl">
          Try one right now
        </h2>
      </Reveal>

      <Reveal delay={0.1} className="mt-12">
        <article className="mx-auto grid max-w-4xl overflow-hidden rounded-xl bg-paper shadow-card shadow-ring md:grid-cols-[2fr_3fr]">
          {/* TODO: replace picsum placeholder with a real AI-generated preview */}
          <img
            src={prompt.image}
            alt={prompt.title}
            width={800}
            height={800}
            loading="lazy"
            className="h-full min-h-56 w-full object-cover"
          />
          <div className="flex flex-col gap-4 p-6 md:p-8">
            <span className="text-xs font-semibold uppercase tracking-[0.05em] text-volt">
              {prompt.category}
            </span>
            <h3 className="text-2xl font-extrabold leading-tight md:text-3xl">
              {prompt.title}
            </h3>
            <p className="text-base leading-[1.5] text-charcoal">
              {prompt.description}
            </p>
            <blockquote className="rounded-xl border border-charcoal bg-mist p-5 font-mono text-sm leading-relaxed">
              {prompt.promptText}
            </blockquote>
            <div className="mt-auto pt-2">
              <CopyButton text={prompt.promptText} size="lg" />
            </div>
          </div>
        </article>
      </Reveal>
    </section>
  );
}
