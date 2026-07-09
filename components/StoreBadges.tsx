import { withBase } from "@/lib/asset";

/*
 * Official Apple / Google badge artwork per DESIGN.md's badge-pair component.
 * TODO: wire real store URLs once the app is published.
 */
export function StoreBadges() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <a
        href="#"
        aria-disabled="true"
        className="transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
      >
        <img
          src={withBase("/badges/app-store.svg")}
          alt="Download on the App Store"
          width={120}
          height={40}
          className="h-[46px] w-auto"
        />
      </a>
      <a
        href="#"
        aria-disabled="true"
        className="transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
      >
        <img
          src={withBase("/badges/google-play.png")}
          alt="Get it on Google Play"
          width={646}
          height={250}
          className="h-[68px] w-auto"
        />
      </a>
    </div>
  );
}
