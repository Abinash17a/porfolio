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
      className="relative py-20 md:py-32 bg-white overflow-hidden font-pixel"
    >

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-blue-600 tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ textShadow: '2px 2px 0px #fff, 4px 4px 0px #fff' }}
          >
            [ MY PROJECTS ]
          </motion.h2>
          <motion.p
            className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ textShadow: '1px 1px 0px #fff' }}
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
              className="relative border-4 border-blue-500 overflow-hidden group"
              style={{
                boxShadow: '4px 4px 0px #fff, 8px 8px 0px #fff',
                imageRendering: 'pixelated'
              }}
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
              className="w-full h-auto object-cover image-render-pixel"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="flex gap-4">
                  <motion.a
                    href={projects[activeProject].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 text-white p-3 border-2 border-blue-700 hover:bg-blue-600 transition-colors"
                    style={{ boxShadow: '2px 2px 0px #fff' }}
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
                    className="bg-green-500 text-white p-3 border-2 border-green-700 hover:bg-green-600 transition-colors"
                    style={{ boxShadow: '2px 2px 0px #fff' }}
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
                <span className="text-sm font-medium text-blue-600" style={{ textShadow: '1px 1px 0px #fff' }}>
                  PROJECT {activeProject + 1}/{projects.length}
                </span>
                <div className="ml-auto flex gap-2">
                  <motion.button
                    onClick={prevProject}
                    className="bg-blue-500 text-white p-2 border-2 border-blue-700 hover:bg-blue-600 transition-colors"
                    style={{ boxShadow: '2px 2px 0px #fff' }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ChevronLeft className="w-5 h-5" />
                    <span className="sr-only">Previous Project</span>
                  </motion.button>
                  <motion.button
                    onClick={nextProject}
                    className="bg-blue-500 text-white p-2 border-2 border-blue-700 hover:bg-blue-600 transition-colors"
                    style={{ boxShadow: '2px 2px 0px #fff' }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ChevronRight className="w-5 h-5" />
                    <span className="sr-only">Next Project</span>
                  </motion.button>
                </div>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4" style={{ textShadow: '2px 2px 0px #fff' }}>
                {projects[activeProject].title}
              </h3>

              <p className="text-gray-700 text-lg mb-6 leading-relaxed" style={{ textShadow: '1px 1px 0px #fff' }}>
                {projects[activeProject].description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {projects[activeProject].tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-blue-500 text-white text-sm font-medium px-3 py-1.5 border-2 border-blue-700"
                    style={{ boxShadow: '1px 1px 0px #fff' }}
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
                  className="flex items-center gap-2 bg-blue-500 text-white font-medium py-3 px-6 border-2 border-blue-700 hover:bg-blue-600 transition-colors"
                  style={{ boxShadow: '3px 3px 0px #fff' }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Github className="w-5 h-5" />
                  <span>VIEW CODE</span>
                </motion.a>
                <motion.a
                  href={projects[activeProject].live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-green-500 text-white font-medium py-3 px-6 border-2 border-green-700 hover:bg-green-600 transition-colors"
                  style={{ boxShadow: '3px 3px 0px #fff' }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>LIVE DEMO</span>
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
          <h3 className="text-2xl md:text-3xl font-bold text-blue-600 mb-8 text-center" style={{ textShadow: '2px 2px 0px #fff' }}>
            [ ALL PROJECTS ]
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

