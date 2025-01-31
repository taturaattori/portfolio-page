import Picture from "@/components/Picture";
import SocialLinks from "@/components/SocialLinks";
import React from "react";

export default function Home() {
  return (
    <section className="h-full">
      <div className="conatiner mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between mt-10 xl:pb-20 xl:pt-12 xl:mr-14 xl:ml-14 xl:mt-0">
          <div className="text-center xl:text-left">
            <span className="text-xl">Software Engineering student</span>
            <br />
            <h1 className="h1 mb-6">
              Hi! I am <span className="text-accent">Tatu Paukkeri</span>
            </h1>
            <p className="max-w-lg mb-10 text-black/70">
              I am a software engineering student from Finland. I am passionate
              about web development and design. I am currently learning React
              and Next.js.
            </p>
            <div className="gap-5 mb-8 xl:mb-0 flex justify-center xl:justify-start">
              <SocialLinks
                containerStyle="flex gap-8"
                iconStyle="w-12 h-12 border border-accent rounded-full flex justify-center items-center text-accent hover:bg-accent hover:text-primary"
              />
            </div>
          </div>
          <div>
            <Picture />
          </div>
        </div>
      </div>
    </section>
  );
}
