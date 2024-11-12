import React from 'react'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Project from './components/Project'
import HireMe from './components/HireMe'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Bot from './components/Bot'
import About from './components/About'
const App = () => {
  return (
    <div>
      <Navbar  />
      <Bot />
      <Hero/>
      <About/>
      <Skills/>
      <HireMe/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App