import type { Category } from "@/lib/types";
import { withBase } from "@/lib/asset";
import { Reveal } from "../Reveal";

function Tile({ category, wide }: { category: Category; wide?: boolean }) {
  return (
    <article className={`flex flex-col gap-3 ${wide ? "md:col-span-2" : ""}`}>
      <img
        src={withBase(category.image)}
        alt={category.name}
        width={wide ? 1200 : 800}
        height={wide ? 800 : 600}
        loading="lazy"
        className={`w-full rounded-[24px] object-cover ${
          wide ? "aspect-12/5" : "aspect-8/5"
        }`}
      />
      <div>
        <h3 className="text-lg font-extrabold">{category.name}</h3>
        <p className="text-sm leading-[1.5] text-charcoal">{category.blurb}</p>
      </div>
    </article>
  );
}

export function Categories({ categories }: { categories: Category[] }) {
  const [personality, images, creative, trending] = categories;

  return (
    <section id="categories" className="mx-auto max-w-[1200px] px-4 py-20">
      <Reveal className="flex flex-col items-center gap-3 text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.05em] text-volt">
          Four ways in
        </span>
        <h2 className="font-display text-4xl uppercase leading-none md:text-5xl">
          Something for every mood
        </h2>
      </Reveal>

      <Reveal delay={0.1} className="mt-12">
        <div className="grid gap-6 md:grid-cols-3">
          <Tile category={personality} wide />
          <Tile category={images} />
          <Tile category={creative} />
          <Tile category={trending} wide />
        </div>
      </Reveal>
    </section>
  );
}
