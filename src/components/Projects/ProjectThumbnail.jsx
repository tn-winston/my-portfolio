import React from "react";
import Image from "next/image";

const ProjectThumbnail = ({ banner }) => {
  return (
    <div className="h-full w-full bg-mystic px-5 py-2 dark:bg-midnight-city lg:py-5 xl:py-6 2xl:py-7 ">
      <div className="relative h-full w-full">
        <Image
          src={banner}
          alt="Project Snippet"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
};

export default ProjectThumbnail;
