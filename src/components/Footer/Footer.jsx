import React from "react";

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="flex w-full snap-end justify-center gap-60 rounded-t-3xl border-t border-neutral-200 bg-pink-50 py-1.5 font-medium text-neutral-500">
      <span>{year}&nbsp;&copy;&nbsp;All Rights Reserved</span>
      <span>
        Email:&nbsp;
        <a href="mailto:winston.tn@outlook.com">winston.tn@outlook.com</a>
      </span>
      <span>Status: Open to Work</span>
    </footer>
  );
};

export default Footer;
