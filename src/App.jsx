import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Doctors from './components/Doctors'
import Appointment from './components/Appointment'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Services />
      <Doctors />
      <Appointment />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
