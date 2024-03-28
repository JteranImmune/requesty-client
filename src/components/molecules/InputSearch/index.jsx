import styled from "styled-components";
import Input from "../../atoms/Input"
import Icon from "../../atoms/Icon"
import Flex from "../../utility/Flex";

const SearchContainer = styled(Flex)`
  max-width: 100%;
  height: auto;
  display: flex;
  padding: ${props => props.theme.padding.small} ${props => props.theme.padding.small};
  align-items: center;
  gap: 0.2rem;
  align-self: stretch;
  border-radius: ${props => props.type === 'checkbox' ? '0' : '0.5rem'};
  border-color:${props => props.type === 'checkbox' ? '#D0D5DD' : '#D0D5DD'} ;
  border: 1px solid ${({ theme }) => theme.colors.border};

`

const InputSearch = ({...rest}) => {
    return(
        <SearchContainer {...rest}>
            <Icon iconName="FaSearch"></Icon>
            <Input type="search" {...rest}></Input>
        </SearchContainer>
    )
};

export default InputSearch;