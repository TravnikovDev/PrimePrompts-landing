import type { Category } from "@/lib/types";
import { Reveal } from "../Reveal";

function Cell({ category, large }: { category: Category; large?: boolean }) {
  return (
    <article
      className={`flex flex-col overflow-hidden rounded-2xl border border-line bg-raised shadow-lg shadow-stone-900/5 ${
        large ? "md:col-span-2" : ""
      }`}
    >
      {/* TODO: replace picsum placeholder with a real AI-generated preview */}
      <img
        src={category.image}
        alt={category.name}
        width={large ? 1200 : 800}
        height={large ? 800 : 600}
        loading="lazy"
        className={`w-full object-cover ${large ? "aspect-12/5" : "aspect-8/5"}`}
      />
      <div className="flex flex-col gap-1 p-5">
        <h3 className="text-xl font-semibold">{category.name}</h3>
        <p className="text-base text-ink-muted">{category.blurb}</p>
      </div>
    </article>
  );
}

export function Categories({ categories }: { categories: Category[] }) {
  const [personality, images, creative, trending] = categories;

  return (
    <section className="mx-auto max-w-6xl px-4 py-24 md:px-6 md:py-32">
      <Reveal>
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Something for every mood
        </h2>
      </Reveal>

      <Reveal delay={0.1} className="mt-10">
        <div className="grid gap-4 md:grid-cols-3">
          <Cell category={personality} large />
          <Cell category={images} />
          <Cell category={creative} />
          <Cell category={trending} large />
        </div>
      </Reveal>
    </section>
  );
}
