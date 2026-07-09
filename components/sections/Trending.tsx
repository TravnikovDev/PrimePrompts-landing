import type { Prompt } from "@/lib/types";
import { withBase } from "@/lib/asset";
import { Reveal } from "../Reveal";

const tilts = [
  "-rotate-4",
  "rotate-2",
  "-rotate-2",
  "rotate-4",
  "-rotate-3",
  "rotate-3",
] as const;

// Fanned, tilted showcase band per DESIGN.md's phone-mockup carousel:
// overlapping frames at alternating angles, 24px image radii, no shadows,
// the rotation carries the energy.
export function Trending({ prompts }: { prompts: Prompt[] }) {
  return (
    <section id="trending" className="overflow-hidden py-20">
      <Reveal className="mx-auto flex max-w-[1200px] flex-col items-center gap-3 px-4 text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.05em] text-volt">
          Straight from the feed
        </span>
        <h2 className="font-display text-4xl uppercase leading-none md:text-5xl">
          Trending this week
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-16 flex snap-x snap-mandatory gap-4 overflow-x-auto px-8 py-10 md:justify-center md:gap-3 md:overflow-visible">
          {prompts.map((prompt, i) => (
            <div
              key={prompt.id}
              className={`w-56 shrink-0 snap-center md:hover:z-10 ${tilts[i % tilts.length]}`}
            >
              <div className="overflow-hidden rounded-[24px] border-4 border-obsidian bg-paper transition-transform duration-300 hover:rotate-0 hover:scale-105">
                <img
                  src={withBase(prompt.image)}
                  alt={prompt.title}
                  width={640}
                  height={800}
                  loading="lazy"
                  className="aspect-3/4 w-full object-cover"
                />
                <div className="flex flex-col gap-1 p-4">
                  <span className="text-xs font-semibold uppercase tracking-[0.05em] text-volt">
                    {prompt.category}
                  </span>
                  <p className="text-sm font-bold leading-tight">
                    {prompt.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.15} className="mt-6 flex justify-center px-4">
        <p className="max-w-[46ch] text-center text-base leading-[1.5] text-charcoal">
          A taste of the feed. The app updates with new prompts all the time.
        </p>
      </Reveal>
    </section>
  );
}
