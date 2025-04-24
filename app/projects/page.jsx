"use client";
import CarouselPlugin from "@/components/CarouselPlugin";
import { motion } from "framer-motion";

const projects = [
  {
    title: "NewsHub",
    description:
      "NewsHub is a news application that allows users to read news articles from various sources. Inspired by news applications that I use often, HS for example. It was created as a final project for the Mobile Programming course at Haaga-Helia.",
    techs: ["React Native", "JavaScript", "Expo", "Firebase", "News API"],
    image: "/assets/newshub.png",
    link: "https://github.com/taturaattori/NewsHub",
  },
  {
    title: "Portfolio",
    description:
      "A personal portfolio website to showcase my skills and some of the projects I have worked on during my studies. The porfolio features sections about me, my work and my contact information. Still under development with more features to come.",
    techs: ["React", "Next.js", "JavaScript", "TailwindCSS", "shadcn/ui"],
    image: "/assets/portfolio.png",
    link: "https://github.com/taturaattori/portfolio-page",
  },
  {
    title: "EfiLibrary",
    description:
      "EfiLibrary is a project between the students of Business Information Technology Degree Programme in Haaga-Helia University of Applied Sciences, and Eficode Oy, a Finnish company specializing in enhancing software development, whose products are related to automation and devops consulting, as well as accessibility and user studies.",
    techs: ["React", "Node.js", "TypeScript", "Docker", "MaterialUI"],
    image: "/assets/booklist.PNG",
    link: "https://github.com/LibraryProjectGroup/library-project-frontend",
  },
  {
    title: "MuseoÄppi",
    description:
      "MuseoÄppi is an application created for the Haaga-Helia Software Project II course, designed to facilitate museum visits and help users discover new museums. The application lists over 150 Finnish museums.",
    techs: ["React Native", "JavaScript", "Expo", "Firebase"],
    image: "/assets/museoapp.png",
    link: "https://github.com/Museosovellus/MuseoFrontend",
  },
];

const fadeInUp = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.5, ease: "easeOut" },
};

const Projects = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeIn" }}
      className="flex flex-col items-center justify-center py-2 md:py-6 min-h-[70vh] w-full"
    >
      <motion.div
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.2 }}
        className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col"
      >
        <div className="text-center mb-4 md:mb-6">
          <motion.h1
            className="h3 text-accent font-bold mb-2 md:mb-3"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.3 }}
          >
            Projects
          </motion.h1>
          <motion.p
            className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.4 }}
          >
            Here are some of the projects I've worked on during my studies and
            free time.
          </motion.p>
        </div>

        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.5 }}
          className="w-full flex-grow"
        >
          <CarouselPlugin projects={projects} />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Projects;
