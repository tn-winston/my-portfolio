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
    <div className="flex h-screen w-full snap-y snap-proximity flex-col gap-10 overflow-y-scroll scroll-smooth xl:snap-mandatory">
      <NavBar />
      {sections.map((component, idx) => (
        <section key={component.key} className="snap-start" id={component.key}>
          {component}
        </section>
      ))}
      <div className="hidden xl:fixed xl:bottom-2 xl:right-2 xl:block">
        <HireMeWheel />
      </div>
      <Footer />
    </div>
  );
}
