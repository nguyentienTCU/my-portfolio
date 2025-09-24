import Image from "next/image";
import Link from "next/link";

const experience: {
  company: string;
  role: string;
  date: string;
  logo: string;
  description?: string;
}[] = [
  {
    company: "FPT Information System",
    role: "Software Engineer Intern",
    date: "May 2025 → August 2025",
    logo: "/fpt-logo-1.png",
    description:
      "Contributed to a business registration platform used by government officials and enterprises. Helped streamline workflows and reduce manual bottlenecks by improving data handling and registration processes. Collaborated with cross-functional teams to deliver features that enhanced reliability and efficiency for thousands of daily users.",
  },
  {
    company: "Finbud AI",
    role: "Software Engineer Intern",
    date: "May 2025 → August 2025",
    logo: "/finbud-logo.jpg",
    description:
      "Developed an AI-powered financial news platform that automated the collection, summarization, and sentiment analysis of market articles. Designed features that enabled users to access real-time insights without manual research, supporting faster and more informed investment decisions. Improved content accuracy and timeliness by building end-to-end pipelines that scaled with live financial data.",
  },
];

export default async function InfoPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-4xl mx-auto px-6 pt-8 pb-4">
        {/* Information Section */}
        <section className="mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Hello!</h1>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg">
              I'm <strong>Tien Nguyen</strong>, a sophomore at Texas Christian
              University pursuing a degree in Computer Science and Mathematics.
              I enjoy building software that is both scalable and impactful,
              from backend systems that power real-time data pipelines to
              frontend interfaces that deliver clean and intuitive experiences.
            </p>

            <p className="text-lg">
              My strengths lie in backend development, cloud infrastructure, and
              system design, where I focus on reducing response times, scaling
              services, and ensuring reliability under heavy demand. At the same
              time, I embrace frontend work to craft user-friendly products that
              bridge technology with real needs.
            </p>

            <p className="text-lg">
              I’m particularly curious about the role of AI in reshaping
              software development and user experience. Whether it’s applying
              NLP to summarize information, designing smarter workflows, or
              building AI-agentic and RAG-powered systems, I see AI as a way to
              push products beyond functionality into meaningful interaction.
            </p>

            <p className="text-lg">
              Outside of projects, I treat coding like training for a sport:
              consistency, steady improvement, and resilience are at the core of
              how I grow as an engineer.
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section>
          <h4 className="text-4xl font-bold text-gray-900 mb-12">Experience</h4>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                    <Image
                      width={40}
                      height={40}
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {exp.company}
                    </h3>
                    <span className="text-sm text-gray-500 font-mono">
                      {exp.date}
                    </span>
                  </div>

                  <h4 className="text-lg font-medium text-gray-700 mb-3">
                    {exp.role}
                  </h4>

                  {exp.description && (
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {exp.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <p>
                Built with{" "}
                <a href="https://nextjs.org/" className="text-blue-500">
                  Next.js
                </a>
                &nbsp;|&nbsp;
                <a
                  href="https://github.com/yourusername"
                  className="text-blue-500"
                >
                  GitHub
                </a>
              </p>
              <p>
                © {new Date().getFullYear()} Tien Nguyen. All rights reserved.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
