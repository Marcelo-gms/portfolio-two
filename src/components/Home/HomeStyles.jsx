import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  background-color: #f7f7f7;
  padding: 50px 0 20px 0;
  display: flex;
  flex-direction: column;
  gap: 40px;
  position: relative;

  @media (max-width: 900px) {
  }
`;

export const CenterContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  @media screen and (max-width: 1200px) {
    width: 100%;
    padding: 0 30px;
    //flex-direction: column;
  }
`;

export const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 4rem;
    text-transform: capitalize;
  }

  p {
    font-size: 1.8rem;
  }

  @media (max-width: 500px) {
      h1{
        font-size: 3em;
      }

      p{
        font-size: 1.7em;
      }
  }

  @media (max-width: 375px) {
      h1{
        font-size: 2.4em;
      }

      p{
        font-size: 1.3em;
      }
  }


`;

export const SocialContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 10px;
  gap: 10px;

  svg {
    font-size: 2em;
    transition: all 0.5s;

    &:hover {
      color: #a435f0;
    }
  }

  @media (max-width: 500px) {
    // justify-content: center;

    svg {
      
    }
  }
`;

export const StackContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 3em auto 0;
  display: flex;
  align-items: center;

  h3 {
    text-align: center;
    text-transform: capitalize;
    display: flex;
    gap: 10px;
    margin-right: 10px;

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
  @media screen and (max-width: 1200px) {
    padding: 0 30px;
  }

  @media screen and (max-width: 992px) {
    flex-wrap: wrap;
    gap: 1em;

    h3 {
      width: 100%;

      &::after {
        content: "";
      }
    }
  }

  @media screen and (max-width: 768px) {
    margin: 2em auto 0;
    ul {
      flex-wrap: wrap;
      justify-content: flex-start;

      li {
        // flex: 1;
      }
    }
  }
  @media screen and (max-width: 375px) {
    ul {
      li {
        width: 3.5em;
        height: 3.5em;

        svg {
          font-size: 1.5em;
        }
      }
    }
  }
`;
