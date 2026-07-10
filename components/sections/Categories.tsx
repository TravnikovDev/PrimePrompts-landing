import Link from "next/link";
import type { Category } from "@/lib/types";
import { withBase } from "@/lib/asset";
import { Reveal } from "../Reveal";

function Tile({ category, wide }: { category: Category; wide?: boolean }) {
  return (
    <Link
      href={`/category/${category.id}/`}
      className={`group flex flex-col gap-3 ${wide ? "md:col-span-2" : ""}`}
    >
      <img
        src={withBase(category.image)}
        alt={category.name}
        width={wide ? 1200 : 800}
        height={wide ? 800 : 600}
        loading="lazy"
        className="h-52 w-full rounded-[24px] object-cover transition-transform duration-300 group-hover:scale-[1.02] md:h-64"
      />
      <div>
        <h3 className="text-lg font-extrabold group-hover:text-volt-pressed">
          {category.name}
        </h3>
        <p className="text-sm leading-[1.5] text-charcoal">{category.blurb}</p>
      </div>
    </Link>
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
