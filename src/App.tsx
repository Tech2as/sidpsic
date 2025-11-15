import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Benefits from './components/Benefits'
import Services from './components/Services'
import About from './components/About'
import WhyChoose from './components/WhyChoose'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Stats />
      <Benefits />
      <Services />
      <About />
      <WhyChoose />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App
