import * as C from "./styles"

import {AiOutlineMenu} from "react-icons/ai"

function Header() {
  return (
    <C.Container>
      <h1>mg</h1>
      <C.ContainerIconMenu>
      <AiOutlineMenu/>
      </C.ContainerIconMenu>
      <C.ContainerLink>
        <li><a href="#">Sobre</a></li>
        <li><a href="#">Sobre</a></li>
        <li><a href="#">Sobre</a></li>
        <li><a href="#">Sobre</a></li>
      </C.ContainerLink>
    </C.Container>
  )
}

export default Header