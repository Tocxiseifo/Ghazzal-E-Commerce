import { Link } from "react-router"
import useGhazzal from "../../Hooks/useGhazzal"

export default function Card({img,name,price,category,id}:{img:string,name:string,price:string | number,category:string,id:string | number}) {
    const {cart , setCart} = useGhazzal()
    return(
        <>
            <div className="w-[278px] h-[485px] flex flex-col gap-6 items-start group relative hover:-translate-y-2 duration-300 transition-all hover:duration-300" key={id}>
                <div className="border border-white/10 rounded-md bg-white/10 ">
                    <img src={img} alt={name} className="w-[278px] h-[370px] object-cover" />
                    <div className="w-[278px] h-10 flex justify-evenly">
                        <div className="h-10 w-[171px] flex flex-col">
                            <span className="text-brand-hover leading-5 text-lg uppercase font-sahel">{name}</span>
                            <span className="text-[#8E9286] text-sm leading-4 font-sahel">{category}</span>
                        </div>
                        <span className="text-lg font-bold leading-5 text-brand-hover font-sahel">${price}</span>
                    </div>
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-main  to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 bottom-18 rounded-md  " />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-4 opacity-0 translate-y-4 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0">
                    <Link to={`product/${id}`} className="w-full flex items-center justify-center gap-2 rounded-full bg-text-base px-6 py-2.5 text-sm font-medium cursor-pointer text-hover shadow-lg transition-colors hover:bg-gray-300">
                      Review
                    </Link>
                    <button className="w-full flex items-center justify-center gap-2 rounded-full bg-brand-hover px-6 py-2.5 text-sm font-medium cursor-pointer text-hover shadow-lg transition-colors hover:bg-hover hover:text-brand-hover hover:duration-300 duration-300" onClick={()=> setCart(Number(cart) + 1)}>
                      Add to Cart
                    </button>
                 </div>
            </div>
        </>
    )
}