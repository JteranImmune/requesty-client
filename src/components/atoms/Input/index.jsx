import styled from "styled-components";

const InputStyled = styled.input`
  width: ${props => props.width || '100%'};
  height: ${props => props.width || '25px'};
  padding: 8px;
  font-size: 14px;
  display: flex;
  padding: 0.625rem 0.875rem;
  align-items: center;
  gap: 0.5rem;
  align-self: stretch;
  border-radius: 0.5rem;
  border: 1px solid #D0D5DD;

  &:focus {
    border: 1px solid ${props => props.theme.colors.primaryLight};
    background: #FFF;
    box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #F4EBFF;
  }

  &:focus-visible {
    border: 1px solid ${props => props.theme.colors.primaryLight};
    background: #FFF;
  }

  &:active {
    border-color:${props => props.theme.colors.primaryDark}; 
  }

  &:disabled {
    background-color: #e9ecef;
    color: #495057;
    cursor: not-allowed;
  }
`;

const Input = ({type}) =>{
  return(
    <Input type={type}></Input>
  )
}

export default Input;