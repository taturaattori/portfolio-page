"use client";
import ProjectCard from "@/components/ProjectCard";
import { React, useRef, useState, useCallback, useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const CarouselPlugin = ({ projects }) => {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const onDotClick = useCallback(
    (index) => {
      if (!api) return;
      api.scrollTo(index);
    },
    [api]
  );

  return (
    <div className="relative h-full flex flex-col">
      <div className="relative flex-grow">
        <Carousel
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          setApi={setApi}
          className="w-full h-full"
        >
          <CarouselContent className="h-full">
            {projects.map((project, index) => (
              <CarouselItem key={index} className="h-full">
                <div className="p-1 flex justify-center h-full">
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    techs={project.techs}
                    image={project.image}
                    link={project.link}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Buttons - Hidden on small screens */}
          <div className="hidden md:block">
            <CarouselPrevious className="left-4 hover:bg-accent/90 hover:text-white absolute" />
            <CarouselNext className="right-4 hover:bg-accent/90 hover:text-white absolute" />
          </div>
          {/* Mobile navigation buttons */}
          <div className="flex justify-center gap-4 mt-3 md:hidden">
            <CarouselPrevious className="left-8 hover:bg-accent/90 hover:text-white absolute" />
            <CarouselNext className="right-8 hover:bg-accent/90 hover:text-white absolute" />
          </div>
        </Carousel>
      </div>

      {count > 0 && (
        <div className="flex justify-center gap-2 mt-3">
          {Array.from({ length: count }).map((_, index) => (
            <Button
              key={index}
              variant="ghost"
              size="sm"
              className={cn(
                "h-2 w-2 md:h-3 md:w-3 rounded-full p-0 transition-all",
                index === current
                  ? "bg-accent scale-110"
                  : "bg-accent/30 hover:bg-accent/50"
              )}
              onClick={() => onDotClick(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CarouselPlugin;
