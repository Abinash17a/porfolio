
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
        className={`bg-white border-4 border-blue-500 overflow-hidden transition-all duration-300 cursor-pointer font-pixel ${
          isActive
            ? "border-blue-600"
            : "hover:border-blue-600"
        }`}
        style={{
          boxShadow: isActive
            ? '4px 4px 0px #fff, 8px 8px 0px #fff'
            : '2px 2px 0px #fff, 4px 4px 0px #fff'
        }}
        onClick={onClick}
      >
        <div className="relative h-48 overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-90`} />
          <img
    src={project.image || "/placeholder.svg"}
    alt={project.title}
    className="w-full h-auto object-cover image-render-pixel"
  />

          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-blue-600 text-xl md:text-2xl font-bold text-center px-4" style={{ textShadow: '2px 2px 0px #fff' }}>{project.title}</h3>
          </div>
        </div>

        <div className="p-5">
          <p className="text-gray-700 text-sm mb-4 line-clamp-2" style={{ textShadow: '1px 1px 0px #fff' }}>{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.slice(0, 3).map((tag:any) => (
              <span
                key={tag}
                className="bg-blue-500 text-white text-xs px-2 py-1 border border-blue-700"
                style={{ boxShadow: '1px 1px 0px #fff' }}
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="text-xs text-blue-600 px-2 py-1" style={{ textShadow: '1px 1px 0px #fff' }}>
                +{project.tags.length - 3} more
              </span>
            )}
          </div>

          <div className="flex justify-between items-center">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white p-2 border border-blue-700 hover:bg-blue-600 transition-colors"
              style={{ boxShadow: '1px 1px 0px #fff' }}
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="w-4 h-4" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white p-2 border border-green-700 hover:bg-green-600 transition-colors"
              style={{ boxShadow: '1px 1px 0px #fff' }}
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="w-4 h-4" />
              <span className="sr-only">Live Demo</span>
            </a>
          </div>
        </div>
      </motion.div>
    )
  }

