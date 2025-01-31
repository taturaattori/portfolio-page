"use client";
import ProjectCard from "@/components/ProjectCard";
import { React, useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CarouselPlugin = ({ projects }) => {
  const plugin = useRef(Autoplay({ delay: 3500, pauseOnHover: true }));

  return (
    <Carousel plugins={[plugin.current]} onMouseEnter={plugin.current.stop}>
      <CarouselContent>
        {projects.map((project, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                link={project.link}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CarouselPlugin;
