import React from "react";
import { GrImage } from "react-icons/gr";
import { VscSymbolNamespace } from "react-icons/vsc";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import richard from "@/public/richard.png";
import JD from "@/public/proj_JimDine.png";
import AAMG from "@/public/proj_AAMG.png";
import HSCA from "@/public/proj_HSCA.png"
import DGI from "@/public/proj_DGI.png"
import HOM from "@/public/proj_HOM.png"
import SLC from "@/public/proj_SLC.png"
import IND from "@/public/proj_IND.png"
import SA from "@/public/proj_SA.png"


export const portrait = {
    imageUrl: richard,
}

export const links = [
  {
    name: "HOME",
    hash: "#home",
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
    name: "CONTACT",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graphic/Web Design",
    location: "Freelance",
    description:
      "I have been designing graphics and web sites since 1999, with a focus in the music industry. I design logos, flyers, album art, merch, and graphic content as well as web sites.",
    icon: GrImage,
    date: "1999-present",
  },
  { 
    title: "Harvard X",
    location: "Online",
    description:
      "Completion of Computer Science (CS50) and Web Programming with Python and JavaScript (CS50W)",
    icon: LuGraduationCap,
    date: "2021-2022",
  },
  {
    title: "freeCodeCamp",
    location: "Online",
    description:
      "Completeion of coursework in Web Design, Front End Development Libraries, Data Visualization, JavaScript Algorithms and Data Structures",
    icon: VscSymbolNamespace,
    date: "2022-2023",
  },
  {
    title: "Web Developer",
    location: "Freelance",
    description:
      "I have been working as a freelance web developer since 2021. My stack includes React, Next.js, TypeScript, Tailwind, and MongoDB. Open to new projects and opportunities.",
    icon: FaReact,
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Self Love Club",
    description: "Designed and developed a branded landing page, including full SEO optimization, graphic design, marketing materials and original content creation — helping boost bookings and local search visibility.",
    tags: ["UI","Front-end", "React", "SEO", "Branding", "Graphic Design"],
    imageUrl: SLC,
    projUrl: "https://selfloveclub-ilm.com/",
  },
  {
    title: "Hannah Sloan Curatorial & Advisory",
    description: "Improved SEO performance through metadata and structured data, boosting artist page visibility in search results.",
    tags: ["SEO", "Metadata", "JSON-LD", "Indexing", "Sitemap"],
    imageUrl: HSCA,
    projUrl: "https://www.hannahsloan.com/",
  },
  {
    title: "Solutions-Associates",
    description: "Launched a responsive site for Solutions & Associates with SEO and copywriting that improved professional visibility and search indexing.",
    tags: ["UI","Front-end", "React", "SEO", "Copywriting"],
    imageUrl: SA,
    projUrl: "https://solutions-associates.com/",
  },
  {
    title: "Jim Dine",
    description: "Enhanced search ranking by optimizing metadata, image alt tags, and submitting sitemap for indexing.",
    tags: ["SEO", "Metadata", "Sitemap", "Google Indexing"],
    imageUrl: JD,
    projUrl: "https://www.jimdine.com/",
  },
  {
    title: "Indivisible Wilmington",
    description: "Developed and launched a clean, mobile-first landing page for Indivisible Wilmington, including supplemental graphic design assets, to support outreach and improve engagement with local audiences.",
    tags: ["UI","Front-end", "React", "Graphic Design", "Marketing"],
    imageUrl: IND,
    projUrl: "https://indivisible-ilm.org/",
  },
  {
    title: "Art Asset Management Group",
    description: "Boosted search visibility through SEO updates to meta tags, titles, and image alt attributes.",
    tags: ["SEO", "Metadata", "Sitemap", "Search Optimization"],
    imageUrl: AAMG,
    projUrl: "https://www.artassetmanagementgroup.com/",
  },  
  {
    title: "The HOM Network",
    description: "Led full-stack development for The HOM Network, including UI/UX design, scalable front-end architecture, back-end logic, graphic design and branding.",
    tags: ["Fullstack Development", "UI", "React", "Tailwind","MongoDB", "Graphic Design", "Branding"],
    imageUrl: HOM,
    projUrl: "https://www.thehom.net/",
  },
  {
    title: "DGI-UI",
    description: "Built a customizable, well-documented UI component library with support for dark mode, showcasing scalable design and maintainable code.",
      tags: ["Flexibility and Customization", "Documentation", "Dark Mode", "Component Design"],
      imageUrl: DGI,
    projUrl: "https://dgi-ui.vercel.app/docs/overview/introduction",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Git",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "MongoDB",
  "Tailwind",
  "Framer Motion",
  "BigCommerce",
  "Squarespace",
  "Wordpress",
  "Shopify",
  "GoDaddy",
  "Adobe Creative Suite",
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

export const skills2ADD = [
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