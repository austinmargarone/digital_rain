import { Features, Hero, Navbar, Pricing, Testimonials, Footer, DigitalRain } from "./components"


function App() {

  return (
    <div className="min-h-screen overflow-hidden">
      <DigitalRain className='absolute inset-0'/>
      <div className="flex flex-col">
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <Footer />
      </div>
    </div>

  )
}

export default App
