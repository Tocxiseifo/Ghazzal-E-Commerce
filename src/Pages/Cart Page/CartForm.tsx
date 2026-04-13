import { useState } from "react"

export default function CartForm() {
    const [formData , setFormData] = useState<{
        fullName:string,
        email:string,
        street:string,
        city:string,
        postalCode:string
    } >({
        fullName:'',
        email:'',
        street:'',
        city:'',
        postalCode:'',
    })
    return(
        <>
            <div className="w-[664px] h-[371px] flex flex-col items-start gap-8 pt-[80px]">
                <span className="w-full h-[32px] font-sahel font-black text-2xl leading-8 text-text-base uppercase">shopping protocol</span>
                <div className="w-full h-[227px] flex flex-col gap-[40px] ">
                    <div className="w-full h-auto flex justify-between gap-8">
                        <input type="text" value={formData.fullName} onChange={(e) => setFormData({...formData , fullName:e.target.value})} placeholder="full name" className="placeholder:uppercase focus:outline-0 flex items-start justify-center w-[316px] h-[49px] border-b-[#44483E] border-x-transparent border-t-transparent text-[14px] font-bold font-sahel leading-[15px] tracking-[1px] text-text-base placeholder:text-[#8E9286] border-2 "  required/>
                        <input type="email" value={formData.email} onChange={(e) => setFormData({...formData , email:e.target.value})}    placeholder="email address" className="placeholder:uppercase focus:outline-0 flex items-start justify-center w-[316px] h-[49px] border-b-[#44483E] border-x-transparent border-t-transparent text-[14px] font-bold font-sahel leading-[15px] tracking-[1px] text-text-base placeholder:text-[#8E9286] border-2 "  required/>
                    </div>
                    <input type="text" placeholder="STREET ADDRESS (BASE OF OPERATIONS)" value={formData.street} onChange={(e) => setFormData({...formData , street:e.target.value})} className="placeholder:uppercase focus:outline-0 flex items-start justify-center w-full h-[49px] border-b-[#44483E] border-x-transparent border-t-transparent text-[14px] font-bold font-sahel leading-[15px] tracking-[1px] text-text-base placeholder:text-[#8E9286] border-2 required " />
                    <div className="w-full h-auto flex justify-between gap-8">
                        <input type="text" placeholder="city" value={formData.city} onChange={(e) => setFormData({...formData , city:e.target.value})} className="placeholder:uppercase flex items-start focus:outline-0 justify-center w-[316px] h-[49px] border-b-[#44483E] border-x-transparent border-t-transparent text-[14px] font-bold font-sahel leading-[15px] tracking-[1px] text-text-base placeholder:text-[#8E9286] border-2  required" />
                        <input type="text" placeholder="postal code" value={formData.postalCode} onChange={(e) => setFormData({...formData , postalCode:e.target.value})} className="placeholder:uppercase flex items-start focus:outline-0 justify-center w-[316px] h-[49px] border-b-[#44483E] border-x-transparent border-t-transparent text-[14px] font-bold font-sahel leading-[15px] tracking-[1px] text-text-base placeholder:text-[#8E9286] border-2  required" />
                    </div>
                </div>
            </div>
        </>
    )
}
