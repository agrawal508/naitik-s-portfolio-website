import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion, useInView } from 'framer-motion';
import { Mail, Github, Linkedin, Instagram, Send, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        setIsSent(true);
        form.current.reset();
        setTimeout(() => setIsSent(false), 5000);
      }, (error) => {
        console.error("Email sending failed:", error.text);
        alert("Failed to send the message. Please ensure the EmailJS environment variables are correctly configured.");
      });
  };

  return (
    <section id="contact" className="py-32 px-6 md:px-10 bg-[#f8f8f8] relative" ref={sectionRef}>
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-32 items-center">

          {/* Left Side: Headline & Direct Links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            className="lg:w-5/12 w-full"
          >
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-gray-900 leading-[1.1] mb-10 font-heading">
              Let’s Build <br /> Something <br /> <span className="text-gray-400">Meaningful.</span>
            </h2>

            <p className="text-gray-500 text-lg font-medium leading-relaxed mb-12 max-w-md">
              Whether it's a collaboration, an internship opportunity, or just a conversation about building better software — my inbox is always open.
            </p>

            <div className="space-y-6">
              <a href="mailto:agrawalnaitik508@gmail.com" className="inline-flex items-center gap-4 text-xl font-bold bg-white px-6 py-4 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-black hover:text-black transition-all duration-300 group">
                <div className="p-3 bg-gray-100 text-gray-600 rounded-xl group-hover:bg-black group-hover:text-white transition-colors">
                  <Mail size={24} />
                </div>
                agrawalnaitik508@gmail.com
              </a>

              <div className="flex gap-4 pt-4 ml-2">
                <a href="https://github.com/agrawal508" target="_blank" rel="noreferrer" className="w-14 h-14 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-black hover:text-white hover:border-black transition-all shadow-sm hover:shadow-xl hover:-translate-y-1"><Github size={22} /></a>
                <a href="https://www.linkedin.com/in/naitik-agarwal" target="_blank" rel="noreferrer" className="w-14 h-14 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-all shadow-sm hover:shadow-xl hover:-translate-y-1"><Linkedin size={22} /></a>
                <a href="#" className="w-14 h-14 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-gradient-to-tr hover:from-orange-500 hover:to-pink-500 hover:text-white hover:border-transparent transition-all shadow-sm hover:shadow-xl hover:-translate-y-1"><Instagram size={22} /></a>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Form Fields */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-7/12 w-full bg-white p-10 md:p-14 rounded-[2.5rem] shadow-xl shadow-black/5 border border-gray-100"
          >
            {isSent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full min-h-[400px] flex flex-col items-center justify-center text-center"
              >
                <div className="w-24 h-24 bg-gray-100 text-gray-900 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={48} />
                </div>
                <h3 className="text-4xl font-black mb-4 font-heading">Message Sent!</h3>
                <p className="text-gray-500 font-medium text-lg">Thank you for reaching out. I'll get back to you as soon as possible.</p>
              </motion.div>
            ) : (
              <form ref={form} onSubmit={sendEmail} className="space-y-8">

                <div className="flex flex-col md:flex-row gap-8">
                  <div className="relative group w-full">
                    <input name="from_name" id="name" required type="text" placeholder=" " className="peer w-full py-4 bg-transparent border-b-2 border-gray-200 text-gray-900 focus:outline-none focus:border-black transition-all font-bold text-lg" />
                    <label htmlFor="name" className="absolute left-0 top-4 text-gray-400 text-lg font-medium peer-focus:-top-4 peer-focus:text-xs peer-focus:font-bold peer-focus:text-black peer-focus:tracking-widest peer-focus:uppercase peer-valid:-top-4 peer-valid:text-xs peer-valid:font-bold peer-valid:tracking-widest peer-valid:uppercase transition-all pointer-events-none">Your Name</label>
                  </div>

                  <div className="relative group w-full">
                    <input name="reply_to" id="email" required type="email" placeholder=" " className="peer w-full py-4 bg-transparent border-b-2 border-gray-200 text-gray-900 focus:outline-none focus:border-black transition-all font-bold text-lg" />
                    <label htmlFor="email" className="absolute left-0 top-4 text-gray-400 text-lg font-medium peer-focus:-top-4 peer-focus:text-xs peer-focus:font-bold peer-focus:text-black peer-focus:tracking-widest peer-focus:uppercase peer-valid:-top-4 peer-valid:text-xs peer-valid:font-bold peer-valid:tracking-widest peer-valid:uppercase transition-all pointer-events-none">Your Email</label>
                  </div>
                </div>

                <div className="relative group pt-4">
                  <textarea name="message" id="message" required rows="4" placeholder=" " className="peer w-full py-4 bg-transparent border-b-2 border-gray-200 text-gray-900 focus:outline-none focus:border-black transition-all font-bold text-lg resize-none" />
                  <label htmlFor="message" className="absolute left-0 top-8 text-gray-400 text-lg font-medium peer-focus:-top-4 peer-focus:text-xs peer-focus:font-bold peer-focus:text-black peer-focus:tracking-widest peer-focus:uppercase peer-valid:-top-4 peer-valid:text-xs peer-valid:font-bold peer-valid:tracking-widest peer-valid:uppercase transition-all pointer-events-none">Tell me about your project...</label>
                </div>

                <div className="pt-6">
                  <button type="submit" className="w-full sm:w-auto bg-gray-900 text-white px-12 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:bg-black hover:shadow-lg hover:shadow-black/20 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 group">
                    Send Message
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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