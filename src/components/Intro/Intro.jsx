import React from "react";
import Image from "next/image";
import profile from "../../../public/profile_banner.png";
import profile_res from "../../../public/profile_banner_crop.png";
import { AnimatedButton, AnimatedText } from "@/components";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const Intro = () => {
  return (
    <div
      className="flex min-h-screen w-full flex-col items-center gap-4 overflow-y-scroll
                 pt-[10vh] md:gap-5 lg:gap-6
                 xl:relative xl:flex-row xl:gap-0 xl:overflow-hidden xl:rounded-b-3xl"
    >
      <div
        className="relative h-[250px] w-full overflow-hidden rounded-b-3xl 
                  md:h-[600px] lg:h-[700px]
                  xl:h-auto xl:self-end"
      >
        <Image
          priority
          src={profile_res}
          alt="Profile Intro"
          fill
          style={{ objectFit: "contain" }}
          className="block xl:hidden"
        />
        <Image
          priority
          src={profile}
          alt="Profile Intro"
          height={585}
          width="auto"
          className="hidden xl:block"
        />
      </div>
      <div
        className="flex w-full flex-col items-center justify-center gap-4
                  md:gap-5 lg:gap-6 
                  xl:absolute xl:bottom-0 xl:left-1/2 xl:top-0 xl:w-auto xl:items-start"
      >
        <AnimatedText
          text="Brushing Pixels to Life"
          fontSize="text-3xl md:text-4xl lg:text-5xl"
        />
        <p
          className="w-full px-5 text-center text-base font-light 
                      md:px-8 md:text-lg 
                      lg:px-16 lg:text-xl
                      xl:pl-0 xl:pr-24 xl:text-left"
        >
          As an innovative frontend&nbsp;developer and design&nbsp;engineer, I
          specialize in transforming conceptual ideas into intuitive, aesthetic,
          and user&#8209;centered web&nbsp;applications. Explore my latest
          projects and designs to experience the seamless fusion of React
          expertise with a passion for creating exceptional
          web&nbsp;experiences.
        </p>
        <div
          className="flex w-full justify-center gap-4
                        md:gap-6 lg:gap-8 
                        xl:justify-start"
        >
          <AnimatedButton href="/#about" target="_self">
            <span className="text-sm md:text-base lg:text-lg">Explore</span>
          </AnimatedButton>
          <AnimatedButton href="/Resume_Winston.pdf" target="_blank">
            <span className="text-sm md:text-base lg:text-lg">Resume</span>
            <FaArrowUpRightFromSquare className="ml-4" />
          </AnimatedButton>
        </div>
      </div>
    </div>
  );
};

export default Intro;
