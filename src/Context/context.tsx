import { createContext } from "react";

interface ContextData {
    cart:number | null
    setCart:React.Dispatch<React.SetStateAction<number | null>>
}

export const Context = createContext<ContextData | null>(null)