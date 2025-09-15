"use client"

import { useRef } from "react"
import { motion, useScroll } from "framer-motion"
import { useTransform } from "framer-motion"

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

  // Shortened sections
  const sections = [
    {
      title: "I craft digital experiences",
      content: [
        "Passionate developer transforming",
        "ideas into elegant solutions.",
        "Technical expertise meets creativity.",
      ],
    },
    {
      title: "My Philosophy",
      content: [
        "Great software should be beautiful",
        "and intuitive. Every line of code",
        "creates meaningful solutions.",
      ],
    },
    {
      title: "My Mission",
      content: [
        "Build digital products that exceed",
        "expectations and create lasting",
        "value for users and businesses.",
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

  const opacityTransforms = lineTransforms.map((sectionTransforms) =>
    sectionTransforms.map(({ lineScrollStart, lineScrollEnd }) => {
      const scrollYProgressRef = scrollYProgress
      return useTransform(
        scrollYProgressRef,
        [lineScrollStart - 0.1, lineScrollStart, lineScrollEnd, lineScrollEnd + 0.1],
        [0.3, 1, 1, 0.3],
      )
    }),
  )

  const colorTransforms = lineTransforms.map((sectionTransforms) =>
    sectionTransforms.map(({ lineScrollStart, lineScrollEnd }) => {
      const scrollYProgressRef = scrollYProgress
      return useTransform(
        scrollYProgressRef,
        [lineScrollStart - 0.05, lineScrollStart, lineScrollEnd, lineScrollEnd + 0.05],
        ["#9CA3AF", "#6366F1", "#6366F1", "#9CA3AF"],
      )
    }),
  )

  return (
    <section
      ref={containerRef}
      className="relative min-h-[250vh] bg-white text-gray-800 overflow-hidden py-10 px-4 sm:px-6 lg:px-8"
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
            <div key={sectionIndex} className="sticky top-[30vh] h-[50vh] flex flex-col py-10">
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
                  const { opacity, color } = {
                    opacity: opacityTransforms[sectionIndex][lineIndex],
                    color: colorTransforms[sectionIndex][lineIndex],
                  }

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

        {/* Experience Timeline Section */}
        <motion.div
          className="py-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false, margin: "-100px" }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-16 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent font-pixel">
            Experience Timeline
          </h2>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-black from-indigo-500 via-purple-500 to-blue-500 rounded-full"></div>

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
                <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full border-4 border-white shadow-lg z-10">
                  <div className="absolute inset-1 bg-white rounded-full"></div>
                  <div className="absolute inset-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
                </div>

                {/* Content */}
                <div className="ml-20 md:ml-0 md:w-5/12 md:pr-8 md:text-right md:mr-auto">
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl border-2 border-gray-200 shadow-lg p-6 relative">
                    {/* Pixel decoration */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500"></div>

                    <div className="flex flex-col md:items-end">
                      <span className="inline-block px-3 py-1 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-full text-sm font-semibold font-pixel mb-3 border border-green-200">
                         • May 2024 - Present
                      </span>
                      <h3 className="text-xl font-bold text-gray-900 font-pixel mb-2">Full Stack Developer</h3>
                      <p className="text-lg font-semibold text-indigo-600 font-pixel mb-3">@ P360</p>
                      <p className="text-gray-700 font-pixel text-sm leading-relaxed mb-4">
                        Building scalable web applications and leading development initiatives using modern
                        technologies.
                      </p>

                      {/* Key achievements */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 md:justify-end">
                          <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                          <span className="text-sm text-gray-600 font-pixel">Developed full-stack applications</span>
                        </div>
                        <div className="flex items-center gap-2 md:justify-end">
                          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                          <span className="text-sm text-gray-600 font-pixel">Implemented RESTful APIs</span>
                        </div>
                        <div className="flex items-center gap-2 md:justify-end">
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
                <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full border-4 border-white shadow-lg z-10">
                  <div className="absolute inset-1 bg-white rounded-full"></div>
                  <div className="absolute inset-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
                </div>

                {/* Content */}
                <div className="ml-20 md:ml-0 md:w-5/12 md:pl-8 md:ml-auto">
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl border-2 border-gray-200 shadow-lg p-6 relative">
                    {/* Pixel decoration */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500"></div>

                    <div className="flex flex-col">
                      <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 rounded-full text-sm font-semibold font-pixel mb-3 border border-blue-200 w-fit">
                        Started • February 2024 - April 2024
                      </span>
                      <h3 className="text-xl font-bold text-gray-900 font-pixel mb-2">Joined P360</h3>
                      <p className="text-lg font-semibold text-purple-600 font-pixel mb-3">Intern</p>
                      <p className="text-gray-700 font-pixel text-sm leading-relaxed mb-4">
                        Began my journey as a Full Stack Developer, diving into modern web technologies and
                        collaborative development.
                      </p>

                      {/* Initial focus areas */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                          <span className="text-sm text-gray-600 font-pixel">React & React Native development</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                          <span className="text-sm text-gray-600 font-pixel">Node.js backend systems</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                          <span className="text-sm text-gray-600 font-pixel">Figma Ui and UX</span>
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

export default EnhancedAboutSection
