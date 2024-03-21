import { createGlobalStyle } from 'styled-components';
import 'normalize.css';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100..900;1,100..900&display=swap');

    html {
        font-size: 16px;
    }

    body {
        font-family: ${(props) => props.theme.fontFamily} , sans-serif;
        font-optical-sizing: auto;
        font-weight: 400;
        line-height: 1.6;
        color: ${(props) => props.theme.colors.textColor} ;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    a {
        color: #007bff;
        text-decoration: none;

        &:hover {
        text-decoration: underline;
        }
    }

    input,
    button,
    textarea,
    select {
        font-family: inherit;
        font-size: 100%;
    }

    button {
        cursor: pointer;    
    }

    h1, h2, h3, h4, h5, h6 {
        font-weight: 700;
        margin-top: 1.2em;
        margin-bottom: 0.6em;
    }

    h1 {
        font-size: 2.25rem;
        line-height: 1.1;
    }

    h2 {
        font-size: 1.75rem;
    }


  // More custom global styles
`;

export default GlobalStyle;