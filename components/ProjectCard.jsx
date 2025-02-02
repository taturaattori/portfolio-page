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

const ProjectCard = ({ title, description, techs, image, link }) => {
  return (
    <div className="p-2 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl">
      <Card className="overflow-hidden flex flex-col items-center text-balance bg-primary border-accent border-opacity-30 border-b-2 p-2 sm:p-4 md:p-6 h-auto">
        <CardHeader className="w-full">
          <CardTitle className="text-xl sm:text-2xl md:text-3xl xl:text-4xl mb-2 sm:mb-4 leading-tight">
            {title}
          </CardTitle>
          <CardDescription className="text-xs sm:text-sm md:text-base leading-tight mb-3 sm:mb-4">
            {description}
          </CardDescription>
          <CardDescription className="flex flex-wrap gap-2">
            {techs.map((tech, index) => (
              <span
                key={index}
                className="text-accent text-xs sm:text-xs md:text-base font-semibold"
              >
                {tech}
              </span>
            ))}
          </CardDescription>
        </CardHeader>
        <CardContent className="w-full h-[180px] sm:h-[250px] md:h-[300px] lg:h-[350px] relative flex-grow">
          <Image
            src={image}
            alt="project picture"
            className="object-cover"
            priority
            fill
            quality={100}
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </CardContent>
        <CardFooter className="flex justify-center mt-4">
          <Button className="max-w-[180px] sm:max-w-[200px] text-sm sm:text-base">
            <Link href={link}>GitHub</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProjectCard;
