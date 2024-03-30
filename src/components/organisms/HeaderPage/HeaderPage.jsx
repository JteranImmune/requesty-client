import React from "react";
import Flex from "../../utility/Flex";
import Text from "../../atoms/Text";
import Button from "../../atoms/Button"
import styled from "styled-components";
import Link from '../../atoms/Link'

const HeaderWrapper = styled(Flex)`
    position: sticky;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    background: white;
    display: flex;
    flex-direction: column;
    margin-bottom: ${({theme}) => theme.padding.large};
`

const HeaderStyled = styled(Flex)`
    border-bottom:2px solid ${({theme}) => theme.colors.border};
    padding: ${({ theme }) => theme.padding.medium} ${({ theme }) => theme.padding.large};
`

const HeaderPage = ({children, onClick, buttonText, iconName, showButton, showLink, LinkTo, ...props}) =>{
    return(
        <HeaderWrapper>
            <HeaderStyled justify="space-between">
                <Text size="md" variant="display" weight="medium" {...props}>
                    {children}
                </Text>
                {showButton && <Button iconName={iconName} onClick={onClick}>{buttonText}</Button>}
                {showLink && <Link iconName={iconName} to={LinkTo} isButton>{buttonText}</Link>}
            </HeaderStyled>
        </HeaderWrapper>
    )
};

export default HeaderPage;