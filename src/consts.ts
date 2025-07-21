import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Zack Brown",
  EMAIL: "zsbrown97@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "The homepage for Zack Brown.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "Writings and musings about things I enjoy.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "My professional journey thus far.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of projects and websites I've contributed to.",
};

export const SOCIALS: Socials = [
  // { 
  //   NAME: "twitter-x",
  //   HREF: "https://twitter.com/markhorn_dev",
  // },
  { 
    NAME: "github",
    HREF: "https://github.com/zsbrown97"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/zsbrown97",
  }
];
