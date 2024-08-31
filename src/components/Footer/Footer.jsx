import React from "react";
import MediaIcon from "../MediaIcon";
import { mediaIcon } from "@/constants";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const year = new Date().getFullYear();

const Footer = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const iconSrc = (item) => {
    if (!mounted) {
      return;
      ("data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");
    }
    switch (theme) {
      case "light":
        return item.lightIcon;
        break;
      case "dark":
        return item.darkIcon;
        break;
    }
  };
  return (
    <footer className="flex w-full snap-end flex-col items-center justify-center gap-1 rounded-t-3xl border-t border-neutral-200 bg-neutral-100 py-6 font-medium text-neutral-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400">
      <span className="cursor-default font-dancingScript text-3xl hover:animate-wiggle hover:text-neutral-800 dark:hover:text-neutral-100">
        Winston
      </span>
      <span>{year}&nbsp;&copy;&nbsp;All Rights Reserved</span>
      <div className="flex w-full items-center justify-center gap-4">
        <span className="relative flex items-center justify-center ">
          <span className=" bg-available absolute z-20 h-2 w-2 rounded-full" />
          <span className=" bg-available absolute z-10 h-2 w-2 animate-ping rounded-full opacity-75" />
        </span>
        <span className="text-available">Available for Work</span>
      </div>
      <a
        href="mailto:winston.tn@outlook.com"
        className="hover:text-neutral-800 dark:hover:text-neutral-100"
      >
        tn.winston@outlook.com
      </a>
      <div className="mt-2 flex gap-6">
        {mediaIcon.map((item) => (
          <MediaIcon
            key={item.id}
            href={item.href}
            src={iconSrc(item)}
            name={item.name}
          />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
