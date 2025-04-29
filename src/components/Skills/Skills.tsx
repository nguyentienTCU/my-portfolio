const Skills = () => {
  const skills = [
    {
      title: "Full-Stack Strategy & Architecture",
      description:
        "I plan and structure scalable web applications—from database to UI—using modern frameworks and best practices for performance and maintainability.",
      icon: "🧠",
    },
    {
      title: "Frontend Engineering",
      description:
        "I build responsive, accessible, and high-performance interfaces using Next.js, Nuxt.js, and TailwindCSS, with a strong focus on clean code and component reusability.",
      icon: "🛠",
    },
    {
      title: "UI & UX Implementation",
      description:
        "I translate design concepts into intuitive experiences, balancing aesthetics with usability.",
      icon: "🎨",
    },
    {
      title: "Backend & Cloud Integration",
      description:
        "I integrate secure and reliable backend systems using Node.js, MongoDB, and Firebase. I also set up real-time updates, serverless functions, and authentication flows.",
      icon: "🔧",
    },
  ];

  return (
    <section className="py-20 bg-white" id="skills">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-4xl font-bold">My Expertise</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-3xl mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{skill.title}</h3>
              <p className="text-gray-600">{skill.description}</p>
              <div className="mt-4 h-1 w-16 bg-[#6C63FF] rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
