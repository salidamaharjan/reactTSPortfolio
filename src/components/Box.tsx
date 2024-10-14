import {ReactNode} from "react";

type BoxProps = {
    children: ReactNode,
    className?: string
}
export default function Box({children, className}: BoxProps) {
    return <div className={`${className} flex flex-col gap-2 rounded px-2 py-1 font-bold`}>{children}
    </div>
}