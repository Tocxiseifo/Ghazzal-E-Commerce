import NavBar from "./Components/NavBar/NavBar"
import FooterSection from "../src/Components/Footer Section/FooterSection";
import './App.css'
import { Context } from "./Context/context"
import { useState } from "react"
import AppRoutes from "./routes/AppRoutes"

function App() {
  //====================Cart State==================
  const [cart,setCart] = useState<number| null>(null)
  return (
    <Context.Provider value={{cart ,setCart}}>
      <NavBar />
      <div className='w-full h-auto overflow-hidden'>
        <AppRoutes />
      </div>
      <FooterSection />
    </Context.Provider>
  )
}

export default App
