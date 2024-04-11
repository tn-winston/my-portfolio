import React from "react";
import Image from "next/image";
import { AnimatedButton, AnimatedText } from "@/components";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import profile from "../../../public/profileIntro.png";

const Intro = () => {
  return (
    <div className="relative flex h-screen w-full items-center overflow-hidden rounded-b-3xl">
      <Image
        priority
        src={profile}
        alt="Profile Intro"
        height={585}
        className="self-end"
      />
      <div className="absolute left-1/2 flex flex-col justify-center gap-6 text-wrap pr-24">
        <AnimatedText text="Brushing Pixels to Life" />
        <p className="text-lg">
          As an innovative frontend developer and design aficionado, I am
          dedicated to transforming conceptual ideas into intuitive, aesthetic,
          and user-centered web applications. Explore my latest projects and
          designs to experience the seamless fusion of React expertise and a
          passion for shaping exceptional web experiences.
        </p>
        <div className="flex items-center gap-8">
          <AnimatedButton href="/#about" target="_self">
            <span>Explore</span>
          </AnimatedButton>
          <AnimatedButton href="/Resume.pdf" target="_blank">
            <span>Resume</span>
            <FaArrowUpRightFromSquare className="ml-4" />
          </AnimatedButton>
        </div>
      </div>
    </div>
  );
};

export default Intro;
