import { heroData } from "./HeroSectionData";

export default function HeroSection() {
    return(
        <>
            <section className="h-[921px]  bg-cover justify-center relative font-sahel w-full flex items-center text-left bg-main bg-[url('C:\Users\xsnow\OneDrive\Desktop\Ghazzal-E-Commerce\src\assets\images\image-from-rawpixel-id-1222552-jpeg.jpg')] bg-no-repeat ">
                <div className="w-full bg-linear-to-r from-black to-transparent h-[921px]"></div>
                {heroData.map((data)=>(
                    <div className="w-full h-[415px] flex flex-col  text-lg uppercase relative right-140">
                        <span className="text-text-base  text-[125px] relative top-15 ">{data.text}</span>
                        <span className="text-brand-hover  text-[165px]">{data.text2}</span>
                        <p className="w-[576px] h-[64px] text-p-color relative bottom-12">{data.p}</p>
                        <div className="w-full uppercase h-[110px] items-start flex gap-5 ">
                            <a href="" className="w-[227px] h-[62px] bg-brand-hover text-center items-center justify-center flex font-extrabold text-[#223610] text-lg leading-5">Shop the drop</a>
                            <a href="" className="w-[185px] h-[62px] bg-transparent border border-brand-hover flex items-center justify-center text-brand-hover">view film</a>
                        </div>
                    </div>
                ))}
            </section>
        </>
    )
}