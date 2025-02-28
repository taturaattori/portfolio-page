import Link from "next/link";
import { Button } from "./ui/button";

import Nav from "./Nav";
import MobileNav from "./MobileNav";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-black/80">
      <div className="container mx-auto flex justify-between items-center">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Link href="/">
                <h1 className="text-4xl font-semibold hover:text-accent">
                  T.P.
                </h1>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Home</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        {/*desktop nav*/}
        <div className="hidden xl:flex items-center gap-10">
          <Nav />
        </div>
        {/*mobile nav*/}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
