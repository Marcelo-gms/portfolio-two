import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`

:root{
    --primary-color:#f9f9f9;
}

*{
    margin:0;
    padding:0;
    box-sizing:border-box; 
}

body{
    background-color: var(--primary-color);
    /* font-family: 'Montserrat', sans-serif; */
    font-family: 'Roboto', sans-serif;
    background-color: #fff;
    
}

body::-webkit-scrollbar {
    width: 10px;
}

body::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 10px;
    border: 2px solid #ccc;
}

body::-webkit-scrollbar-track {
    background: #fff;
}

a{
    text-decoration:none;
    color: inherit;
}

ul{
    list-style: none;
}



`;
