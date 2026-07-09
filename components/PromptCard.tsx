import type { Prompt } from "@/lib/types";
import { CopyButton } from "./CopyButton";

export function PromptCard({ prompt }: { prompt: Prompt }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-raised shadow-lg shadow-stone-900/5">
      {/* TODO: replace picsum placeholder with a real AI-generated preview */}
      <img
        src={prompt.image}
        alt={prompt.title}
        width={640}
        height={800}
        loading="lazy"
        className="aspect-4/5 w-full object-cover"
      />
      <div className="flex flex-1 flex-col gap-2 p-5">
        <span className="text-sm font-medium text-accent">
          {prompt.category}
        </span>
        <h3 className="text-lg font-semibold leading-snug">{prompt.title}</h3>
        <p className="text-base text-ink-muted">{prompt.description}</p>
        <div className="mt-auto pt-3">
          <CopyButton text={prompt.promptText} />
        </div>
      </div>
    </article>
  );
}
