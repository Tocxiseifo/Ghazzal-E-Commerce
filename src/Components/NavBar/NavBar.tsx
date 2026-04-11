import { NavLinks } from "./NavLinks";
import { MdOutlinePerson2 } from "react-icons/md";
import { motion , useScroll } from "motion/react"

import Cart from "./cart";
import { Link } from "react-router";


export default function NavBar() {
    const {scrollYProgress} = useScroll()

    const HoverStyle = "text-main-color font-seif text-[22px] cursor relative inline-block after:content-[''] after:absolute after:left-0 after:top-8 gap-15  after:w-full after:h-[3px] after:bg-brand-hover hover:text-brand-hover   after:scale-x-0 after:transition-transform after:duration-300  hover:after:scale-x-100 after:origin-left cursor-pointer"
    return(
        <>
            <nav className="w-full flex flex-col justify-between text-2xl text-center items-center font-sahel  h-[80px] bg-main uppercase text-text-base sticky top-0 z-50">
                <div  className="flex w-full items-center justify-between mt-6">
                    <div className="flex w-[180px] relative bottom-8 h-8">
                        <img src="" alt="" />
                        <Link to={'/'} className="text-[32px] ml-7 text-brand-hover"><img src="/src/assets/images/Document from Seif Ahmad (1).png" alt="" className="w-58 object-cover"  /></Link>
                    </div>
                    <div className="flex gap-8 text-[20px] mr-21 text-lg">
                        {NavLinks.slice(0,4).map((link)=>(
                            <div key={link.id}>
                                <span className={HoverStyle}>{link.name}</span>
                            </div>
                        ))}
                    </div>
                    <div className="flex gap-4 relative right-15">
                            <div  className="flex gap-5">
                                <Cart />
                                <span className="relative top-1"><MdOutlinePerson2 /></span>
                            </div>
                    </div>
                </div>
                <motion.span style={{ scaleX: scrollYProgress, originX: 0 }} className="border-2 w-full relative flex bottom- border-brand-hover"></motion.span>
            </nav>
        </>
    )
}