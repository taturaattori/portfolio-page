import SocialLinks from "@/components/SocialLinks";
import EmailForm from "@/components/EmailForm";

const Contact = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="grid lg:grid-cols-2 gap-4 sm:my-10 py-12 px-6 xl:px-10">
          <div>
            <h1 className="h1 text-accent my-2">Let&apos;s connect</h1>
            <p className="mb-4 max-w-md text-black/70">
              I am currently looking for an Internship, Trainee or Junior
              position. If you want to get in touch with me, feel free to send
              me a message, or checkout my socials below.
            </p>
            <SocialLinks
              containerStyle="flex flex-row gap-4"
              iconStyle="w-12 h-12 border border-accent rounded-full flex justify-center items-center text-accent hover:bg-accent hover:text-primary"
            />
          </div>
          <div className="my-2">
            <EmailForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
