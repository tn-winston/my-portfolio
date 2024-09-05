import React from "react";
import AnimatedText from "../AnimatedText";
import Carousel from "./Carousel";

const Projects = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center pt-[10vh] md:gap-8">
      <div className="my-10">
        <AnimatedText text="Projects" fontSize="text-3xl md:text-4xl" />
      </div>
      <Carousel />
    </div>
  );
};

export default Projects;
