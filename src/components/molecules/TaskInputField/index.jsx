import {React , useState } from "react";
import styled from "styled-components";
import Flex from "../../utility/Flex";
import Text from "../../atoms/Text";
import Label from "../../atoms/Labels";
// import Avatar from "../../atoms/Avatar";
import Icon from "../../atoms/Icon";
import Input from "../../atoms/Input";

const InputStyle = styled.button.attrs({ type: 'button' })`
  width: ${props => props.width || '100%'};
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  padding: ${({theme}) => theme.padding.medium} ${({theme}) => theme.padding.small};
  font-size: ${props => props.theme.font.text.md};
  gap: 0.5rem;
  align-self: stretch;
  border-radius:${({theme}) => theme.borderRadius.base};
  border-color:'#EAECF0';
  border: 1px solid #EAECF0;
`

const ListWrapper = styled.div`
    width: 100%;
    position: relative;
`

const ListStyle = styled.ul`
    list-style: none;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    gap: ${({theme}) => theme.padding.xsmall};
    padding: 0.5rem;
    border-radius:${({theme}) => theme.borderRadius.base};
    border: 1px solid #EAECF0;
    position: absolute;
    width: 100%;
    z-index: 1;
    background-color: white;
    top: 0;
`

const ListItem = styled.li`
    list-style: none;
    padding: ${({theme}) => theme.padding.medium} ${({theme}) => theme.padding.small};
    border-radius:${({theme}) => theme.borderRadius.base};
    transition: all .2s ease-in-out;
    cursor: pointer;

    &:hover {
        background-color: ${props => props.theme.colors.baseWhite};
    }
`


const TaskInputField = ({avatar, label, listItems, placeholder, toggleDropdown, isOpen}) =>{

    // const [isOpen, setIsOpen] = useState(false);

    const [selectedItem, setSelectedItem] = useState(placeholder);
    
    const handleItemClick = (item) => {
        setSelectedItem(item); 
        toggleDropdown(label);
    };

    return(
        <Flex direction="column">
            <Label for={label}>{label}</Label>
            <div>   
                <InputStyle onClick={() => toggleDropdown(label)}>
                    <Flex gap="medium" align="center">
                        {/* <Avatar src={avatar} alt={listItems.name} variant="sm"/> */}
                        {selectedItem && <Text>{selectedItem}</Text>}
                        {!selectedItem && <Text>{placeholder}</Text>}
                    </Flex>
                    <Icon iconName="FaAngleDown"/>
                </InputStyle>
                <ListWrapper>
                    <ListStyle isOpen={isOpen}>
                        {listItems.map((item, index) => (
                                <ListItem key={index} onClick={() => handleItemClick(item)}>
                                    {/* {avatar && 
                                        <Flex gap="medium" align="center">
                                            <Avatar src={item.avatar} alt={item.name} variant="sm"/>
                                            <Text>{item.name}</Text>
                                        </Flex>
                                    } */}
                                    <Flex gap="medium" align="center">
                                        <Text>{item}</Text>
                                    </Flex>
                                </ListItem>
                            ))
                        }
                    </ListStyle>
                </ListWrapper>
                <Input type="hidden" value={selectedItem} name={label}></Input>
            </div>
        </Flex>
    )
}

export default TaskInputField;