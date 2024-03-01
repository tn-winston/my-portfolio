import React from "react";
import Image from "next/image";
const TechIcon = ({ src, name }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#FFECEC]">
        <Image src={src} alt={`${name} icon`} width={45} height={45} />
      </div>
      <h3 className="font-medium">{name}</h3>
    </div>
  );
};

export default TechIcon;
