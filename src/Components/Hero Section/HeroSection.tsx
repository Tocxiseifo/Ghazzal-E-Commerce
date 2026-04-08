import { heroData } from "./HeroSectionData";

export default function HeroSection() {
    return(
        <>
            <section className="h-[1500px]  bg-contain justify-center relative w-full flex items-center text-left bg-main bg-[url('C:\Users\xsnow\OneDrive\Desktop\Ghazzal-E-Commerce\src\assets\images\image-from-rawpixel-id-1222552-jpeg.jpg')] bg-no-repeat ">
                <div className="w-full grayscale h-fit"></div>
                {heroData.map((data)=>(
                    <div className="w-full h-[415px] flex flex-col ">
                        <span className="text-text-base text-2xl">{data.text}</span>
                        <span className="text-brand-hover  text-2xl">{data.text2}</span>
                    </div>
                ))}
            </section>
        </>
    )
}