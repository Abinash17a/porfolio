"use client"

import { useRef } from "react"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"

const AboutSection = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })
  const smoothScrollProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 28,
    mass: 0.5,
  })

  const skills = [
    { name: "React", iconSrc: "/icons/pixel-react.svg" },
    { name: "Next.js", iconSrc: "/icons/pixel-next.svg" },
    { name: "Node.js", iconSrc: "/icons/pixel-node.svg" },
    { name: "TypeScript", iconSrc: "/icons/pixel-typescript.svg" },
    { name: "JavaScript", iconSrc: "/icons/pixel-javascript.svg" },
    { name: "TailwindCSS", iconSrc: "/icons/pixel-tailwind.svg" },
    { name: "Databases", iconSrc: "/icons/pixel-database.svg" },
    { name: "GitHub", iconSrc: "/icons/pixel-github.svg" },
    { name: "Figma", iconSrc: "/icons/pixel-figma.svg" },
    { name: "Vercel", iconSrc: "/icons/pixel-vercel.svg" },
  ]

  const headlineText = "Developer. Builder. Problem Solver."

  const sections = [
    {
      title: "About Me",
      content: [
        "I’m Abinash, a developer who enjoys",
        "turning ideas into practical, polished",
        "web experiences that people actually use.",
      ],
    },
    {
      title: "What I Care About",
      content: [
        "Clean interfaces, smooth user journeys,",
        "strong logic, and products that feel",
        "fast, clear, and trustworthy.",
      ],
    },
    {
      title: "How I Work",
      content: [
        "I combine design thinking with modern",
        "development to build solutions that are",
        "useful, scalable, and easy to maintain.",
      ],
    },
  ]

 // Opacity transforms (Starts Sooner)
