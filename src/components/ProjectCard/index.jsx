import * as C from "./styles";

import { BsLinkedin, BsGithub } from "react-icons/bs";

const ProjectCard = ({ reverse }) => {
  return (
    <C.Container reverse={reverse}>
      <C.Image>
        <img src="/img-home.jpg" alt="project img" />
      </C.Image>
      <C.ContainerDescription>
        <C.ContainerText>
          <h1>project name</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
            corporis perspiciatis modi magnam, voluptatibus distinctio in
            nesciunt aliquid delectus eos.
          </p>
        </C.ContainerText>

        <C.ContainerStack>
          <button>React</button>
          <button>Styled Components</button>
        </C.ContainerStack>

        <C.ContainerLinks>
          <a href="#">
            <BsGithub />
          </a>
          <a href="#">
            <BsGithub />
          </a>
        </C.ContainerLinks>
      </C.ContainerDescription>
    </C.Container>
  );
};

export default ProjectCard;
