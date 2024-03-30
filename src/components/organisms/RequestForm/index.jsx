import { React, useState }from "react";
import Flex from "../../utility/Flex";
import Text from "../../atoms/Text";
import Divider from '../../atoms/Divider'
import TaskInputField from '../../molecules/TaskInputField';
import 'react-day-picker/dist/style.css';
import CalendarPicker from "../CalendarPicker";
import InputField from '../../molecules/InputField'
import FilesInput from "../FilesInput";
import Button from "../../atoms/Button";


const clientList = ["Juan", "Pedro", "Ramiro"]
const serviceslist = ["Design", "Development", "Video"]
const priorityList = ["Low","Medium","High"]

const TaskOptions = {
    client: { 
        list : clientList, 
        placeholder:"Select a client",
        label: "Client"
     },
     service: { 
        list : serviceslist, 
        placeholder:"Select a Service",
        label: "Service"
     },
     priority: { 
        list : priorityList, 
        placeholder:"Select a priority",
        label: "Priority"
     },
}

const RequestForm = ({title, onChange, onSubmit, options, avatar, name, value}) =>{

    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleDropdown = (dropdownId) => {
        if (activeDropdown === dropdownId) {
            setActiveDropdown(null); 
        } else {
            setActiveDropdown(dropdownId); 
        }
    };

    return(
        <Flex direction='column'>
            <Text variant="display" size="sm" weight="medium">
                {title}
            </Text>
            <Divider/>
            <form onSubmit={onSubmit} style={{marginTop:'1.8rem'}} > 
                <Flex gap="normal" direction="column">
                    {Object.entries(TaskOptions).map(([key, option], index) =>
                        <TaskInputField 
                        label={option.label} 
                        listItems={option.list} 
                        placeholder={option.placeholder}
                        key={index} 
                        toggleDropdown={() => toggleDropdown(option.label)} 
                        isOpen={activeDropdown === option.label} 
                        />
                    )}
                    <CalendarPicker />
                    <InputField label="Title" name="title" type="text" maxwidth="100%"/>
                    <InputField label="Description" name="description" isTextArea={true} maxwidth="100%"/>
                    <FilesInput/>
                </Flex>
                <Divider/>
                <Flex justify="flex-end">
                    <Button type="sumbit" iconName="FaPlus">Create Task</Button>
                </Flex>
            </form>
        </Flex>
    )
};

export default RequestForm;