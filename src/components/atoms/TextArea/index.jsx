import styled from  'styled-components';

const TextAreaStyled =  styled.textarea`
    width: ${props => props.width || '100%'};
    min-width: 44rem;
    max-width: 100%;
    height: 150px;
    max-height: 250px;
    min-height: 100px;
    padding: 0.8rem 0.5rem;
    font-size: ${props => props.theme.font.text.md};
    display: flex;
    align-items: center;  
    gap: 0.5rem;
    align-self: stretch;
    border-radius:${({theme})=> theme.borderRadius.base};
    border-color:${props => props.type === 'checkbox' ? '#EAECF0' : '#EAECF0' } ;
    border: ${props => props.isEditable ? '1px solid #EAECF0' : 'none'};
    background-color: ${props => props.isEditable ? '#FFF' : '#f9fafb'};
    color: ${props => props.editable ? 'inherit' : '#495057'};
    cursor: ${props => props.isEditable ? 'text' : 'default'};

  
  &:focus, &:focus-visible ,  &:active  {
    border: ${props => props.type === 'search' ? "0" : "1px"} solid ${props => props.theme.colors.primaryDark};
    background: ${props => props.isEditable ? '#FFF' : '#f9fafb'};
    box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #F4EBFF;
  }  


  &:disabled {
    background-color: #e9ecef;
    color: #495057;
    cursor: not-allowed;
  }
  
  &::placeholder{
      color:rgba(0,0,0,0.3);
  }

  
  &:focus, &:focus-visible, &:active {
    border: ${props => props.isEditable ? '1px solid' : 'none'};
    ${props => props.isEditable ? '' : 'box-shadow: none;'}
    outline: ${props => props.isEditable ? '' : 'none'};
  }
`;


const Textarea = ({isEditable, ...props}) => {
     return <TextAreaStyled isEditable={isEditable} {...props} />
}

export default Textarea;