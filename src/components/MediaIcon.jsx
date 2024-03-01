import React from "react";
import Image from "next/image";
import MotionLink from "./MotionLink";

const MediaIcon = ({ href, src, name }) => {
  return (
    <MotionLink
      href={href}
      passHref
      target="_blank"
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.8 }}
    >
      <Image src={src} alt={`${name} icon`} width={30} height={30} />
    </MotionLink>
  );
};

export default MediaIcon;
