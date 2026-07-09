import type { Prompt } from "@/lib/types";
import { PromptCard } from "../PromptCard";
import { Reveal } from "../Reveal";

export function Trending({ prompts }: { prompts: Prompt[] }) {
  return (
    <section className="border-y border-line bg-raised py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Trending this week
          </h2>
          <p className="mt-3 max-w-[50ch] text-lg text-ink-muted">
            A taste of the feed. The app updates with new prompts all the
            time.
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <div className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 md:px-[max(1.5rem,calc((100vw-72rem)/2+1.5rem))]">
          {prompts.map((prompt) => (
            <div
              key={prompt.id}
              className="w-72 shrink-0 snap-start md:w-80"
            >
              <PromptCard prompt={prompt} />
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
