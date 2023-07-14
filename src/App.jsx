import { Features, Hero, Navbar, Pricing, Testimonials } from "./components"


function App() {

  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <footer />
    </div>

  )
}

export default App
