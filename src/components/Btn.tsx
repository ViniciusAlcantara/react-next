import { any } from "prop-types"

interface BtnProps {
    color?: 'green' | 'blue' | 'gray'
    children: any,
    className?: string,
    onClick?: () => void
}

export default function Btn(props: BtnProps) {
    const color = props.color ?? 'blue'
    return (
        <button className={`
            px-4 py-2 rounded-md bg-gradient-to-tr from-${color}-400 to-${color}-600 
            text-white ${props.className}
        `}
        onClick={() => props.onClick?.()}
        >
            { props.children }
        </button>
    )
}