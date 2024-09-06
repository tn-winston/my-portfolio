import React from "react";

const WorkExp = ({ title, company, time }) => {
  return (
    <div className="grid grid-cols-8 ">
      <div className="relative col-span-1 flex h-full w-full items-center justify-center ">
        <div className="h-2 w-2 rounded-full bg-neutral-700 dark:bg-neutral-200" />
        <div className="absolute h-2 w-2 animate-ping rounded-full bg-neutral-700 opacity-75 dark:bg-neutral-200" />
      </div>
      <p className="col-span-7 col-start-2 font-semibold">{title}</p>
      <p className="col-span-7 col-start-2 font-medium">{company}</p>
      <p className="col-span-7 col-start-2 font-light">{time}</p>
    </div>
  );
};

export default WorkExp;
