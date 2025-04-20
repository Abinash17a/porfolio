

import {  useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Github, ExternalLink, } from "lucide-react"

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    tags: string[];
    color: string;
    image?: string;
    github: string;
    live: string;
  };
  index: number;
  isActive: boolean;
  onClick: () => void;
}


export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, isActive, onClick }) => {
    const cardRef = useRef(null)
    const isInView = useInView(cardRef, { once: false, amount: 0.2 })

    return (
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -8 }}
        className={`bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden border-2 transition-all duration-300 cursor-pointer ${
          isActive
            ? `border-transparent ring-2 ring-offset-2 ring-offset-slate-50 dark:ring-offset-slate-900 ring-${project.color.split(" ")[1].replace("to-", "")}`
            : "border-slate-200 dark:border-slate-700 hover:border-transparent hover:shadow-xl"
        }`}
        onClick={onClick}
      >
        <div className="relative h-48 overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-90`} />
          <img
    src={project.image || "/placeholder.svg"}
    alt={project.title}
    className="w-full h-auto object-cover rounded-2xl"
  />

          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-white text-xl md:text-2xl font-bold text-center px-4">{project.title}</h3>
          </div>
        </div>

        <div className="p-5">
          <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 line-clamp-2">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.slice(0, 3).map((tag:any) => (
              <span
                key={tag}
                className="bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="text-xs text-slate-500 dark:text-slate-400 px-2 py-1">
                +{project.tags.length - 3} more
              </span>
            )}
          </div>

          <div className="flex justify-between items-center">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="w-5 h-5" />
              <span className="sr-only">Live Demo</span>
            </a>
          </div>
        </div>
      </motion.div>
    )
  }