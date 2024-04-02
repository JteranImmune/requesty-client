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
    align-self: stretch;
    border-radius:${({theme})=> theme.borderRadius.base};
    border-color:${props => props.type === 'checkbox' ? '#EAECF0' : '#EAECF0' } ;
    border: 1px solid #EAECF0;
    background-color:#FFF;
    color: inherit;
    cursor: 'default';

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


const Textarea = ({...props}) => {
     return <TextAreaStyled {...props} />
}

export default Textarea;