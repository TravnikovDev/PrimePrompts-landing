export function Nav() {
  return (
    <header className="fixed inset-x-0 top-4 z-40 px-4">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between rounded-full bg-obsidian py-2.5 pl-6 pr-2.5">
        <a href="#" className="text-base font-bold tracking-tight text-paper">
          Prime<span className="text-volt">Prompts</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#try"
            className="text-sm text-paper transition-colors hover:text-volt"
          >
            Try it
          </a>
          <a
            href="#trending"
            className="text-sm text-paper transition-colors hover:text-volt"
          >
            Trending
          </a>
          <a
            href="#categories"
            className="text-sm text-paper transition-colors hover:text-volt"
          >
            Categories
          </a>
        </nav>
        <a
          href="#get"
          className="rounded-xl bg-volt px-5 py-2.5 text-sm font-semibold text-paper transition-all duration-200 hover:bg-volt-pressed active:scale-[0.98]"
        >
          Get the app
        </a>
      </div>
    </header>
  );
}
