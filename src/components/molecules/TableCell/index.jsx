import styled from "styled-components"
import Text from "../../atoms/Text"
import Box from "../../utility/Box"

const TableCellItem = styled.td`
    display: table-cell;
    width: ${props => props.width || 'auto'};
    padding: ${props => props.padding || '0'};
    vertical-align: middle;
    border-bottom: 1px solid ${props => props.theme.colors.border};
    transition: all .2s ease-in-out;

`

const TableCell =  ({children, ...props}) => {
    return (
        <TableCellItem role="table-cell" {...props}>
            <Box padding="1rem 0">
                    {children}
            </Box>
        </TableCellItem>
    )
};


export default TableCell;