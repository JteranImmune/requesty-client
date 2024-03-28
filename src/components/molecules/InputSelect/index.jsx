import styled from "styled-components";
import React from "react";
import Flex from "../../utility/Flex";

const SelectStyled = styled.select`
    width: 100%;
    height: auto;
    border-radius: ${({ theme }) => theme.borderRadius.base};
    padding: ${({ theme }) => theme.padding.small} ${({ theme }) => theme.padding.small};
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

const InputSelect = ({ options, name, onChange, error, disabled, defaultValue, placeHolder }) => {
    return (
        <Flex width="23.5rem" flex="none">
            <SelectStyled id={name} name={name} onChange={onChange} disabled={disabled} placeHolder="select">
                <Option selected>{placeHolder}</Option>
                {options.map((option, index) => (
                    <Option key={index} value={option}>{option}</Option>
                ))}
                <Option key="allValues" value={defaultValue}>{defaultValue}</Option>
            </SelectStyled>
        </Flex>
    );
};

export default InputSelect;
