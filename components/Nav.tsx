export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-surface/90 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <a href="#" className="text-lg font-bold tracking-tight">
          Prime<span className="text-accent">Prompts</span>
        </a>
        <a
          href="#get"
          className="rounded-full bg-accent px-5 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-accent-pressed active:scale-[0.98]"
        >
          Get the app
        </a>
      </div>
    </header>
  );
}
