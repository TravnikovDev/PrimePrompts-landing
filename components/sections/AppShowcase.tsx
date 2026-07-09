import {
  Fire,
  House,
  MagnifyingGlass,
  Star,
} from "@phosphor-icons/react/dist/ssr";
import type { Prompt } from "@/lib/types";
import { withBase } from "@/lib/asset";
import { Reveal } from "../Reveal";

function FeedCard({ prompt }: { prompt: Prompt }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-ash bg-paper">
      <img
        src={withBase(prompt.image)}
        alt=""
        width={640}
        height={400}
        className="aspect-8/5 w-full object-cover"
      />
      <div className="flex items-center justify-between gap-2 p-3">
        <div className="min-w-0">
          <p className="truncate text-sm font-bold">{prompt.title}</p>
          <p className="truncate text-[11px] font-semibold uppercase tracking-[0.05em] text-volt">
            {prompt.category}
          </p>
        </div>
        <span className="shrink-0 rounded-xl bg-volt px-3 py-1.5 text-xs font-semibold text-paper">
          Copy
        </span>
      </div>
    </div>
  );
}

/*
 * Device shot per the reference: one large phone with a real feed screen,
 * composed from the landing's own card components until real app
 * screenshots exist.
 */
export function AppShowcase({ feed }: { feed: Prompt[] }) {
  return (
    <section className="px-4 pb-20">
      <p className="sr-only">Preview of the Prime Prompts app feed</p>
      <Reveal className="flex justify-center">
        <div
          aria-hidden="true"
          className="w-[320px] rounded-[3rem] border-[10px] border-obsidian bg-paper shadow-cta md:w-[360px]"
        >
          <div className="flex flex-col gap-3 px-4 pb-4 pt-3">
            <div className="flex items-center justify-between px-2 text-xs font-bold">
              <span>9:41</span>
              <span className="flex items-center gap-1 text-volt">
                <Fire weight="fill" className="size-4" />
                Trending Today
              </span>
            </div>
            {feed.map((prompt) => (
              <FeedCard key={prompt.id} prompt={prompt} />
            ))}
            <div className="mt-1 flex items-center justify-around rounded-full bg-obsidian px-6 py-3 text-paper">
              <House weight="fill" className="size-5 text-volt" />
              <MagnifyingGlass className="size-5" />
              <Star className="size-5" />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
