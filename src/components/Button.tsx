import {MouseEventHandler} from "react";

type ButtonProps = {
    className?: string,
    children: string,
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined
}
export default function Button({className, children, onClick}: ButtonProps){
    return <button onClick={onClick} className={`${className} border text-sm rounded-full px-2 py-1`}>
        {children}
    </button>
}