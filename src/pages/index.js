import React from "react";
import Intro from "@/components/Intro/Intro";
import Biography from "@/components/About/Biography";
import Experience from "@/components/Experience/Experience";
import Projects from "@/components/Projects/Projects";

const sections = [
  <Intro key="intro" />,
  <Biography key="bio" />,
  <Experience key="exp" />,
  <Projects key="projects" />,
];
export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      {sections.map((component) => (
        <section key={component.key} className="snap-start">
          {component}
        </section>
      ))}
    </div>
  );
}
