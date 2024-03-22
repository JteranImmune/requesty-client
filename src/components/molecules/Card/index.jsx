import styled from 'styled-components';
import Text from '../../atoms/Text'; 
// import StyledLink from './StyledLink'; 

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex: 1 0 0;
    border-radius: 0.5rem;
    border: 1px solid ${props => props.theme.colors.border};
    background: ${props => props.theme.colors.baseWhite};
    box-shadow: 0px 1px 3px 0px rgba(16, 24, 40, 0.10), 0px 1px 2px 0px rgba(16, 24, 40, 0.06);
`;

const CardContent = styled(CardContainer)`
    padding: 1.5rem;
    gap: 0.5rem;
    align-self: stretch;
    box-shadow: none;
    border-radius: 0;
    border: none;
`

const CardAction = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: stretch;
    border-top: 1px solid ${props => props.theme.colors.border};
    box-shadow: none;
    padding-inline: ${props => props.theme.padding.large};
    padding-block: ${props => props.theme.padding.normal};
`

const CardActionContent = styled(CardAction)`
    display: grid;
    justify-content: flex-end;
    align-items: center;
    gap: 1rem;
    box-shadow: none;
    border: none;
    padding-inline: 0;
    padding-block: 0;
`

const StatsCard = ({ title, number, linkText, linkTo }) => (

    <CardContainer>
        <CardContent>
            <Text size="md" weight="mormal">{title}</Text>
            <Text size="md" variant="display" weight="bold">{number}</Text>
        </CardContent>
        <CardAction>
            <CardActionContent>
            </CardActionContent>
        </CardAction>
    </CardContainer>
  );
  
  export default StatsCard;


