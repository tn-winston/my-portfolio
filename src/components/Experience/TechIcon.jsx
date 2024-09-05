import React from "react";
import Image from "next/image";

const TechIcon = ({ src, name }) => {
  return (
    <div className="flex items-center justify-center md:justify-start md:gap-3 xl:flex-col">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FAE6E6] dark:bg-[#E0F8F9]">
        <Image src={src} alt={`${name} icon`} width={45} height={45} />
      </div>
      <h3 className="hidden md:block">{name}</h3>
    </div>
  );
};

export default TechIcon;
