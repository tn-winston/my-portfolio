import React from "react";
import Link from "next/link";

const Logo = () => {
  return (
    <div>
      <Link
        href="/"
        passHref
        className="font-dancing text-3xl font-extrabold text-black dark:text-white"
      >
        Winston
      </Link>
    </div>
  );
};

export default Logo;
