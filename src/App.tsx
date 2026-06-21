import React from "react";
import { ThemeProvider } from "./hooks/useTheme";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import AiChat from "./components/AiChat";
import Footer from "./components/Footer";
import "./index.css";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-[#0a0a0f] text-gray-900 dark:text-white transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          <hr className="border-gray-200 dark:border-[#1a1a26]" />
          <About />
          <hr className="border-gray-200 dark:border-[#1a1a26]" />
          <Skills />
          <hr className="border-gray-200 dark:border-[#1a1a26]" />
          <Experience />
          <hr className="border-gray-200 dark:border-[#1a1a26]" />
          <Projects />
          <hr className="border-gray-200 dark:border-[#1a1a26]" />
          <Education />
          <hr className="border-gray-200 dark:border-[#1a1a26]" />
          <Contact />
          <hr className="border-gray-200 dark:border-[#1a1a26]" />
          <AiChat />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
