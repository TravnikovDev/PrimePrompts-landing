import { AppStoreLogo, GooglePlayLogo } from "@phosphor-icons/react/dist/ssr";

/*
 * TODO: replace with official App Store / Google Play badge assets and real
 * store links once the app is published. Styled as the DESIGN.md badge pair:
 * two dark pills, white logo + text.
 */
export function StoreBadges() {
  const base =
    "inline-flex items-center gap-2.5 rounded-full bg-obsidian px-6 py-3 text-base font-semibold text-paper transition-all duration-200 hover:bg-onyx active:scale-[0.98]";

  return (
    <div className="flex flex-wrap items-center gap-3">
      <a href="#" aria-disabled="true" className={base}>
        <AppStoreLogo className="size-5" />
        App Store
      </a>
      <a href="#" aria-disabled="true" className={base}>
        <GooglePlayLogo className="size-5" />
        Google Play
      </a>
    </div>
  );
}
