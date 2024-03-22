import GlobalStyle from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import Button from './components/atoms/Button';
import Avatar from './components/atoms/Avatar';
import Badge from './components/atoms/Badge';


function App() {
  return (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Button>Texto de boton</Button>
        <Button variant="secondary">Texto de boton</Button>
        <Avatar  variant="md" src='https://gravatar.com/avatar/27f781a56e7a9abdf842bd5a5899e214?s=400&d=mp&r=x'/>
        <Avatar  src='https://gravatar.com/avatar/27f781a56e7a9abdf842bd5a5899e214?s=400&d=mp&r=x'/>
        <div>
          <Badge status="submitted">Submitted</Badge>
          <Badge status="in progress">In Progress</Badge>
          <Badge status="completed">Completed</Badge>
          <Badge status="on hold">On Hold</Badge>
        </div>
    </ThemeProvider>
  );
}

export default App;
