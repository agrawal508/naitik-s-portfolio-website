import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-10 relative overflow-hidden">
      {/* Social Links Sidebar */}
      <div className="absolute left-8 bottom-12 flex flex-col gap-6 text-gray-400">
        <a href="https://github.com/agrawal508" className="hover:text-black transition-colors"><Github size={20}/></a> 
        <a href="https://www.linkedin.com/in/naitik-agarwal" className="hover:text-black transition-colors"><Linkedin size={20}/></a>
        <a href="mailto:agrawalnaitik508@gmail.com" className="hover:text-black transition-colors"><Mail size={20}/></a> 
      </div>

      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xl font-bold mb-4"
          >
            Full Stack Developer
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <h1 className="text-[120px] font-black leading-none tracking-tighter text-black opacity-10 absolute -top-12 -left-2">NAITIK</h1>
            <h1 className="text-8xl font-black leading-tight tracking-tighter">NAITIK <br/> AGARWAL</h1> 
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-500 mt-6 text-lg max-w-md border-l-2 border-black pl-4"
          >
            I architect AI-powered security tools and scalable web applications using C++, Python, and React.
          </motion.p>

          <div className="mt-10 flex flex-wrap gap-6">
            <a 
           href={`${process.env.PUBLIC_URL}/assets/naitik-resume.pdf`}
            download="Naitik_Agarwal_Resume.pdf"
            className="bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-blue-600 transition-all inline-block"
            >
            Download CV
            </a>
                        
            <button className="font-bold text-lg hover:text-brand-blue">Contact →</button>
          </div>
        </div>

        {/* The Image Tilt */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: -3 }}
          whileHover={{ rotate: 0, scale: 1.02 }}
          className="relative aspect-[4/5] bg-gray-200 rounded-2xl shadow-2xl overflow-hidden border-[12px] border-white"
        >
          <img 
            src="/assets/naitik-photo.jpg" 
            alt="Naitik Agarwal" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;