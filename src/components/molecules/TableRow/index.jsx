import React from "react";
import styled from "styled-components";
import TableCell from "../TableCell";

const TableRowWrapper = styled.tr`
    border-top:${props => props.theme.colors.border};
`

const TableRow = ({ dataRow, children }) => {

    
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