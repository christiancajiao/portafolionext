import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Carousel from "@/components/sections/Carousel";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="h-full w-full bg-background">
      <div className="flex flex-col gap-20">
        <Navbar />
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Carousel />
        <Contact />
      </div>
    </main>
  );
}
