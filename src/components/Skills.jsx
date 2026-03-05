import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Database, BrainCircuit, Wrench, GraduationCap } from "lucide-react";

const Skills = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code2 className="w-6 h-6 text-black" />,
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"]
    },
    {
      title: "Backend",
      icon: <Database className="w-6 h-6 text-gray-700" />,
      skills: ["Node.js", "Express", "Python", "FastAPI", "MongoDB", "PostgreSQL", "Redis"]
    },
    {
      title: "AI & ML",
      icon: <BrainCircuit className="w-6 h-6 text-black" />,
      skills: ["Machine Learning", "NLP", "Scikit-learn", "Pandas", "Gemini API", "Neural Networks"]
    },
    {
      title: "Tools & DevOps",
      icon: <Wrench className="w-6 h-6 text-gray-700" />,
      skills: ["Git", "Docker", "Firebase", "Postman", "Linux", "Socket.io"]
    }
  ];

  const education = [
    {
      degree: "B.Tech – Computer Science & Engineering",
      institution: "Lovely Professional University",
      period: "AUG '23 – PRESENT",
      detail: "CGPA: 7.65"
    },
    {
      degree: "Intermediate (Class XII)",
      institution: "Bhagawati Senior Secondary School",
      period: "APR '21 – MAR '22",
      detail: "Score: 91%"
    }
  ];

  return (
    <section id="skills" className="py-32 px-6 md:px-10 bg-white relative overflow-hidden" ref={sectionRef}>

      {/* Background Text Overlay */}
      <h2 className="text-[10vw] font-black text-gray-50 absolute top-20 left-4 leading-none select-none uppercase tracking-tighter whitespace-nowrap z-0">
        EXPERTISE
      </h2>

      <div className="container mx-auto max-w-7xl relative z-10">

        {/* Section Header */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            className="text-5xl font-black tracking-tighter text-gray-900 mb-6 uppercase font-heading"
          >
            Capabilities & <span className="text-gray-400">Education.</span>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 text-lg max-w-2xl font-medium"
          >
            A comprehensive overview of my technical arsenal and academic background.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">

          {/* Left Side: Skills Grid */}
          <div className="lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: idx * 0.1 + 0.2 }}
                className="bg-gray-50 border border-gray-100 rounded-3xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-white rounded-2xl shadow-sm">
                    {category.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 font-heading tracking-tight">{category.title}</h4>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-white text-gray-600 text-sm font-semibold rounded-xl border border-gray-100 shadow-sm hover:border-black hover:text-black transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Side: Education Timeline */}
          <div className="lg:w-2/5 relative">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ delay: 0.4 }}
              className="bg-gray-900 rounded-[2.5rem] p-10 text-white h-full relative overflow-hidden"
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gray-800 blur-[50px] rounded-full"></div>

              <div className="flex items-center gap-4 mb-10 relative z-10">
                <GraduationCap className="w-8 h-8 text-white" />
                <h4 className="text-2xl font-bold font-heading">Education path</h4>
              </div>

              <div className="space-y-10 relative z-10 relative border-l-2 border-gray-700 ml-3 pl-8">
                {education.map((item, idx) => (
                  <div key={idx} className="relative">
                    {/* Timeline dot */}
                    <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-gray-900 border-4 border-gray-400"></div>

                    <span className="text-gray-400 font-bold text-sm tracking-widest uppercase mb-2 block">
                      {item.period}
                    </span>
                    <h5 className="text-xl font-bold mb-1 text-white">{item.degree}</h5>
                    <p className="text-gray-400 font-medium mb-3">{item.institution}</p>
                    <span className="inline-block px-3 py-1 bg-white/10 rounded-lg text-sm font-bold text-gray-200">
                      {item.detail}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
