"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";


export default function About() {

  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.47 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3 text-justify">
        Born in L.A., raised in Orange County, and now rooted in Wilmington, NC. I got my start in the 
        '90s designing graphics and building websites for local bands and friends. Since 1999, I’ve 
        focused on design and development for the music industry, crafting logos, flyers, album art, 
        merch, and full websites.
      </p>
      <p>
        Nowadays I’m a freelance web developer, graphic designer, and entrepreneur with a core tech 
        stack of{" "}<span className="font-medium">React, Next.js, TypeScript, Tailwind, and 
        MongoDB</span>. I’ve been working independently since 2021 and I’m always eager to learn, 
        build, and level up.
      </p>
      <p>
        When I’m not designing and developing, I’m making music, digging for new sounds, coaching youth soccer, or hanging at the beach with the fam.
      </p>
      <p className="mt-3 text-xl font-medium">
      Let's create something spectacular togeter!
      </p>
    </motion.section>
  );
}