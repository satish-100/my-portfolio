import React from "react";
import { motion } from "framer-motion";
import { resumeData } from "../data/resumeData";

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-gray-50/50 dark:bg-[#0d0d14]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-xs font-semibold uppercase tracking-widest text-violet-500 mb-2">Skills</div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-3">
            Technical Expertise
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-12 max-w-xl">
            A comprehensive toolkit built over 6+ years of hands-on enterprise development.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {resumeData.skills.map((skill, i) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white dark:bg-[#1e1e2e] border border-gray-200 dark:border-[#2a2a40] rounded-2xl p-6 hover:border-gray-300 dark:hover:border-[#3a3a58] transition-colors"
              >
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-violet-500 mb-4">
                  <span className="w-7 h-7 bg-violet-500/10 rounded-lg flex items-center justify-center text-base">
                    {skill.icon}
                  </span>
                  {skill.category}
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 dark:bg-[#12121a] border border-gray-200 dark:border-[#2a2a40] text-gray-600 dark:text-gray-400 text-xs px-2.5 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
