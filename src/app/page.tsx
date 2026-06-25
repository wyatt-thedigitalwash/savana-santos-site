import Hero from "@/components/Hero";
import StickyNav from "@/components/StickyNav";
import Covers from "@/components/Covers";
import About from "@/components/About";
import Subscribe from "@/components/Subscribe";

export default function Home() {
  return (
    <>
      <Hero />
      <StickyNav />
      <Covers />
      <About />
      <Subscribe />
    </>
  );
}
