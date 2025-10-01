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
        I started off designing graphics and building websites for local bands and friends in the late '90s. 
        Since then, my focus has been in the music industry, crafting logos, flyers, album art, merch, and websites.
        Nowadays I’m a freelance web developer, graphic designer, and entrepreneur with a core tech 
        stack of{" "}<span className="font-medium">React, Next.js, TypeScript, Tailwind, and 
        MongoDB</span>. I’ve been working independently since 2021. Always eager to learn, 
        build, and level up.
      </p>
      <p className="mt-3 text-xl font-medium py-7">
        Let's create something spectacular togeter!
      </p>
    </motion.section>
  );
}