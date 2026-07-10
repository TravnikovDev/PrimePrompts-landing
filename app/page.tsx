import { allCategories, getFeatured, trendingPrompts } from "@/lib/prompts";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { AppShowcase } from "@/components/sections/AppShowcase";
import { TryOne } from "@/components/sections/TryOne";
import { Categories } from "@/components/sections/Categories";
import { Trending } from "@/components/sections/Trending";
import { Reassurance } from "@/components/sections/Reassurance";
import { FinalCta } from "@/components/sections/FinalCta";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "Prime Prompts",
  description:
    "A curated feed of fun and trending AI prompts. Copy one, paste it into ChatGPT, Gemini, Claude or any image generator.",
  operatingSystem: "iOS, Android",
  applicationCategory: "EntertainmentApplication",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  url: "https://primeprompts.app",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main>
        <Hero />
        <TrustStrip />
        <AppShowcase feed={trendingPrompts().slice(0, 2)} />
        <TryOne prompt={getFeatured()} />
        <Trending prompts={trendingPrompts()} />
        <Categories categories={allCategories()} />
        <Reassurance />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
