import React from "react";
import { motion } from "framer-motion";
import { resumeData } from "../data/resumeData";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-gray-50/50 dark:bg-[#0d0d14]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-xs font-semibold uppercase tracking-widest text-violet-500 mb-2">Projects</div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-3">
            Key Projects
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-12 max-w-xl">
            Enterprise projects delivered across fintech, insurance, and identity management domains.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {resumeData.projects.map((project, i) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white dark:bg-[#1e1e2e] border border-gray-200 dark:border-[#2a2a40] rounded-2xl p-6 hover:border-violet-400/50 dark:hover:border-violet-500/50 transition-all group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-violet-500/10 transition-all pointer-events-none" />
                <div className="w-11 h-11 bg-violet-500/10 rounded-xl flex items-center justify-center text-2xl mb-4">
                  {project.icon}
                </div>
                <div className="font-bold text-gray-900 dark:text-white text-sm mb-1">{project.name}</div>
                <div className="text-xs text-gray-400 mb-3">{project.client}</div>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="bg-gray-100 dark:bg-[#12121a] text-gray-500 dark:text-gray-400 text-xs px-2 py-0.5 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-500 hover:text-blue-400 flex items-center gap-1"
                  >
                    ↗ {project.url.replace("https://", "")}
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
