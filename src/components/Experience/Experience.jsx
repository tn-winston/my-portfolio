import React from "react";
import Skills from "./Skills";
import WorkSum from "./WorkSum";
import AnimatedText from "../AnimatedText";

const Experience = () => {
  return (
    <>
      <div className="flex min-h-screen w-full snap-start flex-col items-center px-12 pt-[10vh] lg:gap-32 lg:pt-[20vh] xl:hidden">
        <div className="hidden lg:flex lg:flex-row lg:items-center lg:gap-20">
          <div className="my-10">
            <AnimatedText text="Skills" fontSize="text-4xl" />
          </div>
          <div className="grid w-full grid-cols-3 justify-center gap-9 ">
            <Skills />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-28">
          <div className="my-10">
            <AnimatedText text="Experience" fontSize="text-3xl md:text-4xl" />
          </div>
          <ul className="flex flex-col gap-6 ">
            <WorkSum />
          </ul>
        </div>
      </div>
      <div className="flex min-h-screen w-full snap-start flex-col items-center px-6 pt-[10vh] md:px-12 lg:hidden">
        <div className="my-10">
          <AnimatedText text="Skills" fontSize="text-3xl md:text-4xl" />
        </div>
        <div className="grid w-full grid-cols-3 justify-center gap-9 ">
          <Skills />
        </div>
      </div>

      <div className="hidden xl:flex xl:min-h-screen xl:w-full xl:snap-start xl:flex-col xl:items-center xl:px-24 xl:pt-[10vh]">
        <div className="my-10">
          <AnimatedText text="Experience" fontSize="text-4xl" />
        </div>
        <div className="grid w-full grid-cols-2 gap-6">
          <div className="col-span-1 grid grid-cols-4 justify-center gap-x-4 gap-y-8">
            <Skills />
          </div>
          <ul className="col-span-1 flex h-1/2 flex-col justify-between">
            <WorkSum />
          </ul>
        </div>
      </div>
    </>
  );
};

export default Experience;
