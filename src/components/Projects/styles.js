import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #f7f7f7;

  .centerContent {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    padding-top: 20px;

    h1 {
      width: 100%;
      margin: 0 auto;
      font-size: 1.7rem;
      color: #a435f0;
      text-transform: uppercase;
    }

    @media screen and (max-width: 1200px) {
      padding: 20px 30px 0;
    }
  }
`;
