import { React, useState } from "react";
import Flex from "../../utility/Flex";
import DataTable from "../../organisms/DataTable";
import taskList from "../../../tasks.json"

const TaskList = () =>{
    const headings = ["ID","Title","Client","Status","Priority","Owner","Due Date"]

      const [tasks, setTask] = useState(taskList.slice(0.6))

    return(
        <Flex direction="column" borderRadius="0.5rem" overflow="auto" border="1px solid #EAECF0">
            <DataTable tasks={tasks} headings={headings} title="My Tasks" key={Math.random()}/>
        </Flex>
    )
}

export default TaskList;