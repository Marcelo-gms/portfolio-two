import * as C from "./styles";

import { useState } from "react";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Header() {
  const [openMenu, setOpeMenu] = useState(false);

  const handleMenu = () => {
    setOpeMenu(!openMenu);
  };

  const handleClickLink = (e) => {
    if (e.target.nodeName === "A" || e.target.nodeName === "LI") {
      console.log(e.target.nodeName);
      setOpeMenu(!openMenu);
    }
  };

  return (
    <C.Container>
      <C.ContainerCenter>
        <C.BoxLogo>
          <a href="#">
            <h3>Marcelo Gomes</h3>
          </a>
        </C.BoxLogo>

        <C.BoxIconMobile>
          <AiOutlineMenu onClick={handleMenu} />
        </C.BoxIconMobile>

        <C.BoxListMenu open={openMenu} onClick={handleClickLink}>
          <AiOutlineClose onClick={handleMenu} />

          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">Sobre</a>
          </li>
          <li>
            <a href="#projects">Projetos</a>
          </li>
          <li>
            <a href="#contact">Contato</a>
          </li>
        </C.BoxListMenu>
      </C.ContainerCenter>
    </C.Container>
  );
}

export default Header;
