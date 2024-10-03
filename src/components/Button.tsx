type ButtonProps = {
    className?: string,
    children: string
}
export default function Button({className, children}: ButtonProps){
    return <button className={`${className} border rounded-full p-2`}>
        {children}
    </button>
}