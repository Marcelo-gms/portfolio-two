import * as C from "./styles"

import ProjectCard from "../ProjectCard"

const Projects = () => {
  return (
    <C.Container>
      <h1>Projectos</h1>

      <ProjectCard reverse />
      <ProjectCard />
      <ProjectCard reverse />
    </C.Container>
  )
}

export default Projects