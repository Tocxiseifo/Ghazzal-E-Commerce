/* eslint-disable @typescript-eslint/no-explicit-any */
import { SizeData } from "./SizeData";
import useGhazzal from "../../Hooks/useGhazzal";

export default function SizeCard() {
    //===============States==============
    const {chosenSize , setChosenSize} = useGhazzal()

    
    
    return(
        <>
            <div className="w-[405px] h-[75px] flex gap-2 ">
                {SizeData.map((size)=>(
                    <div className={chosenSize === size.id ? "w-[75px] h-[75px] flex justify-center items-center border-[#44483e] bg-brand-hover border cursor-pointer text-hover hover:text-brand-hover  duration-300 transition-colors hover:duration-300" : "w-[75px] h-[75px] flex justify-center items-center border-[#44483e] bg-transparent border cursor-pointer hover:bg-white/10 duration-300 transition-colors hover:duration-300"} key={size.id}  onClick={() => setChosenSize(size.id)}>
                        <span className={chosenSize === size.id ? "text-hover font-bold text-[12px] font-sahel leading-4" : "text-text-base font-bold text-[12px] font-sahel leading-4" }>{size.id}</span>
                    </div>
                ))}
            </div>
        </>
    )
}