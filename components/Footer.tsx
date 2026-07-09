import Link from "next/link";

const columns = [
  {
    heading: "Download",
    links: [
      { label: "App Store", href: "#get" },
      { label: "Google Play", href: "#get" },
    ],
  },
  {
    heading: "Pages",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Use", href: "/terms" },
      { label: "Contact", href: "mailto:travnikovrn@gmail.com" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="bg-obsidian">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-6 py-14 md:grid-cols-[2fr_1fr_1fr]">
        <div className="flex flex-col gap-3">
          <p className="text-lg font-bold tracking-tight text-paper">
            Prime<span className="text-volt">Prompts</span>
          </p>
          <p className="max-w-[36ch] text-sm leading-[1.5] text-ash">
            A curated feed of fun AI prompts. Copy one, paste it into your
            favorite AI tool, and see what happens.
          </p>
          <p className="mt-4 text-xs text-ash">
            © 2026 Prime Prompts. All product names and trademarks belong to
            their respective owners.
          </p>
        </div>
        {columns.map((column) => (
          <nav key={column.heading} className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.05em] text-volt">
              {column.heading}
            </p>
            {column.links.map((link) =>
              link.href.startsWith("/") ? (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-paper transition-colors hover:text-volt"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-paper transition-colors hover:text-volt"
                >
                  {link.label}
                </a>
              ),
            )}
          </nav>
        ))}
      </div>
    </footer>
  );
}
