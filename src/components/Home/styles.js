import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const ImageContainer = styled.div`
  width: 100%;

  div {
    width: 90%;
    margin: 0 auto;
  }

  img {
    width: 100%;
    border-radius: 5px;
  }
`;
export const TextContainer = styled.div`
  width: 90%;
  margin: 0 auto;

  h1 {
    width: 100%;
    font-size: 3rem;
    line-height: 3rem;
    text-transform: capitalize;
  }

  p {
    font-size: 1.8rem;
    line-height: 2rem;
  }
`;
export const SocialContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;

  svg {
    font-size: 1.5rem;
  }
`;
export const StackContainer = styled.div`
  width: 100%;
  padding: auto;
  margin-top: 10px;
  justify-content: center;

  h3 {
    text-align: center;
  }

  ul {
    display: flex;
    justify-content:center;
    gap: 10px;
    flex-wrap: wrap;
    

    li {
    
      align-items: center;
      background-color: #fff;
      border-radius: 50%;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.09);
      cursor: pointer;
      display: flex;
      height: 4rem;
      justify-content: center;
      width: 4rem;
      svg {
        font-size: 1.5rem;
        color: ${props => props.color ? props.color : "#000"};
      }
    }
  }
`;
