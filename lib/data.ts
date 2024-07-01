import React from "react";
import { GrImage } from "react-icons/gr";
import { VscSymbolNamespace } from "react-icons/vsc";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import richard from "@/public/richard.png";
import JimDine from "@/public/proj_JimDine.png";
import AAMG from "@/public/proj_AAMG.png";
import Skidmore from "@/public/proj_Skidmore.png"
import DGI from "@/public/proj_DGI.png"
import HOM from "@/public/proj_HOM.png"

export const portrait = {
    imageUrl: richard,
}

export const links = [
  {
    name: "HOME",
    hash: "#home",
  },
  {
    name: "ABOUT",
    hash: "#about",
  },
  {
    name: "PROJECTS",
    hash: "#projects",
  },
  {
    name: "SKILLS",
    hash: "#skills",
  },
  {
    name: "EXPERIENCE",
    hash: "#experience",
  },
  {
    name: "CONTACT",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graphic/Web Design",
    location: "Freelance",
    description:
      "I have been designing graphics and web sites since 1999, with a focus in the music industry. I design logos, flyers, album art, merch, and graphic content as well as web sites. Artists + Labels I have worked with in the past include: Dahga Bloom, Zoohaus, Cosmonauts, The Growlers, Local Natives, OC Records, Burger Records, Lollipop Records, Captcha Records, Desert Daze, and Psycho De Mayo",
    icon: React.createElement(GrImage),
    date: "1999-present",
  },
  {
    title: "Harvard X",
    location: "Online",
    description:
      "Completion of Computer Science (CS50) and Web Programming with Python and JavaScript (CS50W) coursework",
    icon: React.createElement(LuGraduationCap),
    date: "2021-2022",
  },
  {
    title: "freeCodeCamp",
    location: "Online",
    description:
      "Completeion of coursework in Web Design, Front End Development Libraries, Data Visualization, JavaScript Algorithms and Data Structures",
    icon: React.createElement(VscSymbolNamespace),
    date: "2022-2023",
  },
  {
    title: "Web Developer",
    location: "Freelance",
    description:
      "I have been working as a freelance web developer since 2021. My stack includes React, Next.js, TypeScript, Tailwind, and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "The HOM Network",
    description: "Worked as full-stack engineer, designed UI, developed front-end and back end",
    tags: ["UI","Front-end","Back-end", "React", "Next.JS", "Tailwind", "MongoDB",],
    imageUrl: HOM,
    projUrl: "https://www.thehom.net/",
  },
  {
    title: "DGI-UI",
    description:
      "This project showcases my ability to deliver high-quality, maintainable code and my commitment to enhancing user interfaces through innovative and user-centric design.",
      tags: ["Component Design and Development", "Dark Mode Support", "Documentation and Examples", "Flexibility and Customization"],
      imageUrl: DGI,
    projUrl: "https://dgi-ui.vercel.app/docs/overview/introduction",
  },
  {
    title: "Jim Dine",
    description:
      "Worked on site design and development, content creation, and SEO",
      tags: ["Squarespace", "Responsive Web Design", "Content Creation", "SEO Services", "Site Indexing"],
      imageUrl: JimDine,
    projUrl: "https://www.jimdine.com/",
  },
  {
    title: "Artist Asset Management Group",
    description:
      "I worked on the design and development of their site, content creation, and SEO.",
    tags: ["Squarespace", "Responsive Web Design", "Content Creation", "SEO Services", "Site Indexing"],
    imageUrl: AAMG,
    projUrl: "https://www.artassetmanagementgroup.com/",
  },
  {
    title: "Skidmore Contemporary Art",
    description:
      "Designed and developed their site to showcase their Artists & Exhibitions. Also worked on content creation, and SEO.",
      tags: ["Big Commerce", "Responsive Web Design", "Content Creation", "SEO Services", "Site Indexing"],
      imageUrl: Skidmore,
    projUrl: "https://skidmorecontemporaryart.com/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Flask",
  "Framer Motion",
  "Adobe Creative Suite",
  "Wordpress",
  "Squarespace",
  "Shopify",
  "BigCommerce",
  "Ableton",
] as const;

export const devTools = [
  {
      imgURL: "/assets/tools_HTML5.png",
      label: "HTML",
  },
  {
      imgURL: "/assets/tools_CSS.png",
      label: "CSS",
  },
  {
      imgURL: "/assets/tools_Tailwind.png",
      label: "Tailwind",
  },
  {
      imgURL: "/assets/tools_Bootstrap.png",
      label: "Bootstrap",
  },
  {
      imgURL: "/assets/tools_JS.png",
      label: "JavaScript",
  },
  {
      imgURL: "/assets/tools_NextJS.png",
      label: "NextJS",
  },
  {
      imgURL: "/assets/tools_ReactJS.png",
      label: "ReactJS",
  },
  {
      imgURL: "/assets/tools_AngularJS.png",
      label: "AngularJS",
  },
  {
    imgURL: "/assets/tool_Github.png",
    label: "Github",
  },
  {
      imgURL: "/assets/tools_node.png",
      label: "NodeJS",
  },
  {
      imgURL: "/assets/tools_py.svg",
      label: "Python",
  },
  {
      imgURL: "/assets/tools_Django.png",
      label: "Django",
  },
  {
      imgURL: "/assets/tools_flask.png",
      label: "Flask",
  },
  {
      imgURL: "/assets/tools_laravel.svg",
      label: "Laravel",
  },
  {
      imgURL: "/assets/tools_postman.svg",
      label: "Postman",
  },
  {
      imgURL: "/assets/tools_mongo.png",
      label: "MongoDB",
  },
  {
      imgURL: "/assets/tools_mysql.png",
      label: "MySQL",
  },
  {
      imgURL: "/assets/tools_Adobe.png",
      label: "Adobe",
  },
  {
      imgURL: "/assets/tools_PS.png",
      label: "Photoshop",
  },
  {
      imgURL: "/assets/tools_AI.png",
      label: "Illustrator",
  },
  {
    imgURL: "/assets/tools_Prem.png",
    label: "Premiere Pro",
  },
  {
      imgURL: "/assets/tools_imovie.png",
      label: "iMovie",
  },
  {
      imgURL: "/assets/tools_finalcut.png",
      label: "Final Cut Pro",
  },
  {
      imgURL: "/assets/tools_Adobe.png",
      label: "Canvas",
  },
  {
      imgURL: "/assets/tools_PS.png",
      label: "MidJourney",
  },
  {
      imgURL: "/assets/tools_AI.png",
      label: "Dall-E",
  },
]