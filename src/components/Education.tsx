import React from "react";
import { motion } from "framer-motion";
import { resumeData } from "../data/resumeData";

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-xs font-semibold uppercase tracking-widest text-violet-500 mb-2">Education</div>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-12">
          Academic Background
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {resumeData.education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="bg-white dark:bg-[#1e1e2e] border border-gray-200 dark:border-[#2a2a40] rounded-2xl p-6 hover:border-gray-300 dark:hover:border-[#3a3a58] transition-all"
            >
              <div className="text-3xl mb-4">{edu.icon}</div>
              <div className="font-bold text-gray-900 dark:text-white text-sm mb-1">{edu.degree}</div>
              <div className="text-sm text-violet-400 mb-1">{edu.school}</div>
              <div className="text-xs text-gray-400 mb-2">{edu.period}</div>
              {edu.specialization && (
                <div className="text-xs text-gray-500 dark:text-gray-500">{edu.specialization}</div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
