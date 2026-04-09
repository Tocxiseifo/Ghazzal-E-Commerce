import NavBar from "./Components/NavBar/NavBar"
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
    </Context.Provider>
  )
}

export default App
