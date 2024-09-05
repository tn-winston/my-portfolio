import React from "react";
import Image from "next/image";

const ProjectThumbnail = ({ banner }) => {
  return (
    <div className="h-full w-full bg-mystic px-5 dark:bg-midnight-city md:py-5 lg:py-6 xl:py-7 2xl:py-8">
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
