import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import profile from "../../../public/profileFrame.jpg";

const jshineGlow = {
  initial: {
    backgroundImage: "linear-gradient(0deg, #12c2e9, #c471ed, #f64f59)",
  },
  animate: {
    backgroundImage: "linear-gradient(360deg, #12c2e9, #c471ed, #f64f59)",
  },
};

const ProfileFrame = () => {
  return (
    <div className="relative h-[95%] w-full">
      <motion.div
        variants={jshineGlow}
        initial="initial"
        animate="animate"
        className="absolute inset-1 z-10 rounded-2xl blur-sm"
        transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
      />
      <motion.div
        variants={jshineGlow}
        initial="initial"
        animate="animate"
        className="absolute inset-2 z-20 rounded-2xl"
        transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
      />
      <div className="absolute inset-3 z-30 flex items-end justify-center overflow-hidden rounded-2xl bg-white">
        <Image src={profile} alt="Profile Picture" />
      </div>
    </div>
  );
};

export default ProfileFrame;
