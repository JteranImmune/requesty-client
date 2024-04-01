import { React, useState, useEffect }from "react";
import Flex from "../../utility/Flex";
import Text from "../../atoms/Text";
import Divider from '../../atoms/Divider'
import TaskInputField from '../../molecules/TaskInputField';
import 'react-day-picker/dist/style.css';
// import CalendarPicker from "../CalendarPicker";
import InputField from '../../molecules/InputField'
import Button from "../../atoms/Button";
import InputDate from "../../molecules/InputDate";
// import Input from "../../atoms/Input";

const RequestForm = ({title, onChange, onSubmit, options, avatar, name, value}) =>{

        const clientIds = Array.isArray(options.clientList) ? options.clientList.map(item => item._id) : [];
        const clientNames = Array.isArray(options.clientList) ? options.clientList.map(item => item.name) : [];

        const ownerIds = Array.isArray(options.teamList) ? options.teamList.map(item => item._id) : [];
        const ownerNames = Array.isArray(options.teamList) ? options.teamList.map(item => item.name) : [];

        const servicesIds = Array.isArray(options.serviceList) ? options.serviceList.map(item => item._id) : [];
        const servicesNames = Array.isArray(options.serviceList) ? options.serviceList.map(item => item.name) : [];

        const clientList = clientNames.map((name, index) => ({
            name,
            id: clientIds[index],
          }));

        const servicesList = servicesNames.map((name, index) => ({
            name,
            id: servicesIds[index],
          }));

        const teamList = ownerNames.map((name, index) => ({
            name,
            id: ownerIds[index],
          }));


        const priorityList = [
            {name: 'Low', id: 'Low'},{name: 'Medium', id: 'Medium'}, {name: 'High', id: 'High'}]

        const TASK_OPTIONS = [
            { 
                list : clientList,
                placeholder: "Select a client",
                label: "Client"
            },
            { 
                list : servicesList,
                placeholder: "Select a Service",
                label: "Service"
            },
            { 
                list : priorityList,
                placeholder: "Select a priority",
                label: "Priority"
            },
            { 
                list : teamList,
                placeholder: "Select an Owner",
                label: "Owner"
            }
        ];


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
            <Divider margin="large"/>
            <form onSubmit={onSubmit} encType="multipart/form-data" > 
                <Flex gap="normal" direction="column">
                    {TASK_OPTIONS.map((option, index) =>
                        <TaskInputField 
                            label={option.label} 
                            listItems={option.list} 
                            placeholder={option.placeholder}
                            onChange={onChange}
                            key={index} 
                            isEditable={true}
                            toggleDropdown={() => toggleDropdown(option.label)} 
                            isOpen={activeDropdown === option.label} 
                        />
                    )}
                    {/* <CalendarPicker onChange={onChange} /> */}
                    <InputDate label="Due Date" name="dueDate" onChange={onChange} isEditable={true}/>
                    <InputField label="Title" name="title" type="text" maxwidth="100%" onChange={onChange} isEditable={true}/>
                    <InputField label="Description" name="description" isTextArea={true} maxwidth="100%" onChange={onChange} isEditable/>
                    {/* <InputField label="Attachments" name="attachments" type="file" maxwidth="100%" onChange={onChange} multiple/> */}
                    {/* <FilesInput onChange={onChange}/> */}
                </Flex>
                <Divider margin="large"/>
                <Flex justify="flex-end">
                    <Button type="sumbit" iconName="FaPlus">Create Task</Button>
                </Flex>
            </form>
        </Flex>
    )
};

export default RequestForm;