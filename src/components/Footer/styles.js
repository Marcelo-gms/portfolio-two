import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  min-height: 6rem;
  background-color: #2d2e32;
  color: #ffffff;

  display: flex;
  align-content: center;
  align-items: center;

  @media screen and (max-width: 1200px) {
    padding: 0 30px;
  }
`;

export const ContainerContent = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  //border: 1px solid red;

  p {
    text-transform: capitalize;
    font-size: 1.2em;
    color: #ccc;
    span {
      color: #fff;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 20px 0;
  }
`;

export const ContainerListLinks = styled.ul`
  width: fit-content;
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: center;


  li {
    a {
      svg {
        font-size: 1.5em;
      }
    }
  }
`;
