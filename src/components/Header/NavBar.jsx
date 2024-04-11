import React from "react";
import NavLink from "./NavLink";
import { navLink, mediaIcon } from "@/constants";
import Logo from "./Logo";
import MediaIcon from "../MediaIcon";
import ToggleThemeButton from "./ToggleThemeButton";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const NavBar = () => {
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
    <header className="fixed top-0 z-50 flex h-[10vh] w-full items-center justify-between bg-light-theme px-20 dark:bg-dark-theme">
      <nav className="flex gap-8 text-xl">
        <div className="absolute left-1/2 -translate-x-1/2">
          <Logo />
        </div>
        {navLink.map((item) => (
          <NavLink key={item.id} href={item.href} title={item.title} />
        ))}
      </nav>
      <nav className="flex gap-8">
        {mediaIcon.map((item) => (
          <MediaIcon
            key={item.id}
            href={item.href}
            src={iconSrc(item)}
            name={item.name}
          />
        ))}
        <span className=" w-[1px] bg-slate-300 dark:bg-slate-600"></span>
        <ToggleThemeButton />
      </nav>
    </header>
  );
};

export default NavBar;
