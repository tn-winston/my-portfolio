import React from "react";
import Intro from "@/components/Intro/Intro";
import About from "@/components/About/About";
import Experience from "@/components/Experience/Experience";
import Projects from "@/components/Projects/Projects";
import NavBar from "@/components/Header/NavBar";
import Footer from "@/components/Footer/Footer";
import HireMeWheel from "@/components/Wheel/HireMeWheel";

const sections = [
  <Intro key="intro" />,
  <About key="about" />,
  <Experience key="experience" />,
  <Projects key="projects" />,
];

export default function Home() {
  return (
    <div className="flex h-screen snap-y snap-proximity flex-col gap-10 overflow-x-hidden overflow-y-scroll scroll-smooth xl:snap-mandatory">
      <NavBar />

      {sections.map((component, idx) => (
        <section
          key={component.key}
          className="relative snap-start"
          id={component.key}
        >
          {component}
          <div className="hidden xl:absolute xl:bottom-2 xl:right-2 xl:block">
            <HireMeWheel />
          </div>
        </section>
      ))}
      <Footer />
    </div>
  );
}
