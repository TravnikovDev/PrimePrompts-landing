export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 py-10 md:flex-row md:items-center md:px-6">
        <p className="text-base font-bold tracking-tight">
          Prime<span className="text-accent">Prompts</span>
        </p>
        <a
          href="mailto:travnikovrn@gmail.com"
          className="text-base text-ink-muted transition-colors hover:text-ink"
        >
          Contact
        </a>
      </div>
    </footer>
  );
}
