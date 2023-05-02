import styled from "styled-components";


export const Container = styled.div`
width: 100%;
min-height: 50vh;

`
export const ContainerContent = styled.div`
width: 80%;
margin: 5rem auto;
display: flex;
flex-direction: column;
justify-content:center;

`
export const ContainerIcons = styled.div`

ul{
    display: flex;
    gap: 30px;
    margin-top: 20px;
    padding: 0;

    li {
       display: flex;
       /* flex-direction: column; */
       align-items: center;
       gap: 20px;
       cursor: pointer;
       transition:0.5s;
    
       span:first-child{
       border-radius: 50%;
       padding: 20px;
       box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
       svg{
           color: #a435f0;
           font-size: 2rem;
       }
    }

    &:hover{
        color: #a435f0;
    }
    }

    @media (max-width:768px){
        flex-direction:column;
    }


    @media (max-width:375px){
        li{
            flex-direction: column;
        }
    }

}


/* ul li span:nth-child(1){
    border-radius: 50%;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    svg{
        color: #a435f0;
        font-size: 2rem;
    }
} */


`