"use client";
import Image from "next/image";
import { useState } from "react";

export default function NavBar() {
  const [showResume, setShowResume] = useState(false);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center"></div>

            <div className="flex items-center space-x-8">
              <a
                href="#home"
                onClick={(e) => scrollToSection(e, "home")}
                className="text-black hover:text-gray-600 transition-colors"
              >
                Home
              </a>
              <a
                href="#skills"
                onClick={(e) => scrollToSection(e, "skills")}
                className="text-black hover:text-gray-600 transition-colors"
              >
                Skills
              </a>
              <a
                href="#about"
                onClick={(e) => scrollToSection(e, "about")}
                className="text-black hover:text-gray-600 transition-colors"
              >
                About
              </a>
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, "projects")}
                className="text-black hover:text-gray-600 transition-colors"
              >
                Projects
              </a>
              <button
                onClick={(e) => scrollToSection(e, "contact")}
                className="cursor-pointer px-4 py-2 text-sm font-medium text-[#6C63FF] border border-[#6C63FF] rounded-md hover:bg-[#6C63FF] hover:text-white transition-colors"
              >
                Contact Me
              </button>
              <button
                onClick={() => setShowResume(true)}
                className="cursor-pointer px-4 py-2 text-sm font-medium bg-[#6C63FF] text-white rounded-md hover:bg-[#5b54d6] transition-colors"
              >
                View Resume
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Resume Modal - Facebook style */}
      {showResume && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center">
          {/* Dark overlay with blur */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowResume(false)}
          />

          <div className="relative z-[61] w-full max-w-4xl mx-4 bg-white rounded-lg shadow-xl">
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="text-xl font-semibold">Resume</h3>
              <button
                onClick={() => setShowResume(false)}
                className="cursor-pointer text-gray-400 hover:text-gray-600 text-2xl font-semibold leading-none"
              >
                ×
              </button>
            </div>
            <iframe
              src="/resume.pdf"
              className="w-full h-[85vh] rounded-b-lg"
              title="Resume"
            />
          </div>
        </div>
      )}
    </>
  );
}
