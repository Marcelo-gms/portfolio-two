import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  /* background-color: #000; */
  background-color: #f7f7f7;
  padding: 50px 0 0;
  display: flex;
  flex-direction: column;
  gap: 40px;
  position: relative;

  @media (max-width: 900px) {
  }
`;

export const CenterContainer = styled.div`
  max-width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: row-reverse;
  gap: 20px;

  @media (max-width: 900px) {
    width: 100%;
    flex-direction:column;
   
  }
`;

export const ImageContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  flex: 1;

  div {
    width: 100%;
    margin: 0 auto;
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 5px;
  }

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const TextContainer = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 4.5rem;
      line-height: 5rem;
    text-transform: capitalize;
  }

  p {
    font-size: 1.8rem;
    line-height: 2rem;
  }

  @media (max-width: 900px) {
    text-align: center;
    
    h1 {
      
      font-size: 5rem;
        line-height: 5rem;
    }

    p {
      font-size: 1.8rem;
    }
  }
  @media (max-width: 768px){

    h1 {
      font-size: 4.3rem;
      line-height: 4rem;
    }

    p {
      font-size: 1.3rem;
    }

  }
  @media (max-width: 517px) {
    text-align: center;

    h1 {
      font-size: 3.5rem;
      line-height: 3.5rem;
    }

    p {
      font-size: 1.3rem;
    }
  }
  @media (max-width: 420px) {
    h1 {
      font-size: 2.5rem;

    }
  }
`;

export const SocialContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;

  svg {
    font-size: 2rem;
    transition: all 0.5s;

    &:hover {
      color: #a435f0;
    }
  }

  @media (max-width: 900px) {
    justify-content: center;
  }
  @media (max-width: 500px) {
    justify-content: center;

    svg {
      font-size: 1.5rem;
    }
  }
`;


export const StackContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  align-items: center;

  h3 {
    text-align: center;
    text-transform: capitalize;
    display: flex;
    gap: 10px;

    &::after {
      content: "|";
    }
  }

  ul {
    display: flex;
    justify-content: center;
    gap: 10px;

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
        font-size: 2rem;
        color: ${(props) => (props.color ? props.color : "#000")};
      }
    }
  }

  @media (max-width: 900px) {
    width: calc(100% - 2px);
    flex-direction: column;
    flex-wrap: wrap;
    margin: 0 auto;
   gap: 10px;

    h3 {
      border-bottom: 1px solid rgba(0, 0, 0, 0.5);

      &::after {
        content: "";
      }
    }

    ul {
     
     
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      margin: 0 auto;
      padding: 0;

      li {
       
        svg {
        }
      }
    }
  }

  /* @media (max-width: 500px) {
    margin: 0 auto;
    ul {
      flex-wrap: wrap;

      li {
        height: 3.5rem;
        width: 3.5rem;

        svg {
          font-size: 1.5rem;
        }
      }
    }
  } */
`;
