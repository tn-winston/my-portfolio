import React from "react";
import MotionLink from "./MotionLink";
import { motion } from "framer-motion";

const externalHoverEffect = {
  initial: {
    backgroundColor: "#1C1D20",
    color: "#FFFFFF",
  },
  whileHover: {
    y: -4,
    boxShadow: "0 10px 20px 0 rgba(0, 0, 0, 0.5)",
  },
  whileTap: {
    scale: 0.95,
  },
};

const internalHoverEffect = {
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
  return (
    <MotionLink
      href={href}
      passHref
      target={target}
      className="relative flex h-12 w-44 items-center justify-center overflow-hidden rounded-xl text-xl font-medium"
      variants={externalHoverEffect}
      initial="initial"
      whileHover="whileHover"
      whileTap="whileTap"
      transition={{ duration: 0.3 }}
    >
      {children}
      <motion.span
        className="absolute -left-full -top-11 z-10 h-80 w-8 rotate-[30deg] blur-[20px] brightness-125"
        variants={internalHoverEffect}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      />
    </MotionLink>
  );
};

export default AnimatedButton;
