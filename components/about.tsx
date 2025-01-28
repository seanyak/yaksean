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
        Born and raised in Orange County, CA. My journey into tech started back in Web 1.0, where I dabbled in 
        crafting static websites as a hobby for friends and local bands. Fast forward 25 years, my wife
        and I packed up our 3 kids 2 cats and 1 pup in our car + trailer and moved to Wilmington, NC.
        My core stack is{" "}<span className="font-medium">React, Next.js, Node.js, and MongoDB
        </span>. I'm always hungry to learn and master new tech. I am 
        currently looking for a{" "}<span className="font-medium">full-time </span>
        developer opportunity.
      </p>
      <p>
        <span className="italic">When I'm not coding</span>, I enjoy creating music, 
        discovering new grooves, coaching youth soccer, watching footy, and hanging
        with the fam at the beach. 
      </p>
      <p className="mt-3 text-xl font-medium">
      Let's make something!
      </p>
    </motion.section>
  );
}