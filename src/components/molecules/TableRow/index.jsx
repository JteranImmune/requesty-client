import React from "react";
import styled from "styled-components";
import TableCell from "../TableCell";
import Input from "../../atoms/Input";

const TableRowWrapper = styled.tr`
    border-top:${props => props.theme.colors.border};

    .is-space {
       width:4rem;
    }
`

const TableRow = ({ dataRow, children, isInput }) => {

    if(isInput === true) return (
        <TableRowWrapper className="is-space">
            <Input type={"checkbox"}></Input>
        </TableRowWrapper>
    )

    if (dataRow && typeof dataRow === 'object' && !Array.isArray(dataRow)) {
        
        const dataRowArray = Object.entries(dataRow);

        return (
            <TableRowWrapper>
                    {dataRowArray.map(([key, value], index) => (
                            <TableCell key={key}>{value}{console.log()}</TableCell>
                        ))
                    }
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