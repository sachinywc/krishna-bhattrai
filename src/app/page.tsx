import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Preserving from "@/components/sections/Preserving";
import Podcast from "@/components/sections/Podcast";
import Partners from "@/components/sections/Partners";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Preserving />
      <Podcast />
      <Partners />
      <Footer />
    </>
  );
}