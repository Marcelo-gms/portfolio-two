import * as C from "./styles";

import { MdEmail, MdLocationOn } from "react-icons/md";

const Contact = () => {
  return (
    <C.Container id="contact">
      <C.ContainerContent>
        <h1 id="contato">Contato</h1>

        <C.ContainerForm>
          <form>
            <label>
              <span>Nome:</span>
              <input type="text" name="name" placeholder="Digite seu nome" />
            </label>
            <label>
              <span>E-mail:</span>
              <input
                type="email"
                name="email"
                placeholder="Digite seu E-mail"
              />
            </label>

            <label>
              <span>Mensagem:</span>
              <textarea
                name="message"
                id="message"
                placeholder="Digite sua mensagem"
              ></textarea>
            </label>
            <button type="submit">Enviar</button>
          </form>
        </C.ContainerForm>

        <C.ContainerIcons>
          <ul>
            <li>
              <span>
                <MdLocationOn />
              </span>

              <span>Porto velho / RO</span>
            </li>
            <li>
              <span>
                <MdEmail />
              </span>
              <span>marcelodev082@gmail.com</span>
            </li>
          </ul>
        </C.ContainerIcons>
      </C.ContainerContent>
    </C.Container>
  );
};

export default Contact;
