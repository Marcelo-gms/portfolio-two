import * as C from "./styles";

import { BsBoxArrowUpRight, BsGithub } from "react-icons/bs";

const ProjectCard = ({project}) => {
  console.log(project)

  return (
  <>
   {project && (
    <C.Container reverse={project.reverse}>
    <C.Image>
      <img src={`/${project.pathImg}`} alt="project img" />
    </C.Image>
    <C.ContainerDescription>
      <C.ContainerText>
        <h1>{project.name}</h1>
        <p>
          {project.description}
        </p>
      </C.ContainerText>

      <C.ContainerStack>
        {project.stack && project.stack.map(name =>  <button>{name}</button>)}
      </C.ContainerStack>

      <C.ContainerLinks>

       {project.links && (
        <>
         <a href={project.links[0]} target="_blank">
         <BsGithub />
       </a>
       <a href={project.links[1]} target="_blank">
         <BsBoxArrowUpRight title="abrir" />
       </a>
        </>
       )}
       
      </C.ContainerLinks>
    </C.ContainerDescription>
  </C.Container>
   )}
  
  </>
  );
};

export default ProjectCard;
