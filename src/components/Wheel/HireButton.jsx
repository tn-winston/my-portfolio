import React from "react";
import MotionLink from "../MotionLink";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

const externalEffect = {
  light: {
    initial: {
      backgroundColor: "#1C1D20",
      color: "#E5E5E5",
    },
    whileHover: { boxShadow: "0 10px 20px 0 rgba(28, 29, 32, 0.5)" },
    whileTap: { scale: 0.95 },
  },
  dark: {
    initial: {
      backgroundColor: "#383838",
      border: "2px #FFFFFF",
    },
    whileHover: { boxShadow: "0 10px 20px 0 rgba(56, 56, 56, 0.5)" },
    whileTap: { scale: 0.95 },
  },
};

const internalEffect = {
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

const HireButton = () => {
  const { theme } = useTheme();
  const key = theme;
  return (
    <MotionLink
      key={key}
      href="mailto:tn.winston@outlook.com"
      className="relative flex h-[100px] w-[100px] items-center justify-center overflow-hidden rounded-full text-lg"
      variants={theme === "dark" ? externalEffect.dark : externalEffect.light}
      initial="initial"
      whileHover="whileHover"
      whileTap="whileTap"
    >
      <span className="absolute z-20">Hire Me</span>
      <motion.span
        variants={theme === "dark" ? internalEffect.dark : internalEffect.light}
        className="absolute z-10 h-[80%] w-[25%] blur-[20px] brightness-125"
      />
    </MotionLink>
  );
};

export default HireButton;
