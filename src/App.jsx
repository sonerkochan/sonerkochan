import Navigation from './components/Navigation'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Awards from './components/Awards'

function App() {

  return (
    <>
    <div class="container-fluid p-0">
    <Navigation/>
    <About/>
    <Experience/>
    <Education/>
    <Projects/>
    <Skills/>
    <Awards/>
    </div>
    </>
  )
}

export default App
