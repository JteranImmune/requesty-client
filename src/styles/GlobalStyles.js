import { createGlobalStyle } from 'styled-components';
import 'normalize.css';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100..900;1,100..900&display=swap');

    html {
        font-size: 16px;
    }

    body {
        font-family: ${(props) => props.theme.font.family} , sans-serif;
        font-optical-sizing: auto;
        font-weight: 400;
        line-height: 1.6;
        color: ${(props) => props.theme.colors.textColor};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    a {
        color: ${(props) => props.theme.colors.primary};
        text-decoration: none;
        transition: all .3s ease;

        &:hover {
            text-decoration: underline;
            color: ${(props) => props.theme.colors.primary};
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
        font-size:  ${(props) => props.theme.font.display.xxl};
        line-height: 1.1;
        letter-spacing: -0.06rem;
    }

    h2 {
        font-size:  ${(props) => props.theme.font.display.xl};
        line-height: 1.1;
        letter-spacing: -0.06rem;
    }

    h3 {
        font-size:  ${(props) => props.theme.font.display.lg};
        line-height: 1.1;
        letter-spacing: -0.06rem;
    }

    h4 {
        font-size:  ${(props) => props.theme.font.display.md};
        line-height: 1.1;
        letter-spacing: -0.06rem;
    }

    h5 {
        font-size:  ${(props) => props.theme.font.display.sm};
        line-height: 1.1;
        letter-spacing: -0.06rem;
    }

    h6 {
        font-size:  ${(props) => props.theme.font.display.xs};
        line-height: 1.1;
        letter-spacing: -0.06rem;
    }

  // More custom global styles
`;

export default GlobalStyle;