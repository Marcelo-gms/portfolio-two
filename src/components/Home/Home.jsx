import * as C from "./styles" 

import {BsLinkedin, BsGithub} from "react-icons/bs"
import {SiHtml5, SiCss3, SiJavascript, SiReact,SiSass, SiBootstrap, SiNodedotjs, SiMongodb} from "react-icons/si"


const Home = () => {
  return (
    <C.MainContainer>
        <C.ImageContainer>
            <div>
            <img src="/img-home.jpg" alt="author" />
            </div>
        </C.ImageContainer>
        <C.TextContainer>
            <h1>Desenvolvedor front-end.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum quidem maiores commodi quod qui placeat molestiae sint sequi velit assumenda!</p>

            <C.SocialContainer>
                <BsLinkedin />
                <BsGithub />
            </C.SocialContainer>
        
        </C.TextContainer>
        <C.StackContainer>
            <h3>Tecnologias</h3>
            <ul>
                <li><SiHtml5 color="orange"/></li>
                <li><SiCss3 color="blue"/></li>
                <li><SiSass color="#cf649a"/></li>
                <li><SiBootstrap color="#702cf5"/></li>
                <li><SiReact color="#41e0fd"/></li>
                <li><SiJavascript color="#efd81d"/></li>
                <li><SiNodedotjs color="#1e9e25"/></li>
                <li><SiMongodb color="#1e9e25"/></li>
                
            </ul>
        </C.StackContainer>
    </C.MainContainer>
  )
}

export default Home