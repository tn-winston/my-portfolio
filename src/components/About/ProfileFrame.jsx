import React from "react";
import Image from "next/image";
import profile from "../../../public/profile_picture.png";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const jshineGlow = {
  light: {
    initial: {
      backgroundImage: "linear-gradient(0deg, #12c2e9, #c471ed, #f64f59)",
    },
    animate: {
      backgroundImage: "linear-gradient(360deg, #12c2e9, #c471ed, #f64f59)",
    },
  },
  dark: {
    initial: {
      backgroundImage: "linear-gradient(0deg, #cc2b5e, #753a88)",
    },
    animate: {
      backgroundImage: "linear-gradient(360deg, #cc2b5e, #753a88)",
    },
  },
};

const ProfileFrame = () => {
  const { theme } = useTheme();
  const [resetKey, setResetKey] = useState(theme); // to start animation of two motion.div at the same time

  useEffect(() => {
    setResetKey(theme);
  }, [theme]);

  return (
    <div className="relative h-2/3 w-2/3 md:w-[45%] xl:h-[80%] xl:w-full 2xl:h-[95%]">
      <motion.div
        key={`${resetKey}-1`}
        variants={theme === "dark" ? jshineGlow.dark : jshineGlow.light}
        initial="initial"
        animate="animate"
        className="absolute inset-1 z-10 rounded-2xl blur-sm"
        transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
      />
      <motion.div
        key={`${resetKey}-2`}
        variants={theme === "dark" ? jshineGlow.dark : jshineGlow.light}
        initial="initial"
        animate="animate"
        className="absolute inset-2 z-20 rounded-2xl"
        transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
      />
      <div className="absolute inset-3 z-30 flex items-end justify-center overflow-hidden rounded-2xl bg-light-theme dark:bg-dark-theme">
        <Image
          src={profile}
          alt="Profile Picture"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
};

export default ProfileFrame;
