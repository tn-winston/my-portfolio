export const navLink = [
  {
    id: "home",
    href: "/",
    title: "Home",
  },
  {
    id: "about",
    href: "/#about",
    title: "About",
  },
  {
    id: "experience",
    href: "/#experience",
    title: "Experience",
  },
  {
    id: "projects",
    href: "/#projects",
    title: "Projects",
  },
];

import {
  linkedinIcon,
  githubIcon,
  twitterIcon,
  darkLinkedinIcon,
  darkGithubIcon,
  darkTwitterIcon,
} from "@/assets/MediaIcon";
export const mediaIcon = [
  {
    id: "linkein",
    href: "https://www.linkedin.com/in/winston-tn/",
    lightIcon: linkedinIcon,
    darkIcon: darkLinkedinIcon,
    name: "LinkedIn",
  },
  {
    id: "github",
    href: "https://github.com/winston-tn",
    lightIcon: githubIcon,
    darkIcon: darkGithubIcon,
    name: "GitHub",
  },
  {
    id: "twitter",
    href: "https://twitter.com/winston-tn",
    lightIcon: twitterIcon,
    darkIcon: darkTwitterIcon,
    name: "Twitter",
  },
];

import {
  reactIcon,
  tailwindIcon,
  framerMotionIcon,
  reduxIcon,
  htmlIcon,
  cssIcon,
  jsIcon,
  tsIcon,
  nextJSIcon,
  nodeJSIcon,
  javaIcon,
  pgsqlIcon,
  gitIcon,
  figmaIcon,
} from "@/assets/TechIcon";
export const techIcon = [
  {
    id: "react",
    icon: reactIcon,
    name: "React",
  },
  {
    id: "tailwind",
    icon: tailwindIcon,
    name: "Tailwind CSS",
  },
  {
    id: "framer-motion",
    icon: framerMotionIcon,
    name: "Framer Motion",
  },
  {
    id: "redux",
    icon: reduxIcon,
    name: "Redux",
  },
  {
    id: "html",
    icon: htmlIcon,
    name: "HTML5",
  },
  {
    id: "css",
    icon: cssIcon,
    name: "CSS3",
  },
  {
    id: "javascript",
    icon: jsIcon,
    name: "JavaScript",
  },
  {
    id: "typescript",
    icon: tsIcon,
    name: "TypeScript",
  },
  {
    id: "nextJS",
    icon: nextJSIcon,
    name: "Next.js",
  },
  {
    id: "nodeJS",
    icon: nodeJSIcon,
    name: "Node.js",
  },
  {
    id: "java",
    icon: javaIcon,
    name: "Java",
  },
  {
    id: "pgsql",
    icon: pgsqlIcon,
    name: "PostgreSQL",
  },
  {
    id: "git",
    icon: gitIcon,
    name: "Git",
  },
  {
    id: "figmaIcon",
    icon: figmaIcon,
    name: "Figma",
  },
];

export const workExp = [
  {
    title: "Junior Frontend Developer",
    company: "Zentech Inc., Ottawa, ON (Remote)",
    time: "Winter 2023",
  },
  {
    title: "IT Consultant",
    company: "FDM Group, Toronto, ON",
    time: "2022-2023",
  },
  {
    title: "PASS Facilitator & International Student Ambassador",
    company: "Carleton University, Ottawa, ON",
    time: "2018-2022",
  },
];

import { realtor, bank, securitySystem } from "@/assets/ProjectSnip";
export const projects = [
  {
    banner: realtor,
    link: "https://realtor-realestate-next.vercel.app/",
    type: "Website",
    title: "Real Estate Platform",
    description:
      "Realtor is a modern real estate web application developed using Next.js, React, and Chakra UI. The platform is tailored to assist users in exploring available properties for both rent and sale. With its diverse range of filters, it streamlines the search experience, all while maintaining a responsive and user-centric design.",
    hasRepo: true,
    repo: "https://github.com/winston-tn/real-estate",
  },
  {
    banner: bank,
    link: "https://bank-modern-hoo.vercel.app/",
    type: "Website",
    title: "Modern Bank Website",
    description:
      "A contemporary banking website is designed to introduce the bank to customers, presenting its features and benefits in a user-friendly and engaging manner. The website functions as a digital gateway for potential customers to explore services, features, and advantages.",
    hasRepo: true,
    repo: "https://github.com/winston-tn/bank-modern",
  },
  {
    banner: securitySystem,
    link: "https://youtu.be/QjrxmwsbPCg",
    type: "Security System",
    title: "Biometric Door Lock",
    hasRepo: false,
    description:
      "The project integrates a cutting-edge biometric authentication system into a door lock, replacing traditional keys with fingerprint and facial recognition. This enhances security, streamlines access, and modernizes the overall system.",
    repo: "",
  },
];
