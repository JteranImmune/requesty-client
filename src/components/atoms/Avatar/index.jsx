import styled, { css } from "styled-components";

const sharedStyles = css`
    flex-shrink: 0; 
    border-radius: 100%;
    border: 1.5px solid ${props => props.theme.colors.baseWhite};
`;

const Avatar = styled.img`
    ${sharedStyles}
    width: 3.5rem;
    height: 3.5rem;
    flex-shrink: 0;
    border: 1.5px solid ${props => props.theme.colors.baseWhite};

    ${props => props.variant === 'md' && css`
        ${sharedStyles}
        width: 3rem;
        height: 3rem;   
    `
    }
`

export default Avatar;