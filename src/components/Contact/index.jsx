import * as C from "./styles";

import { MdEmail, MdLocationOn } from "react-icons/md";

const Contact = () => {
  return (
    <C.Container id="contact">
      <C.ContainerContent>
        <h1 id="contato">Contato</h1>

        <C.ContainerIcons>
          <ul>
            <li>
              <span>
                <MdLocationOn />
              </span>

              <span>Porto velho / RO</span>
            </li>
            <li>
              <span><MdEmail /></span>
              <span>marcelodev082@gmail.com</span>
            </li>
          </ul>
        </C.ContainerIcons>
      </C.ContainerContent>
    </C.Container>
  );
};

export default Contact;
