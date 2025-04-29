"use client";
import { useState } from "react";

export default function NavBar() {
  const [showResume, setShowResume] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false); // Close menu after clicking a link
  };

  const NavLinks = () => (
    <>
      <a
        href="#home"
        onClick={(e) => scrollToSection(e, "home")}
        className="text-black hover:text-gray-600 transition-colors text-sm sm:text-base"
      >
        Home
      </a>
      <a
        href="#skills"
        onClick={(e) => scrollToSection(e, "skills")}
        className="text-black hover:text-gray-600 transition-colors text-sm sm:text-base"
      >
        Skills
      </a>
      <a
        href="#about"
        onClick={(e) => scrollToSection(e, "about")}
        className="text-black hover:text-gray-600 transition-colors text-sm sm:text-base"
      >
        About
      </a>
      <a
        href="#projects"
        onClick={(e) => scrollToSection(e, "projects")}
        className="text-black hover:text-gray-600 transition-colors text-sm sm:text-base"
      >
        Projects
      </a>
      <button
        onClick={(e) => scrollToSection(e, "contact")}
        className="cursor-pointer px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-[#6C63FF] border border-[#6C63FF] rounded-md hover:bg-[#6C63FF] hover:text-white transition-colors"
      >
        Contact Me
      </button>
      <button
        onClick={() => setShowResume(true)}
        className="cursor-pointer px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium bg-[#6C63FF] text-white rounded-md hover:bg-[#5b54d6] transition-colors"
      >
        View Resume
      </button>
    </>
  );

  return (
    <>
      <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="text-xl font-bold text-[#6C63FF]">TN</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4 sm:space-x-6 lg:space-x-8">
              <NavLinks />
            </div>

            {/* Mobile Hamburger Menu */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className="block w-full h-0.5 bg-black"></span>
                <span className="block w-full h-0.5 bg-black"></span>
                <span className="block w-full h-0.5 bg-black"></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Sidebar */}
        <div
          className={`fixed top-0 left-0 h-full w-64 md:hidden bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="h-full flex flex-col p-4">
            <div className="flex justify-between items-center mb-8">
              <span className="text-xl font-bold text-[#6C63FF]">TN</span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close menu"
              >
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-col space-y-6">
              <NavLinks />
            </div>
          </div>
        </div>
      </nav>

      {/* Resume Modal */}
      {showResume && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center">
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
