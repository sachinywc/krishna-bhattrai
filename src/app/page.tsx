import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import MissionVision from "@/components/sections/MissionVision";
import Experiences from "@/components/sections/Experiences";
import Packages from "../components/sections/Packages";
import Hospitality from "@/components/sections/Hospitality";
import Testimonials from "@/components/sections/Testimonials";
import Gallery from "@/components/sections/Gallery";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <MissionVision />
      <Experiences />
      <Packages />
      <Hospitality />
      <Testimonials />
      <Gallery />
      <Contact />
    </>
  );
}