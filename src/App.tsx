import './App.css'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import ProjectSection from './components/ProjectSection'
import BackgroundMusic from './components/BackgroundMusic'

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