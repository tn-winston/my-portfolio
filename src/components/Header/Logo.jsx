import React from "react";
import Image from "next/image";
import LightLogo from "../../../public/light-logo.png";
import DarkLogo from "../../../public/dark-logo.png";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const Logo = () => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return;
    ("data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");
  }

  return (
    <>
      <a href="/" passHref>
        <Image
          src={theme == "dark" ? DarkLogo : LightLogo}
          alt="logo"
          height={40}
          width="auto"
        />
      </a>
    </>
  );
};

export default Logo;
