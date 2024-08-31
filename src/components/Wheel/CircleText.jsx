import React from "react";

const CircleText = () => (
  <div className="animate-slow-spin cursor-default">
    <svg
      width="200"
      height="200"
      xmlns="http://www.w3.org/2000/svg"
      className="fill-neutral-700 text-xl font-medium dark:fill-neutral-200"
    >
      <defs>
        <path
          id="circlePath"
          d="M100,20A80,80 0 1,1 100,180A80,80 0 1,1 100,20"
          fill="transparent"
        />
      </defs>
      <text>
        <textPath href="#circlePath" textLength="490">
          Frontend Developer - Design Engineer -
        </textPath>
      </text>
    </svg>
  </div>
);

export default CircleText;
