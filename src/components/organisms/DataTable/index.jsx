import styled from "styled-components";
import TableHeadingItem from "../../molecules/TableHeaderItem";
import TableRow from "../../molecules/TableRow";

const Table = styled.table`
    width: 100%;
    overflow: auto;
    text-indent: 0;
    border-color: inherit;
    border-collapse: collapse;
`

const TableHead = styled.thead`
    display: table-header-group;
    background-color: rgb(249 250 251 / 1);
    font-weight: bold;
`


const DataTable = ({headings , tasks}) => {

    return(
        <Table>
            <TableHead>
                <TableRow>
                    <TableHeadingItem></TableHeadingItem>
                    {headings.map((heading, index) =>{
                        return(
                            <TableHeadingItem key={heading}>{heading}</TableHeadingItem>
                        )
                    })}
                    <TableHeadingItem ></TableHeadingItem>
                </TableRow>
            </TableHead>
            <tbody>
            <TableRow ></TableRow>
                {tasks.map((dataRow, index) => {
                    return(
                        <TableRow dataRow={dataRow} key={dataRow._id} />
                    )
                })}
            <TableRow ></TableRow>    
            </tbody>
        </Table>
    )
}


export default DataTable;