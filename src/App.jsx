import GlobalStyle from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import Button from './components/atoms/Button';
import Avatar from './components/atoms/Avatar';
import Badge from './components/atoms/Badge';
import Divider from './components/atoms/Divider';
import Icon from './components/atoms/Icon'
import Input from './components/atoms/Input';
import Text from "./components/atoms/Text";
import Labels from "./components/atoms/Labels";
import StatsCard from './components/molecules/Card';
// import StyledLink from './components/atoms/Link'


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
        <Divider/>
        <div>
          <Icon iconName="FaBeer" /> 
          <Icon iconName="FaCoffee" />
        </div>
        <form>
          <Labels for="name"> <Text size="lg" variant="text">This is medium text.</Text></Labels>
          <Input type="text" name='name' placeholder="Your Name" />
          <Input type="email" placeholder="Your Email" />
          <Input type="password" placeholder="Password" />
          <Input type="text" placeholder="Password" />
          <Input type="textarea" placeholder="Password" />
          <Input type="number" disabled placeholder="Age" width="50%" />
        </form>
        <Divider/>
        <Text size="lg" variant="display" color="primary" weight="bold">This is large display text with bold weight.</Text>
        <Divider/>
        <StatsCard 
          title="Total Views" 
          number="1,234" 
          linkText="View details" 
          linkTo="/views" 
        />
    </ThemeProvider>
  );
}

export default App;
