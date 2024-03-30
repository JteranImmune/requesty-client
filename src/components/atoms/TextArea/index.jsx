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
  
    &::placeholder{
        color:rgba(0,0,0,0.3);
    }
`;


const  Textarea = (props) => {
     return <TextAreaStyled {...props} />
}
export default Textarea;