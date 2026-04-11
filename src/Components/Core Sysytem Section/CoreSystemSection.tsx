import { coreData } from "./coreSystemData";

export default function CoreSystemSection() {
    return(
        <>
            <section className="w-full relative h-152   xl:h-[895px] px-[192px] py-[48px] bg-[#0E0E0E] ">
                <span className="w-full hidden md:flex h-[320px]  leading-[320px] text-[320px] text-text-base/5 relative z-10 left-[960px] font-sahel">KINETIC</span>
                {coreData.map((item) =>(
                    <div className="flex flex-col items-start w-[768px] relative right-40 lg:right-0 h-[371px] gap-6 lg:gap-[48px]">
                        <div className="w-[768px] h-[150px] items-start flex flex-col">
                            <span className="lg:text-7xl lg:w-[508px] w-100 h-[150px] text-left text-4xl md:leading-[75px] text-text-base font-sahel uppercase font-extrabold">{item.text}</span>
                        </div>
                        <div className="lg:w-[768px] w-70 ">
                            <span className="lg:text-[20px] w-200 text-lg  lg:leading-8 lg:w-[768px] h-15   lg:h-[65px] text-[#8E9286] font-sahel">{item.p}</span>
                        </div>
                        <div className="flex flex-col lg:flex-row lg:w-[768px] h-auto lg:h-[60px] gap-8 lg:gap-4 items-center">
                            <input type="email" placeholder="Email Address" className="placeholder:uppercase  w-65 lg:w-[384px] h-12 lg:h-[60px] pl-[24px] bg-[#44483E] rounded-md focus:outline-none lg:text-2xl text-white" />
                            <button className="uppercase cursor-pointer flex justify-center items-center text-hover bg-brand-hover rounded-md hover:duration-300 hover:bg-hover hover:text-brand-hover font-sahel w-[182px] h-12 lg:h-[60px]">Initialize</button>
                        </div>
                    </div>
                ))}
            </section>
        </>
    )
}