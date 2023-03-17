import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
/*
styled - reset
npm i styled-reset
*/

const GlobalStyles = createGlobalStyle`
    ${reset}
    * {
        box-sizing: border-box;
    }

    html {
        font-size:62.5%;
        letter-spacing: -0.05rem;
    }

    body {
        background-color: #e7e7e7;
    }

    ul, li {
        list-style: none;
    }

    button {
        border: none;
    }

    h1 {
        font-size:${({ theme }) => theme.FONT_SIZE.big};
        font-weight:${({ theme }) => theme.FONT_WEIGHT.bold};
    }

    h2 {
        font-size:${({ theme }) => theme.FONT_SIZE.large};
        font-weight:${({ theme }) => theme.FONT_WEIGHT.bold};
    }

    h3 {
        font-size:${({ theme }) => theme.FONT_SIZE.medium};
        font-weight:${({ theme }) => theme.FONT_WEIGHT.bold};
    }

    p {
        font-size:${({ theme }) => theme.FONT_SIZE.small};
        font-weight:${({ theme }) => theme.FONT_WEIGHT.regular};
    }


`;
export default GlobalStyles;
