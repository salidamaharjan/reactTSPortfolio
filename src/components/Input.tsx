type InputProps = {
    className?: string,
    placeholder?: string,
    id?: string,
}
export default function Input({className, placeholder, id}: InputProps){
    return<input placeholder={placeholder} id={id} className={`${className} border rounded`}/>
}