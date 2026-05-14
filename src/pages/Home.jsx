import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import Alternance from '../components/Alternance.jsx'
import Skills from '../components/Skills.jsx'
import Parcours from '../components/Parcours.jsx'
import Projects from '../components/Projects.jsx'
import Contact from '../components/Contact.jsx'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Alternance />
      <Skills />
      <Parcours />
      <Projects />
      <Contact />
    </main>
  )
}
