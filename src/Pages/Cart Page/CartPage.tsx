/* eslint-disable @typescript-eslint/no-explicit-any */
import useGhazzal from "../../Hooks/useGhazzal"
import CartCard from "./CartCard"
import CartForm from "./CartForm";
import CartProductCalculation from "./CartProductCalculation copy";

export default function CartPage() {
    const {cart  , chosenSize} = useGhazzal()
    const cartList = Array.isArray(cart) ? cart.map((item: any) => ({...item, quantity: item.quantity || 1})) : [];

    console.log(cartList);
    console.log(cart);

    
        return(
        <section className="h-[1535px] bg-main w-full pt-[128px] gap-[110px] flex justify-center ">
            <div className="w-[664px] flex flex-col  gap-3  items-start h-[935px] py-[10px] relative bottom-12">
                <span className="w-[664px] h-[48px] text-text-base text-5xl leading-12 font-sahel font-extrabold uppercase">your kit ({cartList.length})</span>
                {cart.map((cart , index) =>(
                    <div  key={cart.id || index} className="w-[664px] h-auto flex flex-col gap-4 ">
                        <CartCard img={cart.img} size={chosenSize} category={cart.category} price={cart.price} name={cart.name} quantity={cart.quantity} id={cart.id} />
                    </div>
                ))}
                <CartForm />
            </div>
            <CartProductCalculation />
        </section>        
    )
}