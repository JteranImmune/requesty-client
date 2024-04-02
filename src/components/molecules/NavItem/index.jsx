import React, { useState, useEffect } from 'react';
import { Link, NavLink,  useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Icon from '../../atoms/Icon';
import Flex from '../../utility/Flex';

const NavItemContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  gap: ${props => props.theme.padding.medium};
  align-self: stretch;
  color:${props => props.theme.colors.secondaryLight};
  box-sizing: border-box;
  border-radius: ${props => props.theme.borderRadius.base};
  background-color: ${props => props.isActive ? props.theme.colors.lightDark : "transparent"};
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.colors.lightDark};
    color:${props => props.theme.colors.secondaryLight};
  }
`;

const NavDropContainer = styled(NavItemContainer)`
  gap: ${props => props.theme.padding.small};
  align-self: stretch;
  color:${props => props.theme.colors.secondaryLight};
  padding: ${props => props.theme.padding.small} ${props => props.theme.padding.medium};
  box-sizing: border-box;
  border-radius: ${props => props.theme.borderRadius.base};
  cursor: pointer;

  .openArrow{
    -moz-transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
    -o-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    transform: rotate(180deg);
  }
`;


const NavLinkStyled = styled(NavLink)`

  display: flex;
  align-items: center;
  padding: ${props => props.theme.padding.small} ${props => props.theme.padding.medium};
  gap: ${props => props.theme.padding.medium};
  color: ${props => props.theme.colors.secondaryLight};
  width: 100%;

  &.active {
    background-color: ${props => props.theme.colors.lightDark}; 
    border-radius: ${props => props.theme.borderRadius.base};
  }


  &:hover {
    color:${props => props.theme.colors.secondaryLight};
    text-decoration: none;
  }
`;

const DropdownLink = styled(NavLinkStyled)`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.padding.medium};
  color: ${props => props.theme.colors.secondaryLight};
  padding: 0.5rem 0.5rem 0.5rem 2.5rem;
  width: 100%;
  border-radius: ${props => props.theme.borderRadius.base};
  box-sizing: border-box;

  &:hover {
    background-color:${props => props.theme.colors.lightDark} !important;
    text-decoration: none;
  }
`;

const DropdownMenu = styled.div`
  display: none;
  flex-direction: column;
  gap: ${props => props.theme.padding.small};
  position: absolute;
  background-color: inherit;
  width: 100%;
  top: 100%;
  z-index: 100;
  align-items: center;
  left: 0;

  ${NavDropContainer}.open & {
    display: flex;
    padding-top:${props => props.theme.padding.small};
    background-color: ${props => props.theme.colors.dark};
  }
`;

const NavItem = ({ icon, to, children, dropdownItems, link}) => {

  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  };

  if (dropdownItems && dropdownItems.length > 0) {
    return (
      <NavDropContainer onClick={toggleDropdown} className={isOpen ? 'open' : ''}>
        <Flex gap="medium">
          <Icon iconName={icon}/> 
          {children}
          <Flex justify='flex-end' alignself="center">
            <Icon className={isOpen ? 'openArrow' : ''} iconName="FaCaretDown"/>
          </Flex>
        </Flex>
        <DropdownMenu>
          {dropdownItems.map(link => (
            <DropdownLink key={link.to} to={link.to}>
              {link.label}
            </DropdownLink>
          ))}
        </DropdownMenu>
      </NavDropContainer>
    );
  }

  // Simple link variant
  return (
    <NavItemContainer>
      <NavLinkStyled to={to}>
        <Icon iconName={icon}/> {children}
      </NavLinkStyled>
    </NavItemContainer>
  );
};

export default NavItem;