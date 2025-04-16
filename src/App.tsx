import './App.css'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import ProjectSection from './components/ProjectSection'

function App() {

  return (
    <>
      <Navbar/>
      <HeroSection/>
      <AboutSection/>
      <ProjectSection/>
      <ContactSection/>
    </>
  )
}

export default App
