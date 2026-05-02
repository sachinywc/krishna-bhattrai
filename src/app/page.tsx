import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import MissionVision from "@/components/sections/MissionVision";
import Packages from "../components/sections/Packages";
import Hospitality from "@/components/sections/Hospitality";
import Gallery from "@/components/sections/Gallery";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <MissionVision />
      <Packages />
      <Hospitality />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}