import styled from "styled-components"
import Text from "../../atoms/Text"

const TableHeading = styled.th`
    font-size:${props => props.theme.font.text.sm};
    color:${props => props.theme.colors.textColor};
    border-bottom:1px solid ${props => props.theme.colors.border};

    /* space column */
    .is-space {
       width:4rem;
    }

    text-align: left;
    text-transform: uppercase;
    padding:${props => props.theme.padding.medium} 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    background-color:${props => props.theme.colors.baseWhite};
    font-weight: 800;
    width: auto;
`
const TableHeadingItem = ({children, isSpace})=>{
    
    // if(isSpace) return <TableHeading className="is-space"></TableHeading>

    return (
    <TableHeading scope="col">
        <Text weight="medium">{children}</Text>
    </TableHeading>
    )
}

export default TableHeadingItem;