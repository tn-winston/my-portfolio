import React from "react";
import Image from "next/image";

const TechIcon = ({ src, name }) => {
  return (
    <div className="flex items-center justify-center gap-3 lg:justify-start lg:pl-16 2xl:flex-col 2xl:pl-0">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#FAE6E6] dark:bg-[#E0F8F9]">
        <Image src={src} alt={`${name} icon`} width={45} height={45} />
      </div>
      <h3 className="hidden lg:block">{name}</h3>
    </div>
  );
};

export default TechIcon;
