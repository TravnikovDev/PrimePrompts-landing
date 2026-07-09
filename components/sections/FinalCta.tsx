import { StoreBadges } from "../StoreBadges";
import { Reveal } from "../Reveal";

export function FinalCta() {
  return (
    <section id="get" className="border-t border-line bg-raised">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 py-24 text-center md:px-6 md:py-32">
        <Reveal>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            What will you try today?
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="flex justify-center">
            <StoreBadges />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
