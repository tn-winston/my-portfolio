import React from "react";
import CircleText from "./CircleText";
import HireButton from "./HireButton";

const HireMeWheel = () => {
  return (
    <div className="relative flex h-[200px] w-[200px] items-center justify-center">
      <div className="absolute inset-0 flex items-center justify-center">
        <CircleText />
      </div>
      <div className="relative z-10">
        <HireButton />
      </div>
    </div>
  );
};

export default HireMeWheel;
