import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Instagram, Send } from 'lucide-react';

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    // Replace placeholders with your actual EmailJS credentials
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then(() => {
          setIsSent(true);
          form.current.reset();
          setTimeout(() => setIsSent(false), 5000);
      }, (error) => {
          console.error(error.text);
          alert("Error sending message. Please try again.");
      });
  };

  return (
    <section id="contact" className="py-32 px-6 md:px-10 bg-[#f8f8f8]">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-32">
          
          {/* Left Side: Headline & Direct Links */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-5/12"
          >
            <h2 className="text-6xl md:text-7xl font-black tracking-tighter text-gray-900 leading-[1.1] mb-12">
              Let’s Build <br /> Something <br /> Meaningful
            </h2>
            
            <p className="text-gray-600 text-lg font-bold mb-12 max-w-md">
              Whether it's a collaboration, internship opportunity, or just a conversation about building better web experiences — I'd love to connect.
            </p>

            <div className="space-y-8">
              <a href="mailto:agrawalnaitik508@gmail.com" className="flex items-center gap-3 text-lg font-black hover:text-blue-600 transition-colors">
                <Mail size={20} /> agrawalnaitik508@gmail.com
              </a>
              
              <div className="flex gap-6">
                <a href="https://github.com/agrawal508" target="_blank" className="hover:text-blue-600 transition-colors"><Github size={24}/></a>
                <a href="https://www.linkedin.com/in/naitik-agarwal" target="_blank" className="hover:text-blue-600 transition-colors"><Linkedin size={24}/></a>
                <a href="#" className="hover:text-blue-600 transition-colors"><Instagram size={24}/></a>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Underlined Form Fields */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-7/12"
          >
            {isSent ? (
              <div className="h-full flex flex-center items-center justify-center border-2 border-dashed border-blue-200 rounded-[2rem] p-20">
                <div className="text-center">
                  <h3 className="text-3xl font-black mb-2">Message Sent!</h3>
                  <p className="text-gray-500 font-bold">I'll get back to you shortly, Naitik.</p>
                </div>
              </div>
            ) : (
              <form ref={form} onSubmit={sendEmail} className="space-y-12">
                <div className="relative group">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 block mb-2 group-focus-within:text-blue-600 transition-colors">Your Name</label>
                  <input name="from_name" required type="text" className="w-full py-4 bg-transparent border-b-2 border-gray-200 outline-none focus:border-black transition-all font-bold text-lg" />
                </div>

                <div className="relative group">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 block mb-2 group-focus-within:text-blue-600 transition-all">Your Email</label>
                  <input name="reply_to" required type="email" className="w-full py-4 bg-transparent border-b-2 border-gray-200 outline-none focus:border-black transition-all font-bold text-lg" />
                </div>

                <div className="relative group">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 block mb-2 group-focus-within:text-blue-600 transition-all">Your Message</label>
                  <textarea name="message" required rows="1" className="w-full py-4 bg-transparent border-b-2 border-gray-200 outline-none focus:border-black transition-all font-bold text-lg resize-none overflow-hidden" onInput={(e) => { e.target.style.height = 'auto'; e.target.style.height = e.target.scrollHeight + 'px'; }} />
                </div>

                <div className="pt-6">
                  <button type="submit" className="bg-black text-white px-12 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:bg-blue-600 transition-all flex items-center gap-3">
                    Send Message <Send size={16} />
                  </button>
                </div>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;