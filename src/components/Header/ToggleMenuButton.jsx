import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MenuIcon, CloseIcon } from "../IconFactory";

const buttonVariants = {
  initial: { opacity: 1 },
  tap: { opacity: 0, transition: { duration: 0.2 } },
};

const ToggleMenuButton = ({ isOpened }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return;
    ("data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");
  }

  return (
    <motion.div
      variants={buttonVariants}
      initial="initial"
      whileTap="tap"
      className="flex h-8 w-8 items-center justify-center rounded-lg text-xl hover:bg-[#CCD0D9] hover:transition-all hover:ease-in-out"
    >
      {isOpened ? <CloseIcon /> : <MenuIcon />}
    </motion.div>
  );
};

export default ToggleMenuButton;
