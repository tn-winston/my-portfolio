import React from "react";
import MotionLink from "./MotionLink";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

const externalEffect = {
  light: {
    initial: {
      backgroundColor: "#1C1D20",
      color: "#E5E5E5",
    },
    whileHover: {
      y: -4,
      boxShadow: "0 10px 20px 0 rgba(28, 29, 32, 0.5)",
    },
    whileTap: {
      scale: 0.95,
    },
  },
  dark: {
    initial: {
      backgroundColor: "#00B8FC",
      color: "#404040",
    },
    whileHover: {
      y: -4,
      boxShadow: "0 10px 20px 0 rgba(0, 184, 252, 0.5)",
    },
    whileTap: {
      scale: 0.95,
    },
  },
};

const internalEffect = {
  initial: {
    opacity: 0,
    backgroundColor: "#FFFFFF",
  },
  whileHover: {
    left: "100%",
    opacity: 0.9,
  },
  whileTap: {},
};

const AnimatedButton = ({ href, target, children }) => {
  const { theme } = useTheme();
  const key = theme;

  return (
    <MotionLink
      key={key}
      href={href}
      passHref
      target={target}
      className="relative flex h-12 w-40 items-center justify-center overflow-hidden rounded-xl"
      variants={theme === "dark" ? externalEffect.dark : externalEffect.light}
      initial="initial"
      whileHover="whileHover"
      whileTap="whileTap"
      transition={{ duration: 0.3 }}
    >
      {children}
      <motion.span
        className="absolute -left-full -top-11 z-10 h-80 w-8 rotate-[30deg] blur-[20px] brightness-125"
        variants={internalEffect}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      />
    </MotionLink>
  );
};

export default AnimatedButton;
