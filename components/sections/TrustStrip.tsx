import {
  HandHeart,
  Plugs,
  Sparkle,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "../Reveal";

const claims = [
  {
    icon: Sparkle,
    title: "Hand-curated daily",
    body: "Fresh prompts picked by humans, not algorithms.",
  },
  {
    icon: Plugs,
    title: "Works with any AI tool",
    body: "ChatGPT, Gemini, Claude, Midjourney and more.",
  },
  {
    icon: HandHeart,
    title: "Free, no account",
    body: "Open, copy, try. That's it.",
  },
] as const;

// Trust-indicator strip per DESIGN.md: three columns, circular outline
// icons, hairline dividers between them. Sits right under the hero.
export function TrustStrip() {
  return (
    <section className="mx-auto max-w-[1200px] px-4 py-10">
      <Reveal>
        <div className="grid gap-8 md:grid-cols-3 md:gap-0 md:divide-x md:divide-ash">
          {claims.map((claim) => (
            <div
              key={claim.title}
              className="flex flex-col items-center gap-2 text-center md:px-10"
            >
              <span className="flex size-11 items-center justify-center rounded-full border border-obsidian">
                <claim.icon className="size-5" />
              </span>
              <p className="text-base font-bold">{claim.title}</p>
              <p className="text-sm leading-[1.5] text-charcoal">
                {claim.body}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
