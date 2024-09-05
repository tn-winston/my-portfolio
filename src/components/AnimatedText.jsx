import React from "react";
import { motion } from "framer-motion";

const fadeInContainer = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.01,
      staggerChildren: 0.05,
    },
  },
};

const fadeInWord = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
};

const AnimatedText = ({ text, fontSize }) => {
  return (
    <motion.div
      variants={fadeInContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className={`flex flex-wrap justify-center ${fontSize} font-semibold capitalize text-neutral-800 dark:text-neutral-100`}
    >
      {text.split(" ").map((word, index, array) => (
        <motion.span variants={fadeInWord} key={index}>
          {word}
          {index < array.length - 1 && <>&nbsp;</>}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;
