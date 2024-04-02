import {React , useState } from "react";
import styled from "styled-components";
import Flex from "../../utility/Flex";
import Text from "../../atoms/Text";
import Label from "../../atoms/Labels";
// import Avatar from "../../atoms/Avatar";
import Icon from "../../atoms/Icon";


const InputStyle = styled.button.attrs({ type: 'button' })`
  width: ${props => props.width || '100%'};
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  margin-top: 0.5rem;
  padding: ${({theme}) => theme.padding.medium} ${({theme}) => theme.padding.small};
  font-size: ${props => props.theme.font.text.md};
  gap: 0.5rem;
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
`

const ListWrapper = styled.div`
    width: 100%;
    position: relative;
    margin-top: 1rem;

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


const TaskInputField = ({avatar, label, listItems, placeholder, toggleDropdown, isOpen, isEditable, onChange}) =>{

    // const [isOpen, setIsOpen] = useState(false);

    const [selectedItem, setSelectedItem] = useState(placeholder);
    const [selectedId, setselectedId] = useState('');
    // const [selectedName, setselectedName] = useState('');

    const handleItemClick = (item, itemId) => {
        setSelectedItem(item); 
        toggleDropdown(label);
        setselectedId(itemId);
        
        const event = {
            target: {
                name: label.toLowerCase(),
                value: itemId 
            }
        };
        onChange(event);
    };

        return(
        <Flex direction="column">
            <Label htmlFor={label}>{label}</Label>
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
                        {listItems.map(({id, name}, index) => (
                                <ListItem key={index} onClick={() => handleItemClick(name, id)}>
                                    {/* {avatar && 
                                        <Flex gap="medium" align="center">
                                            <Avatar src={item.avatar} alt={item.name} variant="sm"/>
                                            <Text>{item.name}</Text>
                                        </Flex>
                                    } */}
                                    <Flex gap="medium" align="center">
                                        <Text>{name}</Text>
                                    </Flex>
                                </ListItem>
                            ))
                        }
                    </ListStyle>
                </ListWrapper>
                {/* <select 
                    onChange={onChange} 
                    name={label} 
                    value={selectedId} 
                    hidden
                    // style={{ display: 'none' }} // Hide the select element
                >
                    <option value="" name=""></option>
                    {listItems.map(({ id, name }) => (<option value={id} key={id} name={name}>{name}</option>))}
                </select> */}
            </div>
        </Flex>
    )
}

export default TaskInputField;