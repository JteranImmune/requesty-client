import { React, useState } from "react";
import Flex from "../../utility/Flex";
import DataTable from "../../organisms/DataTable";
import taskList from "../../../tasks.json"
import InputSearch from "../../molecules/InputSearch";
import InputSelect from "../../molecules/InputSelect";

const TaskList = () =>{
    
    const headings = ["ID","Title","Client","Status","Priority","Due Date", "Owner"]
    const statusList = ["Submited","In progress","Completed","On Hold"]

      const [tasks, setTask] = useState(taskList.slice(0.6))
      const [status, setstatus] = useState(statusList)

    return(
        <Flex direction="column"  gap="normal">
            <Flex justify="space-between" gap="normal" width="100%">
                <Flex>
                    <InputSelect options={status} defaultValue="All Task" placeHolder="Select Status"/>
                </Flex>
                <Flex justify="flex-end" width="23.5rem" flex="none">
                     <InputSearch placeHolder="Search"></InputSearch>
                </Flex>
            </Flex>
            <Flex direction="column" borderRadius="0.5rem" overflow="auto" border="1px solid #EAECF0">
                <DataTable data={tasks} headings={headings} title="My Tasks" key={Math.random()}/>
            </Flex>
        </Flex>
    )
}

export default TaskList;