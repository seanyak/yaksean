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
        Born in L.A., raised in Orange County, CA, now residing in Wilmington, NC. My journey into tech started back in the 90s, where I dabbled in 
        graphic design and building websites for friends and local bands. Fast forward 25 years, I'm a freelance web develoer, graphic designer, and entrepreneur.
        My core stack is{" "}<span className="font-medium">React, Next.js, Node.js, and MongoDB
        </span>. I'm always hungry to learn and master new tech.
      </p>
      <p>
        <span className="italic">When I'm not hacking away</span>, I enjoy creating music, 
        discovering new tunes, coaching youth soccer, watching footy, and hanging
        with the fam at the beach. 
      </p>
      <p className="mt-3 text-xl font-medium">
      Let's create something spectacular togeter!
      </p>
    </motion.section>
  );
}