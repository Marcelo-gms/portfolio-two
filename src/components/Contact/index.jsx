import * as C from "./styles";

import { toast } from "react-toastify";

import { MdEmail, MdLocationOn } from "react-icons/md";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { useState } from "react";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const validateEmail = /\S+@\S+\.\S+/;

    if (!name || name.length < 3) {
      return toast.error("O nome precisa ter no minimo 3 caracteres.");
    }
    if (!email || email.length < 3 || !validateEmail.test(email)) {
      return toast.error("O E-mail é invalido ou é muito curto!");
    }
    if (!message || message.length < 5) {
      return toast.error("A mensagem precisa ter no minimo 5 caracteres.");
    }

    const contact = {
      name,
      email,
      message,
    };

    try {
      await fetch("https://menage.onrender.com/message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contact),
      });

      setName("");
      setEmail("");
      setMessage("");

      toast.success("Mensagem enviada com sucesso, obrigado!");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error("Error ao enviar mensagem, tente novamente.");
    }
  };

  return (
    <C.Container id="contact">
      <h1 id="contato">Contato</h1>
      <C.ContainerContent>
        <C.ContainerForm>
          <form onSubmit={handleSubmit}>
            <label>
              <span>Nome:</span>
              <input
                type="text"
                name="name"
                placeholder="Digite seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>
            <label>
              <span>E-mail:</span>
              <input
                type="email"
                name="email"
                placeholder="Digite seu E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>

            <label>
              <span>Mensagem:</span>
              <textarea
                name="message"
                id="message"
                placeholder="Digite sua mensagem"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </label>
            {!loading ? (
              <button type="submit">Enviar</button>
            ) : (
              <button disabled>Enviando...</button>
            )}
          </form>
        </C.ContainerForm>

        <C.ContainerIcons>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/marcelo-gomes-90099b235/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <BsLinkedin />
                </span>

                <span>Marcelo Gomes</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Marcelo-gms"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <BsGithub />
                </span>

                <span>Marcelo-gms</span>
              </a>
            </li>

            <li>
              <span>
                <MdEmail />
              </span>
              <span>marcelodev082@gmail.com</span>
            </li>
            <li>
              <span>
                <MdLocationOn />
              </span>

              <span>Porto velho / RO</span>
            </li>
          </ul>
        </C.ContainerIcons>
      </C.ContainerContent>
    </C.Container>
  );
};

export default Contact;
