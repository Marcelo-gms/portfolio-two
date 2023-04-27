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
    font-size:0.96rem;
    background-color: #fff;
}

a{
    text-decoration:none;
    color: inherit;
}

ul{
    list-style: none;
}



`;
