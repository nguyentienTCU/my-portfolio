import React from "react";
import Image from "next/image";

const Projects = () => {
  const projects = [
    {
      title: "Ahuse",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: "/project1.jpg",
      link: "#",
    },
    {
      title: "App Dashboard",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: "/project2.jpg",
      link: "#",
    },
    {
      title: "Easy Rent",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: "/project3.jpg",
      link: "#",
    },
  ];

  return (
    <section className="py-20 bg-gray-50" id="projects">
      <div className="pt-8">
        {/* Projects Content */}
        <div className="container mx-auto px-4 py-16">
          {/* <h1 class="text-4xl font-bold text-center mb-12"></h1> */}
      <h1 className="text-4xl font-bold text-center mb-12">Project Showcase</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="/project1.png" alt="Project" className="w-full h-48 object-cover"/>
          <div className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Startup Project</span>
              <span className="text-gray-600 text-sm">2025 April</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Youngpreneur Academy Program Website</h3>
            <p className="text-gray-700 mb-4">A sustainable packaging solution that reduces waste and costs for e-commerce businesses.</p>
            <div className="flex justify-between items-center">
              <button className="cursor-pointer text-blue-600 font-semibold hover:text-blue-800">View Project →</button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="/project2.png" alt="Project" className="w-full h-48 object-cover"/>
          <div className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Group Project</span>
              <span className="text-gray-600 text-sm">2025 April</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">British Airways Dashboard Website</h3>
            <p className="text-gray-700 mb-4">Personalized learning experience using artificial intelligence to adapt to student needs.</p>
            <div className="flex justify-between items-center">
              <button className="cursor-pointer text-blue-600 font-semibold hover:text-blue-800">View Project →</button>
            </div>
          </div>
        </div>

        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="/project3.png" alt="Project" className="w-full h-48 object-cover"/>
          <div className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">Personal Project</span>
              <span className="text-gray-600 text-sm">2025 February - 2025 April</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">E-commerce Website</h3>
            <p className="text-gray-700 mb-4">An e-commerce website for a local business to sell their products online.</p>
            <div className="flex justify-between items-center">
              <button className="cursor-pointer text-blue-600 font-semibold hover:text-blue-800">View Project →</button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="/project4.png" alt="Project" className="w-full h-48 object-cover"/>
          <div className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">Personal Project</span>
              <span className="text-gray-600 text-sm">2024</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Food Delivery Website</h3>
            <p className="text-gray-700 mb-4">Mobile application connecting local healthcare providers with patients in underserved areas.</p>
            <div className="flex justify-between items-center">
              <button className="cursor-pointer text-blue-600 font-semibold hover:text-blue-800">View Project →</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </section>
  );
};

export default Projects;
