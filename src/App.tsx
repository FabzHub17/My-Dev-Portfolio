import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Work from './components/Work/Work'

function App() {

  return (
    <div className="App">
      <Hero />
      <About />
      <Work />
      <div className="special-container">
      <Contact />
      <Footer />
      </div>
    </div>

  )
}

export default App
