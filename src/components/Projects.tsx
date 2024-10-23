import Button from "./Button.tsx";
import projectLists from "./ProjectLists.json";
import Box from "./Box.tsx";

export default function Projects() {
    return <>
        {
            projectLists.map((project) => {
                return<Box className={project.bg}>
                        <div className="font-bold">
                            {project.title}
                        </div>
                        <p className="font-normal text-sm">
                            {project.description}
                        </p>
                        <Button className="bg-white font-normal w-[100px]">View Project</Button>
                    </Box>
            })}
    </>
}