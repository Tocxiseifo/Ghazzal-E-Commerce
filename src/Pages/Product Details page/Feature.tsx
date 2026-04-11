export default function Feature({name}:{name:string}) {
    
    return(
        <>
            <section className="w-full h-[931px] flex px-12 py-[128px] justify-center items-center bg-[#0e0e0e] ">
                <div className="flex w-[1184px] h-[776px] gap-[96px] items-start text-left">
                    <div className="w-[544px] h-[344px] flex flex-col relative">
                        <span className="uppercase font-sahel w-[544px] h-[72px] font-black text-[72px] leading-[72px] text-[#8E9286]/20 z-10">technique</span>
                        <div className="flex flex-col w-full h-[144px] ">
                            <span className="w-full h-[40px] font-sahel font-extrabold text-4xl leading-10 text-text-base uppercase pb-[56px] relative bottom-6">built fot momentum</span>
                            <p className="w-full h-[88px] text-lg leading-[30px] text-[#C5C8BB]/80">{`The ${name} is more than apparel; it's a modular system designed
                                for extreme environmental versatility. Featuring a high-tensile
                                outer shell and a moisture-wicking inner core.`}
                            </p>
                        </div>
                    </div>
                    <div className="flex w-[544px] h-[776px] pt-[96px]">
                        <div className="w-[544px] h-[680px] flex justify-center items-center bg-[#2A2A2A] py-[48px] px-[48px] ">
                            <img src='/src/assets/images/Document_from_Seif_Ahmad-000-removebg-preview.png' alt="" className="w-[448px] h-[584px] object-cover " />

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}