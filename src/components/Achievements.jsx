import { motion } from 'framer-motion';
import { Award, Code, BadgeCheck } from 'lucide-react';

const Achievements = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, type: "spring" } }
  };

  return (
    <section className="py-24 px-6 md:px-10 bg-white relative">
      <div className="container mx-auto max-w-7xl">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black mb-16 uppercase tracking-tighter text-center"
        >
          Awards & <span className="text-gray-400">Recognitions</span>
        </motion.h3>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* LeetCode */}
          <motion.div variants={itemVariants} className="group p-10 bg-gray-50 rounded-[2rem] border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden flex flex-col items-center text-center">
            <div className="absolute -right-6 -top-6 text-gray-200/50">
              <Code size={120} />
            </div>
            <div className="p-4 bg-gray-200/50 rounded-2xl mb-6 text-gray-900">
              <Code size={32} />
            </div>
            <h4 className="text-xl font-bold mb-2 z-10">LeetCode Profiler</h4>
            <p className="text-5xl font-black text-black mb-4 z-10">150+</p>
            <p className="text-gray-500 font-medium text-sm leading-relaxed z-10">Complex DSA problems solved focusing on Arrays, Trees, Dynamic Programming, and Graph theory.</p>
          </motion.div>

          {/* HackerRank */}
          <motion.div variants={itemVariants} className="group p-10 bg-gray-900 text-white rounded-[2rem] hover:shadow-2xl hover:shadow-black/20 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden flex flex-col items-center text-center">
            <div className="absolute -right-6 -top-6 text-gray-800">
              <Award size={120} />
            </div>
            <div className="p-4 bg-gray-800 rounded-2xl mb-6 text-white">
              <Award size={32} />
            </div>
            <h4 className="text-xl font-bold mb-2 z-10">HackerRank Expert</h4>
            <p className="text-5xl font-black text-white mb-4 z-10">5-Star</p>
            <p className="text-gray-400 font-medium text-sm leading-relaxed z-10">Achieved Gold Level ranking in SQL for advanced database optimization and complex queries.</p>
          </motion.div>

          {/* Certifications */}
          <motion.div variants={itemVariants} className="group p-10 bg-gray-50 rounded-[2rem] border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden flex flex-col items-center text-center">
            <div className="absolute -left-6 -bottom-6 text-gray-200/50">
              <BadgeCheck size={120} />
            </div>
            <div className="p-4 bg-gray-200/50 rounded-2xl mb-6 text-gray-900">
              <BadgeCheck size={32} />
            </div>
            <h4 className="text-xl font-bold mb-6 z-10">Certifications</h4>
            <div className="space-y-4 w-full z-10 text-left">
              <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-100 flex justify-between items-center">
                <p className="font-bold text-gray-900 mb-0">Oracle GenAI Professional</p>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Certified</p>
              </div>
              <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-100 flex justify-between items-center">
                <p className="font-bold text-gray-900 mb-0">Automation Anywhere</p>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Essentials</p>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;