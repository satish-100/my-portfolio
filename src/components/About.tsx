import React from "react";
import { motion } from "framer-motion";
import { resumeData } from "../data/resumeData";

const About: React.FC = () => {
  const { personal } = resumeData;
  const info = [
    { label: "Name", value: personal.name },
    { label: "Location", value: personal.location },
    { label: "Email", value: personal.email },
    { label: "Phone", value: `+91 ${personal.phone}` },
    { label: "LinkedIn", value: "linkedin.com/in/satish-prajapati", link: personal.linkedin },
    { label: "Languages", value: "English, Hindi" },
    { label: "Status", value: "✦ Open to opportunities", green: true },
  ];

  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-xs font-semibold uppercase tracking-widest text-violet-500 mb-2">About</div>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-12">
          Who I Am
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
              I'm a passionate front-end developer with over 6 years of experience crafting enterprise-grade
              web applications. My journey spans across leading organizations like{" "}
              <strong className="text-gray-800 dark:text-gray-200">Capgemini (for Cisco)</strong>,{" "}
              <strong className="text-gray-800 dark:text-gray-200">Neosoft Technologies (for HDFC Life)</strong>,{" "}
              <strong className="text-gray-800 dark:text-gray-200">Sigma InfoSolution</strong>, and{" "}
              <strong className="text-gray-800 dark:text-gray-200">Tata Consultancy Services</strong>.
            </p>
            <div className="border-l-4 border-violet-500 pl-4 py-2 bg-violet-500/5 rounded-r-xl mb-6 text-gray-700 dark:text-gray-300 italic text-sm leading-relaxed">
              "I specialize in transforming complex requirements into clean, performant, and beautiful user
              interfaces — from Figma designs to production-ready React applications."
            </div>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
              Beyond code, I enjoy mentoring junior developers, driving code quality through reviews, and
              implementing automation testing with Playwright. I work fluently in Agile/Scrum environments
              and thrive in collaborative, fast-paced teams.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {info.map((item) => (
              <div key={item.label} className="flex items-start gap-3 text-sm">
                <span className="text-gray-400 dark:text-gray-500 min-w-[90px] text-xs uppercase tracking-wider pt-0.5">
                  {item.label}
                </span>
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-violet-500 hover:text-violet-400"
                  >
                    {item.value}
                  </a>
                ) : (
                  <span className={item.green ? "text-green-500" : "text-gray-800 dark:text-gray-200"}>
                    {item.value}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
