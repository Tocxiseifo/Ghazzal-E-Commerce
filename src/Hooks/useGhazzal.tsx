import { useContext } from "react"
import { Context } from "../Context/context"

export default function useGhazzal() {
    const Contexts = useContext(Context)
    if(!Contexts) {
        throw new Error('useShop must be used within ShopProvider')
    }
    return Contexts
}