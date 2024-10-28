"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      I am currently pursuing a BSc in Information Technology, with a focus on 
      <span className="bold"> Business Analysis.</span>
       My studies and hands-on experience have equipped me with the skills to analyze business needs, 
       optimize processes, and drive strategic outcomes. I’m passionate about using data-driven insights 
       to solve complex problems and make meaningful contributions to organizational growth. Committed to 
       continuous learning, I’m actively enhancing my BA skills through practical projects and freelance work. 
       After graduation, I aim to pursue a career in business analysis, where I can bridge technology and business 
       strategy to deliver impactful solutions.


      {" "}
      </p>

      <p>
        <span className="bold">In my free time</span>, I enjoy watching movies,listening to music and practicing yoga . 
        
      </p>
    </motion.section>
  );
}
