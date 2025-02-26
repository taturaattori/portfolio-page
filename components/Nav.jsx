"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "about",
    path: "/about",
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

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-10">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname && "text-accent"
            } capitalize hover:text-accent`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
