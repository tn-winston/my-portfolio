import React from "react";

const CircleText = () => {
  return (
    <div className="animate-slow-spin cursor-default text-xl font-medium">
      <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <path
            id="circlePath"
            d="M100,20A80,80 0 1,1 100,180A80,80 0 1,1 100,20"
            fill="transparent"
          />
        </defs>
        <text>
          <textPath href="#circlePath" textLength="485">
            Frontend Developer - UI/UX Designer -
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default CircleText;
