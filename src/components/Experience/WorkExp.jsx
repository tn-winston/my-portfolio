import React from "react";

const WorkExp = ({ title, company, time }) => {
  return (
    <div className="grid grid-cols-8 ">
      <span className="relative col-span-1 flex h-5 items-center justify-center lg:h-6">
        <span className="h-2 w-2 rounded-full bg-neutral-700 dark:bg-neutral-200" />
        <span className="absolute h-2 w-2 animate-ping rounded-full bg-neutral-700 opacity-75 dark:bg-neutral-200" />
      </span>
      <div className="col-span-7">
        <p className="font-semibold">{title}</p>
        <p className="font-medium">{company}</p>
        <p className="font-light">{time}</p>
      </div>
    </div>
  );
};

export default WorkExp;
