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

const ProjectCard = ({ title, description, image, link }) => {
  return (
    <div>
      <Card className="overflow-hidden h-[500px] lg:h-[600px] flex flex-col items-center text-center bg-primary border-accent border-opacity-30 border-b-2">
        <CardHeader className="max-w-[800px]">
          <CardTitle className="text-[38px] xl:text-[44px] mb-4 leading-none">
            {title}
          </CardTitle>
          <CardDescription className="text-balance">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="w-full h-[200px] sm:h-[300px] lg:h-[400px] relative flex-grow">
          <Image
            src={image}
            alt="project picture"
            className="object-contain"
            priority
            fill
            quality={100}
            sizes="auto"
          />
        </CardContent>
        <CardFooter className="flex justify-center mt-4">
          <Button className="max-w-[200px]">
            <Link href={link}>GitHub</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProjectCard;
