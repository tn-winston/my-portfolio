import React from "react";
import Image from "next/image";
import Link from "next/link";
import MediaIcon from "../MediaIcon";
import AnimatedButton from "../AnimatedButton";
import { githubIcon, darkGithubIcon } from "@/assets/MediaIcon";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const ProjectCard = ({
  banner,
  link,
  type,
  title,
  description,
  hasRepo,
  repo,
}) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const iconSrc = () => {
    if (!mounted) {
      return;
      ("data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");
    }
    switch (theme) {
      case "light":
        return githubIcon;
        break;
      case "dark":
        return darkGithubIcon;
        break;
    }
  };
  return (
    <div className="flex h-full w-full flex-col overflow-y-auto bg-mystic pt-8 dark:bg-midnight-city lg:grid lg:grid-cols-2 lg:grid-rows-1">
      <div className="flex items-center justify-center">
        <Link
          href={link}
          target="_blank"
          passHref
          className="relative flex h-[150px] w-[90%] lg:h-[250px]"
        >
          <Image
            src={banner}
            alt="Project Snippet"
            fill
            style={{ objectFit: "contain" }}
          />
        </Link>
      </div>
      <div className="flex flex-col justify-center gap-2 p-4 lg:col-span-1 lg:row-span-1">
        <div className="text-lg font-medium text-[#cd5c84] lg:text-xl">
          {type}
        </div>
        <Link href={link}>
          <span className="group relative text-2xl font-semibold lg:text-4xl">
            {title}
            <span className=" absolute -bottom-[2px] left-0 h-0.5 w-0  bg-neutral-700 transition-all duration-500 ease-in-out group-hover:w-[100%] dark:bg-neutral-200" />
          </span>
        </Link>
        <p className="text-sm lg:text-base">{description}</p>
        <div className="flex items-end gap-8 pt-2">
          <AnimatedButton href={link} target="_blank">
            <span className="text-sm lg:text-base">Demo</span>
          </AnimatedButton>
          {hasRepo && <MediaIcon href={repo} src={iconSrc()} name="Github" />}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
