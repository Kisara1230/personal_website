import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import englishImg from "@/public/english.jpg";
import hmsImg from "@/public/hms.png";
import travelImg from "@/public/travel.png";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "BSc IT Undergraduate",
    location: "University of Sri Jayewardenepura, Sri Lanka",
    description:
      "As an undergraduate, I am gaining practical experience in business analysis through hands-on projects and coursework. This experience allows me to analyze requirements, work with cross-functional teams, and apply analytical skills to real-world scenarios. I am developing my abilities in gathering insights, identifying business needs, and delivering data-driven solutions that drive project success.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - present",
  },
  
  
] as const;

export const projectsData = [
  {
    title: "Hospital Management System",
    description:
      "This is the group project of the Hospital Management System is an OOP-based software solution that efficiently manages, organized and aoutomate hospital operations.",
    tags: ["OOP", "SQL"],
    imageUrl: hmsImg,
  },
  {
    title: "Travel Tips",
    description:
      "The Travel Tips Website offers essential advice, insights, and resources to help travelers plan and enjoy trips smoothly and safely.",
    tags: ["React", "CSS", "Next.js", "JavaScriot",],
    imageUrl: travelImg,
  },
  {
    title: "Easy English",
    description:
      "This is the ongoing group prpject for improve english knowledge. This system include all necessary parts for learning english.",
    tags: ["OOP", "SQL"],
    imageUrl: englishImg,
  },
] as const;

export const skillsData = [
  "Analytical Skill",
  "Problem-solving",
  "Documentationa and Modelling",
  "Communication",
  "Resource management",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind",
  "Python",
  "Java",
  "Data Visualization",
  "SQL",
  "OOP",
  "Adaptability",
  "Leadership",

  
] as const;
