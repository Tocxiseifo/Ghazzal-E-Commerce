

export default function ColorPallet({id , color}: {id:string | number , color:string}) {

    return(
        <>
            
            <div className={`w-[55px] h-[55px] bg-${color} focus:border-2 focus:border-${color}`} />
        </>
    )
} 