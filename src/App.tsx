/* eslint-disable @typescript-eslint/no-explicit-any */
import NavBar from "./Components/NavBar/NavBar"
import FooterSection from "../src/Components/Footer Section/FooterSection";
import './App.css'
import { Context } from "./Context/context"
import { useState } from "react"
import AppRoutes from "./routes/AppRoutes"
import type { productTypes } from "./Types/productTypes";
import ScrollToTop from "./Components/ui/ScrollToTop"; // استيراد المكون

function App() {
  //====================Cart State==================
  const [cart,setCart] = useState<productTypes[]>([])
  const [chosenSize, setChosenSize] = useState<any | null>(null)
  
  return (
    <Context.Provider value={{cart ,setCart,chosenSize, setChosenSize}}>
      <ScrollToTop />
      <NavBar />
      <div className='w-full h-auto overflow-hidden'>
        <AppRoutes />
      </div>
      <FooterSection />
    </Context.Provider>
  )
}

export default App
