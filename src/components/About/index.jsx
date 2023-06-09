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
          <p>Meu nome é Marcelo Gomes, sou formado em análise e desenvolvimento de sistemas, e tenho focado no desenvolvimento web como carreira. tenho uma boa base em <span>Html, Css e Javascript</span>, atualmente estou me aprofundando no <span>React</span>.</p>
          <p>estudo <span>node</span> e o banco de dados <span>MongoDB</span> nas horas vagas também.</p>
        </C.TextContainer>
      </C.CenterContainer>
    </C.MainContainer>
  )
}

export default About