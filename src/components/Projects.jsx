import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Blink — Real-Time Video Chat",
      desc: "A privacy-first random video chat application built with WebRTC and Socket.IO. Features real-time peer-to-peer communication and responsive UI.",
      tech: ["WebRTC", "Node.js", "Express", "Socket.io", "JavaScript"],
      github: "https://github.com/agrawal508",
      live: "#"
    },
    {
      title: "Foodzy — AI Food Ordering",
      desc: "A modern full-stack platform powered by Firebase and Gemini AI. Includes authentication, order tracking, and AI chatbot recommendations.",
      tech: ["React", "Firebase", "Gemini API", "Tailwind", "THREE.js"],
      github: "https://github.com/agrawal508",
      live: "#"
    },
    {
      title: "Static Code Analysis Tool",
      desc: "Architected backend services using FastAPI to detect security vulnerabilities like SQL injection via AST parsing and NLP.",
      tech: ["Python", "FastAPI", "NLP", "Docker"],
      github: "https://github.com/agrawal508",
      live: "#"
    },
    {
      title: "Employee Attrition System",
      desc: "Constructed an ML system using ensemble techniques to visualize employee risk metrics on a professional dashboard.",
      tech: ["Scikit-learn", "Pandas", "FastAPI", "Streamlit"],
      github: "https://github.com/agrawal508",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="py-32 px-6 md:px-10 bg-[#f8f8f8] relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="relative mb-20 text-center md:text-left">
          <h2 className="text-[12vw] font-black text-gray-200/60 absolute -top-16 left-0 leading-none select-none uppercase tracking-tighter">
            PROJECTS
          </h2>
          <h3 className="text-5xl font-black relative z-10 tracking-tighter text-gray-900 uppercase">
            Built With <span className="text-gray-400">Curiosity.</span>
          </h3>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-500 group"
            >
              <div>
                <h4 className="text-xl font-black mb-4 text-gray-900 leading-tight group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed mb-8">
                  {project.desc}
                </p>
                
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-10">
                  {project.tech.map((t, i) => (
                    <span 
                      key={i} 
                      className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 bg-gray-50 text-gray-400 rounded-full border border-gray-100"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="flex items-center gap-6 pt-6 border-t border-gray-50">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gray-900 hover:text-blue-600 transition-colors"
                >
                  <Github size={16} /> GitHub
                </a>
                <a 
                  href={project.live} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gray-900 hover:text-blue-600 transition-colors"
                >
                  <ExternalLink size={16} /> Live
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;