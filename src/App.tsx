import './App.css'
import AboutSection from './components/sections/AboutSection'
import ContactSection from './components/sections/ContactSection'
import HeroSection from './components/sections/HeroSection'
import Navbar from './components/layout/Navbar'
import ProjectSection from './components/sections/ProjectSection'
import BackgroundMusic from './components/widgets/BackgroundMusic'

function App() {
  return (
    <>
      <Navbar/>
      <BackgroundMusic />
      <div id="hero">
        <HeroSection/>
      </div>
      <div id="about">
        <AboutSection/>
      </div>
      <div id="projects">
        <ProjectSection/>
      </div>
      <div id="contact">
        <ContactSection/>
      </div>
    </>
  )
}

export default App