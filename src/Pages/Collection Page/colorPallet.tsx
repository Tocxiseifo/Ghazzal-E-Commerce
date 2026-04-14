export default function ColorPallet({ color, onClick, isActive }: { color: string, onClick: () => void, isActive: boolean }) {
    return (
        <div 
            style={{ backgroundColor: color }}
            onClick={onClick}
            className={`w-[45px] h-[45px] flex items-start bg-${color} cursor-pointer transition-all duration-300 
                ${isActive ? `scale-125 border-4 border-${color} shadow-lg` : `hover:scale-110 opacity-80`}`}
            title={color}
        />
    );
}