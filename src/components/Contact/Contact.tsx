import React from "react";
import Image from "next/image";

const Contact = () => {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/yourusername",
      icon: "/github.png",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourusername",
      icon: "/linkedin.png",
    },
    {
      name: "Facebook",
      url: "https://twitter.com/yourusername",
      icon: "/facebook.png",
    },
  ];

  return (
    <section className="py-20 bg-gray-50" id="contact">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Contact me</h2>
          <p className="text-sm text-gray-600 mb-2">Get In Touch</p>
          <p className="text-gray-600">
            Feel free to reach out to me on any of these platforms
          </p>
        </div>

        <div className="flex justify-center items-center gap-8">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative w-12 h-12">
                <Image
                  src={social.icon}
                  alt={social.name}
                  fill
                  className="object-contain"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
