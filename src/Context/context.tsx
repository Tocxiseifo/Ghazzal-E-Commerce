/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext } from "react";
import type { productTypes } from "../Types/productTypes";

interface ContextData {
    cart:productTypes[]
    setCart:React.Dispatch<React.SetStateAction<productTypes[]>>
    setChosenSize:React.Dispatch<React.SetStateAction<any>>
    chosenSize:any
}

export const Context = createContext<ContextData | null>(null)