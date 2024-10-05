import {ReactNode} from "react";

type SectionProps = {
    children: ReactNode,
}
export default function Section({children}: SectionProps){
    return <section className="flex justify-between md:w-[800px] md:self-center shadow bg-white gap-6 rounded-md mx-8 items-center pl-6">
        {children}
    </section>
}