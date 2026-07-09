import type { Prompt } from "@/lib/types";
import { CopyButton } from "../CopyButton";
import { Reveal } from "../Reveal";

export function TryOne({ prompt }: { prompt: Prompt }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24 md:px-6 md:py-32">
      <Reveal>
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Try one right now
        </h2>
        <p className="mt-3 max-w-[50ch] text-lg text-ink-muted">
          No app needed for this one. Copy it, paste it into ChatGPT and see
          for yourself.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mt-10">
        <article className="grid overflow-hidden rounded-2xl border border-line bg-raised shadow-lg shadow-stone-900/5 md:grid-cols-[2fr_3fr]">
          {/* TODO: replace picsum placeholder with a real AI-generated preview */}
          <img
            src={prompt.image}
            alt={prompt.title}
            width={800}
            height={800}
            loading="lazy"
            className="h-full min-h-56 w-full object-cover"
          />
          <div className="flex flex-col gap-4 p-6 md:p-10">
            <span className="text-sm font-medium text-accent">
              {prompt.category}
            </span>
            <h3 className="text-2xl font-semibold leading-snug md:text-3xl">
              {prompt.title}
            </h3>
            <p className="text-lg text-ink-muted">{prompt.description}</p>
            <blockquote className="rounded-xl border border-line bg-surface p-5 font-mono text-base leading-relaxed">
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
