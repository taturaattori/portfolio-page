import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const About = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          <Tabs defaultValue="education" className="w-[700px]">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
            </TabsList>
            <TabsContent value="education">
              <div>education</div>
            </TabsContent>
            <TabsContent value="skills">
              <div>skills</div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default About;
