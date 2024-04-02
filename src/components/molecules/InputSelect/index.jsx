import styled from "styled-components";
import React from "react";
import Flex from "../../utility/Flex";
import Label from "../../atoms/Labels";

const SelectStyled = styled.select`
    width: 100%;
    height: auto;
    border-radius: ${({ theme }) => theme.borderRadius.base};
    margin-top: 0.5rem;
    padding: ${({ theme }) => theme.padding.medium} ${({ theme }) => theme.padding.small};
    font-size: ${({ theme }) => theme.font.text.small};
    color: ${({ disabled, theme }) => (disabled ? theme.colors.disabled : theme.colors.textColor)};
    background: ${({ theme }) => theme.colors.baseWhithe};
    border: 1px solid ${({ theme }) => theme.colors.border};
`;

const OptionStyled = styled.option`
   background: ${({ theme }) => theme.colors.baseWhithe};
`;

const Option = ({ children, value, ...props}) => {
    return <OptionStyled value={value} {...props}>{children}</OptionStyled>;
};

const InputSelect = ({ options, name, label, onChange, error, disabled, defaultValue, placeholder }) => {
    return (
        <Flex width="20rem" flex="start" direction="column"  align="flex-start">
            <Label htmlFor={name}>{label}</Label>
            <SelectStyled id={name} name={name} onChange={onChange} disabled={disabled} placeholder="select">
                <Option>{placeholder}</Option>
                {options.map((option, index) => (
                    <Option key={index} value={option}>{option}</Option>
                ))}
            </SelectStyled>
        </Flex>
    );
};

export default InputSelect;
