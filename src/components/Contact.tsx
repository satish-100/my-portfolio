import React from "react";
import { motion } from "framer-motion";
import { resumeData } from "../data/resumeData";

const contacts = [
  { icon: "📧", label: "Email", value: "satish76.info@gmail.com", href: "mailto:satish76.info@gmail.com" },
  { icon: "📱", label: "Phone", value: "+91 8319222858", href: "tel:+918319222858" },
  { icon: "📍", label: "Location", value: "Sector 48, Gurugram, Haryana 122018", href: null },
  { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/satish-prajapati-3b07abbb", href: resumeData.personal.linkedin },
];

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-gray-50/50 dark:bg-[#0d0d14]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-xs font-semibold uppercase tracking-widest text-violet-500 mb-2">Contact</div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-12">
            Get in Touch
          </h2>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div className="flex flex-col gap-3">
              {contacts.map((c, i) => (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ x: 4 }}
                  className="bg-white dark:bg-[#1e1e2e] border border-gray-200 dark:border-[#2a2a40] rounded-xl p-4 flex items-center gap-4 hover:border-violet-400/50 transition-all"
                >
                  <div className="w-10 h-10 bg-violet-500/10 rounded-lg flex items-center justify-center text-lg flex-shrink-0">
                    {c.icon}
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider">{c.label}</div>
                    {c.href ? (
                      <a
                        href={c.href}
                        target={c.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="text-sm text-gray-800 dark:text-gray-200 hover:text-violet-500 transition-colors"
                      >
                        {c.value}
                      </a>
                    ) : (
                      <div className="text-sm text-gray-800 dark:text-gray-200">{c.value}</div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-[#1e1e2e] border border-gray-200 dark:border-[#2a2a40] rounded-2xl p-8"
            >
              <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                Let's build something great together
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
                I'm currently open to new opportunities — whether it's a full-time role, freelance project,
                or just a chat about exciting tech. I typically respond within 24 hours.
              </p>
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="mailto:satish76.info@gmail.com"
                className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-colors"
              >
                📧 Send Email
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
