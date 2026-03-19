import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Activity, Target } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Static Code Analysis Tool",
      problem: "Detecting zero-day vulnerabilities in source code before deployment.",
      desc: "Architected scalable backend services using FastAPI to detect security vulnerabilities like SQL injection and XSS via abstract syntax tree (AST) parsing and NLP.",
      tech: ["Python", "FastAPI", "NLP", "Docker"],
      github: "https://github.com/agrawal508",
      live: "#"
    },
    {
      title: "Blink — Real-Time Video Chat",
      problem: "Creating low-latency, secure P2P connections over typical networks.",
      desc: "A privacy-first random video chat application built with WebRTC and Socket.IO. Features real-time peer-to-peer communication, signaling architecture, and a modern responsive UI.",
      tech: ["WebRTC", "Node.js", "Socket.io", "React", "Express"],
      github: "https://github.com/agrawal508",
      live: "#"
    },
    {
      title: "Employee Attrition System",
      problem: "Identifying at-risk employees through behavioral and historical data analytics.",
      desc: "Constructed an end-to-end ML system using ensemble techniques. Includes a robust API for fast predictions and a Streamlit dashboard to visualize employee risk metrics.",
      tech: ["Scikit-learn", "Pandas", "FastAPI", "Streamlit"],
      github: "https://github.com/agrawal508",
      live: "#"
    },
    {
      title: "Foodzy — AI Food Ordering",
      problem: "Personalizing the food ordering experience using intelligent recommendations.",
      desc: "A modern full-stack platform powered by Firebase and Gemini AI. Integrates complex 3D elements using THREE.js along with a conversational AI interface.",
      tech: ["React", "Firebase", "Gemini API", "Tailwind", "Three.js"],
      github: "https://github.com/agrawal508",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="py-32 px-6 md:px-10 bg-[#f8f8f8] relative">

      {/* Section Header */}
      <div className="container mx-auto max-w-7xl relative z-20 mb-16 md:mb-24">
        <div className="relative text-center md:text-left">
          <h2 className="text-[12vw] font-black text-gray-200/60 absolute -top-16 left-0 leading-none select-none uppercase tracking-tighter hidden md:block z-0">
            PROJECTS
          </h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-5xl font-black relative z-10 tracking-tighter text-gray-900 uppercase font-heading"
          >
            Turning ideas into <span className="text-gray-400">production-ready software.</span>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg mt-6 max-w-2xl font-medium relative z-10"
          >
            A curated selection of my technical work, focusing on solving complex problems with scalable engineering solutions.
          </motion.p>
        </div>
      </div>

      {/* Projects Sticky Stacking Container */}
      <div className="container mx-auto max-w-5xl relative flex flex-col gap-8 md:gap-12 pb-[20vh]">
        {projects.map((project, i) => {
          // Dynamic calculation for the top position to create the layered stacking effect
          // Leaves a 20px gap between the top edges of stacked cards
          const topOffset = `calc(10vh + ${i * 40}px)`;

          return (
            <div
              key={i}
              className="sticky w-full bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl border-t border-gray-200 flex flex-col md:flex-row gap-10 transition-shadow duration-500 will-change-transform"
              style={{
                top: topOffset,
                // Ensure natural DOM z-index layering handles the overlap properly
                zIndex: i + 1,
              }}
            >
              <div className="md:w-3/5 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center shadow-md">
                    <Activity size={20} className="text-white" />
                  </div>
                  <h4 className="text-3xl md:text-4xl font-black text-gray-900 font-heading tracking-tight">
                    {project.title}
                  </h4>
                </div>

                <div className="flex items-start gap-2 text-gray-700 bg-gray-50 p-5 rounded-2xl mb-8 border border-gray-100">
                  <Target size={20} className="text-gray-900 mt-1 flex-shrink-0" />
                  <p className="font-semibold text-sm leading-relaxed">
                    <span className="text-gray-900 font-bold uppercase tracking-wide text-xs">Problem:</span> <br />
                    {project.problem}
                  </p>
                </div>

                <p className="text-gray-600 text-lg leading-relaxed mb-10">
                  {project.desc}
                </p>

                {/* Tech Stack */}
                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tech.map((t, index) => (
                    <span
                      key={index}
                      className="text-xs font-bold uppercase tracking-widest px-4 py-2 bg-gray-100/80 text-gray-800 rounded-xl border border-gray-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links Column / Decoration */}
              <div className="md:w-2/5 flex flex-row md:flex-col items-center justify-center gap-6 border-t md:border-t-0 md:border-l border-gray-100 pt-8 md:pt-0">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center justify-center w-36 h-36 rounded-3xl bg-gray-50 text-gray-600 hover:bg-black hover:text-white hover:scale-105 transition-all duration-300 shadow-sm border border-gray-100"
                >
                  <Github size={36} className="mb-3" />
                  <span className="text-xs font-black uppercase tracking-widest">Repository</span>
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center justify-center w-36 h-36 rounded-3xl bg-gray-900 text-white hover:bg-black hover:scale-105 transition-all duration-300 shadow-xl border border-gray-800"
                >
                  <ExternalLink size={36} className="mb-3" />
                  <span className="text-xs font-black uppercase tracking-widest">Live Demo</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
};

export default Projects;