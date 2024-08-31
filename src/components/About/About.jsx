import React from "react";
import Biography from "./Biography";
import ProfileFrame from "./ProfileFrame";
import Education from "./Education";
import Stats from "./Stats";
import { AnimatedText } from "..";

const About = () => {
  return (
    <section
      id="about"
      className="flex min-h-screen w-full flex-col items-center justify-center xl:h-screen xl:pt-[10vh]"
    >
      <div className="flex h-screen w-full flex-col items-center pt-[10vh] xl:hidden">
        <div className="mx-10 my-10">
          <AnimatedText text="Innovate, Iterate, Inspire" />
        </div>
        <ProfileFrame />
      </div>

      <div className="flex h-screen w-full snap-start flex-col justify-center px-12 pt-[10vh] lg:gap-6 xl:hidden xl:snap-none">
        <div className="flex flex-col items-start gap-3">
          <Biography />
        </div>
        <div className="hidden lg:flex lg:flex-col lg:gap-6">
          <div className="flex flex-col">
            <Education />
          </div>
          <div className="flex justify-around">
            <Stats />
          </div>
        </div>
      </div>

      <div className="flex h-screen w-full snap-start flex-col justify-around px-12 pt-[10vh] lg:hidden lg:snap-none">
        <div className="flex flex-col gap-3">
          <Education />
        </div>
        <Stats />
      </div>

      <div className="hidden xl:my-10 xl:block">
        <AnimatedText text="Innovate, Iterate, Inspire" />
      </div>
      <div className="hidden xl:grid xl:h-full xl:w-full xl:grid-cols-9 xl:gap-8 xl:px-24">
        <div className="col-span-3 flex flex-col items-start gap-3 ">
          <Biography />
        </div>
        <div className="col-span-3 flex h-full items-center justify-center">
          <ProfileFrame />
        </div>
        <div className="col-span-3 flex h-1/2 flex-col gap-12">
          <div className="flex flex-col items-end gap-3 text-right">
            <Education />
          </div>
          <div className="flex items-center justify-end gap-14">
            <Stats />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
