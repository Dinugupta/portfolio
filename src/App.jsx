import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import WhyWorkWithMe from './components/WhyWorkWithMe'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-navy-900">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <WhyWorkWithMe />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
