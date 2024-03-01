import React from "react";
import Intro from "@/components/Intro/Intro";
import Biography from "@/components/About/Biography";
import Experience from "@/components/Experience/Experience";
import Projects from "@/components/Projects/Projects";

const sections = [<Intro />, <Biography />, <Experience />, <Projects />];
export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      {sections.map((component, idx) => (
        <section key={idx} className="snap-start">
          {component}
        </section>
      ))}
    </div>
  );
}
