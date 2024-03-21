import GlobalStyle from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';


function App() {
  return (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;