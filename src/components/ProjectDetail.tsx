import Box from "./Box.tsx";
import {ReactNode} from "react";
type ProjectDetailProps = {
    title: string,
    description: string,
    className?: string,
    children?: ReactNode,
    key: number,
    projectLink?: string
}
export default function ProjectDetail({title, key, description, className, children, projectLink}: ProjectDetailProps) {
    return <Box key={key} className={className}>
        <div className="font-bold">{title}</div>
        <p>{description}</p>
        {children}
    </Box>
}