import React from "react";
import styled, { css } from "styled-components";
import Text from "../../atoms/Text"
import Icon from "../../atoms/Icon"



const ButtonStyled = styled.button`
  display: inline-flex;
  padding: ${props => props.theme.padding.small} ${props => props.theme.padding.normal};
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  border-radius: ${props => props.theme.borderRadius.base};
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


  ${props => props.variant === 'alternate' && css`
      background-color: white;
      color:  ${props => props.theme.colors.textColor};
      border: 1.5px solid ${props => props.theme.colors.border};
      font-weight: 400;
      padding: ${props => props.theme.padding.small} ${props => props.theme.padding.medium};

      &:hover {
        background-color: ${props => props.theme.colors.baseWhite} !important;
    }`
  }

  &:hover {
    background-color:${props => props.theme.colors.primaryHover};
  }

  &:active {
    background-color:${props => props.theme.colors.primary};
  }

  &:focus {
    border: ${props => props.type === 'search' ? "0" : "1px"} solid ${props => props.theme.colors.primaryDark};
    box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #F4EBFF;
  }

  &:focus-visible {
    border: ${props => props.type === 'search' ? "0" : "1px"} solid ${props => props.theme.colors.primaryDark};
    outline: ${props => props.type === 'search' ? "0" : "1px"} solid ${props => props.theme.colors.primaryDark};
  }

  &:disabled {
    background-color: #e9ecef;
    color: #495057;
    cursor: not-allowed;
  }
`

const Button = ({children, iconName, variant, onClick}) =>{
  return(
    <ButtonStyled variant={variant} onClick={onClick}>
      <Icon iconName={iconName}/>
      <Text weight="normal">{children}</Text>
    </ButtonStyled>
  )
}

export default Button;