import React from "react";
import AnimatedNumber from "../AnimatedNumber";

const Stats = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <span className="text-7xl font-bold">
          <AnimatedNumber value={2} />+
        </span>
        <h2 className="font-medium">Year Experience</h2>
      </div>
      <div className="flex flex-col items-center justify-center">
        <span className="text-7xl font-bold">
          <AnimatedNumber value={30} />+
        </span>
        <h2 className="font-medium">Completed Projects</h2>
      </div>
    </>
  );
};

export default Stats;
