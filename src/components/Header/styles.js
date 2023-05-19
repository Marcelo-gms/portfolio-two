import styled from "styled-components";


export const Container = styled.header`

width: 100%;
min-height: 7rem;
display: flex;
justify-content: space-around;
align-content: center;
align-items: center;
position: sticky;
top: 0;
`

export const ContainerIconMenu = styled.div`
display: none;
svg{
    font-size: 1.5em;
}

@media screen and (max-width:768px) {
    display: block;
}



`
export const ContainerLink = styled.ul`

 display: flex;
    gap: 30px;

    li{
        a{
            font-size: 1.3em;
        }
    }

    @media screen and (max-width:768px){
        flex-direction: column;
        position: absolute;
        width: 100%;
        height: calc(100vh - 7rem);
        right: 0;
        left: 0;
        top: 0;
        bottom: 0;
        background-color: blue;
        align-items: center;
        justify-content: center;
        z-index: 2;
    }


`