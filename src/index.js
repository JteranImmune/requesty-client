import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyles';
import theme from './styles/theme';
import App from './App';
import { RequestProvider } from './contexts/RequestContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RequestProvider>
        <GlobalStyle />
        <App />
      </RequestProvider>
    </ThemeProvider>
  </React.StrictMode>
);
