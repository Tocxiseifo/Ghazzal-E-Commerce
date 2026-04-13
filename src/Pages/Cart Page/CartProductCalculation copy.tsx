//==================Icons=================
import { CiDeliveryTruck } from "react-icons/ci";

//==================Router=================
import { Link } from "react-router-dom";

//==================Motion=================
// import { motion } from "framer-motion";
import useGhazzal from "../../Hooks/useGhazzal";

export default function CartProductCalculation() {
    //=====================Hook==================
    const { cart } = useGhazzal() //custom hook contain the context data
    return(
        <>
            <div className="w-[456px] flex items  h-[930px] pb-[256px] relative top-2 ">
                <div className="flex flex-col w-full h-[674px] gap-1  ">
                    <div className="w-[456px] h-[472px] gap-4 py-[32px] bg-[#20201F] flex flex-col px-[32px]">
                        <h2 className="text-2xl font-black font-sahel leading-8  text-text-base">Order Summary</h2>
                        <div className="flex flex-row justify-between mb-2">
                            <span className="text-[#8E9286] leading-[20px] text-[16px] ">Subtotal</span>
                            <span className="text-text-base">${cart.reduce((total, item) => total + Number(item.price) * item.quantity, 0).toFixed(2)}</span>
                        </div>
                        <div className="flex flex-row justify-between mb-2">
                            <span className="text-[#8E9286] leading-[20px] text-[16px] ">Shipping</span>
                            <span className="text-text-base">$0.00</span>
                        </div>
                        <div className="flex flex-row justify-between mb-4 w-[392px] h-[88px] pt-4 pb-8">
                            <span className="text-text-base font-black font-sahel text-2xl leading-[28px] ">Total</span>
                            <span className="text-brand-hover font-black text-4xl font-sahel leading-[40px]">${cart.reduce((total, item) => total + Number(item.price) * item.quantity, 0).toFixed(2)}</span>
                        </div>
                    <div className="flex justify-center items-center">
                        <Link to={cart.length === 0 ? "/cart" : "/OrderSuccess"} className={cart.length === 0 ? "w-[392px] flex justify-center h-[68px] items-center bg-gray-300 text-white   hover:bg-gray-300 transition duration-300 cursor-no-drop" :"w-full flex justify-center h-[68px] items-center bg-brand-hover text-hover hover:text-brand-hover   hover:bg-brand-hover/40 transition duration-300 cursor-pointer"}>
                            Proceed to Checkout
                        </Link>
                    </div>
                    </div>
                    <div className="flex items-center bg-[#4A4C4C]/30 h-[88px] gap-4 p-[24px] ">
                        <div className="w-[40px] h-[40px] flex justify-center items-center bg-brand-hover/20 ">
                            <CiDeliveryTruck  className="text-brand-hover " size={25}/>
                        </div>
                        <div className="w-[173px] h-[32px] flex flex-col items-start">
                            <span className="text-brand-hover w-full h-[15px] text-[10px] leading-[15px] tracking-[1px] font-sahel font-black uppercase">PRIORITY DELIVERY</span>
                            <span className="text-[#8E9286] w-[320px] h-[15px]   text-[11px] leading-[16.5px] tracking-[1px] font-sahel font-medium uppercase">ESTIMATED ARRIVAL: 48 HOURS</span>
                        </div>
                    </div>
                    <div className="w-full h-[106px] flex justify-center items-center p-8 bg-[#1C1B1B] ">
                        <div className="flex gap-4 w-[392px] h-[42px] ">
                            <input type="text" className="bg-[#0E0E0E] w-[264px] h-[42px] py-[12px] px-[16px] uppercase placeholder:text-[#6B7280] text-text-base text-sm focus:outline-0 font-sahel font-bold " placeholder="promo code" />
                            <span className="uppercase w-[111px] h-[42px] flex justify-center items-center text-text-base bg-transparent border border-[#8E9286] duration-300 transition-all hover:duration-300 hover:bg-white/15 cursor-pointer ">Apply</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}