import React from "react";
import CircleText from "./CircleText";
import MotionLink from "../MotionLink";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

const externalHoverEffect = {
  light: {
    initial: {
      backgroundColor: "#1C1D20",
      color: "#FFFFFF",
      x: "-50%",
      y: "-50%",
    },
    whileHover: { boxShadow: "0 10px 20px 0 rgba(28, 29, 32, 0.5)" },
    whileTap: { scale: 0.95 },
  },
  dark: {
    initial: {
      backgroundColor: "#383838",
      color: "#FFFFFF",
      x: "-50%",
      y: "-50%",
    },
    whileHover: { boxShadow: "0 10px 20px 0 rgba(56, 56, 56, 0.5)" },
    whileTap: { scale: 0.95 },
  },
};

const internalHoverEffect = {
  light: {
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
  },
  dark: {
    initial: {
      backgroundImage: "linear-gradient(to right, #20002c, #cbb4d4)",
      opacity: 0,
    },
    whileHover: {
      opacity: 1,
      rotate: 360,
      transition: { rotate: { delay: 0.2, duration: 0.5 }, ease: "easeInOut" },
    },
    whileTap: {},
  },
};

const HireMeWheel = () => {
  const { theme } = useTheme();
  const key = theme;
  return (
    <div className="relative">
      <CircleText />
      <MotionLink
        key={key}
        href="mailto:winston.tn@outlook.com"
        className="absolute left-1/2 top-1/2 flex h-[100px] w-[100px] items-center justify-center overflow-hidden rounded-full text-xl"
        variants={
          theme === "dark"
            ? externalHoverEffect.dark
            : externalHoverEffect.light
        }
        initial="initial"
        whileHover="whileHover"
        whileTap="whileTap"
      >
        <span>Hire Me</span>
        <motion.span
          variants={
            theme === "dark"
              ? internalHoverEffect.dark
              : internalHoverEffect.light
          }
          className="absolute -z-10 h-[80%] w-[25%] blur-[20px] brightness-125"
        />
      </MotionLink>
    </div>
  );
};

export default HireMeWheel;
