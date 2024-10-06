type labelProps = {
    children: string,
    htmlFor: string
}
export default function Label({children,htmlFor}: labelProps){
return <label htmlFor={`${htmlFor}`}>
    {children}
</label>
}