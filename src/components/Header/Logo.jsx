import React from "react";
import Link from "next/link";

const Logo = () => {
  return (
    <div>
      <Link
        href="/"
        passHref
        className="font-dancing text-3xl font-extrabold text-black"
      >
        Winston
      </Link>
    </div>
  );
};

export default Logo;
