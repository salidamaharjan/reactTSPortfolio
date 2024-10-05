import {ReactNode} from "react";

type CardProps = {
    children: ReactNode,
    className?: string
}
export default function Card({children, className}: CardProps){
    return <section className={`${className} md:w-[800px] md:self-center shadow bg-white rounded-md mx-8 pl-6`}>
        {children}
    </section>
}