import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 50vh;

  @media screen and (max-width: 1200px) {
    padding: 0 30px;
  }
`;
export const ContainerContent = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  //flex-direction: column;
  //justify-content: center;

  h1 {
    width: 100%;
    margin-bottom: 20px;
    font-size: 1.7em;
    text-transform: uppercase;
  }
`;

export const ContainerForm = styled.div`
  //flex: 1;
  width: 100%;
  max-width: 350px;

  form {
    width: 100%;
    max-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;

    label {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 5px;
    }

    input,
    textarea {
      width: 80%;
      max-width: 300px;
      padding-left: 5px;
      outline: none;

      span {
        font-size: 1.2em;
      }
    }

    input:focus,
    textarea:focus {
      border: 1px solid purple;
    }

    input {
      min-height: 3em;
    }

    textarea {
      resize: none;
      min-height: 6em;
      padding-top: 5px;
    }

    button {
      width: 12em;
      max-width: 300px;
      height: 3em;
      border: 1px solid #444;
      font-weight: bold;
      background-color: transparent;
      transition: 0.7s;

      &:hover {
        background-color: rgba(0, 0, 0, 0.7);
        color: #f7f7f7;
      }
    }
  }
`;

export const ContainerIcons = styled.div`
  //flex: 1;
  width: 100%;
  max-width: 350px;
  display: flex;
  justify-content: flex-start;

  ul {
    display: flex;
    width: 100%;
    max-width: 300px;
    flex-direction: column;
    gap: 30px;
    margin-top: 20px;
    padding: 0;

    li {
      display: flex;
      /* flex-direction: column; */
      align-items: center;
      gap: 20px;
      cursor: pointer;
      transition: 0.5s;

      span:first-child {
        border-radius: 50%;
        padding: 20px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        svg {
          color: #a435f0;
          font-size: 2rem;
        }
      }

      &:hover {
        color: #a435f0;
      }
    }

    @media (max-width: 768px) {
      flex-direction: column;
    }

    @media (max-width: 375px) {
      li {
        flex-direction: column;
      }
    }
  }

  /* ul li span:nth-child(1){
    border-radius: 50%;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    svg{
        color: #a435f0;
        font-size: 2rem;
    }
} */
`;
