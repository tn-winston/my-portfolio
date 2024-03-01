import React from "react";
import CircleText from "./CircleText";
import MotionLink from "../MotionLink";
import { motion } from "framer-motion";

const externalHoverEffect = {
  initial: {
    backgroundColor: "#1C1D20",
    color: "#ffffff",
    x: "-50%",
    y: "-50%",
  },
  whileHover: { boxShadow: "0 10px 20px 0 rgba(0, 0, 0, 0.5)" },
  whileTap: { scale: 0.95 },
};

const internalHoverEffect = {
  initial: {
    backgroundImage: "linear-gradient(45deg, #1abcfe, #161b1c)",
    opacity: 0,
  },
  whileHover: {
    opacity: 1,
    rotate: 360,
    transition: { rotate: { delay: 0.2, duration: 0.5 }, ease: "easeInOut" },
  },
  whileTap: {},
};

const HireMeWheel = () => {
  return (
    <div className="relative">
      <CircleText />
      <MotionLink
        href="mailto:winston.tn@outlook.com"
        className="absolute left-1/2 top-1/2 flex h-24 w-24 items-center justify-center overflow-hidden rounded-full text-xl"
        variants={externalHoverEffect}
        initial="initial"
        whileHover="whileHover"
        whileTap="whileTap"
      >
        <span>Hire Me</span>
        <motion.span
          variants={internalHoverEffect}
          className="absolute -z-10 h-[80%] w-[25%] blur-[20px] brightness-125"
        />
      </MotionLink>
    </div>
  );
};

export default HireMeWheel;
