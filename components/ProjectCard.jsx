import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
  CardDescription,
} from "./ui/card";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

const ProjectCard = ({ title, description, techs, image, link }) => {
  return (
    <div className="p-1 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl h-full">
      <Card className="overflow-hidden flex flex-col h-full text-balance bg-primary border-accent border-opacity-30 shadow-md hover:shadow-lg transition-all duration-300 border-b-2 p-2 sm:p-3 md:p-4">
        <CardHeader className="w-full p-2 md:p-3 space-y-1">
          <CardTitle className="text-lg sm:text-xl md:text-2xl xl:text-3xl leading-tight">
            {title}
          </CardTitle>
          <CardDescription className="text-xs sm:text-sm leading-tight text-foreground/80 line-clamp-3 md:line-clamp-4">
            {description}
          </CardDescription>
          <div className="mt-1 md:mt-2">
            <div className="flex flex-wrap gap-1 md:gap-2">
              {techs.map((tech, index) => (
                <span
                  key={index}
                  className="text-[0.65rem] sm:text-xs rounded-full bg-accent/10 px-2 py-0.5 text-accent font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </CardHeader>
        <CardContent className="w-full h-[140px] sm:h-[180px] md:h-[220px] lg:h-[260px] relative flex-grow mt-1 p-0 overflow-hidden rounded-md">
          <div className="absolute inset-0 transition-all duration-300 hover:scale-105 group">
            <Image
              src={image}
              alt={`${title} project screenshot`}
              className="object-cover rounded-md transition-all duration-500 hover:mix-blend-normal"
              priority={true}
              fill={true}
              quality={90}
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-center mt-2 w-full p-2">
          <Button className="w-full max-w-[180px] text-xs sm:text-sm transition-all hover:bg-accent/90 flex items-center gap-1 h-8 py-1 px-2 md:h-9 md:py-2 md:px-3 group">
            <Link
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1"
            >
              View on GitHub
              <ExternalLink className="w-3 h-3 md:w-4 md:h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProjectCard;
