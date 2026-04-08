import NavBar from "./Components/NavBar/NavBar"
import './App.css'
import HeroSection from "./Components/Hero Section/HeroSection"

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <div className='w-full h-screen overflow-hidden'>
        <HeroSection />
      </div>
    </>
  )
}

export default App
