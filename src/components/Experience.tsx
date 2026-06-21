import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { resumeData } from "../data/resumeData";

const Experience: React.FC = () => {
  const [openProject, setOpenProject] = useState<string | null>(null);

  return (
    <section id="experience" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-xs font-semibold uppercase tracking-widest text-violet-500 mb-2">Experience</div>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-3">
          Work History
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mb-12 max-w-xl">
          6+ years across enterprise product companies and leading IT consultancies.
        </p>

        <div className="relative pl-8">
          {/* Timeline line */}
          <div className="absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500 to-transparent" />

          {resumeData.experience.map((exp, ei) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ei * 0.1 }}
              className="relative mb-10"
            >
              {/* Dot */}
              <div className="absolute -left-8 top-1.5 w-3.5 h-3.5 rounded-full bg-violet-500 border-2 border-white dark:border-[#0a0a0f] shadow-[0_0_0_3px_rgba(124,111,247,0.3)]" />

              <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                <span className="font-bold text-lg text-gray-900 dark:text-white">{exp.company}</span>
                <span className="text-xs text-violet-400 bg-violet-500/10 px-3 py-1 rounded-full whitespace-nowrap">
                  {exp.period}
                </span>
              </div>
              {exp.client && (
                <div className="text-xs text-gray-400 mb-1">Client: {exp.client}</div>
              )}
              <div className="text-sm font-semibold text-violet-400 mb-4">{exp.role}</div>

              <div className="flex flex-col gap-3">
                {exp.projects.map((proj) => {
                  const key = `${exp.company}-${proj.name}`;
                  const isOpen = openProject === key;
                  return (
                    <div
                      key={proj.name}
                      className="bg-white dark:bg-[#1e1e2e] border border-gray-200 dark:border-[#2a2a40] rounded-xl overflow-hidden"
                    >
                      <button
                        onClick={() => setOpenProject(isOpen ? null : key)}
                        className="w-full text-left px-5 py-4 flex items-center justify-between gap-3"
                      >
                        <div>
                          <div className="font-semibold text-sm text-gray-900 dark:text-white">
                            {proj.icon} {proj.name}
                          </div>
                          <div className="text-xs text-gray-400 mt-0.5">{proj.period}</div>
                        </div>
                        <span className="text-gray-400 text-lg">{isOpen ? "−" : "+"}</span>
                      </button>

                      {/* @ts-ignore */}
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <div className="px-5 pb-4 border-t border-gray-100 dark:border-[#2a2a40] pt-3">
                              {proj.url && (
                                <a
                                  href={proj.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-xs text-blue-500 hover:text-blue-400 block mb-3"
                                >
                                  ↗ {proj.url}
                                </a>
                              )}
                              <div className="flex flex-wrap gap-1.5 mb-3">
                                {proj.tech.map((t) => (
                                  <span
                                    key={t}
                                    className="bg-gray-100 dark:bg-[#12121a] text-gray-500 dark:text-gray-400 text-xs px-2 py-0.5 rounded"
                                  >
                                    {t}
                                  </span>
                                ))}
                              </div>
                              <ul className="space-y-1.5">
                                {proj.points.map((pt, pi) => (
                                  <li key={pi} className="flex gap-2 text-sm text-gray-500 dark:text-gray-400">
                                    <span className="text-violet-500 font-bold flex-shrink-0">›</span>
                                    {pt}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
