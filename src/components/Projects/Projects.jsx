import React from "react";
import AnimatedText from "../AnimatedText";
import Carousel from "./Carousel";

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex h-screen w-full flex-col items-center pt-[10vh] md:gap-8"
    >
      <div className="mb-12 mt-6">
        <AnimatedText text="Projects" />
      </div>
      <Carousel />
    </section>
  );
};

export default Projects;
