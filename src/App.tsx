import './App.css'
import AboutSection from './components/sections/AboutSection'
import ContactSection from './components/sections/ContactSection'
import HeroSection from './components/sections/HeroSection'
import Navbar from './components/layout/Navbar'
import ProjectSection from './components/sections/ProjectSection'

import CustomCursor from "./components/layout/Cursor";
import ScrollProgressBar from './components/widgets/ScrollProgressBar'

function App() {
  return (
    <div className="app-shell">
       <CustomCursor />
      <Navbar/>
      {/* <BackgroundMusic /> */}
      <ScrollProgressBar />
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
    </div>
  )
}

export default App