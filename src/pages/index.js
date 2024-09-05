import React from "react";
import Intro from "@/components/Intro/Intro";
import About from "@/components/About/About";
import Experience from "@/components/Experience/Experience";
import Projects from "@/components/Projects/Projects";

const sections = [
  <Intro key="intro" />,
  <About key="about" />,
  <Experience key="experience" />,
  <Projects key="projects" />,
];

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      {sections.map((component) => (
        <section key={component.key} className="snap-start" id={component.key}>
          {component}
        </section>
      ))}
    </div>
  );
}
