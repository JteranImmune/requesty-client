import styled from "styled-components";
import React from "react";

const InputStyled = styled.input`
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || props.type === 'checkbox' ? 'auto' : '1rem'};
  padding: ${props => props.type === 'checkbox' ? '0' : '0.8rem 0.5rem'};
  font-size: ${props => props.theme.font.display[props.TextDisplay] || props.theme.font.text.md} ;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  align-self: stretch;
  border-radius:${({theme})=> theme.borderRadius.base};
  border-color:${props => props.type === 'checkbox' ? '#EAECF0' : '#EAECF0' } ;
  border: ${props => props.isEditable ? '1px solid #EAECF0' : 'none'};
  background-color: ${props => props.isEditable ? '#FFF' : '#f9fafb'};
  color: ${props => props.isEditable ? 'inherit' : '#495057'};
  cursor: ${props => props.isEditable ? 'text' : 'default'};

  &:focus, &:focus-visible ,  &:active  {
    border: ${props => props.type === 'search' ? "0" : "1px"} solid ${props => props.theme.colors.primaryLight};
    background: ${props => props.isEditable ? '#fff' : '#f9fafb'} #FFF;
    box-shadow: 0px 1px 2px 0px rgba(47, 22, 55, 0.05), 0px 0px 0px 4px #F4EBFF;
  }

  &:focus, &:focus-visible, &:active {
    border: ${props => props.isEditable ? '1px solid' : 'none'};
    ${props => props.isEditable ? '' : 'box-shadow: none;'}
    outline: ${props => props.isEditable ? '' : 'none'};
  }

  &:disabled {
    background-color: #f9fafb;
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