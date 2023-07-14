import { About, Navbar,  DigitalRain } from "./components"

function App() {

  return (
    <div className="min-h-screen overflow-hidden">
      <DigitalRain className='absolute inset-0'/>
      <div className="flex flex-col">
      <Navbar />
      </div>
    </div>

  )
}

export default App
