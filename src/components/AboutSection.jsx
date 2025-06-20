import { Briefcase, Code, User } from "lucide-react";
export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container max-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About<span className="text-primary"> Me</span>
        </h2>
        <div className="grid  grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Passionate Web Developer</h3>
            <p className="text-muted-foreground">
              With a strong foundation in web development, I am dedicated to
              creating engaging and user-friendly websites. My journey in web
              development has been both challenging and rewarding, I am excited
              to continue learning and pushing the boundaries of what is
              possible on the web.
            </p>
            <p className="text-muted-foreground">
              With over 2 years of experience as a Freelance web developer, I
              have gained a solid understanding of the latest web technologies
              and frameworks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a
                href="#contact"
                className="px-6 py-2 rounded-full
                         bg-primary text-primary-foreground font-medium
                         cosmic-button hover:scale-105 active:scale-95"
              >
                Get in touch
              </a>
              <a
                href="/Igor Balan FrontEnd_Developer_CV.docx"
                download="Igor Balan FrontEnd_Developer_CV.docx"
                className="px-6 py-2 rounded-full
                         border border-primary
                         text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold text-primary">
                    Web Development
                  </h4>
                  <p className="text-muted-foreground">
                    Creating responsive and dynamic websites with modern
                    frameworks and tools.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border  p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold text-primary">
                    UI/UX Design
                  </h4>
                  <p className="text-muted-foreground">
                    Designing user-friendly and visually appealing interfaces.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold text-primary">
                    IT Support and Maintenance
                  </h4>
                  <p className="text-muted-foreground">
                    Providing technical support and maintaining systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
