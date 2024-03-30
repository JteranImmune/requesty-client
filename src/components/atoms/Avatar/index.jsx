import styled, { css } from "styled-components";

const baseStyles = css`
    flex-shrink: 0; 
    border-radius: 100%;
    border: 1.5px solid ${props => props.theme.colors.baseWhite};
`;

const Avatar = styled.img`
    ${baseStyles}
    width: 2.5rem;
    height: 2.5rem;
    flex-shrink: 0;
    border: 1.5px solid ${props => props.theme.colors.baseWhite};

    ${props => props.variant === 'lg' && css`
        ${baseStyles}
        width: 3rem;
        height: 3rem;   
    `
    }

    ${props => props.variant === 'sm' && css`
        ${baseStyles}
        width: 1.5rem;
        height: 1.5rem;   
    `
    }
`

export default Avatar;