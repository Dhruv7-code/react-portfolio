import React from 'react'
import Navbar from './components/layout/Navbar.jsx'
import Hero from './components/Sections/Hero.jsx'
import About from './components/Sections/About.jsx'
import Skills from './components/Sections/Skills.jsx'
import Projects from './components/Sections/Projects.jsx'
import Services from './components/Sections/Services.jsx'
import Achievements from './components/Sections/Achievements.jsx'
import Contact from './components/Sections/Contact.jsx'
import Footer from './components/layout/Footer.jsx'


function App() {
  return (
    <div className='min-h-screen bg-black'>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Achievements />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App