import styled from "styled-components"
import Text from "../../atoms/Text"

const TableHeading = styled.th`
    ${props => props.theme.font.text.sm}
    color:${props => props.theme.colors.textColor};
    text-transform: uppercase;
    padding:${props => props.theme.padding.medium} 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    background-color:${props => props.theme.colors.light};
    font-weight: 800;
`
const TableHeadingItem = ({children})=>{
    
    return (
    <TableHeading scope="col">
        <Text weight="medium">{children}</Text>
    </TableHeading>
    )
}

export default TableHeadingItem;