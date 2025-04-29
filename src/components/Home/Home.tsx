"use client";
import React from "react";
import Image from "next/image";

const Home = () => {
  const scrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen pt-20 bg-white" id="home">
      <div className="container mx-auto px-6 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg mb-4">Hey, I am Tien</p>
            <h1 className="text-5xl font-bold mb-6">
              I build <span className="text-[#6C63FF]">modern web apps </span>
              <br />
              with powerful tools and clean design
            </h1>
            <p className="text-gray-600 mb-8 max-w-lg">
              From sleek frontends to fast backends, I craft full-stack
              experiences using various tools and frameworks
            </p>
            <button
              onClick={scrollToContact}
              className="cursor-pointer px-6 py-3 bg-[#6C63FF] text-white rounded-md hover:bg-[#5b54d6] transition-colors"
            >
              Get In Touch
            </button>
          </div>

          <div className="relative">
            <div className="relative w-full h-[600px]">
              <div className="flex h-full mt-10">
                <Image
                  src="/hero_image.png"
                  alt="Profile"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-3xl"
                />
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute top-4 right-4">
                <span className="text-[#6C63FF] text-4xl">✦</span>
              </div>
              <div className="absolute bottom-4 left-4">
                <span className="text-[#6C63FF] text-4xl">✦</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
