import React from "react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import DarkIcon from "../../../public/darkThemeIcon.svg";
import LightIcon from "../../../public/lightThemeIcon.svg";
import Image from "next/image";

const buttonVariants = {
  initial: { opacity: 1 },
  hover: {
    rotate: 360,
    transition: { duration: 2, repeat: Infinity, ease: "linear" },
  },
  tap: { opacity: 0, transition: { duration: 0.2 } },
};

const ToggleThemeButton = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <button>X</button>;
  }

  return (
    <motion.button
      onClick={() => (theme === "dark" ? setTheme("light") : setTheme("dark"))}
      variants={buttonVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
    >
      <Image
        src={theme === "dark" ? DarkIcon : LightIcon}
        alt={theme === "dark" ? "Dark Icon" : "Light Icon"}
        width={22}
        height={22}
      />
    </motion.button>
  );
};

export default ToggleThemeButton;
