import React from "react";
import styled from "styled-components";
import TableCell from "../TableCell";
import Input from "../../atoms/Input"

const TableRowWrapper = styled.tr`
    border-top:${props => props.theme.colors.border};
    background-color: #fff;
        
    &:hover {
        cursor: pointer;
        background-color: ${props => props.theme.colors.baseWhite};
    }
`

const TableRow = ({ dataRow, children, isInput }) => {

    if (dataRow && typeof dataRow === 'object' && !Array.isArray(dataRow)) {
        
        const dataRowArray = Object.entries(dataRow);

        return (
            <TableRowWrapper>
                <TableCell padding="0 0.2rem"><Input type={"checkbox"}></Input></TableCell>
                    {dataRowArray.map(([key, value], index) => (
                            <TableCell key={key}>{value}{console.log()}</TableCell>
                        ))
                    }
                <TableCell></TableCell>    
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