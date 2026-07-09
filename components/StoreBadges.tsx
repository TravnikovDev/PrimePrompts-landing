import { AppStoreLogo, GooglePlayLogo } from "@phosphor-icons/react/dist/ssr";

/*
 * TODO: replace with official App Store / Google Play badge assets and real
 * store links once the app is published. Until then these are honest
 * placeholder buttons, not fake badges.
 */
export function StoreBadges() {
  const base =
    "inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-base font-medium transition-transform duration-200 active:scale-[0.98]";

  return (
    <div className="flex flex-wrap items-center gap-3">
      <a
        href="#"
        aria-disabled="true"
        className={`${base} bg-ink text-surface hover:opacity-90`}
      >
        <AppStoreLogo className="size-5" />
        App Store
      </a>
      <a
        href="#"
        aria-disabled="true"
        className={`${base} border border-line bg-raised text-ink hover:border-ink-muted`}
      >
        <GooglePlayLogo className="size-5" />
        Google Play
      </a>
    </div>
  );
}
