import React from "react";
import styled from "styled-components";
import InputField from '../../molecules/InputField'
import Button from "../../atoms/Button";
import Flex from "../../utility/Flex";
import Text from "../../atoms/Text";
import Label from "../../atoms/Labels";
import Avatar from "../../atoms/Avatar";
import Icon from "../../atoms/Icon";
import Input from "../../atoms/Input";
import Divider from '../../atoms/Divider'

const InputStyle = styled.button`
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

const ListStyle = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: ${({theme}) => theme.padding.xsmall};
    padding: 0.5rem;
    border-radius:${({theme}) => theme.borderRadius.base};
    border: 1px solid #EAECF0;
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

const priorityList = ["Low","Medium","High"]

const RequestForm = ({title, onChange, onSubmit, options, avatar, name, value}) =>{
    return(
        <Flex direction='column'>
            <Text variant="display" size="sm" weight="medium">
                {title}
            </Text>
            <Divider/>
            <form onSubmit={onSubmit} style={{marginTop:'1.8rem'}} > 
                    <div>
                        <Label for="client">Client</Label>
                        <div>
                            <InputStyle>
                                <Flex gap="medium" align="center">
                                    <Avatar src={avatar} alt={name} variant="sm"/>
                                    <Text>Client name</Text>
                                </Flex>
                                <Icon iconName="FaAngleDown"/>
                            </InputStyle>
                            <div>
                                <ListStyle>
                                    <ListItem>
                                        <Flex gap="medium" align="center">
                                        <Avatar src={avatar} alt={name} variant="sm"/>
                                        <Text>Client name</Text>
                                        </Flex>
                                    </ListItem>
                                </ListStyle>
                            </div>
                            <Input type="hidden" value={value} name="client"></Input>
                        </div>
                    </div>
        
            </form>
        </Flex>
    )
};

export default RequestForm;