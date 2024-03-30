import styled from "styled-components";
import React from "react";

const InputStyled = styled.input`
  width: ${props => props.width || 'auto'};
  height: ${props => props.type === 'checkbox' ? 'auto' : '1rem'};
  padding: ${props => props.type === 'checkbox' ? '0' : '0.8rem 0.5rem'};
  font-size: ${props => props.theme.font.text.md};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  align-self: stretch;
  border-radius:${({theme})=> theme.borderRadius.base};
  border-color:${props => props.type === 'checkbox' ? '#EAECF0' : '#EAECF0' } ;
  border: ${props => props.type === 'search' ? '0' : '1px'} solid #EAECF0;

  &:focus {
    border: ${props => props.type === 'search' ? "0" : "1px"} solid ${props => props.theme.colors.primaryDark};
    background: #FFF;
    box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #F4EBFF;
  }

  &:focus-visible {
    border: ${props => props.type === 'search' ? "0" : "1px"} solid ${props => props.theme.colors.primaryDark};
    outline: ${props => props.type === 'search' ? "0" : "1px"} solid ${props => props.theme.colors.primaryDark};
    background: #FFF;
  }

  &:active {
    border-color:${props => props.type === 'search' ? "transparent" : props.theme.colors.primaryDark}; 
  }

  &:disabled {
    background-color: #e9ecef;
    color: #495057;
    cursor: not-allowed;
  }

`;

const Input = ({type, placeHolder, name, id, children, ...props}) =>{
  return(
    <InputStyled type={type} placeholder={placeHolder} name={name} id={id} {...props}>{children}</InputStyled>
  )
}

export default Input;