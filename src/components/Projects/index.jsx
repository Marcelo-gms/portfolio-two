import * as C from "./styles";

import ProjectCard from "../ProjectCard";

const Projects = () => {
  const projects = [
    {
      id: 1,
      reverse: true,
      name: "Store",
      description:
        "sistema de controle de finanças, criado com react, os dados são armazenados no localstorage!",
      stack: ["React", "Api fake store","React-router"],
      links: [
        "https://github.com/Marcelo-gms/mg-store",
        "https://mg-store.netlify.app/",
      ],
      pathImg: "project-store.jpeg",
    },

    {
      id: 2,
      reverse: false,
      name: "mg filmes",
      description:
        "sistema de controle de finanças, criado com react, os dados são armazenados no localstorage!",
      stack: ["React", "Axios"],
      links: [
        "https://github.com/Marcelo-gms/mg-filmes",
        "https://mgfilmes.netlify.app/",
      ],
      pathImg: "project-movie.png",
    },
    {
      id: 3,
      reverse: true,
      name: "controle de finanças",
      description:
        "sistema de controle de finanças, criado com react, os dados são armazenados no localstorage!",
      stack: ["React", "styled components"],
      links: [
        "https://github.com/Marcelo-gms/controle-de-financas",
        "https://mgfinance.netlify.app/",
      ],
      pathImg: "project-finance.png",
    },
  ];
  return (
    <C.Container id="projects">
      <div className="centerContent">
        <h1>Projetos</h1>

        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </C.Container>
  );
};

export default Projects;
