import React from "react";
import CircleText from "./CircleText";
import HireButton from "./HireButton";

const HireMeWheel = () => {
  return (
    <div className="relative flex h-[200px] w-[200px] items-center justify-center">
      <div className="absolute hidden lg:block">
        <CircleText />
      </div>
      <HireButton />
    </div>
  );
};

export default HireMeWheel;
