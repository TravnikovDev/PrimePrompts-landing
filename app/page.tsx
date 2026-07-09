import data from "@/data/prompts.json";
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

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustStrip />
        <AppShowcase feed={data.trending.slice(0, 2)} />
        <TryOne prompt={data.featured} />
        <Trending prompts={data.trending} />
        <Categories categories={data.categories} />
        <Reassurance />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
