"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Github, ExternalLink, ChevronRight, ChevronLeft } from "lucide-react"
import { ProjectCard } from "../ui/projectcard"
import { projects } from "../../data/projects"

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
      className="relative py-20 md:py-32 overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(212,168,86,0.08),_transparent_28%),linear-gradient(180deg,#070b17_0%,#0f172a_100%)]"
    >

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#f5c96a] tracking-wider font-pixel"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ textShadow: '2px 2px 0px #fff, 4px 4px 0px #fff' }}
          >
            [ MY PROJECTS ]
          </motion.h2>
          <motion.p
            className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
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
              className="relative border border-[#d4a856]/40 overflow-hidden group rounded-3xl"
              style={{
                boxShadow: '0 24px 80px rgba(15, 23, 42, 0.4)',
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
                    className="bg-[#d4a856] text-slate-950 p-3 border border-[#f5c96a] hover:bg-[#f5c96a] transition-colors rounded-full"
                    style={{ boxShadow: '0 10px 22px rgba(212, 168, 86, 0.22)' }}
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
                    className="bg-[#7dd3fc] text-slate-950 p-3 border border-[#bae6fd] hover:bg-[#bae6fd] transition-colors rounded-full"
                    style={{ boxShadow: '0 10px 22px rgba(125, 211, 252, 0.2)' }}
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
                <span className="text-sm font-medium text-[#7dd3fc]" style={{ textShadow: '1px 1px 0px rgba(15,23,42,0.7)' }}>
                  PROJECT {activeProject + 1}/{projects.length}
                </span>
                <div className="ml-auto flex gap-2">
                  <motion.button
                    onClick={prevProject}
                    className="bg-[#d4a856] text-slate-950 p-2 border border-[#f5c96a] hover:bg-[#f5c96a] transition-colors rounded-full"
                    style={{ boxShadow: '0 10px 22px rgba(212, 168, 86, 0.22)' }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ChevronLeft className="w-5 h-5" />
                    <span className="sr-only">Previous Project</span>
                  </motion.button>
                  <motion.button
                    onClick={nextProject}
                    className="bg-[#7dd3fc] text-slate-950 p-2 border border-[#bae6fd] hover:bg-[#bae6fd] transition-colors rounded-full"
                    style={{ boxShadow: '0 10px 22px rgba(125, 211, 252, 0.2)' }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ChevronRight className="w-5 h-5" />
                    <span className="sr-only">Next Project</span>
                  </motion.button>
                </div>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-[#f5c96a] mb-4 font-pixel" style={{ textShadow: '2px 2px 0px rgba(15,23,42,0.9)' }}>
                {projects[activeProject].title}
              </h3>

              <p className="text-slate-300 text-lg mb-6 leading-relaxed" style={{ textShadow: '1px 1px 0px rgba(15,23,42,0.7)' }}>
                {projects[activeProject].description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {projects[activeProject].tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-slate-800 text-[#e5edf8] text-sm font-medium px-3 py-1.5 border border-[#d4a856]/50"
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
                  className="flex items-center gap-2 bg-[#d4a856] text-slate-950 font-medium py-3 px-6 border border-[#f5c96a] hover:bg-[#f5c96a] transition-colors rounded-full"
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
                  className="flex items-center gap-2 bg-[#7dd3fc] text-slate-950 font-medium py-3 px-6 border border-[#bae6fd] hover:bg-[#bae6fd] transition-colors rounded-full"
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
          <h3 className="text-2xl md:text-3xl font-bold text-[#f5c96a] mb-8 text-center" style={{ textShadow: '2px 2px 0px rgba(15,23,42,0.9)' }}>
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

