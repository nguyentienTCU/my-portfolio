import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative w-full h-[600px] rounded-3xl overflow-hidden">
              <Image
                src="/about_image.png"
                alt="About Me"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#6C63FF] opacity-20 rounded-bl-full"></div>
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                I’m Tien, a freshman computer science student and aspiring
                full-stack developer focused on creating responsive, performant,
                and scalable web applications. My passion lies in turning
                complex ideas into clean, efficient solutions that are easy to
                use and easy to maintain.
              </p>
              <p>
                I work with frameworks like Next.js and Nuxt.js, and use tools
                like Git, PostgreSQL, Snowflake, and Firebase to handle data,
                streamline deployment, and collaborate effectively.
              </p>
              <p>
                Whether it’s designing a frontend UI, setting up a backend
                service, or streamlining workflows with version control, I enjoy
                every part of the development process—and I’m always learning
                more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
