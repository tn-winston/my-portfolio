import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { CloseButton } from "@headlessui/react";

const MenuNavLink = ({ href, title }) => {
  const { asPath } = useRouter();
  const isActive = asPath === href;

  return (
    <CloseButton
      as={Link}
      href={href}
      className={`${
        isActive
          ? "text-neutral-100 dark:text-neutral-800"
          : "text-neutral-400 dark:text-neutral-500"
      } font-medium transition-colors ease-in-out hover:text-neutral-100 dark:hover:text-neutral-800`}
    >
      {title}
    </CloseButton>
  );
};

export default MenuNavLink;
