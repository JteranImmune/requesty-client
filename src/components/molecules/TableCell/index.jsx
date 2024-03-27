import styled from "styled-components"
import Text from "../../atoms/Text"
import Box from "../../utility/Box"

const TableCellItem = styled.td`
    background-color:${props => props.theme.colors.baseWhite};
    display: table-cell;
    width: ${props => props.width || 'auto'};
`

const TableCell =  ({children}) => {
    return (
        <TableCellItem role="table-cell" key={Math.random()}>
            <Box>
                <Text size={"md"}>
                    {children}
                </Text>
            </Box>
        </TableCellItem>
    )
}


export default TableCell;