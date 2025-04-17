"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Github, ExternalLink, ChevronRight, ChevronLeft } from "lucide-react"
import { ProjectCard } from "./ui/projectcard"
import { projects } from "../data/projects"

const ProjectShowcase = () => {
  const [activeProject, setActiveProject] = useState(0)
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.2 })

  const nextProject = () => {
    setActiveProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
  }

  const prevProject = () => {
    setActiveProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1))
  }

  return (
    <section
      ref={containerRef}
      className="relative py-20 md:py-32 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-purple-100 dark:bg-purple-900/10 blur-3xl opacity-70" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-blue-100 dark:bg-blue-900/10 blur-3xl opacity-70" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            My Projects
          </motion.h2>
          <motion.p
            className="text-slate-600 dark:text-slate-400 text-lg md:text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            A collection of my recent work and personal projects. Each project represents a unique challenge and
            learning experience.
          </motion.p>
        </motion.div>

        {/* Featured Project */}
        <div className="mb-20 md:mb-32">
          <motion.div
            key={activeProject}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-8 md:gap-12 items-center"
          >
            {/* Project Image */}
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-2xl group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${projects[activeProject].color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
              />
             <img
              src={projects[activeProject].image || "/placeholder.svg"}
              alt={projects[activeProject].title}
              width={800}
              height={600}
              className="w-full h-auto object-cover rounded-2xl"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="flex gap-4">
                  <motion.a
                    href={projects[activeProject].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-slate-900 p-3 rounded-full shadow-lg hover:bg-slate-100 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-5 h-5" />
                    <span className="sr-only">GitHub</span>
                  </motion.a>
                  <motion.a
                    href={projects[activeProject].live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-slate-900 p-3 rounded-full shadow-lg hover:bg-slate-100 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span className="sr-only">Live Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Project Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center mb-4">
                <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  Project {activeProject + 1}/{projects.length}
                </span>
                <div className="ml-auto flex gap-2">
                  <motion.button
                    onClick={prevProject}
                    className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ChevronLeft className="w-5 h-5" />
                    <span className="sr-only">Previous Project</span>
                  </motion.button>
                  <motion.button
                    onClick={nextProject}
                    className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ChevronRight className="w-5 h-5" />
                    <span className="sr-only">Next Project</span>
                  </motion.button>
                </div>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                {projects[activeProject].title}
              </h3>

              <p className="text-slate-600 dark:text-slate-300 text-lg mb-6 leading-relaxed">
                {projects[activeProject].description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {projects[activeProject].tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-sm font-medium px-3 py-1.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <motion.a
                  href={projects[activeProject].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Github className="w-5 h-5" />
                  <span>View Code</span>
                </motion.a>
                <motion.a
                  href={projects[activeProject].live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 bg-gradient-to-r ${projects[activeProject].color} text-white font-medium py-3 px-6 rounded-lg shadow-md transition-all`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>Live Demo</span>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Project Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            All Projects
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                isActive={index === activeProject}
                onClick={() => setActiveProject(index)}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}


export default ProjectShowcase
