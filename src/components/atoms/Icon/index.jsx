import styled from "styled-components";
import React from 'react';
import * as Icons from 'react-icons/fa';

const StyledIcon = styled.div`
    width: 24px;
    height: 24px;
    display: inline-flex;
    justify-content: center;
    align-items: center;

    svg {
        width: 100%;
        height: 100%;
    }
`;

const Icon = ({ iconName, ...props }) => {
    const IconComponent = Icons[iconName];

    if (!IconComponent) {
        console.warn(`No icon found for name: ${iconName}`);
        return null;
    }

    return (
        <StyledIcon {...props}>
            <IconComponent />
        </StyledIcon>
    );
};

export default Icon;