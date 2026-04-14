import {
    NativeSelect,
    NativeSelectOption,
} from "./native-select"
  
export function SelectBody() {
    return (
        <div className="w-[210px] h-[25px] border border-x-transparent border-t-transparent  flex font-bold items-center font-sahel text-sm leading-[20px] text-text-base tracking-[1.4px] ">
            <span className="font-bold font-sahel w-[152px] text-sm  leading-[20px] tracking-[1.4px] text-text-base">Sort By:</span>
            <NativeSelect className="bg-transparent w-[252px] uppercase focus:outline-0 border-transparent border">
                <NativeSelectOption  className="bg-transparent focus:outline-0 border-transparent border " value="">Select</NativeSelectOption>
                <NativeSelectOption className="uppercase" value="featured">FEATURED</NativeSelectOption>
                <NativeSelectOption className="uppercase" value="oldest">OLDEST</NativeSelectOption>
                <NativeSelectOption className="uppercase" value="newest">NEWEST</NativeSelectOption>
                <NativeSelectOption className="uppercase" value=" popular">POPULAR</NativeSelectOption>
            </NativeSelect>
        </div>
    )
}
  