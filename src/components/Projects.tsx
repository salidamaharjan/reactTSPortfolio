import Button from "./Button.tsx";
import projectLists from "./ProjectLists.json";
import ProjectDetail from "./ProjectDetail.tsx";

export default function Projects() {
    return <>
        {
            projectLists.map((project) => {
                return <ProjectDetail title={project.title} key={project.id} description={project.description} className={`${project.bg} flex`}>
                    <Button onClick={() => window.open(project.projectLink, "_blank")} className="bg-white font-normal w-[100px]">View Project</Button>
                </ProjectDetail>

            })}
    </>
}