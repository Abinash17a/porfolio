"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { FaReact, FaNodeJs, FaDatabase, FaGithub, FaFigma } from "react-icons/fa"
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiJavascript, SiVercel } from "react-icons/si"

const EnhancedAboutSection = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Skills array with icons and colors
  const skills = [
    { name: "React", icon: FaReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    { name: "Node.js", icon: FaNodeJs, color: "#339933" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Databases", icon: FaDatabase, color: "#4479A1" },
    { name: "GitHub", icon: FaGithub, color: "#181717" },
    { name: "Figma", icon: FaFigma, color: "#F24E1E" },
    { name: "Vercel", icon: SiVercel, color: "#000000" },
  ]

  // Headline with gradient effect
  const headlineText = "Developer = You & Code"

  // Main sections with text that will highlight on scroll
  const sections = [
    {
      title: "I craft digital experiences",
      content: [
        "I'm a passionate developer who transforms",
        "ideas into elegant, functional solutions.",
        "My approach combines technical expertise",
        "with creative problem-solving to build",
        "applications that users love.",
      ],
    },
    {
      title: "My Philosophy",
      content: [
        "I believe great software should be both",
        "beautiful and intuitive. Every line of code",
        "is an opportunity to create something",
        "meaningful that solves real problems.",
      ],
    },
    {
      title: "My Mission",
      content: [
        "To build digital products that not only meet",
        "requirements but exceed expectations,",
        "creating lasting value and memorable",
        "experiences for users and businesses alike.",
      ],
    },
  ]

  // Calculate scroll progress ranges and transforms outside the map function
  const lineTransforms = sections.map((section) =>
    section.content.map((line, lineIndex) => {
      const sectionIndex = sections.indexOf(section)
      const lineScrollStart = 0.1 + sectionIndex * 0.25 + lineIndex * 0.03
      const lineScrollEnd = lineScrollStart + 0.1

      return { lineScrollStart, lineScrollEnd }
    }),
  )

  const generateTransforms = (lineScrollStart: number, lineScrollEnd: number) => {
    const opacity = useTransform(
      scrollYProgress,
      [lineScrollStart - 0.1, lineScrollStart, lineScrollEnd, lineScrollEnd + 0.1],
      [0.3, 1, 1, 0.3],
    )

    const color = useTransform(
      scrollYProgress,
      [lineScrollStart - 0.05, lineScrollStart, lineScrollEnd, lineScrollEnd + 0.05],
      ["#9CA3AF", "#6366F1", "#6366F1", "#9CA3AF"],
    )

    return { opacity, color }
  }

  return (
    <section
      ref={containerRef}
      className="relative min-h-[200vh] bg-white text-gray-800 overflow-hidden py-20 px-4 sm:px-6 lg:px-8"
    >
      {/* Background gradient elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] right-[10%] w-[40vw] h-[40vw] rounded-full bg-indigo-500/5 blur-[120px]" />
        <div className="absolute bottom-[20%] left-[5%] w-[30vw] h-[30vw] rounded-full bg-purple-500/5 blur-[100px]" />
        <div className="absolute top-[40%] left-[20%] w-[25vw] h-[25vw] rounded-full bg-blue-500/5 blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Headline with gradient */}
        <div className="sticky top-[15vh] pt-20 pb-10 z-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
            {headlineText}
          </h1>
        </div>

        {/* Main content sections with scroll highlight effect */}
        <div className="space-y-[25vh]">
          {sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="sticky top-[30vh] h-[50vh] flex flex-col">
              <motion.h2
                className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false, margin: "-100px" }}
              >
                {section.title}
              </motion.h2>

              <div className="space-y-4">
                {section.content.map((line, lineIndex) => {
                  const { lineScrollStart, lineScrollEnd } = lineTransforms[sectionIndex][lineIndex]
                  const { opacity, color } = generateTransforms(lineScrollStart, lineScrollEnd)

                  return (
                    <motion.p
                      key={lineIndex}
                      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight"
                      style={{ opacity, color }}
                    >
                      {line}
                    </motion.p>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Skills section */}
        <motion.div
          className="py-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-16 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
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
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full opacity-20 blur-sm" />
                  <div className="relative bg-white p-4 rounded-full border border-gray-200 shadow-md">
                    <skill.icon size={32} className="md:size-10 lg:size-12" style={{ color: skill.color }} />
                  </div>
                </div>
                <span className="mt-3 text-sm md:text-base font-medium text-gray-700">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default EnhancedAboutSection
