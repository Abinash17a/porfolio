
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
        className={`bg-slate-900/80 border border-slate-700/80 overflow-hidden transition-all duration-300 cursor-pointer rounded-3xl ${
          isActive ? "ring-2 ring-[#d4a856] shadow-[0_20px_50px_rgba(212,168,86,0.12)]" : "shadow-[0_12px_30px_rgba(15,23,42,0.22)] hover:shadow-[0_18px_40px_rgba(15,23,42,0.26)]"
        }`}
        onClick={onClick}
      >
        <div className="relative h-52 overflow-hidden rounded-t-3xl">
          <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-90`} />
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-full object-cover image-render-pixel opacity-90"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/10 to-transparent" />
          <div className="absolute inset-0 flex items-end justify-start p-4">
            <h3 className="text-[#f5c96a] text-xl md:text-2xl font-bold text-center px-2 py-1 rounded-lg bg-slate-950/25 backdrop-blur-sm" style={{ textShadow: '2px 2px 0px rgba(0,0,0,0.35)' }}>{project.title}</h3>
          </div>
        </div>

        <div className="p-5">
          <p className="text-slate-300 text-sm mb-4 line-clamp-2 leading-relaxed">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.slice(0, 3).map((tag:any) => (
              <span
                key={tag}
                className="bg-slate-800 text-[#e5edf8] text-xs px-2 py-1 border border-[#d4a856]/40"
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
              className="bg-[#d4a856] text-slate-950 p-2 border border-[#f5c96a] hover:bg-[#f5c96a] transition-colors rounded-full"
              style={{ boxShadow: '0 8px 18px rgba(212, 168, 86, 0.2)' }}
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="w-4 h-4" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#7dd3fc] text-slate-950 p-2 border border-[#bae6fd] hover:bg-[#bae6fd] transition-colors rounded-full"
              style={{ boxShadow: '0 8px 18px rgba(125, 211, 252, 0.2)' }}
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

