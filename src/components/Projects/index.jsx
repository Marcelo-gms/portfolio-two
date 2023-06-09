import * as C from "./styles"

import ProjectCard from "../ProjectCard"


const Projects = () => {

  const projects = [
    {
      id:1,
      reverse:true,
      name:"controle de finanças",
      description:"sistema de controle de finanças, criado com react, os dados são armazenados no localstorage!",
      stack:["React", "styled components"],
      links:["https://github.com/Marcelo-gms/controle-de-financas", "https://mgfinance.netlify.app/"],
      pathImg:"project-finance.png"
    },
    {
      id:2,
      reverse:false,
      name:"mg filmes",
      description:"sistema de controle de finanças, criado com react, os dados são armazenados no localstorage!",
      stack:["React", "Axios"],
      links:["https://github.com/Marcelo-gms/mg-filmes", "https://mgfilmes.netlify.app/"],
      pathImg:"project-movie.png"
    },
  ]
  return (
    <C.Container id="projects">
      <h1>Projetos</h1>

     {projects.map(project => <ProjectCard key={project.id} project={project}/>)}
    </C.Container>
  )
}

export default Projects