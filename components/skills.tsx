"use client"

import { FaCode, FaBrain, FaTools, FaLaptopCode } from "react-icons/fa"

export default function SkillsClustered() {
  const skillGroups = [
    {
      title: "Programming Languages",
      icon: <FaLaptopCode className="text-cyan-400 text-4xl mb-4 mx-auto" />,
      skills: ["Java", "Python", "JavaScript"]
    },
    {
      title: "Development",
      icon: <FaCode className="text-cyan-400 text-4xl mb-4 mx-auto" />,
      skills: [
        "React", "Next.js", "Tailwind CSS","Node.js", "Express.js", "PostgreSQL", "MongoDB", "Vercel"
      ],
    },
    {
      title: "AI & Agentic Tools",
      icon: <FaBrain className="text-cyan-400 text-4xl mb-4 mx-auto" />,
      skills: [
        "LLM API's", "LangChain", "RAG", "Pinecone", "FastAPI", "Numpy", "Pandas",
        "Sklearn", "Matplotlib"
      ],
    },
    {
      title: "Tools",
      icon: <FaTools className="text-cyan-400 text-4xl mb-4 mx-auto" />,
      skills: ["Git", "GitHub", "Docker", "Postman", "Figma", "Firebase", "Linux"]
    },
    
  ]

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-animate className="fade-up text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-cyan-400">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A categorized overview of my development, AI, and tool expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {skillGroups.map((group, idx) => (
            <div
              key={idx}
              data-animate
              className="fade-up bg-slate-800/50 rounded-2xl p-8 hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105 text-center"
              style={{ animationDelay: `${idx * 200}ms` }}
            >
              {group.icon}
              <h3 className="text-xl font-bold text-white mb-4">{group.title}</h3>
              <p className="text-gray-300 leading-relaxed">
                {group.skills.join(" · ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
