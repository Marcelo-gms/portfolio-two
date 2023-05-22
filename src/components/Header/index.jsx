import * as C from "./styles"

import { useState } from "react"

import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai"

function Header() {
  const [openMenu, setOpeMenu] = useState(false)

  const handleMenu = ()=>{
    setOpeMenu(!openMenu)
  }

  const handleClickLink = (e)=>{
    if(e.target.nodeName == "A" || e.target.nodeName == "LI"){
      setOpeMenu(!openMenu)
    }
  }

  return (
    <C.Container>
    <C.BoxLogo>
    <h3>Marcelo Gomes</h3>
    </C.BoxLogo>

    <C.BoxIconMobile>
      <AiOutlineMenu onClick={handleMenu} />
    </C.BoxIconMobile>

    
    <C.BoxListMenu open={openMenu} onClick={handleClickLink}>
      <AiOutlineClose onClick={handleMenu} />
      
      <li><a href="#">Home</a></li>
      <li><a href="#">Home</a></li>
      <li><a href="#">Home</a></li>
      <li><a href="#">Home</a></li>
    </C.BoxListMenu>
    </C.Container>
  )
}

export default Header