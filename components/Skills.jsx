import React from "react";
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiPython,
  SiCplusplus,
  SiReact,
  SiNodedotjs,
  SiRedux,
  SiJest,
  SiSpringboot,
  SiGit,
  SiDocker,
  SiFirebase,
  SiTailwindcss,
  SiShadcnui,
  SiMui,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbSql } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import { DiScrum } from "react-icons/di";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

// TODO: add descritpions to skills? icons clickable and show textbox onclick

const skillsList = [
  {
    name: "Languages",
    items: [
      {
        name: "JavaScript",
        icon: <SiJavascript size={32} />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript size={32} />,
      },
      {
        name: "HTML",
        icon: <SiHtml5 size={32} />,
      },
      {
        name: "CSS",
        icon: <SiCss3 size={32} />,
      },
      {
        name: "Java",
        icon: <FaJava size={32} />,
      },
      {
        name: "Python",
        icon: <SiPython size={32} />,
      },
      {
        name: "C++",
        icon: <SiCplusplus size={32} />,
      },
      {
        name: "SQL",
        icon: <TbSql size={32} />,
      },
    ],
  },
  {
    name: "Frameworks/Libraries",
    items: [
      {
        name: "React/React Native",
        icon: <SiReact size={32} />,
      },
      {
        name: "Node.js",
        icon: <SiNodedotjs size={32} />,
      },
      {
        name: "Redux",
        icon: <SiRedux size={32} />,
      },
      {
        name: "Jest",
        icon: <SiJest size={32} />,
      },
      {
        name: "Spring Boot",
        icon: <SiSpringboot size={32} />,
      },
      {
        name: "TailwindCSS",
        icon: <SiTailwindcss size={32} />,
      },
      {
        name: "shadcn/ui",
        icon: <SiShadcnui size={32} />,
      },
      {
        name: "Material UI",
        icon: <SiMui size={32} />,
      },
    ],
  },
  {
    name: "Other",
    items: [
      {
        name: "Git",
        icon: <SiGit size={32} />,
      },
      {
        name: "Docker",
        icon: <SiDocker size={32} />,
      },
      {
        name: "Firebase",
        icon: <SiFirebase size={32} />,
      },
      {
        name: "Visual Studio Code",
        icon: <VscVscode size={32} />,
      },
      {
        name: "Scrum",
        icon: <DiScrum size={32} />,
      },
    ],
  },
];

const Skills = () => {
  return (
    <div className="flex flex-col gap-4">
      {skillsList.map((category, index) => {
        return (
          <div key={index} className="sm:w-[493.7px]">
            <p className="font-bold text-black/80 mb-2">{category.name}</p>
            <div className="grid grid-cols-5 sm:grid-cols-6 gap-y-4 gap-x-12 sm:gap-4 ">
              {category.items.map((item, index) => {
                return (
                  <div key={index}>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <div className="text-black/80 hover:text-accent cursor-default">
                            {item.icon}
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{item.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Skills;
