import * as C from "./styles"

import { BsLinkedin, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <C.Container>
      <C.ContainerContent>
      <div>
      <p>Criado por: <span>Marcelo Gomes</span></p>
      </div>

      <ul>
        <li>
          <a href="https://www.linkedin.com/in/marcelo-gomes-90099b235/" target="_blank" rel="noopener noreferrer"> <BsLinkedin /></a>
        </li>
        <li>
          <a href="https://github.com/Marcelo-gms" target="_blank" rel="noopener noreferrer"> <BsGithub /></a>
        </li>
      </ul>
      </C.ContainerContent>
    </C.Container>
  )
}

export default Footer