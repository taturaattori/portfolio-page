"use client";
import CarouselPlugin from "@/components/CarouselPlugin";
import { motion } from "framer-motion";

const projects = [
  {
    title: "NewsHub",
    description:
      "NewsHub is a news application that allows users to read news articles from various sources. The application is built using React Native, Expo, Firebase, and the News API. It was created as a final project for the Mobile Programming course at Haaga-Helia.",
    techs: ["React Native", "JavaScript", "Expo", "Firebase", "News API"],
    image: "/assets/newshub.PNG",
    link: "https://github.com/taturaattori/NewsHub",
  },
  {
    title: "EfiLibrary",
    description:
      "EfiLibrary is a library management application that helps users manage their book collections. The application is built using React, Node.js, and MongoDB. It was developed as a project for the Web Development course at Haaga-Helia.",
    techs: ["React", "Node.js", "TypeScript", "Docker", "MaterialUI"],
    image: "/assets/booklist.PNG",
    link: "https://github.com/LibraryProjectGroup/library-project-frontend",
  },
  {
    title: "MuseoÄppi",
    description:
      "MuseoÄppi is an application created for the Haaga-Helia Software Project II course, designed to facilitate museum visits and help users discover new museums. The application lists over 150 Finnish museums.",
    techs: ["React Native", "JavaScript", "Expo", "Firebase"],
    image: "/assets/museoapp.PNG",
    link: "https://github.com/taturaattori/MuseoApp",
  },
];

const Projects = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5, ease: "easeIn" }}
      className="flex-shrink-0 items-center justify-center min-h-[70vh] xl:px-0"
    >
      <div className="container mx-auto xl:max-w-[1000px]">
        <CarouselPlugin projects={projects} />
      </div>
    </motion.section>
  );
};

export default Projects;
