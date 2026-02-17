import { motion } from 'framer-motion';

const Achievements = () => {
  return (
    <section className="py-20 px-10 bg-white">
      <div className="container mx-auto">
        <h3 className="text-3xl font-black mb-12 uppercase tracking-tighter">Achievements</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* LeetCode */}
          <motion.div whileHover={{ y: -5 }} className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
            <h4 className="text-xl font-bold mb-2">LeetCode</h4>
            <p className="text-4xl font-black text-brand-blue">150+</p>
            <p className="text-gray-500 mt-2">DSA problems solved including Arrays, Strings, Trees, and DP.</p>
          </motion.div>

          {/* HackerRank */}
          <motion.div whileHover={{ y: -5 }} className="p-8 bg-black text-white rounded-3xl">
            <h4 className="text-xl font-bold mb-2">HackerRank</h4>
            <p className="text-4xl font-black text-yellow-400">5-Star</p>
            <p className="text-gray-400 mt-2">Gold Level ranking in SQL for advanced database optimization.</p>
          </motion.div>

          {/* Certifications */}
          <motion.div whileHover={{ y: -5 }} className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
            <h4 className="text-xl font-bold mb-2">Certifications</h4>
            <ul className="text-sm space-y-2 font-medium">
              <li className="text-brand-blue">· Oracle GenAI Professional</li>
              <li>· Automation Anywhere Essentials</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;