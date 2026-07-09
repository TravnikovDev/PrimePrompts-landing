import data from "@/data/prompts.json";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { TryOne } from "@/components/sections/TryOne";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Categories } from "@/components/sections/Categories";
import { Trending } from "@/components/sections/Trending";
import { Reassurance } from "@/components/sections/Reassurance";
import { FinalCta } from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero feed={data.trending.slice(0, 2)} />
        <TryOne prompt={data.featured} />
        <HowItWorks />
        <Categories categories={data.categories} />
        <Trending prompts={data.trending} />
        <Reassurance />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
