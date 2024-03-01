import React from "react";
import ProfileFrame from "./ProfileFrame";
import { AnimatedText, AnimatedNumber } from "..";

const Biography = () => {
  return (
    <section
      id="about"
      className="flex h-screen w-full flex-col items-center pt-[10vh]"
    >
      <div className="my-10">
        <AnimatedText text="Innovate, Iterate, Inspire" />
      </div>
      <div className="grid w-full grow grid-cols-9 gap-8 px-24">
        <div className="col-span-3 flex flex-col items-start gap-3">
          <h2 className="text-lg font-bold uppercase text-neutral-800">
            Biography
          </h2>
          <p>
            Hello, I'm Tan Nguyen; you may refer to me as Winston. I'm a
            frontend developer dedicated to crafting visually appealing and
            functional digital experiences. In every project I undertake, I
            consistently seek innovative approaches to actualize the visions of
            my clients with a committment to design excellence.
          </p>
          <p>
            For me, every pixel on the screen tells a story written in code and
            shaped with creativity. Driven by a passion for perfection, I always
            prioritize continuous refinement, striving to ensure that each pixel
            is brought to life with its fullest potential.
          </p>
          <p>
            Igniting curiosity among end-users is at the core of my methodology,
            where I meticulously attend to details and embrace a mindset of
            perpetual improvement. I am enthusiastic about taking on new
            challenges, exploring progressive solutions, and bringing my
            expertise to your next project.
          </p>
        </div>
        <div className="col-span-3 flex h-full items-center justify-center">
          <ProfileFrame />
        </div>
        <div className="col-span-3 flex h-1/2 flex-col gap-12">
          <div className="flex flex-col items-end gap-3 text-right">
            <h2 className="text-lg font-bold uppercase text-neutral-800">
              Education
            </h2>
            <div>
              <p className="font-bold">
                Bachelor of Engineering In Software Engineering
              </p>
              <p>2018-2022 | Carleton University, Ottawa, ON</p>
            </div>
          </div>
          <div className="flex items-center justify-end gap-14">
            <div className="flex flex-col items-center justify-center">
              <span className="text-7xl font-bold">
                <AnimatedNumber value={1} />+
              </span>
              <h2 className="font-medium">Year Experience</h2>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="text-7xl font-bold">
                <AnimatedNumber value={20} />+
              </span>
              <h2 className="font-medium">Completed Projects</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Biography;
