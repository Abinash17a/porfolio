import { useState, useEffect } from "react"

export const useScrollProgress = () => {
  const [currentLevel, setCurrentLevel] = useState(1)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight - windowHeight

      // Calculate overall progress (0-100)
      const overallProgress = Math.min((scrollTop / documentHeight) * 100, 100)
      setProgress(overallProgress)

      // Determine current level based on scroll position
      const sections = [
        { id: 1, selector: "#hero", threshold: 0.1 },
        { id: 2, selector: "#about", threshold: 0.3 },
        { id: 3, selector: "#projects", threshold: 0.6 },
        { id: 4, selector: "#contact", threshold: 0.9 }
      ]

      let newLevel = 1
      for (const section of sections) {
        const element = document.querySelector(section.selector)
        if (element) {
          const rect = element.getBoundingClientRect()
          const elementTop = rect.top + scrollTop
          const elementBottom = elementTop + rect.height

          // Check if section is in view
          if (scrollTop + windowHeight * section.threshold >= elementTop &&
              scrollTop <= elementBottom) {
            newLevel = section.id
            break
          }
        }
      }

      setCurrentLevel(newLevel)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial call

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return { currentLevel, progress }
}