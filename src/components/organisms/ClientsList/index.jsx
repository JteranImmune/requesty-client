import { React } from "react";
import Flex from "../../utility/Flex";
import DataTable from "../DataTable";
import InputSearch from "../../molecules/InputSearch";

const ClientList = ({data}) =>{
    
    const headings = ["Name","Created At"] 

    return(
        <Flex direction="column"  gap="normal">
            <Flex justify="space-between" gap="normal" width="100%">
                <Flex justify="flex-end" width="23.5rem" flex="none">
                     <InputSearch placeholder="Search"></InputSearch>
                </Flex>
            </Flex>
            <Flex direction="column" borderradius="0.5rem" overflow="auto" border="1px solid #EAECF0">
                <DataTable data={data} headings={headings} title="Client Users"/>
            </Flex>
        </Flex>
    )
}

export default ClientList;