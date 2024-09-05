import React from "react";
import Biography from "./Biography";
import ProfileFrame from "./ProfileFrame";
import Education from "./Education";
import Stats from "./Stats";
import { AnimatedText } from "@/components";

const About = () => {
  return (
    <>
      <div className="flex min-h-screen w-full flex-col items-center pb-4 pt-[10vh] xl:hidden">
        <div className="my-10">
          <AnimatedText
            text="Innovate, Iterate, Inspire"
            fontSize="text-3xl md:text-4xl"
          />
        </div>
        <ProfileFrame />
      </div>
      <div className="flex min-h-screen w-full snap-start flex-col px-12 pt-[20vh] md:gap-20 lg:gap-32 xl:hidden">
        <Biography />
        <div className="hidden md:flex md:flex-col md:gap-12 lg:gap-24">
          <div className="flex flex-col">
            <Education />
          </div>
          <div className="flex justify-around">
            <Stats />
          </div>
        </div>
      </div>
      <div className="flex min-h-screen w-full snap-start flex-col justify-center gap-20 px-12 pt-[10vh] md:hidden">
        <div className="flex flex-col gap-3">
          <Education />
        </div>
        <Stats />
      </div>
      <div className="hidden xl:flex xl:min-h-screen xl:w-full xl:flex-col xl:items-center xl:px-16 xl:pt-[10vh] 2xl:px-24">
        <div className="my-2 2xl:my-10">
          <AnimatedText
            text="Innovate, Iterate, Inspire"
            fontSize="text-3xl md:text-4xl"
          />
        </div>
        <div className="grid w-full grid-cols-9 gap-8 ">
          <div className="col-span-3 flex flex-col items-start gap-3 ">
            <Biography />
          </div>
          <div className="col-span-3 flex items-end justify-center">
            <ProfileFrame />
          </div>
          <div className="col-span-3 flex flex-col gap-12">
            <div className="flex flex-col items-end gap-3 text-right">
              <Education />
            </div>
            <div className="flex items-center justify-end gap-14">
              <Stats />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
