import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const categories = [
    { title: "Frontend", skills: "React · Next.js · Tailwind · Framer Motion" },
    { title: "Backend", skills: "Node.js · Express · MongoDB · Firebase" },
    { title: "Strength", skills: "Clean UI · Animation Focus · Performance" },
    { title: "Mindset", skills: "Structured Thinking · Fast Learning · Discipline" },
  ];

  // Shared viewport config
  const vp = { once: true, margin: '-80px' };

  // Card animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.96 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: i * 0.12, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  return (
    <section id="about" className="py-32 px-6 md:px-10 bg-[#f8f8f8] relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 items-start">

          {/* ─── Left: Bio ─── */}
          <div className="lg:w-1/2 relative">
            {/* Large watermark */}
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={vp}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="text-[10vw] font-black text-gray-200/90 absolute -top-20 -left-4 leading-none select-none uppercase tracking-tighter"
            >
              ABOUT
            </motion.h2>

            <div className="relative z-10">
              {/* Headline — slides up */}
              <motion.h3
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="text-5xl md:text-6xl font-black tracking-tighter text-gray-900 leading-[1.1] mb-8"
              >
                Crafting Experiences <br /> Beyond Just Code.
              </motion.h3>

              {/* Animated accent line */}
              <motion.span
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={vp}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="block h-[3px] w-16 bg-gray-900 rounded-full mb-8"
              />

              {/* Paragraph 1 */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
                className="text-gray-600 text-lg leading-relaxed mb-5 max-w-xl"
              >
                Full-Stack Software Engineer building scalable applications with the MERN stack and Python. Architect complete systems, focusing on robust backend logic and intuitive frontend interfaces.
              </motion.p>

              {/* Paragraph 2 */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={vp}
                transition={{ duration: 0.6, delay: 0.42, ease: 'easeOut' }}
                className="text-gray-600 text-lg leading-relaxed max-w-xl"
              >
                Technical focus lies in clean architecture, performance optimization, and integrating AI capabilities. Prioritize engineering solutions that are intentional, polished, and highly efficient.
              </motion.p>
            </div>
          </div>

          {/* ─── Right: Skill Cards ─── */}
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {categories.map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={vp}
                whileHover={{
                  y: -6,
                  boxShadow: '0 16px 40px rgba(0,0,0,0.09)',
                  transition: { duration: 0.25 },
                }}
                className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col justify-start min-h-[180px] cursor-default"
              >
                {/* Card index indicator */}
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={vp}
                  transition={{ delay: index * 0.12 + 0.3 }}
                  className="text-[11px] font-mono text-gray-300 mb-3 tracking-widest"
                >
                  0{index + 1}
                </motion.span>

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