import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const categories = [
    {
      title: "Frontend",
      skills: "React · Next.js · Tailwind · Framer Motion"
    },
    {
      title: "Backend",
      skills: "Node.js · Express · MongoDB · Firebase"
    },
    {
      title: "Strength",
      skills: "Clean UI · Animation Focus · Performance"
    },
    {
      title: "Mindset",
      skills: "Structured Thinking · Fast Learning · Discipline"
    }
  ];

  return (
    <section id="about" className="py-32 px-6 md:px-10 bg-[#f8f8f8] relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left Side: Bio & Typography */}
          <div className="lg:w-1/2 relative">
            {/* Large Background Text Effect */}
            <h2 className="text-[10vw] font-black text-gray-200/90 absolute -top-20 -left-4 leading-none select-none uppercase tracking-tighter">
              ABOUT
            </h2>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <h3 className="text-5xl md:text-6xl font-black tracking-tighter text-gray-900 leading-[1.1] mb-8">
                Crafting Experiences <br /> Beyond Just Code.
              </h3>
              
              <div className="space-y-6 max-w-xl">
                <p className="text-gray-600 text-lg leading-relaxed">
                  I'm a 3rd year Computer Science student focused on becoming a full-stack engineer through the MERN ecosystem. While frontend is currently my strongest edge, I intentionally build complete systems — from responsive interfaces to structured backend architecture.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  I care deeply about clean UI, smooth animations, scalable structure and performance-driven design. For me, development isn't just writing code — it's engineering experiences that feel intentional, polished and efficient.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Skill Cards Grid */}
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {categories.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col justify-start min-h-[180px]"
              >
                <h4 className="text-xl font-black mb-4 text-gray-900 tracking-tight italic uppercase">
                  {item.title}
                </h4>
                <p className="text-gray-400 text-sm font-bold leading-relaxed tracking-wide">
                  {item.skills}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;