import styled, { css } from "styled-components";

const Button = styled.button`
  display: inline-flex;
  padding: 1rem 1.75rem;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  border-radius: 0.5rem;
  border: 1px solid ${props => props.theme.colors.primary};
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.baseWhite};
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  -webkit-touch-callout: none; /* Remove iOS callouts */
  -webkit-user-select: none; /* Remove mobile browser selection */

  ${props => props.variant === 'secondary' && css`
      background-color: ${props => props.theme.colors.secondary};
      border-color: ${props => props.theme.colors.secondary};

      &:hover {
        background-color: ${props => props.theme.colors.secondaryHover};
      }
    `
  }

  &:hover {
    background-color:${props => props.theme.colors.primaryHover};
  }

  &:active {
    background-color:${props => props.theme.colors.primary};
  }
`

export default Button;