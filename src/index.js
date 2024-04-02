import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyles';
import theme from './styles/theme';
import App from './App';
import { RequestProvider } from './contexts/RequestContext';
import { ChakraProvider } from '@chakra-ui/react';
import { AuthProvider } from './contexts/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
        <ThemeProvider theme={theme}>
          <RequestProvider>
            <GlobalStyle />
                <App />
          </RequestProvider>
        </ThemeProvider>
    </ChakraProvider>
  </React.StrictMode>
);
