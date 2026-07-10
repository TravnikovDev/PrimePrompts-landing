import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CopyButton } from "@/components/CopyButton";
import { StoreBadges } from "@/components/StoreBadges";
import { withBase } from "@/lib/asset";
import { allPrompts, getPrompt } from "@/lib/prompts";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return allPrompts().map((p) => ({ slug: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const prompt = getPrompt(slug);
  if (!prompt) return {};
  return {
    title: `${prompt.title}. Prime Prompts`,
    description: prompt.description,
    openGraph: {
      title: prompt.title,
      description: prompt.description,
      images: [{ url: prompt.image }],
    },
  };
}

export default async function PromptPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const prompt = getPrompt(slug);
  if (!prompt) notFound();

  const others = allPrompts().filter((p) => p.id !== prompt.id);
  const more = [
    ...others.filter((p) => p.categoryId === prompt.categoryId),
    ...others.filter((p) => p.categoryId !== prompt.categoryId),
  ].slice(0, 3);

  return (
    <>
      <Nav />
      <main className="mx-auto max-w-[1200px] px-4 pb-20 pt-28">
        <article className="mx-auto grid max-w-4xl overflow-hidden rounded-xl bg-paper shadow-card shadow-ring md:grid-cols-[2fr_3fr]">
          <img
            src={withBase(prompt.image)}
            alt={prompt.title}
            width={800}
            height={800}
            className="h-full min-h-64 w-full object-cover"
          />
          <div className="flex flex-col gap-4 p-6 md:p-8">
            <span className="text-xs font-semibold uppercase tracking-[0.05em] text-volt">
              {prompt.category}
            </span>
            <h1 className="text-3xl font-extrabold leading-tight md:text-4xl">
              {prompt.title}
            </h1>
            <p className="text-base leading-[1.5] text-charcoal">
              {prompt.description}
            </p>
            <blockquote className="rounded-xl border border-charcoal bg-mist p-5 font-mono text-sm leading-relaxed">
              {prompt.promptText}
            </blockquote>
            <p className="text-sm leading-[1.5] text-charcoal">
              Copy it, paste it into ChatGPT, Gemini, Claude or any AI tool,
              and see what happens.
            </p>
            <div className="mt-auto pt-2">
              <CopyButton text={prompt.promptText} size="lg" />
            </div>
          </div>
        </article>

        <section className="mt-20">
          <h2 className="text-center font-display text-3xl uppercase leading-none md:text-4xl">
            More to try
          </h2>
          <div className="mx-auto mt-8 grid max-w-4xl gap-4 md:grid-cols-3">
            {more.map((p) => (
              <Link
                key={p.id}
                href={`/prompt/${p.id}/`}
                className="group overflow-hidden rounded-xl bg-paper shadow-card shadow-ring transition-transform duration-200 hover:-translate-y-1"
              >
                <img
                  src={withBase(p.image)}
                  alt={p.title}
                  width={640}
                  height={480}
                  loading="lazy"
                  className="aspect-8/5 w-full object-cover"
                />
                <div className="flex flex-col gap-1 p-4">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.05em] text-volt">
                    {p.category}
                  </span>
                  <p className="text-sm font-bold leading-tight group-hover:text-volt-pressed">
                    {p.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-20 flex flex-col items-center gap-6 text-center">
          <h2 className="font-display text-3xl uppercase leading-none md:text-4xl">
            Hundreds more in the app
          </h2>
          <StoreBadges />
        </section>
      </main>
      <Footer />
    </>
  );
}
