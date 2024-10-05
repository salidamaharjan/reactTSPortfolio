type ButtonProps = {
    className?: string,
    children: string
}
export default function Button({className, children}: ButtonProps){
    return <button className={`${className} border text-sm rounded-full px-2 py-1`}>
        {children}
    </button>
}