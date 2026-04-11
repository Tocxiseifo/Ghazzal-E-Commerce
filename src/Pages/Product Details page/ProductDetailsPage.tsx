import { useParams } from "react-router"
import useGhazzal from "../../Hooks/useGhazzal"
import  { NewArrivals } from "../../Components/New Arrivals/NewArrivalData"
import SizeCard from "./SizeCard"
import Feature from "./Feature"
import Suggestion from "./Suggestion"
import Review from "./Reviews"

export default function ProductDetailsPage() {
    //=============Hooks===============
    const {cart ,setCart} = useGhazzal()
    const param = useParams()
    const productId = param.productId
    return(
        <>
            <section className="flex flex-col h-auto w-full gap-[48px] bg-main">
                {NewArrivals.filter(product => product.id === Number(productId)).map((product) =>(
                    <div key={product.id}>
                    <div  className="w-full h-[930px] flex  justify-center items-center">
                        <div className="w-[747px] h-[890px] relative bottom-5 bg-text-base"> 
                            <img src={product.img} alt={product.name} className="w-[747px] h-[890px] object-contain hover:scale-110 duration-300 transition-transform hover:duration-300" />
                        </div>
                        <div className="w-[533px] bg-[#1c1b1b] h-[890px] relative bottom-5 px-16 flex justify-center items-center py-16">
                            <div className="w-[405px] h-[806px] flex flex-col items-start gap-[15px]">
                                <div className="flex w-[405px] h-[15px] gap-2 text-brand-hover items-center">
                                    <span className="w-8 h-px border"></span>
                                    <span className="w-[150px] h-[15px] leading-[15px] tracking-[1px] font-medium font-sahel text-[10px]">{product.category}</span>
                                </div>
                                <div className="w-[405px] h-[89px] text-text-base">
                                    <span className="w-[405px] h-[80px] font-sahel font-extrabold text-4xl">{product.name}</span>
                                </div>
                                <span className="w-[405px] h-[92px] text-left font-sahel text-sm font-medium leading-[23px] text-[#C5C8BB]/30">
                                    Engineered for elite thermal regulation and zero-restriction
                                    mobility. The K-01 utilizes a dual-layer carbon fiber weave to
                                    provide wind resistance without sacrificing breathability.
                                    Machined precision in every stitch.
                                </span>
                                <div className="w-[405px] h-[567px] pt-[25px] gap-12 flex flex-col ">
                                    <div className="flex flex-col h-[105px] w-[405px] gap-4">
                                        <span className="w-[73px] h-[15px] font-sahel font-medium leading-[15px] tracking-[1px] text-[10px] text-[#C5C8BB]/20 uppercase">Select size</span>
                                        <SizeCard />
                                    </div>
                                    <div className="flex  items-center justify-center w-[405px] gap-4 h-[105px]">
                                        <div className="w-[195px] flex  uppercase h-[39px] items-start flex-col gap-[3.5px]">
                                            <span className="w-[195px] h-[15px] leading-[15px] tracking-[1px] text-[10px] text-[#C5C8BB]/30">sku</span>
                                            <span className="w-[120px] h-[20px] leading-[20px]  text-[14px]  text-text-base">{product.name}</span>
                                        </div>
                                        <div className="w-[195px] flex  h-[39px] items-start flex-col gap-[3.5px]">
                                            <span className="w-[195px] uppercase h-[15px] leading-[15px] tracking-[1px] text-[10px] text-[#C5C8BB]/30">AVAILABILITY</span>
                                            <span className="w-[85px] capitalize h-[20px] leading-[20px]  text-[14px]  text-brand-hover">In Stock ({product.quantity})</span>
                                        </div>
                                    </div>
                                    <div className="w-[405px] h-[234px] gap-4 flex flex-col items-start">
                                        <div className="w-full h-[64px]">
                                            <span className="text-5xl text-text-base font-black font-sahel leading-12">${product.price}</span>
                                        </div>
                                        <span className="bg-brand-hover text-hover w-full h-[68px] flex font-sahel items-center justify-center uppercase duration-300 transition-all hover:bg-brand-hover/40 cursor-pointer hover:text-brand-hover hover:duration-300" onClick={()=> setCart(Number(cart) + 1)}>Add to cart</span>
                                        <span className="bg-transparent border border-[#44483E] text-text-base w-full h-[68px] flex font-sahel items-center justify-center uppercase duration-300 transition-all hover:bg-white/15 cursor-pointer  hover:duration-300">RESERVE IN STORE</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Feature name={product.name} />
                    <Suggestion id={product.id} />
                    <Review />
                    </div>
                ))}
            </section>
        </>
    )
}

