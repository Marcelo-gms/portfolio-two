import * as C from "./styles";

import ProjectCard from "../ProjectCard";

const Projects = () => {
  const projects = [
    {
      id: 1,
      reverse: true,
      name: "Store",
      description:
        "Projeto react com a api fake store, se trata de um mini e-commerce, contendo todo o básico do front-end de uma  loja online. ",
      stack: ["React", "Api fake store", "React-router"],
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
        "Este projeto  mostra informações sobre filmes, consome a api do TMDB, podendo favoritar filmes, além de direcionar para o trailer do filme escolhido. ",
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
        "Projeto simples para controle de finanças,  salvando entradas e saídas e fazendo os cálculos necessários para o gerenciamento.",
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
