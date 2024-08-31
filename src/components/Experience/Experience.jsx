import React from "react";
import Skills from "./Skills";
import WorkSum from "./WorkSum";
import AnimatedText from "../AnimatedText";

const Experience = () => {
  return (
    <section
      id="experience"
      className="flex min-h-screen w-full flex-col items-center 2xl:h-screen 2xl:pt-[10vh]"
    >
      <div className="flex h-screen w-full snap-start flex-col items-center px-10 pt-[10vh] 2xl:hidden 2xl:snap-none">
        <div className="mb-12 mt-6">
          <AnimatedText text="Experience" />
        </div>
        <ul className="flex h-full w-full flex-col gap-6 ">
          <WorkSum />
        </ul>
      </div>
      <div className="flex h-screen w-full snap-start flex-col items-center px-12 pt-[10vh] 2xl:hidden 2xl:snap-none">
        <div className="mb-12 mt-6">
          <AnimatedText text="Skills" />
        </div>
        <div className="grid w-full grid-cols-3 justify-center gap-8 ">
          <Skills />
        </div>
      </div>

      <div className="hidden 2xl:mb-12 2xl:mt-6 2xl:block">
        <AnimatedText text="Experience" />
      </div>
      <div className="hidden 2xl:grid 2xl:w-full 2xl:grow 2xl:grid-cols-2 2xl:gap-20 2xl:px-36">
        <div className="col-span-1 grid grid-cols-4 justify-center gap-4">
          <Skills />
        </div>
        <ul className="col-span-1 flex h-1/2 flex-col justify-between">
          <WorkSum />
        </ul>
      </div>
    </section>
  );
};

export default Experience;
