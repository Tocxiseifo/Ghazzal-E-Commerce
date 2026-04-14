import { Link } from "react-router";
import { heroData } from "./HeroSectionData";

export default function HeroSection() {
    const HoverEffect = 'w-[185px] h-[62px] bg-transparent border border-brand-hover rounded-md flex items-center justify-center text-brand-hover  hover:before:bg-brand-hover relative overflow-hidden border   px-3 text-white shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-brand-hover before:transition-all before:duration-500 hover:text-hover hover:shadow-brand-hover hover:before:left-0 hover:before:w-full'
    return(
        <>
            <section className="xl:h-[921px] h-auto  md:bg-cover justify-center relative   bg-center font-sahel w-full flex items-center text-left bg-main bg-[url('C:\Users\xsnow\OneDrive\Desktop\Ghazzal-E-Commerce\src\assets\images\image-from-rawpixel-id-1222552-jpeg.jpg')] bg-no-repeat">
                <div className="w-full bg-linear-to-r from-black to-transparent h-[921px]"></div>
                {heroData.map((data)=>(
                    <div className="w-full h-[415px] flex flex-col  text-lg uppercase relative right-140 ">
                        <span className="text-text-base  text-[125px] relative top-15 font-sahel">{data.text}</span>
                        <span className="text-brand-hover  text-[165px] font-sahel">{data.text2}</span>
                        <p className="w-[576px] h-[64px] text-p-color relative bottom-12 font-sahel">{data.p}</p>
                        <div className="w-full uppercase h-[110px] items-start flex gap-5 ">
                            <Link to={'collection'}  className="w-[227px] h-[62px] font-sahel rounded-md bg-brand-hover text-center items-center justify-center flex font-extrabold text-hover text-lg leading-5 hover:bg-[#3d5229] duration-500 transition-all hover:duration-500 hover:text-brand-hover">Shop the drop</Link>
                            <a href="#" className={HoverEffect}><span className="relative rounded-md z-10 font-sahel">view film</span></a>
                        </div>
                    </div>
                ))}
            </section>
        </>
    )
}