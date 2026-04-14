import  { NewArrivals } from "../../Components/New Arrivals/NewArrivalData";

export default function CollectionPage() {
    return(
        <>
            <section className="w-full h-auto bg-main ">
                <div className="w-full h-[466px] pt-[160px] pb-[80px] px-[48px]  ">
                    <div className="flex justify-between w-[1184px] h-[226px] ">
                        <div className="flex flex-col w-[562px] uppercase h-[226px] gap-4 items-start text-left">
                            <span className="h-[18px] w-full font-sahel font-medium text-sm leading-4.5 text-brand-hover ">engineered performance</span>
                            <span className="w-full h-[192px] text-text-base font-sahel font-extrabold text-[96px] leading-[96px]" >tactical essentials</span>
                        </div>
                        <div className="w-[180px] uppercase flex flex-col h-[55px] gap-4 ">
                            <span className="w-[154px] h-[15px] text-[10px] leading-[14px] font-medium font-sahel text-[#8E9286]">Displaying {NewArrivals.length} products</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}