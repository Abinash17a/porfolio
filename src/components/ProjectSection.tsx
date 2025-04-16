"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Github, Globe } from "lucide-react";

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern portfolio built with React, Next.js, and TailwindCSS.",
    tags: ["React", "Next.js", "TailwindCSS"],
    github: "https://github.com/username/portfolio",
    live: "https://portfolio.example.com",
  },
  {
    title: "E-Commerce App",
    description: "A full-stack e-commerce application with payment integration.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/username/ecommerce",
    live: "https://ecommerce.example.com",
  },
  {
    title: "Task Manager",
    description: "A to-do list app with real-time updates using Firebase.",
    tags: ["React", "Firebase", "Material-UI"],
    github: "https://github.com/username/task-manager",
    live: "https://taskmanager.example.com",
  },
  {
    title: "Social Media Dashboard",
    description: "A dashboard for managing social media accounts built with Next.js.",
    tags: ["Next.js", "TailwindCSS", "Chart.js"],
    github: "https://github.com/username/social-dashboard",
    live: "https://dashboard.example.com",
  },
];

const StackedProjectSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yPositions = projects.map((_, index) =>
    useTransform(scrollYProgress, [0, 1], [index * 300, -index * 300]) // Increased scroll distance for better spacing
  );

  return (
    <section
      ref={containerRef}
      className="relative h-[150vh] bg-gradient-to-br from-gray-50 to-white flex items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <div className="relative w-full max-w-8xl sm:max-w-5xl lg:max-w-6xl">
        <div className="sticky top-1/4 flex h-[70vh] items-center justify-center">
          <div className="relative w-fit flex flex-col items-center space-y-10 sm:space-y-12 lg:space-y-16">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                style={{ y: yPositions[index] }}
                className="bg-white shadow-xl sm:shadow-xl rounded-xl sm:rounded-xl p-6 sm:p-8 md:p-10 border border-gray-300 w-full max-w-lg sm:max-w-xl lg:max-w-2xl flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:-translate-y-3"
              >
                <div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 sm:mb-6">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-base sm:text-lg md:text-xl mb-6 sm:mb-8">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-blue-100 text-blue-800 text-sm sm:text-base font-semibold px-3 py-1 sm:px-4 sm:py-2 rounded-full shadow hover:bg-blue-200 transition-all"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 hover:text-gray-900 flex items-center font-medium text-base sm:text-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="h-5 w-5 sm:h-6 sm:w-6 mr-2" />
                    <span>View Code</span>
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg sm:rounded-xl flex items-center text-base sm:text-lg shadow-md transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      <Globe className="h-5 w-5 sm:h-6 sm:w-6 mr-2" />
                    </motion.div>
                    <span>Live Demo</span>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StackedProjectSection;