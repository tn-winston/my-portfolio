import React from "react";
import Image from "next/image";
import profile from "../../../public/profile_banner.png";
import profile_res from "../../../public/profile_banner_crop.png";
import { AnimatedButton, AnimatedText } from "@/components";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const Intro = () => {
  return (
    <div
      className="flex h-screen w-full flex-col items-center justify-center gap-6 pb-4 pt-[10vh]
                lg:flex-row lg:gap-0 lg:overflow-hidden lg:rounded-b-3xl lg:pb-0"
    >
      <div
        className="relative h-[40vh] w-full overflow-hidden rounded-b-3xl 
                  lg:h-auto lg:self-end"
      >
        <Image
          src={profile_res}
          alt="Profile Intro"
          fill
          style={{ objectFit: "contain" }}
          className="block lg:hidden"
        />
        <Image
          src={profile}
          alt="Profile Intro"
          height={585}
          width="auto"
          className="hidden lg:block"
        />
      </div>
      <div
        className="flex w-full flex-col items-center justify-center gap-4 px-7 
                  lg:absolute lg:left-1/2 lg:w-auto lg:-translate-y-[5vh] lg:items-start lg:gap-6 lg:px-0 lg:pr-24"
      >
        <AnimatedText text="Brushing Pixels to Life" />
        <p className="text px-4 text-center text-xl font-light lg:px-0 lg:text-left">
          As an innovative frontend&nbsp;developer and design&nbsp;engineer, I
          specialize in transforming conceptual ideas into intuitive, aesthetic,
          and user&#8209;centered web&nbsp;applications. Explore my latest
          projects and designs to experience the seamless fusion of React
          expertise with a passion for creating exceptional
          web&nbsp;experiences.
        </p>
        <div className="flex items-center justify-center gap-8">
          <AnimatedButton href="/#about" target="_self">
            <span>Explore</span>
          </AnimatedButton>
          <AnimatedButton href="/Resume_Winston.pdf" target="_blank">
            <span>Resume</span>
            <FaArrowUpRightFromSquare className="ml-4" />
          </AnimatedButton>
        </div>
      </div>
    </div>
  );
};

export default Intro;
