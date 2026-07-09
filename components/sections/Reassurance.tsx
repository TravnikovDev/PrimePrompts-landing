import { Reveal } from "../Reveal";

// Mission-style feature row per DESIGN.md: large display heading left,
// eyebrow + bold statement + body stacked right.
export function Reassurance() {
  return (
    <section className="mx-auto max-w-[1200px] px-4 py-20">
      <div className="grid gap-10 md:grid-cols-2 md:gap-16">
        <Reveal>
          <h2 className="font-display text-4xl uppercase leading-none md:text-5xl">
            Made for everyone
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col gap-4">
          <span className="text-sm font-semibold uppercase tracking-[0.05em] text-volt">
            No experience needed
          </span>
          <p className="text-lg font-bold leading-snug">
            Free to use. No account. You don&apos;t need to know anything
            about AI.
          </p>
          <p className="text-base leading-[1.5] text-charcoal">
            Prime Prompts is not a tool for prompt engineers. It is a feed of
            fun ideas for anyone who is curious about AI and just wants to
            try something cool without homework.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
