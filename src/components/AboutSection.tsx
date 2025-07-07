"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const EnhancedAboutSection = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
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

  const headlineText = "Developer = You & Code"

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

  const lineTransforms = sections.map((section) =>
    section.content.map((_, lineIndex) => {
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
      className="relative min-h-[200vh] bg-white text-gray-800 overflow-hidden py-10 px-4 sm:px-6 lg:px-8"
    >
      {/* Background gradient elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] right-[10%] w-[40vw] h-[40vw] rounded-full bg-indigo-500/5 blur-[120px]" />
        <div className="absolute bottom-[20%] left-[5%] w-[30vw] h-[30vw] rounded-full bg-purple-500/5 blur-[100px]" />
        <div className="absolute top-[40%] left-[20%] w-[25vw] h-[25vw] rounded-full bg-blue-500/5 blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Headline */}
        <div className="sticky top-[15vh] pt-20 pb-10 z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent font-pixel">
            {headlineText}
          </h2>
        </div>

        {/* Main content sections */}
        <div className="space-y-[12vh]">
          {sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="sticky top-[30vh] h-[50vh] flex flex-col">
              <motion.h2
                className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent font-pixel"
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
                      className="text-lg sm:text-xl md:text-2xl font-medium leading-tight font-pixel"
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
          <h2 className="text-2xl md:text-3xl font-bold mb-12 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent font-pixel">
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
                      src={skill.iconSrc}
                      alt={skill.name}
                      className="w-8 h-8 md:w-10 md:h-10 image-render-pixel"
                    />
                  </div>
                </div>
                <span className="mt-3 text-sm md:text-base font-pixel text-gray-700">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default EnhancedAboutSection

