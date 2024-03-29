import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.09);



  /* @media screen and (max-width: 768px) {
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
  } */
`;

export const ContainerCenter = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 5;

  @media screen and (max-width: 1200px) {
    padding: 0 30px;
  }
`;
export const BoxLogo = styled.div`
  h3 {
    font-size: 2em;
    transition: all 0.5s;
    cursor: pointer;

    &:hover {
      color: #a435f0;
    }

    @media screen and (max-width: 375px) {

      font-size: 1.5em;
      
  }
  }
`;
export const BoxIconMobile = styled.div`
  display: none;
  svg {
    font-size: 1.3em;
  }

  @media screen and (max-width: 768px) {
    display: block;
  }
`;
export const BoxListMenu = styled.ul`
  display: flex;
  gap: 30px;

  svg {
    display: none;
  }

  li {
    font-size: 1.3em;
  }

  @media screen and (max-width: 768px) {
    display: ${({ open }) => (open ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    margin: 0 auto;
    height: 100vh;
    z-index: 10;
    background-color: #fff;
    align-items: center;
    justify-content: center;
    padding: 50px 0;

    svg {
      display: block;
      font-size: 1.3em;
      position: absolute;
      right: 30px;
      top: 30px;
    }
  }
`;
