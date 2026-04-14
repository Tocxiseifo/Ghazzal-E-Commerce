import { Link } from "react-router"
import  { NewArrivals } from "../../Components/New Arrivals/NewArrivalData"
import Card from "../../Components/ui/Card"

export default function Suggestion({id}:{id:string|number}) {
    return(
        <>
            <section className="w-full h-[905px] justify-center items-center flex flex-col py-[128px] px-[48px] bg-main">
                <div className="w-[1184px] h-[649px] flex flex-col gap-16 items-start">
                    <div className="w-full h-[27px] flex justify-between">
                        <span className="text-text-base w-[351px] h-[27px] font-sahel text-4xl uppercase">complete the kit</span>
                        <Link to={'/collection'} className="text-brand-hover hover:underline w-[155px] h-[7.5px] uppercase text-sm cursor-pointer">view all collection</Link>
                    </div>
                </div>
                <div className="w-full h-[557px] justify-center items-center gap-45 flex">
                    {NewArrivals.filter(product => product.id !== id).map((sugg)=>(
                        <Card id={sugg.id} img={sugg.img} price={sugg.price} name={sugg.name} category={sugg.category}/>
                    ))}
                </div>
            </section>
        </>
    )
}
