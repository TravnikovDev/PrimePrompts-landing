import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Use. Prime Prompts",
};

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-3xl px-4 pb-20 pt-32">
        <h1 className="font-display text-4xl uppercase leading-none md:text-5xl">
          Terms of Use
        </h1>
        <p className="mt-3 text-sm text-charcoal">Last updated: July 9, 2026</p>

        <div className="mt-10 flex flex-col gap-6 text-base leading-[1.5] text-onyx">
          <p>
            Prime Prompts provides curated AI prompt ideas for personal,
            entertainment, and creative use. Content on this site and in the
            app is provided as-is, without warranties of any kind.
          </p>
          <p>
            Prompts are meant to be used with third-party AI tools such as
            ChatGPT, Gemini, Claude, or image generators. Those tools have
            their own terms and policies; results you generate with them are
            your responsibility, and Prime Prompts is not affiliated with or
            endorsed by their makers. All product names and trademarks belong
            to their respective owners.
          </p>
          <p>
            You are welcome to copy and share the prompts. Please do not
            scrape or republish the curated collection wholesale as a
            competing product.
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
