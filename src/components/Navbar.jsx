import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const navItems = ['Home', 'About', 'Projects', 'Contact'];

  return (
    <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50">
      <motion.nav 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-gray-100/80 backdrop-blur-md border border-gray-200 px-2 py-2 rounded-full shadow-2xl flex items-center gap-1"
      >
        {navItems.map((item) => (
          <a 
            key={item}
            href={`#${item.toLowerCase()}`}
            className="px-6 py-2 rounded-full text-sm font-bold transition-all hover:text-blue-600 focus:bg-black focus:text-white active:bg-black active:text-white"
          >
            {item}
          </a>
        ))}
      </motion.nav>
    </div>
  );
};

export default Navbar;