"use client";

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { AlignRight } from "lucide-react";
import SocialLinks from "./SocialLinks";

const links = [
  {
    name: "about",
    path: "/",
  },
  {
    name: "projects",
    path: "/projects",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex items-center">
        <AlignRight size={32} />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-20 mb-20 text-center">
          <h1 className="text-2xl font-bold">Tatu Paukkeri</h1>
        </div>
        <nav className="flex flex-col gap-4 mt-4 justify-center items-center">
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                className={`${
                  link.path === pathname && "text-accent"
                } text-xl capitalize hover:text-accent`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
        <div className="mt-10 flex items-center justify-center">
          <SocialLinks
            containerStyle="flex gap-6"
            iconStyle="w-10 h-10 border border-accent rounded-full flex justify-center items-center text-accent hover:bg-accent hover:text-primary"
          />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
