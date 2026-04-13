import Card from "../ui/Card";
import  { NewArrivals } from "./NewArrivalData";

export default function NewArrival() {
    return(
        <>
            <section className="w-full xl:h-[835px] h-520 bg-main flex flex-col gap-[64px] items-center  font-shale py-[128px] px-[48px]">
                <div className="flex  lg:justify-between w-full flex-col lg:flex-row   lg:gap-0 xl:w-[80%] items-center xl:h-[81px] h-auto">
                    <span className="xl:w-[280px]  h-10 text-text-base xl:leading-[40px] xl:text-4xl text-2xl uppercase font-sahel">New Arrivals</span>
                    <a href="#" className="text-brand-hover xl:w-[120px] h-10 bg-transparent hover:underline transition-all text-lg duration-300 hover:duration-300 xl:text-2xl font-sahel">See More</a>
                </div>
                <div className="lg:w-[90%] flex flex-col lg:flex-row items-center justify-evenly gap-8 h-[430px]">
                    {NewArrivals.map((item) =>(
                        <div key={item.id}>
                            <Card img={item.img}  id={item.id} name={item.name} price={item.price}  category={item.category}/>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}