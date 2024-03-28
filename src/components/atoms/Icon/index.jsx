import styled from "styled-components";
import React from 'react';
import * as Icons from 'react-icons/fa';

const StyledIcon = styled.div`
    width: ${props => props.theme.iconSize[props.size] || "auto"};
    height: ${props => props.theme.iconSize[props.size] || "auto"};
    display: inline-flex;
    justify-content: center;
    align-items: center;
    cursor: ${props => props.cursor || "auto"};

    svg {
        width: 100%;
        height: 100%;
    }
`;

const Icon = ({ iconName, ...props }) => {
    
    const IconComponent = Icons[iconName];

    if (!IconComponent) {
        return null;
    }

    return (
        <StyledIcon {...props}>
            <IconComponent />
        </StyledIcon>
    );
};

export default Icon;