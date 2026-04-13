import useGhazzal from "../../Hooks/useGhazzal"

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function CartCard({img,category,price,size,quantity,name,id}:{id:string | number,img:string,category:string,price:number | string,size:string,quantity:any,name:string}){
    //============Hooks==========
    const {setCart} = useGhazzal() //custom hook to get the context data

    //================Handlers====================
    function handleDeleteClick(Id:number | string){
        //delete item from cart
        setCart(prev => prev.filter(item => item.id !== Id));
    }

    function handleIncreaseClick (Id :number | string ) {
        setCart(prev => prev.map(item => 
         item.id === Id ? {...item , quantity:quantity + 1} : item
        )) // Increase quantity by 1
     }
 
     function handleDecreaseClick (Id :number | string) {
        setCart(p => p.map(item => 
           item.id === Id ? {...item , quantity: quantity > 1 ? quantity - 1 : 1} : item
        )) // Ensure quantity doesn't go below 1
     }
     
    return(
        <div className="flex">
            <div className="w-[684px] h-[208px] gap-8 bg-[#1c1b1b] py-[24px] px-[24px] flex">
                <img src={img} alt={name} className="w-[128px] h-[160px] object-cover" />
                <div className="flex flex-col w-[456px] h-[160px] justify-between">
                    <div className="flex w-full h-[71px] justify-between">
                        <div className="w-[200px] h-[71px] gap-1 flex flex-col">
                            <span className="text-brand-hover leading-[15px] text-[10px] font-bold font-sahel">{category}</span>
                            <span className="w-[200px] h-[28px] text-text-base font-bold font-sahel text-[20px] leading-[28px]">{name}</span>
                            <span className="leading-[20px] text-sm text-[#8E9286] font-sahel font-medium ">size: {size}</span>
                        </div>
                        <span className="text-text-base font-extrabold text-lg font-sahel leading-[28px] w-[75px] h-[28px]">${price}</span>
                    </div>
                    <div className="flex justify-between w-full h-[36px] items-center">
                        <div className="w-[95px] h-9 px-4 py-2 flex justify-center gap-[12px] items-center bg-[#353535] ">
                            <button className="text-text-base text-2xl relative bottom-1 cursor-pointer" disabled={quantity <= 1} onClick={() => handleDecreaseClick(id)}>-</button>
                            <span className="text-text-base text-lg">{quantity === 0 ? 1 : quantity}</span>
                            <button className="text-text-base text-lg relative bottom-0.5 cursor-pointer" onClick={() => handleIncreaseClick(id)}>+</button>
                        </div>
                        <span className="hover:text-red-600 duration-500 cursor-pointer text-[#8E9286] text-[14px] font-bold font-sahel leading-[15px]" onClick={() => handleDeleteClick(id)}>Remove item</span>
                    </div>
                </div>
            </div>
        </div>
    )
}