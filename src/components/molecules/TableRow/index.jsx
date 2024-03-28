import React from "react";
import styled from "styled-components";
import TableCell from "../TableCell";
import Input from "../../atoms/Input"
import Flex from "../../utility/Flex";
import { FaPenSquare } from "react-icons/fa";

const TableRowWrapper = styled.tr`
    border-top:${props => props.theme.colors.border};
    background-color: #fff;
        
    &:hover {
        background-color: ${props => props.theme.colors.baseWhite};
    }
`

const TableRow = ({ dataRow, children, isInput }) => {

    if (dataRow && typeof dataRow === 'object' && !Array.isArray(dataRow)) {
        
        const dataRowArray = Object.entries(dataRow);

        return (
            <TableRowWrapper>
                <TableCell padding="0 0.4rem"><Input type={"hidden"} hidden></Input></TableCell>
                    {dataRowArray.map(([key, value], index) => (
                            <TableCell key={index}>{value}{console.log()}</TableCell>
                        ))
                    }
                <TableCell>
                    <Flex gap="normal" padding="0.2rem 0.2rem">
                        <FaPenSquare cursor={"pointer"} />
                        {/* <Icon iconName="FaTrash" size="xsmall" cursor="pointer"></Icon> */}
                    </Flex>
                </TableCell>    
            </TableRowWrapper>
        );
    }

    return (
        <TableRowWrapper>
            {children}
        </TableRowWrapper>
    );
};

export default TableRow;