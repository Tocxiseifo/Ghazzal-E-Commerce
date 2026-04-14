import { SelectBody } from "C:/Users/xsnow/OneDrive/Desktop/Ghazzal-E-Commerce/src/Components/ui/SeclectBody.tsx";
import  { NewArrivals } from "../../Components/New Arrivals/NewArrivalData";
import Card from "@/Components/ui/Card";
import { Checkbox } from "@/Components/ui/checkbox";
import { categoryData } from "./CategoryData";
import { useState } from "react";
import ColorPallet from "./colorPallet";
import { ColorPalletData } from "./ColorPalletData";
import SizeCard from "../Product Details page/SizeCard";
import useGhazzal from "@/Hooks/useGhazzal";

export default function CollectionPage() {
    //======================States===========================
    const [isChecked , setIsChecked] = useState<string>('all')
    const [color , setColor] = useState<string>('all')

    const {chosenSize , setChosenSize} = useGhazzal()

    //================Handlers====================
    const handleOnChange = (id:string) => {
        setIsChecked(id);
    };
    const handleColorChange = (colorName:string) => {
        setColor(colorName);
    };
    console.log(color);
    // console.log(isChecked)
    const handleReturnToDefault = () =>{
        setColor('all')
        setIsChecked('all')
        setChosenSize(null)
    }
    const filteredItems =
        NewArrivals
            .filter(item => isChecked === 'all' || item.category === isChecked) // to filter the category
            .filter(item => color === 'all' || item.color === color) // to filter the color
            .filter(item => chosenSize === null || item.size === chosenSize )
    return(
        <>
            <main className="w-full h-auto bg-main flex flex-col items-center justify-center">
                <section className="w-full h-[466px] pt-[160px] flex justify-center items-center pb-[80px] px-[48px]  ">
                    <div className="flex justify-between items-center w-[1250px] h-[226px] ">
                        <div className="flex flex-col w-[562px] uppercase h-[226px] gap-4 items-start text-left">
                            <span className="h-[18px] w-full font-sahel font-medium text-sm leading-4.5 text-brand-hover ">engineered performance</span>
                            <span className="w-full h-[192px] text-text-base font-sahel font-extrabold text-[96px] leading-[96px]" >tactical essentials</span>
                        </div>
                        <div className="w-[180px] uppercase flex flex-col h-[55px] gap-4 mt-20">
                            <span className="w-[154px] h-[15px] text-[10px] leading-[14px] font-medium font-sahel text-[#8E9286]">Displaying {NewArrivals.length} products</span>
                            <SelectBody />
                        </div>
                    </div>
                </section>
                <section className="w-[1250px] h-[1281px] flex gap-16 pb-[128px] items-center justify-center ">
                    <div className="w-[256px] flex flex-col h-[1153px] gap-12 items-start ">
                        <div className="w-full h-[164px] flex flex-col gap-6  ">
                            <div className="w-full h-[28px] text-lg text-text-base font-extrabold font-sahel leading-[28px] flex items-center justify-between uppercase"> 
                                <span>Category</span>
                                <span className="w-[8.17px] h-[1.17px] text-[#8e9286] border"></span>
                            </div>                            <div className="w-full h-[112px] gap-4 flex flex-col items-start ">
                                {categoryData.map((item) =>(
                                    <div className="w-full h-4 gap-3 flex items-center uppercase" key={item.id}>
                                        <Checkbox  checked={isChecked === item.id} onCheckedChange={()=> handleOnChange(item.id)} />
                                        <span className="w-[94px] h-[16px] font-bold text-sm leading-4 tracking-[1.2px] text-[#8E9286]">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="w-full  h-[174px] gap-6 flex flex-col ">
                            <div className="w-full h-[28px] text-lg text-text-base font-extrabold font-sahel leading-[28px] flex items-center justify-between uppercase"> 
                                <span>color</span>
                                <span className="w-[8.17px] h-[1.17px] text-[#8e9286] border"></span>
                            </div>                            
                            <div className="w-full h-[122px] flex flex-wrap gap-3">
                                {ColorPalletData.map(({ id, color: colorName }) => (
                                    <ColorPallet 
                                        key={id}
                                        color={colorName} 
                                        isActive={color === colorName} // عشان اليوزر يعرف هو دايس على إيه
                                        onClick={() => handleColorChange(colorName)} 
                                    />
                                ))}

                            </div>
                        </div>
                        <div className="w-full  h-[142px] gap-6 flex flex-col">
                            <div className="w-full h-[28px] text-lg text-text-base font-extrabold font-sahel leading-[28px] flex items-center justify-between uppercase"> 
                                <span>Size</span>
                                <span className="w-[8.17px] h-[1.17px] text-[#8e9286] border"></span>
                            </div>
                            <div className="w-full h-[90px] gap-2 flex flex-wrap ">
                                <SizeCard />
                            </div>
                        </div>
                        <button className="w-full relative top-15 mt-[48px h-[47px] flex justify-center items-center px-4 bg-text-base duration-300 hover:duration-300 transition-all hover:bg-text-base/40 cursor-pointer " onClick={handleReturnToDefault}>
                            RESET ALL FILTERS                               
                        </button>
                    </div>
                    <div className="w-[864px] h-[1153px] gap-[128px]  flex flex-wrap items-center justify-center">
                        {filteredItems.map((item) =>(
                            <Card img={item.img} id={item.id} name={item.name} price={item.price} category={item.category} />
                        ))}
                        {filteredItems.length === 0 && (
                            <p className="text-white">No items found in this category.</p>
                        )}
                    </div>
                </section>
            </main>
        </>
    )
}