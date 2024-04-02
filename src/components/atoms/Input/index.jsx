import styled from "styled-components";
import React from "react";

const InputStyled = styled.input`
  width: ${props => props.width || 'auto'};
  height: '1rem';
  padding: ${props => props.type === 'checkbox' ? '0' : '0.8rem 0.5rem'};
  font-size: ${props => props.theme.font.display[props.TextDisplay] || props.theme.font.text.md} ;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  align-self: stretch;
  border-radius:${({theme})=> theme.borderRadius.base};
  border-color:${props => props.type === 'checkbox' ? '#EAECF0' : '#EAECF0' } ;
  border: 1px solid #EAECF0;
  background-color:#FFF;
  color: inherit;
  cursor: default;

  &:focus, &:focus-visible ,  &:active  {
    border: ${props => props.type === 'search' ? "0" : "1px"} solid ${props => props.theme.colors.primaryLight};
    background:#fff;
    box-shadow: 0px 1px 2px 0px rgba(47, 22, 55, 0.05), 0px 0px 0px 4px #F4EBFF;
  }

  &:disabled {
    background-color: #f9fafb;
    color: #495057;
    cursor: default;
    border: none;
  }

`;

const Input = ({type, placeHolder, name, id, children, ...props}) =>{

  return(
    <InputStyled type={type} placeholder={placeHolder} name={name} id={id} {...props}>{children}</InputStyled>
  )
}

export default Input;