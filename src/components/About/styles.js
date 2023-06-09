import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  background-color: #fff;

`;
export const CenterContainer = styled.div`
width: 80%;
margin: 4rem auto;
display: flex;
gap: 4rem;


@media (max-width:1024px){
  flex-direction: column;
  gap: 10px;
}



`;



export const ImageContainer = styled.div`
flex: 1;
align-items: center;
width: 100%;
max-width: 80%;

img{
  width: 100%;
  height: auto;
  border-radius: 10px;
}

@media (max-width:1024px){
  width: 65%;
  margin: 0 auto;
}

@media (max-width:425px){
  width: 95%;
}
`;



export const TextContainer = styled.div`
flex: 1;

h4{
  color: #a435f0;
font-weight:bold;
font-size: 1.7rem;

}

h1{
font-weight:bold;
font-size: 3rem;
line-height: 3rem;
margin-bottom: 20px;
}

p{
  color: #767676;
  font-size: 1.3em;
  line-height: 1.2em;

  span{
    font-weight: 500;
  }
}


@media (max-width:1024px){
  width: 70%;
  text-align: center;
  margin: 0 auto;
  
}

@media (max-width:768px){
  h1{
    font-size: 2rem;
    line-height: 2rem;
  }
}


/* @media (max-width:500px){
  width: 100%;
 h1{
  font-size: 1.9rem;
  line-height: 1.8rem;
 }
}  */

`;


