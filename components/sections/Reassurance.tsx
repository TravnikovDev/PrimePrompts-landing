import { Reveal } from "../Reveal";

const lines = [
  "Free to use.",
  "No account needed.",
  "You don't need to know anything about AI.",
] as const;

export function Reassurance() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24 md:px-6 md:py-32">
      <div className="flex flex-col gap-6">
        {lines.map((line, i) => (
          <Reveal key={line} delay={i * 0.08}>
            <p className="text-3xl font-semibold tracking-tight md:text-4xl">
              {line}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
