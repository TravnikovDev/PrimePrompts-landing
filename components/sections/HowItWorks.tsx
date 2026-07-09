import {
  ChatCircleText,
  Copy,
  SquaresFour,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "../Reveal";

const steps = [
  {
    icon: SquaresFour,
    title: "Browse the feed",
    body: "Fresh, hand-picked prompt ideas every day.",
  },
  {
    icon: Copy,
    title: "Copy in one tap",
    body: "The prompt lands straight on your clipboard.",
  },
  {
    icon: ChatCircleText,
    title: "Paste anywhere",
    body: "ChatGPT, Gemini, Claude, Midjourney. Anything works.",
  },
] as const;

// Trust-indicator strip per DESIGN.md: three columns, circular outline
// icons, hairline dividers between them.
export function HowItWorks() {
  return (
    <section className="mx-auto max-w-[1200px] px-4 py-20">
      <Reveal>
        <div className="grid gap-10 md:grid-cols-3 md:gap-0 md:divide-x md:divide-ash">
          {steps.map((step) => (
            <div
              key={step.title}
              className="flex flex-col items-center gap-3 text-center md:px-10"
            >
              <span className="flex size-12 items-center justify-center rounded-full border border-obsidian">
                <step.icon className="size-5" />
              </span>
              <h3 className="text-base font-bold">{step.title}</h3>
              <p className="text-sm leading-[1.5] text-charcoal">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
