import { StoreBadges } from "../StoreBadges";
import { Reveal } from "../Reveal";

export function FinalCta() {
  return (
    <section id="get" className="mx-auto max-w-[1200px] px-4 py-24">
      <div className="flex flex-col items-center gap-10 text-center">
        <Reveal>
          <h2 className="font-display text-4xl uppercase leading-[0.95] md:text-6xl">
            What will you
            <br />
            try today?
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
