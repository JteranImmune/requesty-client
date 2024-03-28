import styled from "styled-components";
import TableHeadingItem from "../../molecules/TableHeaderItem";
import TableRow from "../../molecules/TableRow";
import Button from "../../atoms/Button"
import { useState } from "react";
import Flex from "../../utility/Flex";
import Text from "../../atoms/Text";

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


const DataTable = ({headings , data, rowsPerPage = 4}) => {

    
    const [currentPage, setCurrentPage] = useState(0);

    const totalPages = data.length / rowsPerPage;
    
    const currentTasks = data.slice(
        currentPage * rowsPerPage,
        (currentPage + 1) * rowsPerPage
        );

    const goToPreviousPage = () => {
        const newPage = currentPage - 1 >= 0 ? currentPage - 1 : 0;
        setCurrentPage(newPage);
    };
    
    const goToNextPage = () => {
        const newPage = currentPage + 1 < totalPages ? currentPage + 1 : currentPage;
        setCurrentPage(newPage);
    };


    return(
        <>
        <Table>
            <TableHead>
                <TableRow>
                    <TableHeadingItem></TableHeadingItem>
                    {headings.map((heading, index) =>{
                        return(
                            <TableHeadingItem key={heading}>{heading}</TableHeadingItem>
                        )
                    })}
                <TableHeadingItem></TableHeadingItem>
                </TableRow>
            </TableHead>
            <tbody> 
                {currentTasks.map((dataRow, index) => {
                    return(
                        <TableRow dataRow={dataRow} key={dataRow._id} />
                    )
                })} 
            </tbody>
        </Table>
        <Flex justify="flex-end" align="center" padding="0.5rem 1rem">
            <Flex justify="flex-start" gap="normal">
                <Button onClick={goToPreviousPage} disabled={currentPage === 0} variant="alternate">
                    Previous
                </Button>
                <Button onClick={goToNextPage} disabled={currentPage === totalPages - 1} variant="alternate">
                    Next
                </Button>
            </Flex>
            <Text weight="regular"> Page {currentPage + 1} of {totalPages} </Text>
        </Flex>
        </>
    )
}


export default DataTable;