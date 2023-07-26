import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 50vh;

  h1 {
    width: 100%;
    max-width: 1200px;
    margin: 20px auto 0;
    font-size: 1.7em;
    text-transform: uppercase;
  }

  @media screen and (max-width: 1200px) {
    padding: 0 30px;
  }
`;
export const ContainerContent = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 20px;
  padding: 20px 0;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 650px) {
    flex-direction: column;
  }
`;

export const ContainerForm = styled.div`
  width: 100%;
  max-width: 350px;

  @media screen and (max-width: 650px) {
    margin: 0 auto;
  }

  form {
    width: 100%;
    min-width: 300px;
    max-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    label {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 5px;
    }

    input,
    textarea {
      width: 100%;
      max-width: 300px;
      padding-left: 5px;
      outline: none;

      background-color: #f7f7f7;

      span {
        font-size: 1.2em;
      }
    }

    /* input:focus,
    textarea:focus {
      border: 1px solid purple;
    } */

    input {
      min-height: 3em;
      border: 2px solid transparent;
      border-bottom-color: #ccc;
    }

    textarea {
      resize: none;
      min-height: 6em;
      padding-top: 5px;
      border: 2px solid #ccc;
    }

    button {
      width: 100%;
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
  width: 100%;
  min-width: 200px;
  max-width: 350px;
  display: flex;
  justify-content: flex-start;
  //border: 1px solid red;

  @media screen and (max-width: 650px) {
    margin: 0 auto;
  }

  ul {
    display: flex;
    width: 100%;
    min-width: 300px;
    // max-width: 300px;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;

    @media screen and (max-width: 650px) {
      align-items: flex-start;
    }

    li {
      display: flex;
      align-items: center;
      gap: 10px;
      color: rgb(53, 53, 58);
      transition: 0.3s;

      &:hover {
        color: #a435f0;
      }
      a {
        display: flex;
        align-items: center;
        gap: 10px;
        color: inherit;
      }

      span {
        border-bottom: 1px solid #ccc;
        width: 210px;
        padding-bottom: 5px;
      }

      span:first-child {
        width: 3em;
        height: 3em;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        color: rgb(53, 53, 58);
        border: none;
        padding: 0;

        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        svg {
          font-size: 1.4em;
          color: inherit;
        }
      }
    }

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 10px;
      padding-top: 10px;
    }
  }
`;
