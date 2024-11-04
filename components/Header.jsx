import Link from "next/link";
import { Button } from "./ui/button";

import Nav from "./Nav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-black">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Club Name<span className="text-accent">.</span>
          </h1>
        </Link>
        {/*desktop nav*/}
        <div className="hidden xl:flex items-center gap-10">
          <Nav />
          <Button>Get Tickets</Button>
        </div>
        {/*mobile nav*/}
        <div className="xl:hidden">mobile nav</div>
      </div>
    </header>
  );
};

export default Header;
