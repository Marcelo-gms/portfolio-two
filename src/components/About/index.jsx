import * as C from "./styles"

const About = () => {
  return (
    <C.MainContainer >
      <C.CenterContainer>
        <C.ImageContainer id="about">
          <img src="/img-home.jpg" alt="about image" />
        </C.ImageContainer>
        <C.TextContainer>
          <h4>Sobre mim</h4>
          <h1>Desenvolvedor front-end React.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum accusamus laborum nobis sapiente odio ipsa iste distinctio nostrum temporibus, in, amet laudantium totam est numquam! Consectetur labore itaque porro culpa!</p>
        </C.TextContainer>
      </C.CenterContainer>
    </C.MainContainer>
  )
}

export default About