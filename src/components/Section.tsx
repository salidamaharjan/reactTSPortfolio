import {ReactNode} from "react";

type SectionProps = {
    children: ReactNode,
    className?: string
}
export default function Section({children, className}: SectionProps){
    return <section className={`${className} md:w-[800px] md:self-center shadow bg-white rounded-md mx-8 pl-6`}>
        {children}
    </section>
}