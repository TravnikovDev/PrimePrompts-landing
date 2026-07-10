import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { StoreBadges } from "@/components/StoreBadges";
import { withBase } from "@/lib/asset";
import { allCategories, getCategory, promptsInCategory } from "@/lib/prompts";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return allCategories().map((c) => ({ slug: c.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  return {
    title: `${category.name}. Prime Prompts`,
    description: `${category.blurb} Copy-paste AI prompts, free.`,
    openGraph: {
      title: `${category.name} AI prompts`,
      description: category.blurb,
      images: [{ url: category.image }],
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const prompts = promptsInCategory(slug);

  return (
    <>
      <Nav />
      <main className="mx-auto max-w-[1200px] px-4 pb-20 pt-32">
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="font-display text-4xl uppercase leading-none md:text-6xl">
            {category.name}
          </h1>
          <p className="max-w-[46ch] text-lg leading-[1.5] text-charcoal">
            {category.blurb}
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2 md:grid-cols-3">
          {prompts.map((p) => (
            <Link
              key={p.id}
              href={`/prompt/${p.id}/`}
              className="group overflow-hidden rounded-xl bg-paper shadow-card shadow-ring transition-transform duration-200 hover:-translate-y-1"
            >
              <img
                src={withBase(p.image)}
                alt={p.title}
                width={640}
                height={800}
                loading="lazy"
                className="aspect-4/5 w-full object-cover"
              />
              <div className="flex flex-col gap-1 p-4">
                <span className="text-[11px] font-semibold uppercase tracking-[0.05em] text-volt">
                  {p.category}
                </span>
                <p className="text-sm font-bold leading-tight group-hover:text-volt-pressed">
                  {p.title}
                </p>
                <p className="text-sm leading-[1.5] text-charcoal">
                  {p.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <section className="mt-20 flex flex-col items-center gap-6 text-center">
          <h2 className="font-display text-3xl uppercase leading-none md:text-4xl">
            New prompts every day in the app
          </h2>
          <StoreBadges />
        </section>
      </main>
      <Footer />
    </>
  );
}
