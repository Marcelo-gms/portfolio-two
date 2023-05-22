import styled from "styled-components";


export const Container =  styled.footer`
width: 100%;
min-height: 6rem;
background-color:#2d2e32;
color: #ffffff;
display: flex;
align-content: center;

 @media screen and (max-width:768px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    padding: 20px 0;
}

`

// export const ContainerContent =  styled.div`
// width: 80%;
// height: 100%;
// margin: 0 auto;
// display: flex;
// align-items: center;

// @media screen and (max-width:768px) {
//     flex-direction: column-reverse;
//     align-items: center;
//     justify-content: center;
// }


// `

export const ContainerTextFooter =  styled.div`
display:flex;
align-items: center;
justify-content: center;
flex: 1;
p{
    text-transform:capitalize;
    font-size:1.2em;
    color: #ccc;
    span{
        color: #fff;
    }
}

`
export const ContainerListLinks =  styled.ul`
display:flex;
gap: 30px;
align-items: center;
justify-content: center;
flex: 1;

li{
    a{
        svg{
            font-size: 1.5em;
        }
    }
}
`