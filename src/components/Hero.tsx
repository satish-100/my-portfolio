import React from "react";
import { motion } from "framer-motion";
import { resumeData } from "../data/resumeData";

const stats = [
  { num: "6+", label: "Years Exp." },
  { num: "5+", label: "Projects" },
  { num: "4", label: "Companies" },
  { num: "20+", label: "Technologies" },
];

const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 pt-20 pb-16 relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-violet-600/10 dark:bg-violet-600/15 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-12 items-center z-10">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/30 text-violet-400 text-xs px-4 py-1.5 rounded-full mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for opportunities
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-4 text-gray-900 dark:text-white">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-violet-500 via-purple-400 to-violet-300 bg-clip-text text-transparent">
              Satish Prajapati
            </span>
          </h1>

          <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-lg mb-8 leading-relaxed">
            {resumeData.personal.summary}
          </p>

          <div className="flex flex-wrap gap-3">
            <motion.button
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo("#chat")}
              className="bg-violet-600 hover:bg-violet-500 text-white px-6 py-3 rounded-xl font-semibold text-sm flex items-center gap-2 transition-colors"
            >
              💬 Ask AI About Me
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo("#contact")}
              className="border border-gray-300 dark:border-[#3a3a58] text-gray-700 dark:text-gray-200 hover:border-violet-500 hover:text-violet-500 px-6 py-3 rounded-xl font-semibold text-sm transition-all"
            >
              Get in Touch
            </motion.button>
          </div>

          <div className="flex flex-wrap gap-2 mt-7">
            {["React.js", "Next.js", "TypeScript", "Redux", "Node.js", "Playwright"].map((t) => (
              <span
                key={t}
                className="bg-violet-500/10 border border-violet-500/25 text-violet-400 text-xs px-3 py-1 rounded-full"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="hidden md:block"
        >
          <div className="bg-white dark:bg-[#1e1e2e] border border-gray-200 dark:border-[#2a2a40] rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-violet-500/8 rounded-full blur-2xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-violet-600 to-purple-400 flex items-center justify-center text-white text-2xl font-extrabold mb-5 border-2 border-white/20">
              SP
            </div>
            <div className="font-bold text-xl text-gray-900 dark:text-white mb-1">Satish Prajapati</div>
            <div className="text-sm text-gray-500 dark:text-gray-400 mb-5">Senior Front-End Developer</div>
            <div className="space-y-2 text-xs text-gray-400 dark:text-gray-500 mb-6">
              <div>📍 {resumeData.personal.location}</div>
              <div>📧 {resumeData.personal.email}</div>
              <div>📱 +91 {resumeData.personal.phone}</div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-gray-50 dark:bg-[#12121a] rounded-xl p-3 text-center"
                >
                  <div className="text-2xl font-extrabold text-violet-500">{s.num}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
