import { coreData } from "./coreSystemData";

export default function CoreSystemSection() {
    return(
        <>
            <section className="w-full relative  h-[755px] px-[192px] py-[48px] bg-[#0E0E0E] ">
                <span className="w-full h-[320px]  leading-[320px] text-[320px] text-text-base/5 relative z-10 left-[960px] font-sahel">KINETIC</span>
                {coreData.map((item) =>(
                    <div className="flex flex-col items-start w-[768px] h-[371px] gap-[48px]">
                        <div className="w-[768px] h-[150px] items-start flex flex-col">
                            <span className="text-7xl w-[508px] h-[150px] text-left leading-[75px] text-text-base font-sahel uppercase font-extrabold">{item.text}</span>
                        </div>
                        <div className="w-[768px] ">
                            <span className="text-[20px] leading-8 w-[768px]  h-[65px] text-[#8E9286] font-sahel">{item.p}</span>
                        </div>
                        <div className="flex w-[768px] h-[60px] gap-4 items-center">
                            <input type="email" placeholder="Email Address" className="placeholder:uppercase w-[384px] h-[60px] pl-[24px] bg-[#44483E] rounded-md focus:outline-none text-2xl text-white" />
                            <button className="uppercase flex justify-center items-center text-hover bg-brand-hover rounded-md hover:duration-300 hover:bg-hover hover:text-brand-hover font-sahel w-[182px] h-[60px]">Initialize</button>
                        </div>
                    </div>
                ))}
            </section>
        </>
    )
}