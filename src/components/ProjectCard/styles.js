import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  margin: 20px auto;
  display: flex;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 1.5rem;
  background-color: #fff;

  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};

  @media (max-width: 1024px) {
    flex-direction: column;
  }
  @media (max-width: 500px) {
    width: 80%;
  }
`;
export const Image = styled.div`
  flex: 1;
  padding: 20px;

  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  /* @media (max-width:1024px){
    display: flex;
    justify-content: center;
    img{
      width: 50%;
    }
  } */
`;
export const ContainerDescription = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  flex: 1;
  padding: 10px;
`;
export const ContainerText = styled.div`
  width: 80%;
  margin: 0 auto;
  text-align: center;

  h1 {
    margin-bottom: 15px;
  }

  p {
    line-height: 1.8rem;
  }

  @media (max-width: 1024px) {
    /* width: 50%; */
  }
`;
export const ContainerStack = styled.div`
  width: 100%;
  display: flex;
  gap: 15px;
  justify-content: center;

  button {
    border: none;
    outline: none;
    background-color: #ffff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 10px 15px;
    text-transform: capitalize;
  }

  @media (max-width: 375px) {
    button {
      padding: 5px 10px;
    }
  }
`;
export const ContainerLinks = styled.div`
  width: 100%;
  width: 100%;
  display: flex;
  gap: 15px;
  justify-content: center;

  svg {
    font-size: 2rem;
  }
`;
