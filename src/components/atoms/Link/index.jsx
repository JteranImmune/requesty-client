import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';
import Text from '../Text';
import Icon from '../Icon';

const StyledLink = styled(RouterLink)`
  color: ${props => props.theme.colors.primary || '#007bff'};
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }

  ${props => props.isButton && `
    display: inline-flex;
    padding: ${props.theme.padding.small} ${props.theme.padding.normal};
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
    border-radius: ${props.theme.borderRadius.base};
    border: 1px solid ${props.theme.colors.primary};
    background-color: ${props.theme.colors.primary};
    color: ${props.theme.colors.baseWhite};
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera, and Firefox */

    &:hover {
      background-color: ${props.theme.colors.primaryHover};
      text-decoration: none;
      color: ${props.theme.colors.baseWhite};
    }
  `}
`;

const Link = ({to, children, isButton, iconName}) =>{
  return (
    <StyledLink to={to} isButton={isButton}>
      <Icon iconName={iconName}></Icon>
      <Text>{children}</Text>
    </StyledLink>
  )
}

export default Link;