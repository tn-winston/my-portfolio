import React from "react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { LightModeIcon, DarkModeIcon } from "../IconFactory";

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
    return;
    ("data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");
  }

  return (
    <motion.button
      onClick={() => (theme === "dark" ? setTheme("light") : setTheme("dark"))}
      variants={buttonVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      className="flex h-8 w-8 items-center justify-center rounded-lg text-xl"
    >
      {theme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
    </motion.button>
  );
};

export default ToggleThemeButton;
