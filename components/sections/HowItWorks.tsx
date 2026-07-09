import {
  ChatCircleText,
  Copy,
  SquaresFour,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "../Reveal";

const steps = [
  {
    icon: SquaresFour,
    title: "Browse",
    body: "Open the feed and scroll through fresh, hand-picked prompt ideas.",
  },
  {
    icon: Copy,
    title: "Copy",
    body: "Found something fun? One tap and the prompt is on your clipboard.",
  },
  {
    icon: ChatCircleText,
    title: "Paste anywhere",
    body: "Drop it into ChatGPT, Gemini, Claude, Midjourney or any AI tool you like.",
  },
] as const;

export function HowItWorks() {
  return (
    <section className="border-y border-line bg-raised">
      <div className="mx-auto max-w-6xl px-4 py-24 md:px-6 md:py-32">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Three steps, zero learning curve
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.08}>
              <div className="relative flex flex-col gap-3 md:pr-8">
                <step.icon className="size-8 text-accent" />
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-base text-ink-muted">{step.body}</p>
                {i < steps.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="absolute top-4 -right-4 hidden h-px w-8 bg-line md:block"
                  />
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
