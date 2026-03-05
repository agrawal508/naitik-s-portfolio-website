import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-12 px-6 md:px-10 relative overflow-hidden bg-white">
      {/* Subtle Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-gray-100 blur-[100px] opacity-70"></div>

      {/* Social Links Sidebar - Hidden on mobile, relative on mobile */}
      <div className="hidden md:flex absolute flex-col gap-6 text-gray-400 left-8 top-1/2 -translate-y-1/2">
        <a href="https://github.com/agrawal508" target="_blank" rel="noreferrer" className="hover:text-black transition-colors transform hover:scale-110"><Github size={22} /></a>
        <a href="https://www.linkedin.com/in/naitik-agarwal" target="_blank" rel="noreferrer" className="hover:text-black transition-colors transform hover:scale-110"><Linkedin size={22} /></a>
        <a href="mailto:agrawalnaitik508@gmail.com" className="hover:text-black transition-colors transform hover:scale-110"><Mail size={22} /></a>
      </div>

      <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center gap-12 md:gap-20">

        {/* Left Side: Text Content */}
        <div className="w-full md:w-3/5 flex flex-col justify-center order-2 md:order-1 mt-8 md:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-xl md:text-2xl font-semibold mb-3 text-gray-600 tracking-tight">
              Hey, I'm Naitik Agarwal
            </h2>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tighter text-gray-900 mb-6 font-heading">
              Building scalable <br className="hidden md:block" /> web applications & <br className="hidden md:block" /> AI-powered tools.
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-500 text-lg md:text-xl max-w-xl font-medium leading-relaxed mb-10 border-l-4 border-gray-200 pl-5"
          >
            Full Stack Developer specializing in React, Node.js, and Python. I engineer clean, performant, and reliable software designed for scale.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap items-center gap-5"
          >
            <a
              href={`${process.env.PUBLIC_URL}/assets/naitik-resume.pdf`}
              download="Naitik_Agarwal_Resume.pdf"
              className="flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-black/20 group"
            >
              <Download size={18} className="group-hover:-translate-y-1 transition-transform" />
              Download Resume
            </a>

            <a
              href="#contact"
              className="flex items-center gap-2 font-bold text-gray-700 text-lg hover:text-black transition-colors group px-4 py-2"
            >
              Contact Me
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Social Links for Mobile */}
          <div className="flex md:hidden gap-6 mt-12 text-gray-500">
            <a href="https://github.com/agrawal508" target="_blank" rel="noreferrer" className="hover:text-black"><Github size={24} /></a>
            <a href="https://www.linkedin.com/in/naitik-agarwal" target="_blank" rel="noreferrer" className="hover:text-black"><Linkedin size={24} /></a>
            <a href="mailto:agrawalnaitik508@gmail.com" className="hover:text-black"><Mail size={24} /></a>
          </div>
        </div>

        {/* Right Side: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: 3 }}
          animate={{ opacity: 1, scale: 1, rotate: -2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ rotate: 0, scale: 1.02 }}
          className="w-full md:w-2/5 order-1 md:order-2 flex justify-center md:justify-end"
        >
          <div className="relative w-[320px] md:w-[480px] aspect-[4/5] rounded-[2.5rem] shadow-2xl overflow-hidden border-[8px] border-white group cursor-pointer hover:shadow-black/20 transition-shadow duration-500">
            {/* Overlay for subtle color tint */}
            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
            <img
              src="/assets/naitik-photo.jpg"
              alt="Naitik Agarwal"
              className="w-full h-full object-cover grayscale transition-all duration-500 ease-out transform group-hover:grayscale-0 group-hover:scale-105"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;