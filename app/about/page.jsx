import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Skills from "@/components/Skills";

const About = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col justify-between items-center xl:items-start xl:flex-row my-10 xl:pb-20 xl:pt-12 xl:px-10 xl:mt-0">
          <div>
            <h2 className="h2 text-accent mb-2">About me</h2>
            <p className="max-w-xl text-black/80 mb-2">
              I started studying Information Technology at Haaga-Helia
              University of Applied Sciences in 2021, graduating with a
              Bachelor’s degree in 2024. In the autumn 2024, I continued my
              academic journey by pursuing a Master’s degree in Computer Science
              at Tampere University.
            </p>
            <p className="max-w-xl text-black/80 mb-2">
              My studies have primarily focused on Software Development, with a
              strong emphasis on full-stack development. I enjoy building
              seamless and efficient applications by working on both front-end
              and back-end technologies. Throughout my academic journey, I have
              gained experience in JavaScript, React and Node.js among others
              and developed projects that showcase my problem-solving skills and
              creativity.
            </p>
            <p className="max-w-xl text-black/80">
              This portfolio highlights some of the skills I’ve acquired and the
              projects I’ve worked on, demonstrating my passion for building
              scalable, user-friendly applications. I am always eager to learn
              new technologies and take on challenges that push my abilities
              further.
            </p>
          </div>
          <div>
            <Tabs defaultValue="education" className="max-w-xl my-12 xl:mt-0">
              <TabsList className="grid w-full grid-cols-2 gap-2">
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
              </TabsList>
              <TabsContent value="education">
                <p className="text-black/80 mb-3">
                  <b>Tampere University</b>
                  <br />
                  Master of Science, Computer Science
                  <br />
                  2024-Present
                </p>
                <p className="text-black/80">
                  <b>Haaga-Helia University of Applied Sciences</b>
                  <br />
                  Bachelor of Business Admininstration, Information Technology
                  <br />
                  2021-2024
                </p>
              </TabsContent>
              <TabsContent value="skills">
                <p className="text-black/80 mb-3">
                  Here are the technologies I’ve worked with:
                </p>
                <Skills />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
