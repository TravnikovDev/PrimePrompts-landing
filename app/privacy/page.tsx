import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy. Prime Prompts",
};

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-3xl px-4 pb-20 pt-32">
        <h1 className="font-display text-4xl uppercase leading-none md:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-charcoal">Last updated: July 9, 2026</p>

        <div className="mt-10 flex flex-col gap-6 text-base leading-[1.5] text-onyx">
          <p>
            This website (primeprompts.app) is a static informational page for
            the Prime Prompts mobile app. It does not require an account, does
            not set cookies, and does not collect, store, or share any
            personal data.
          </p>
          <p>
            The site is hosted on GitHub Pages. GitHub may log standard
            technical request data (such as IP addresses) as part of
            operating the hosting service; see GitHub&apos;s privacy
            statement for details.
          </p>
          <p>
            When the Prime Prompts mobile app launches, its own privacy
            policy covering app usage will be published here.
          </p>
          <p>
            Questions? Write to{" "}
            <a
              href="mailto:travnikovrn@gmail.com"
              className="font-semibold text-volt hover:text-volt-pressed"
            >
              travnikovrn@gmail.com
            </a>
            .
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
