export function Footer() {
  return (
    <footer className="mx-auto max-w-[1200px] px-4 pb-8">
      <div className="flex flex-col items-start justify-between gap-4 rounded-full bg-obsidian px-6 py-4 md:flex-row md:items-center">
        <p className="text-sm font-bold tracking-tight text-paper">
          Prime<span className="text-volt">Prompts</span>
        </p>
        <a
          href="mailto:travnikovrn@gmail.com"
          className="text-sm text-paper transition-colors hover:text-volt"
        >
          Contact
        </a>
      </div>
    </footer>
  );
}
