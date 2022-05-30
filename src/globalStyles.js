import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
    }

    body{
        font-family: 'Lexend Deca', sans-serif;
        font-family: 'Playball', cursive;
        background-color: #E5E5E5;
    }
`;

export default GlobalStyle;