const opacity00 = useTransform(smoothScrollProgress, [0.00, 0.02, 0.04, 0.06], [0.3, 1, 1, 0.3])
const opacity01 = useTransform(smoothScrollProgress, [0.01, 0.03, 0.05, 0.07], [0.3, 1, 1, 0.3])
const opacity02 = useTransform(smoothScrollProgress, [0.02, 0.04, 0.06, 0.08], [0.3, 1, 1, 0.3])
const opacity10 = useTransform(smoothScrollProgress, [0.25, 0.29, 0.33, 0.37], [0.3, 1, 1, 0.3])
const opacity11 = useTransform(smoothScrollProgress, [0.28, 0.32, 0.36, 0.40], [0.3, 1, 1, 0.3])
const opacity12 = useTransform(smoothScrollProgress, [0.31, 0.35, 0.39, 0.43], [0.3, 1, 1, 0.3])
const opacity20 = useTransform(smoothScrollProgress, [0.5, 0.54, 0.58, 0.62], [0.3, 1, 1, 0.3])
const opacity21 = useTransform(smoothScrollProgress, [0.53, 0.57, 0.61, 0.65], [0.3, 1, 1, 0.3])
const opacity22 = useTransform(smoothScrollProgress, [0.56, 0.60, 0.64, 0.68], [0.3, 1, 1, 0.3])
const color00 = useTransform(smoothScrollProgress, [0.00, 0.02, 0.04, 0.06], ["#9CA3AF", "#6366F1", "#6366F1", "#9CA3AF"])
const color01 = useTransform(smoothScrollProgress, [0.01, 0.03, 0.05, 0.07], ["#9CA3AF", "#6366F1", "#6366F1", "#9CA3AF"])
const color02 = useTransform(smoothScrollProgress, [0.02, 0.04, 0.06, 0.08], ["#9CA3AF", "#6366F1", "#6366F1", "#9CA3AF"])
const color10 = useTransform(smoothScrollProgress, [0.3, 0.32, 0.34, 0.36], ["#9CA3AF", "#6366F1", "#6366F1", "#9CA3AF"])
const color11 = useTransform(smoothScrollProgress, [0.33, 0.35, 0.37, 0.39], ["#9CA3AF", "#6366F1", "#6366F1", "#9CA3AF"])
const color12 = useTransform(smoothScrollProgress, [0.36, 0.38, 0.40, 0.42], ["#9CA3AF", "#6366F1", "#6366F1", "#9CA3AF"])
const color20 = useTransform(smoothScrollProgress, [0.55, 0.57, 0.59, 0.61], ["#9CA3AF", "#6366F1", "#6366F1", "#9CA3AF"])
const color21 = useTransform(smoothScrollProgress, [0.58, 0.60, 0.62, 0.64], ["#9CA3AF", "#6366F1", "#6366F1", "#9CA3AF"])
const color22 = useTransform(smoothScrollProgress, [0.61, 0.63, 0.65, 0.67], ["#9CA3AF", "#6366F1", "#6366F1", "#9CA3AF"])

  const opacityTransforms = [
    [opacity00, opacity01, opacity02],
    [opacity10, opacity11, opacity12],
    [opacity20, opacity21, opacity22],
  ]

  const colorTransforms = [
    [color00, color01, color02],
    [color10, color11, color12],
    [color20, color21, color22],
  ]

  return (
    <section
      ref={containerRef}
      className="relative min-h-[250vh] bg-transparent text-gray-800 overflow-hidden py-10 px-4 sm:px-6 lg:px-8"
    >
      {/* Background gradient elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] right-[10%] w-[40vw] h-[40vw] rounded-full bg-indigo-500/5 blur-[120px]" />
        <div className="absolute bottom-[20%] left-[5%] w-[30vw] h-[30vw] rounded-full bg-purple-500/5 blur-[100px]" />
        <div className="absolute top-[40%] left-[20%] w-[25vw] h-[25vw] rounded-full bg-blue-500/5 blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto pt-10 sm:pt-12 md:pt-0">
        {/* Headline */}
        <div className="sticky top-20 sm:top-24 md:top-[15vh] pt-8 sm:pt-12 md:pt-20 pb-6 md:pb-8 z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[0.9] sm:leading-[0.95] md:leading-[1] bg-gradient-to-r from-[#d4a856] via-[#7dd3fc] to-[#c4b5fd] bg-clip-text text-transparent font-pixel break-words">
            {headlineText}
          </h2>
        </div>

        {/* Main content sections */}
        <div className="space-y-10 sm:space-y-14 md:space-y-20">
          {sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="sticky top-[22vh] sm:top-[24vh] md:top-[28vh] min-h-[26vh] md:h-[38vh] flex flex-col justify-center py-6 md:py-10">
              <motion.h2
                className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-[#f5c96a] to-[#7dd3fc] bg-clip-text text-transparent font-pixel break-words"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false, margin: "-100px" }}
              >
                {section.title}
              </motion.h2>

              <div className="space-y-4">
                {section.content.map((line, lineIndex) => {
                  const { opacity, color } = {
                    opacity: opacityTransforms[sectionIndex][lineIndex],
                    color: colorTransforms[sectionIndex][lineIndex],
                  }

                  return (
                    <motion.p
                      key={lineIndex}
                      className="text-base sm:text-xl md:text-2xl font-medium leading-[1.2] sm:leading-tight font-pixel break-words"
                      style={{ opacity, color, transition: 'opacity 0.3s ease-out, color 0.3s ease-out' }}
                    >
                      {line}
                    </motion.p>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Experience Timeline Section */}
        <motion.div
          className="py-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false, margin: "-100px" }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-16 bg-gradient-to-r from-[#f5c96a] to-[#7dd3fc] bg-clip-text text-transparent font-pixel">
            Experience Timeline
          </h2>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#f5c96a] via-[#7dd3fc] to-[#c4b5fd] rounded-full shadow-[0_0_18px_rgba(125,211,252,0.25)]"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {/* Current Position */}
              <motion.div
                className="relative flex items-center md:justify-center"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: false, margin: "-100px" }}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-6 h-6 rounded-full border-4 border-[#0b1220] shadow-[0_0_18px_rgba(212,168,86,0.3)] bg-gradient-to-r from-[#f5c96a] to-[#7dd3fc] z-10">
                  <div className="absolute inset-1 rounded-full bg-[#0b1220]"></div>
                  <div className="absolute inset-2 rounded-full bg-gradient-to-r from-[#f5c96a] to-[#7dd3fc]"></div>
                </div>

                {/* Content */}
                <div className="ml-20 md:ml-0 md:w-5/12 md:pr-8 md:text-right md:mr-auto">
                  <div className="relative rounded-2xl border border-[#d4a856]/20 bg-[#0b1220]/90 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.45)] backdrop-blur-sm">
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#f5c96a] via-[#7dd3fc] to-[#c4b5fd]"></div>

                    <div className="flex flex-col md:items-end">
                      <span className="inline-block px-3 py-1 mb-3 rounded-full border border-[#d4a856]/20 bg-[#d4a856]/10 text-[#f5c96a] text-sm font-semibold font-pixel">
                        • May 2024 - Present
                      </span>
                      <h3 className="mb-2 text-xl font-bold text-[#f8fafc] font-pixel">Full Stack Developer</h3>
                      <p className="mb-3 text-lg font-semibold text-[#7dd3fc] font-pixel">@ P360</p>
                      <p className="mb-4 text-sm leading-relaxed text-slate-200/90 font-pixel">
                        Building scalable web applications and leading development initiatives using modern
                        technologies.
                      </p>

                      <div className="space-y-2">
                        <div className="flex items-center gap-2 md:justify-end">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#f5c96a]"></div>
                          <span className="text-sm text-slate-200/80 font-pixel">Developed full-stack applications</span>
                        </div>
                        <div className="flex items-center gap-2 md:justify-end">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#7dd3fc]"></div>
                          <span className="text-sm text-slate-200/80 font-pixel">Implemented RESTful APIs</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Journey Start */}
              <motion.div
                className="relative flex items-center md:justify-center"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: false, margin: "-100px" }}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-6 h-6 rounded-full border-4 border-[#0b1220] shadow-[0_0_18px_rgba(125,211,252,0.3)] bg-gradient-to-r from-[#7dd3fc] to-[#c4b5fd] z-10">
                  <div className="absolute inset-1 rounded-full bg-[#0b1220]"></div>
                  <div className="absolute inset-2 rounded-full bg-gradient-to-r from-[#7dd3fc] to-[#c4b5fd]"></div>
                </div>

                {/* Content */}
                <div className="ml-20 md:ml-0 md:w-5/12 md:pl-8 md:ml-auto">
                  <div className="relative rounded-2xl border border-[#7dd3fc]/20 bg-[#0b1220]/90 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.45)] backdrop-blur-sm">
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#7dd3fc] via-[#c4b5fd] to-[#f5c96a]"></div>

                    <div className="flex flex-col">
                      <span className="inline-block px-3 py-1 mb-3 w-fit rounded-full border border-[#7dd3fc]/20 bg-[#7dd3fc]/10 text-[#7dd3fc] text-sm font-semibold font-pixel">
                        Started • February 2024 - April 2024
                      </span>
                      <h3 className="mb-2 text-xl font-bold text-[#f8fafc] font-pixel">Joined P360</h3>
                      <p className="mb-3 text-lg font-semibold text-[#c4b5fd] font-pixel">Intern</p>
                      <p className="mb-4 text-sm leading-relaxed text-slate-200/90 font-pixel">
                        Began my journey as a Full Stack Developer, diving into modern web technologies and
                        collaborative development.
                      </p>

                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#c4b5fd]"></div>
                          <span className="text-sm text-slate-200/80 font-pixel">React & React Native development</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#7dd3fc]"></div>
                          <span className="text-sm text-slate-200/80 font-pixel">Node.js backend systems</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#f5c96a]"></div>
                          <span className="text-sm text-slate-200/80 font-pixel">Figma UI and UX</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Growth Milestone */}
              <motion.div
                className="relative flex items-center md:justify-center"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: false, margin: "-100px" }}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full border-4 border-white shadow-lg z-10">
                  <div className="absolute inset-1 bg-white rounded-full"></div>
                  <div className="absolute inset-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
                </div>
              </motion.div>
            </div>

          </div>
        </motion.div>

        {/* Skills section */}
        <motion.div
          className="py-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false, margin: "-100px" }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-12 bg-gradient-to-r from-[#f5c96a] to-[#7dd3fc] bg-clip-text text-transparent font-pixel">
            My Toolkit
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12">
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                className="flex flex-col items-center justify-center"
                whileHover={{
                  scale: 1.1,
                  transition: { type: "spring", stiffness: 400, damping: 10 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative image-render-pixel">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full opacity-20 blur-sm" />
                  <div className="relative bg-white p-4 rounded-full border border-gray-200 shadow-md">
                    <img
                      src={skill.iconSrc || "/placeholder.svg"}
                      alt={skill.name}
                      className="w-8 h-8 md:w-10 md:h-10 image-render-pixel"
                    />
                  </div>
                </div>
                <span className="mt-3 text-sm md:text-base font-pixel text-gray-700">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
