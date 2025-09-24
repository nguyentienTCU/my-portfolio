import React from "react";
import Image from "next/image";

const Projects = () => {

  return (
    <section className="bg-gray-50" id="projects">
      <div className="pt-4">
        {/* Projects Content */}
        <div className="container mx-auto px-4 py-16">
          {/* <h1 class="text-4xl font-bold text-center mb-12"></h1> */}
          <h1 className="text-4xl font-bold text-center mb-12">
            My Projects
          </h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="/project1.png"
                alt="Project"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                    Startup Project
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Youngpreneur Academy Program Website
                </h3>
                <p className="text-gray-700 mb-4">
                  A clean, modern site introducing students to a youth
                  entrepreneurship program. It showcases session highlights,
                  program values, and includes an interactive chatbot and
                  multilingual support to engage users from diverse backgrounds.
                </p>
                <div className="flex justify-between items-center mb-1">
                  <a
                    href="https://youngpreneuracademy.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer text-blue-600 font-semibold hover:text-blue-800"
                  >
                    View Site →
                  </a>
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href="https://github.com/nguyentienTCU/youngpreneur_web"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer text-blue-600 font-semibold hover:text-blue-800"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="/project2.png"
                alt="Project"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                    Group Project
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  British Airways Dashboard Website
                </h3>
                <p className="text-gray-700 mb-4">
                  An interactive data dashboard that visualizes 11 years of
                  customer review trends for British Airways. Users can explore
                  performance charts, filter insights, and view real-time stats
                  through a sleek, responsive interface.
                </p>
                <div className="flex justify-between items-center mb-1">
                  <a
                    href="https://british-airways-dashboard-website.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer text-blue-600 font-semibold hover:text-blue-800"
                  >
                    View Site →
                  </a>
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href="https://github.com/nguyentienTCU/british_airways_dashboard_website"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer text-blue-600 font-semibold hover:text-blue-800"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="/project3.png"
                alt="Project"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                    Personal Project
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  E-commerce Website
                </h3>
                <p className="text-gray-700 mb-4">
                  An intuitive shopping platform where users can browse
                  products, filter by category, manage their cart, and demo a
                  seamless checkout process. The site is optimized,
                  mobile-friendly, and designed with a clean, modern UI.
                </p>
                <div className="flex justify-between items-center">
                  <a
                    href="https://github.com/nguyentienTCU/E-Commerce-Web-admin-page"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer text-blue-600 font-semibold hover:text-blue-800"
                  >
                    View Admin Page →
                  </a>
                </div>
                <div className="mt-3 flex justify-between items-center">
                  <a
                    href="https://github.com/nguyentienTCU/E-Commerce-Web-store-page"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer text-blue-600 font-semibold hover:text-blue-800"
                  >
                    View Store Page →
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="/project4.png"
                alt="Project"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                    Personal Project
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Food Delivery Website
                </h3>
                <p className="text-gray-700 mb-4">
                  A simple and functional food ordering app that lets users view
                  menus, place orders, and track delivery status. Includes an
                  admin dashboard for managing orders in real time.
                </p>
                <div className="flex justify-between items-center">
                  <a
                    href="https://github.com/nguyentienTCU/Food-Del-Project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer text-blue-600 font-semibold hover:text-blue-800"
                  >
                    View Project →
                  </a>
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
