type TextArea = {
    className? : string,
    id? : string,
    placeholder? : string
}
export default function TextArea({className, id, placeholder}: TextArea){
    return <textarea placeholder={placeholder} className={`${className} border rounded-md`} id={id}/>
}