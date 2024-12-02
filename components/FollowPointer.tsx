import {motion, AnimatePresence, useMotionValue} from "framer-motion"
import stringToColor from "@/lib/stringToColor"

function FollowPointer({
    x, y, info
}:{
    x: number,
    y: number,
    info: {
        name: string,
        email: string,
        avatar: string;
    };
}) {
    const color = stringToColor(info.email||'1')
  return (
    <motion.div className="h-4 w-4 rounded-full absolute z-50"
    style={{
        left: x,
        top: y,
        pointerEvents: "none",
    }}
    initial={{ 
        scale: 1,
        opacity: 0 
    }}
    animate={{ 
        opacity: 1, 
        scale: 1 
    }}
    exit={{ 
        opacity: 0, 
        scale: 0 
    }}
    >


        <svg width="1em" height="1em" viewBox="0 0 24 24" fill={color} stroke={color} strokeWidth="1" xmlns="http://www.w3.org/2000/svg"
        className={`h-6 w-6 text-[${color}] transform -rotate-[70deg] -translate-x-[12px] -translate-y-[10px]`}>
        <g clip-path="url(#clip0_429_11096)">
        <path d="M11 20.9999L4 3.99994L21 10.9999L14.7353 13.6848C14.2633 13.8871 13.8872 14.2632 13.6849 14.7353L11 20.9999Z" stroke="#292929" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
        <clipPath id="clip0_429_11096">
        <rect width="24" height="24" fill="white"/>
        </clipPath>
        </defs>
        </svg>

        <motion.div
            style={{
                backgroundColor: color
            }}
            initial={{ 
                scale: 0.5,
                opacity: 0 
            }}
            animate={{ 
                opacity: 1, 
                scale: 1 
            }}
            exit={{ 
                opacity: 0.5, 
                scale: 0 
            }}
        >
            {info.name || info.email}
        </motion.div>

    </motion.div>
  )
}

export default FollowPointer