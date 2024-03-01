import React from "react";
import { motion } from "framer-motion";

const fadeInContainer = {
  initial: {},
  animate: {
    transition: {
      delay: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const fadeInWord = {
  initial: { opacity: 0, y: -50 },
  animate: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const AnimatedText = ({ text }) => {
  return (
    <motion.div
      variants={fadeInContainer}
      initial="initial"
      animate="animate"
      className="flex flex-wrap items-center text-5xl font-semibold capitalize text-neutral-800"
    >
      {text.split(" ").map((word, index) => (
        <motion.span variants={fadeInWord} key={index}>
          {word}&nbsp;
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;
